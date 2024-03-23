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
      {cube.map((face, index) => (
        <div key={index}>
          {face.map((row, rowIndex) => (
            <div key={rowIndex}>
              {row.map((cell, cellIndex) => (
                <div
                  key={cellIndex}
                  style={{
                    width: 50,
                    height: 50,
                    background: cell,
                    display: "inline-block",
                    border: "1px solid black",
                  }}
                ></div>
              ))}
            </div>
          ))}
        </div>
      ))}
      <Button colorScheme="blue" onClick={resetCube}>
        Reset Cube
      </Button>
    </div>
  );
};

export default Index;
