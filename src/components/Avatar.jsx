// eslint-disable-next-line no-unused-vars
import { Fbx, useAnimations, useFBX, useGLTF } from '@react-three/drei';
import * as THREE from 'three';
import { useEffect, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader';

// eslint-disable-next-line react/prop-types
function Avatar({animationURL}) {
    
    const { scene } = useGLTF('/model/myavatar.glb');
    const avatarRef = useRef();
    const mixer = useRef();

    // Bone name mapping between Mixamo and the avatar model
  const boneMapping = {
    'mixamorigHips': 'Hips',
    'mixamorigSpine': 'Spine',
    'mixamorigSpine1': 'Spine1',
    'mixamorigSpine2': 'Spine2',
    'mixamorigNeck': 'Neck',
    'mixamorigHead': 'Head',
    'mixamorigLeftShoulder': 'LeftShoulder',
    'mixamorigLeftArm': 'LeftArm',
    'mixamorigLeftForeArm': 'LeftForeArm',
    'mixamorigLeftHand': 'LeftHand',
    'mixamorigRightShoulder': 'RightShoulder',
    'mixamorigRightArm': 'RightArm',
    'mixamorigRightForeArm': 'RightForeArm',
    'mixamorigRightHand': 'RightHand',

    'mixamorigRightUpLeg': 'RightUpLeg',
    'mixamorigRightLeg': 'RightLeg',
    'mixamorigRightFoot': 'RightFoot',
    'mixamorigRightToeBase': 'RightToeBase',
    'mixamorigLeftUpLeg': 'LeftUpLeg',
    'mixamorigLeftLeg': 'LeftLeg',
    'mixamorigLeftFoot': 'LeftFoot',
    'mixamorigLeftToeBase': 'LeftToeBase'
    // Add more mappings if needed for legs and other body parts
  };
    
    useEffect(() => {
      if (scene) {
        // console.log(scene);
        
        scene.traverse((object) => {
          if (object.isMesh) {
            object.position.set(0, 0, 0);
            object.rotation.set(0,0,0);
            object.scale.set(1, 1, 1);
          }
        });
    
        mixer.current = new THREE.AnimationMixer(scene);
    
        const fbxLoader = new FBXLoader();
        fbxLoader.load(animationURL, (fbx) => {
          if (fbx.animations && fbx.animations.length > 0) {
            // console.log(fbx.animations);
            const animation = fbx.animations[0];
           
             // Remap bone names in the animation tracks
          animation.tracks.forEach(track => {
            Object.keys(boneMapping).forEach(mixamoBone => {
              if (track.name.includes(mixamoBone)) {
                // Replace Mixamo bone name with the avatar's corresponding bone name
                track.name = track.name.replace(mixamoBone, boneMapping[mixamoBone]);
              }
            });
          });

            
            const action = mixer.current.clipAction(animation);
            action.play();
          } else {
            console.error("No animations found in the FBX file");
          }
        });
      }
    }, [scene, animationURL]);
    

    useFrame((state,delta)=>{
        if(mixer.current){
            mixer.current.update(delta);
        }
    })


   return (
    // eslint-disable-next-line react/no-unknown-property
    <primitive object={scene} scale={[4.8, 4,3]} position={[-1,-3.5,0]}  rotation={[0,5,0]} ref={avatarRef}/>
  )
}

export default Avatar