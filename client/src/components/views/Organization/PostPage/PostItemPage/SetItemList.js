import React from 'react';
import Button from '@mui/material/Button';

function Item({ item, onRemove }) {
  return (
    <div>
      <b>{item.itemName}</b>
      <span style={{ marginLeft: '5px' }}>
        <b>(+{item.quantity})</b>
      </span>
      <Button color="error" onClick={() => onRemove(item.id)}>
        삭제
      </Button>
    </div>
  );
}

function CreateItemList({ items, onRemove }) {
  return (
    <div style={{ textAlign: 'center', marginTop: '15px' }}>
      {items.map(item => (
        <Item item={item} key={item.id} onRemove={onRemove} />
      ))}
    </div>
  );
}

export default CreateItemList;
