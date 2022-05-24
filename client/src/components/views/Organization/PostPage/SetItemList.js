import React from 'react';
import Button from '@mui/material/Button';

function Item({ item, onRemove }) {
  return (
    <div>
      <b>{item.itemName}</b>
      <Button color="error" onClick={() => onRemove(item.id)}>
        삭제
      </Button>
    </div>
  );
}

function CreateItemList({ items, onRemove }) {
  return (
    <div>
      {items.map(item => (
        <Item item={item} key={item.id} onRemove={onRemove} />
      ))}
    </div>
  );
}

export default CreateItemList;
