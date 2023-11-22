import {
  Html,
  Environment,
  PresentationControls,
  useGLTF,
} from "@react-three/drei";
import { suspend } from "suspend-react";

export const Laptop = () => {
  const laptop = useGLTF("/nft-laptop-model/source/laptop/laptop.gltf");
  laptop && console.log(laptop.position);

  return (
    <>
      <Environment preset="warehouse" />
      <PresentationControls global polar={[0, 0]} azimuth={[-0.3, 0.3]}>
        <primitive
          object={laptop.scene}
          position-y={-0.3}
          position-z={1}
          position-x={-0.8}
          scale="8"
          // transform
          rotation-y={-0.65}
        >
          <Html
            wrapperClass="laptop"
            position-y={0.103}
            position-x={0}
            position-z={-0.1}
            rotation-x={-0.36}
            transform
            distanceFactor={0.27}
          >
            <iframe title="website" src="https://hmonsworld.link" />
          </Html>
        </primitive>
      </PresentationControls>
    </>
  );
};
