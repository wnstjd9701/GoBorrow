import React, { useState } from 'react';
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

function PostProductPage() {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const [Body, setBody] = useState({ name: '', notice: '' });

  const onSubmitHandler = e => {
    e.preventDefault();
    const body = {
      name: Body.name,
      notice: Body.notice,
    };
    dispatch(postPorudctItem(body)).then(response => {
      if (response.payload.isSuccess) {
        navigate('/org');
      } else {
        alert(response.payload.message);
      }
    });
  };

  const onChange = e => {
    const { id } = e.target;
    const value = e.target.value;
    setBody({ ...Body, [id]: value });
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
                    대여 상품 등록
                  </Typography>
                  <FormLabel id="demo-radio-buttons-group-label">
                    <h4 style={{ color: 'black', textAlign: 'left' }}>상품 이름</h4>
                    <div style={{ margin: '0 auto' }}>
                      <TextField id="name" onChange={onChange} label="상품 이름" />
                    </div>
                  </FormLabel>
                  <FormLabel id="demo-radio-buttons-group-label">
                    <h4 style={{ color: 'black', textAlign: 'left' }}>알림 사항</h4>
                    <div style={{ margin: '0 auto' }}>
                      <TextField id="notice" onChange={onChange} label="알림 사항" />
                    </div>
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

export default PostProductPage;
