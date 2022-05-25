import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { postPorudctItem } from '../../../../../_actions/org_action';
import Header from '../../../Public/Header/MainHeader';
import Footer from '../../../Public/Footer/Footer';
import { Grid, Container, Card, CardContent, Typography, Box } from '@mui/material';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import TextField from '@mui/material/TextField';
import ItemList from './SetItemList';
import CreateItemButton from './CreateItemList';

export default function PostProductPage() {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const [Inputs, setInputs] = useState({ itemName: '', image: '' });
  const [Items, setItems] = useState([]);
  let nextId = 0;
  const { itemName, image } = Inputs;

  const onChange = e => {
    const { name, value } = e.target;
    setInputs({
      ...Inputs,
      [name]: value,
    });
  };

  const onChangeImage = e => {
    const value = e.target.files[0];
    const { name } = e.target;
    setInputs({
      ...Inputs,
      [name]: value,
    });
  };

  const onCreate = () => {
    const item = {
      id: nextId,
      itemName,
      image,
    };
    if (itemName) {
      setItems(Items.concat(item));
      setInputs({
        itemName: '',
        image: '',
      });
      nextId += 1;
    } else {
      alert('제품 번호를 입력해주세요.');
    }
  };

  const onRemove = id => {
    setItems(Items.filter(item => item.id !== id));
  };

  const onSubmitHandler = e => {
    e.preventDefault();
    const body = {
      item: Items,
    };
    dispatch(postPorudctItem(body)).then(response => {
      if (response.payload.isSuccess) {
        navigate('/org');
      } else {
        alert(response.payload.message);
      }
    });
  };

  return (
    <>
      <Header />
      <Container sx={{ maxWidth: 'max-content', border: '1px solid #ddd', background: 'rgb(249, 250, 251)', borderRadius: '10px' }} fixed>
        <Grid sx={{ textAlign: 'center', margin: '16px auto', justifyContent: 'center', maxWidth: 'max-content !important' }}>
          <Box
            component="form"
            sx={{
              textAlign: 'left',
              '& .MuiTextField-root': { width: '25ch' },
            }}
            noValidate
            autoComplete="off"
            onSubmit={onSubmitHandler}
          >
            <FormControl>
              <Card sx={{ display: 'inline-block', margin: '5px 30px', minWidth: '30vw' }}>
                <CardContent sx={{ padding: '30px' }}>
                  <Typography sx={{ textAlign: 'center', marginBottom: '10px', fontWeight: 'bold' }} variant="h4" component="div">
                    상세 품목 등록
                  </Typography>
                  <FormLabel id="demo-radio-buttons-group-label">
                    <h4 style={{ color: 'black', textAlign: 'left' }}>제품 번호 등록</h4>
                    <CreateItemButton itemName={itemName} onChange={onChange} onChangeImage={onChangeImage} onCreate={onCreate} />
                    <ItemList items={Items} onRemove={onRemove} />
                  </FormLabel>
                  <div style={{ textAlign: 'center' }}>
                    <Button style={{ textAlign: 'center', margin: '15px auto 0' }} type="submit" variant="outlined">
                      등록하기
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </FormControl>
          </Box>
        </Grid>
      </Container>
      <Footer />
    </>
  );
}
