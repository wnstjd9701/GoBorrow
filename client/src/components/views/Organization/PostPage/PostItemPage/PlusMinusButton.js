import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';

function PlusMinusButton({ getQuantity }) {
  const [quantity, setQauntity] = useState(0);

  const handlePlusButton = () => {
    setQauntity(quantity + 1);
  };
  const handleMinusButton = () => {
    if (quantity > 0) {
      setQauntity(quantity - 1);
    }
  };

  useEffect(() => {
    getQuantity(quantity);
  }, [quantity]);

  return (
    <div style={{ marginTop: '10px' }}>
      <Button variant="rounded" onClick={handleMinusButton}>
        -
      </Button>
      {quantity}
      <Button variant="rounded" onClick={handlePlusButton}>
        +
      </Button>
    </div>
  );
}

export default PlusMinusButton;
