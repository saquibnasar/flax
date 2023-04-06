import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useAnimations } from "@react-three/drei";
import { useEffect } from "react";

export default function Bird_flight_animation() {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF(
    "/bird_flight_animation.glb"
  );

  const { actions, names } = useAnimations(animations);
  console.log(actions["Take 001"]);
  console.log(names);
  // console.log(useAnimations);
  // useEffect(() => {
  //   actions.Take 001
  // }, []);
  return (
    <group dispose={null}>
      <group scale={0.1}>
        <mesh
          geometry={nodes.Object_10.geometry}
          material={materials["03_-_Default"]}
          // position={[0, 0.67, -3.5]}
          color="royalblue"
        />
      </group>
    </group>
  );
}

useGLTF.preload("/bird_flight_animation.glb");
