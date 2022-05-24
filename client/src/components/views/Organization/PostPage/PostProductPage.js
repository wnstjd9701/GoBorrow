import React, { useRef } from 'react';
import Header from '../../Public/Header/MainHeader';
import Footer from '../../Public/Footer/Footer';
import { useState, useEffect } from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import { Grid, Container, Card, CardContent, Typography, Box } from '@mui/material';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import ItemList from './SetItemList';
import CreateItemButton from './CreateItemList';

function srcset(image, width, height, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${width * cols}&h=${height * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${width * cols}&h=${height * rows}&fit=crop&auto=format&dpr=2 2x`,
  };
}

const Input = styled('input')({
  display: 'block',
});

export default function PostProductPage() {
  const [inputs, setInputs] = useState({ itemName: '', image: '' });
  const [items, setItems] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);
  const nextId = useRef(0);
  const { itemName, image } = inputs;

  const onChange = e => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const onCreate = () => {
    const item = {
      id: nextId.current,
      itemName,
      image,
    };
    if (itemName) {
      setItems(items.concat(item));
      setInputs({
        itemName: '',
      });
      nextId.current += 1;
    } else {
      alert('제품 번호를 입력해주세요.');
    }
  };

  const onSubmit = e => {
    console.log(e.target);
    e.preventDefault();
    const item = {
      id: nextId.current,
      itemName,
      imageUrl,
    };
    setItems(items.concat(item));

    setInputs({
      itemName: '',
    });
    nextId.current += 1;
  };

  const onRemove = id => {
    setItems(items.filter(item => item.id !== id));
  };
  useEffect(() => {
    if (selectedImage) {
      setImageUrl(URL.createObjectURL(selectedImage));
    }
  }, [selectedImage]);
  return (
    <>
      <Header />
      <Container sx={{ maxWidth: 'max-content', border: '1px solid #ddd', background: 'rgb(249, 250, 251)', borderRadius: '10px' }} fixed>
        <Grid sx={{ textAlign: 'center', margin: '16px auto', justifyContent: 'center', maxWidth: 'max-content !important' }}>
          <FormControl>
            <Card sx={{ display: 'inline-block', margin: '5px 30px', minWidth: '30vw' }}>
              <CardContent sx={{ padding: '30px' }}>
                <Typography sx={{ marginBottom: '10px', fontWeight: 'bold' }} variant="h4" component="div">
                  품목 등록
                </Typography>
                <FormLabel id="demo-radio-buttons-group-label">
                  <h4 style={{ color: 'black', textAlign: 'left' }}>제품 번호 등록</h4>
                  <CreateItemButton itemName={itemName} onChange={onChange} onCreate={onCreate} onSubmit={onSubmit} />
                  <ItemList items={items} onRemove={onRemove} />
                </FormLabel>
                <FormLabel id="demo-radio-buttons-group-label">
                  <h4 style={{ color: 'black', textAlign: 'left' }}>알림 사항 등록</h4>
                  <div style={{ margin: '0 auto' }}>
                    <TextField id="notice" label="알림 사항" />
                  </div>
                </FormLabel>
                <Box
                  component="form"
                  sx={{
                    textAlign: 'left',
                    '& .MuiTextField-root': { width: '25ch' },
                  }}
                  noValidate
                  autoComplete="off"
                >
                  <h3>품묵 사진</h3>
                  <div style={{ marginBottom: '10px' }}>
                    <TextField id="authId" label="학번" defaultValue="32XXXXXX" />
                  </div>
                  <label nhtmlfor="contained-button-file">
                    <Input
                      onChange={e => setSelectedImage(e.target.files[0])}
                      label="파일"
                      accept="image/*"
                      id="contained-button-file"
                      multiple
                      type="file"
                    />
                  </label>
                  {imageUrl && selectedImage && (
                    <Box mt={2}>
                      <div style={{ textAlign: 'left' }}>
                        <img src={imageUrl} alt={selectedImage.name} height="100px" />
                      </div>
                    </Box>
                  )}
                </Box>
                <Button style={{ margin: '15px auto 0' }} type="submit" variant="outlined">
                  등록하기
                </Button>
              </CardContent>
            </Card>
          </FormControl>
        </Grid>
      </Container>
      <Footer />
    </>
  );
}
