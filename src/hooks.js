import React, { useState } from "react";

function useFlip() {
  const [isFaceUp, setIsFaceUp] = useState(true);

  const flipCard = () => {
    setIsFaceUp((isUp) => !isUp);
  };
  return [isFaceUp, flipCard];
}

export default useFlip;
