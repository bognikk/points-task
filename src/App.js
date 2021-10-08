import { useState } from "react";

import Header from "./components/Layout/Header/Header";
import Form from "./components/Layout/Form/Form";

const data = [
  {
    id: 1,
    type: "buy",
    amount: 2000,
    cost: 250.0,
  },
  {
    id: 2,
    type: "buy",
    amount: 4000,
    cost: 450.0,
  },
  {
    id: 3,
    type: "buy",
    amount: 7000,
    cost: 600.0,
  },
  {
    id: 4,
    type: "gift",
    amount: 1500,
    cost: 300.0,
  },
  {
    id: 5,
    type: "gift",
    amount: 4500,
    cost: 400.0,
  },
  {
    id: 6,
    type: "gift",
    amount: 7500,
    cost: 575.0,
  },
  {
    id: 7,
    type: "transfer",
    amount: 1500,
    cost: 320.0,
  },
  {
    id: 8,
    type: "transfer",
    amount: 3000,
    cost: 550.0,
  },
  {
    id: 9,
    type: "transfer",
    amount: 6000,
    cost: 735.0,
  },
];

function App() {
  const [cardData, setCardData] = useState(data);
  const [selectedOption, setSelectedOption] = useState(0);

  const setOptionHandler = (id) => {
    const foundData = cardData.find((item) => item.id === id);
    setSelectedOption(foundData);
  };

  return (
    <>
      <Header cardData={cardData} setOptionHandler={setOptionHandler} />
      <Form selectedOption={selectedOption} />
    </>
  );
}

export default App;
