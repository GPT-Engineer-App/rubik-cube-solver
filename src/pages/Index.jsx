import { useState } from "react";
import { Button } from "@chakra-ui/react";

const createCube = () => {};

const Index = () => {
  const [cube, setCube] = useState(createCube());
  const [lastRotatedFace, setLastRotatedFace] = useState(null);

  const resetCube = () => {
    setCube(createCube());
    setLastRotatedFace(null);
  };

  return (
    <div>
      {}
      <Button colorScheme="blue" onClick={resetCube}>
        Reset Cube
      </Button>
    </div>
  );
};

export default Index;
