import React, { useState } from "react";
import axios from "axios";
import { v1 as uuid } from "uuid";

function useFlip() {
  const [isFaceUp, setIsFaceUp] = useState(true);

  const flipCard = () => {
    setIsFaceUp((isUp) => !isUp);
  };
  return [isFaceUp, flipCard];
}

function useAxios(baseUrl) {
  const [cards, setCards] = useState([]);

  const addCard = async (urlModifier = "") => {
    console.log(baseUrl + urlModifier);
    const response = await axios.get(baseUrl + urlModifier);
    setCards((cards) => [...cards, { ...response.data, id: uuid() }]);
  };
  return [cards, addCard];
}
export default useFlip;

export { useAxios };
