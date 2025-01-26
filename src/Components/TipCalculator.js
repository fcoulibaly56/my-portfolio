import React, { useState } from 'react';
import styled from 'styled-components';

// Styles pour le calculateur
const CalculatorContainer = styled.div`
  max-width: 400px;
  margin: 2rem auto;
  padding: 1rem;
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.5rem;
  margin: 0.5rem 0;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1rem;
`;

const Button = styled.button`
  padding: 0.5rem 1rem;
  margin: 0.5rem 0;
  background-color: #e5989b;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #d46a6e;
  }
`;

const Result = styled.div`
  margin-top: 1rem;
  font-size: 1.2rem;
  color: #333;
`;

const TipCalculator = () => {
  const [amount, setAmount] = useState('');
   
  const [total, setTotal] = useState(0);
  const [tipAmount, setTipAmount] = useState(0);

  const calculateTip = () => {
    const billAmount = parseFloat(amount);
    if (isNaN(billAmount) || billAmount <= 0) {
      alert('Veuillez entrer un montant valide.');
      return;
    }

    let percentage = 0;
    if (billAmount > 500) {
      percentage = 3;
    } else if (billAmount > 300) {
      percentage = 5;
    } else if (billAmount > 100) {
      percentage = 10;
    } else {
      percentage = 0;
    }

    const tip = (billAmount * percentage) / 100;
    setTipAmount(tip);
    setTotal(billAmount + tip);
  };

  return (
    <CalculatorContainer>
      <h2>Tip calculator</h2>
      <Input
        type="number"
        placeholder="Amount of the bill"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <Button onClick={calculateTip}>Calculate</Button>
      <Result>
        <p>Tip Amount <strong>{tipAmount.toFixed(2)} £</strong></p>
        <p>Amount to pay  : <strong>{total.toFixed(2)} £</strong></p>
      </Result>
    </CalculatorContainer>
  );
};

export default TipCalculator;