import React, { useState } from "react";
import { Box, Button, Grid, GridItem, VStack, HStack, useToast } from "@chakra-ui/react";

// A single face of the Rubik's cube
const createFace = (initialColor) =>
  Array(3)
    .fill()
    .map(() => Array(3).fill(initialColor));

// The Rubik's cube with 6 faces
const createCube = () => ({
  front: createFace("green"),
  back: createFace("blue"),
  up: createFace("yellow"),
  down: createFace("white"),
  left: createFace("orange"),
  right: createFace("red"),
});

const Index = () => {
  const [cube, setCube] = useState(createCube());
  const toast = useToast();

  const rotateFace = (face) => {
    const newCube = { ...cube };
    const matrix = newCube[face];
    const rotated = matrix[0].map((_, index) => matrix.map((row) => row[index]).reverse());
    newCube[face] = rotated;
    setCube(newCube);
  };

  // Render a single face of the cube
  const renderFace = (faceKey) => (
    <Grid templateColumns="repeat(3, 1fr)" gap={1}>
      {cube[faceKey].map((row, rowIndex) => row.map((color, colIndex) => <GridItem key={`${faceKey}-${rowIndex}-${colIndex}`} w="40px" h="40px" bg={color} />))}
    </Grid>
  );

  return (
    <VStack spacing={8}>
      <HStack spacing={8}>
        <Box>{renderFace("up")}</Box>
      </HStack>
      <HStack spacing={8}>
        <Box>{renderFace("left")}</Box>
        <Box>{renderFace("front")}</Box>
        <Box>{renderFace("right")}</Box>
        <Box>{renderFace("back")}</Box>
      </HStack>
      <HStack spacing={8}>
        <Box>{renderFace("down")}</Box>
      </HStack>
      <HStack spacing={8}>
        <Button onClick={() => rotateFace("front")}>Rotate Front</Button>
        <Button onClick={() => rotateFace("back")}>Rotate Back</Button>
        <Button onClick={() => rotateFace("up")}>Rotate Up</Button>
        <Button onClick={() => rotateFace("down")}>Rotate Down</Button>
        <Button onClick={() => rotateFace("left")}>Rotate Left</Button>
        <Button onClick={() => rotateFace("right")}>Rotate Right</Button>
      </HStack>
    </VStack>
  );
};

export default Index;
