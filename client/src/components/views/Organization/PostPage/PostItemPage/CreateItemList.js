import React, { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';

function CreateItemList({ itemName, onChange, onChangeImage, onCreate }) {
  const [imageUrl, setImageUrl] = useState(null);
  const Input = styled('input')({
    display: 'block',
  });

  useEffect(() => {}, [imageUrl]);

  return (
    <div style={{ textAlign: 'center' }}>
      <TextField sx={{ verticalAlign: 'baseline' }} name="itemName" label="품목 번호" onChange={onChange} value={itemName} />
      <Input
        onChange={e => {
          setImageUrl(URL.createObjectURL(e.target.files[0]));
          onChangeImage(e);
        }}
        label="파일"
        accept="image/*"
        id="contained-button-file"
        multiple
        type="file"
        name="image"
        style={{ margin: '5px auto', display: 'none' }}
      />
      <Button sx={{ marginLeft: '10px' }} variant="contained" size="small" color="success">
        <label htmlFor="contained-button-file">제품 사진 업로드</label>
      </Button>
      {imageUrl && (
        <Box mt={2}>
          <div style={{ margin: '0 auto 5px ' }}>
            <img src={imageUrl} alt={'Loading Error'} height="300vm" />
          </div>
        </Box>
      )}
      <div style={{ marginTop: '10px' }}>
        <Button
          variant="contained"
          size="small"
          onClick={() => {
            onCreate();
            setImageUrl(null);
          }}
        >
          등록
        </Button>
      </div>
    </div>
  );
}

export default CreateItemList;
