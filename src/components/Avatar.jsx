// eslint-disable-next-line no-unused-vars
import { Fbx, useAnimations, useFBX, useGLTF } from '@react-three/drei';
import * as THREE from 'three';
import { useEffect, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader';

function Avatar({avatarURL,animationURL}) {
    
    const { scene } = useGLTF('/src/model/myavatar.glb');
    const avatarRef = useRef();
    const mixer = useRef();
    
    useEffect(()=>{
        if(scene){

            scene.traverse((object) => {
                if (object.isMesh) {
                  object.position.set(0,0,0);    // Reset position
                  object.rotation.set(0, 0, 0);    // Reset rotation
                  object.scale.set(1, 1, 1);       // Reset scale
                }
              });

            mixer.current = new THREE.AnimationMixer(scene);

            const fbxLoader = new FBXLoader();
            fbxLoader.load(animationURL,(fbx)=>{
                if (fbx.animations && fbx.animations.length > 0) {
                    console.log(fbx.animations);
                    
                    const action = mixer.current.clipAction(fbx.animations[0]);
                    action.play();
                  } else {
                    console.error("No animations found in the FBX file");
                  }
            })
        }
    },[scene,animationURL]);

    useFrame((state,delta)=>{
        if(mixer.current){
            mixer.current.update(delta);
        }
    })

   

   return (
    // eslint-disable-next-line react/no-unknown-property
    <primitive object={scene} scale={[2, 2, 2]} position={[4, -2, 2.9]}  rotation={[Math.PI / -45, -18, 6.3]} ref={avatarRef}/>
  )
}

export default Avatar