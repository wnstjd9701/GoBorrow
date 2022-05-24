import React, { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';
import FormControl from '@mui/material/FormControl';

function CreateItemList({ itemName, onChange, onCreate }) {
  const [imageUrl, setImageUrl] = useState(null);

  const Input = styled('input')({
    display: 'block',
  });

  useEffect(() => {}, [imageUrl]);

  return (
    <div>
      <TextField sx={{ verticalAlign: 'baseline' }} name="itemName" placeholder="품목 번호" onChange={onChange} value={itemName} />
      <Input
        onChange={e => setImageUrl(URL.createObjectURL(e.target.files[0]))}
        label="파일"
        accept="image/*"
        id="contained-button-file"
        multiple
        type="file"
        name="image"
        style={{ margin: '5px auto' }}
      />
      {imageUrl && (
        <Box mt={2}>
          <div style={{ textAlign: 'center' }}>
            <img src={imageUrl} alt={'Loading Error'} height="100px" />
          </div>
        </Box>
      )}
      <Button onClick={onCreate}>등록</Button>
    </div>
  );
}

export default CreateItemList;
