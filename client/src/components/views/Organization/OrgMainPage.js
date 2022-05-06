import React from 'react';
import Header from '../Header/MainHeader';
import Footer from '../Footer/Footer';
import { useParams } from 'react-router-dom';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import { Container, Grid, Card, CardContent, Typography } from '@mui/material';

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
  };
}

const testImg = {
  img: 'https://s3.ap-northeast-2.amazonaws.com/img.castlejun-2.shop/dku.jpg',
  title: 'DKU',
};

const itemData = [
  {
    img: 'https://s3.ap-northeast-2.amazonaws.com/img.castlejun-2.shop/%EC%9A%B0%EC%82%B0.jpg',
    title: '우산',
    state: false,
    quantity: '0',
  },
  {
    img: 'https://s3.ap-northeast-2.amazonaws.com/img.castlejun-2.shop/%EB%85%B8%ED%8A%B8%EB%B6%81.jpeg',
    title: '노트북',
    state: true,
    quantity: '1',
  },
  {
    img: 'https://s3.ap-northeast-2.amazonaws.com/img.castlejun-2.shop/%EC%9E%90%EC%A0%84%EA%B1%B0.jpg',
    title: '자전거',
    state: true,
    quantity: '2',
  },
  {
    img: 'https://s3.ap-northeast-2.amazonaws.com/img.castlejun-2.shop/%EC%95%84%EC%9D%B4%ED%8C%A8%EB%93%9C.jpg',
    title: '아이패드',
    state: true,
    quantity: '3',
  },
];
const handleSide = (state, quantity) => {
  if (state == true) {
    return (
      <span>
        <b style={{ color: 'blue' }}>대여가능</b>
      </span>
    );
  } else {
    return (
      <span>
        <b style={{ color: 'red' }}>대여불가</b>
      </span>
    );
  }
};
export default function OrgMainPage() {
  const orgId = useParams();
  return (
    <>
      <Header />
      <Container sx={{ maxWidth: 'max-content', border: '1px solid #ddd' }} fixed>
        <Grid sx={{ textAlign: 'center', margin: '16px auto', justifyContent: 'center', maxWidth: 'max-content !important' }}>
          <div style={{ margin: '5px auto', display: 'inline-block', textAlign: 'center' }}>
            <img style={{ width: '500px', height: '300px' }} src={testImg.img} alt="" />
          </div>
          <Card sx={{ height: '300px', display: 'inline-block', margin: '5px 30px', minWidth: '30vw' }}>
            <CardContent sx={{ padding: '30px' }}>
              <Typography variant="h5" component="div">
                단국대학교
              </Typography>
              <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                총학생회
              </Typography>
              <Typography sx={{ fontSize: 15 }} color="text.secondary" gutterBottom>
                <b>Address:</b> 경기도 용인시 수지구 죽전로 152
              </Typography>
              <Typography sx={{ fontSize: 14, mb: 1.2 }} color="text.secondary">
                <b>TEL:</b> 031-632-0234
              </Typography>
              <Typography variant="body2">
                <h4 style={{ marginBottom: '5px' }}>Comment</h4>
                안녕하세요 단국대학교 총학생회 입니다.
                <br />
                저희는 단국대학교 학우분들의 편의를 위해 각종 편의시설 들을 대여중에 있습니다.
                <br />
                추가 의견 연락 혹은 문의주시면 적극 반영하도록 하겠습니다.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <h2 style={{ textAlign: 'center' }}>Product</h2>
        <ImageList sx={{ margin: '15px auto', gridTemplateColumns: 'repeat(4, 1fr) !important', gap: '10px !important' }}>
          {itemData.map(item => (
            <ImageListItem key={item.img}>
              <img
                src={`${item.img}?w=248&fit=crop&auto=format`}
                srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                alt={item.title}
                loading="lazy"
                style={{ objectFit: 'scale-down' }}
              />
              <ImageListItemBar
                sx={{ textAlign: 'center' }}
                title={<b>{item.title}</b>}
                subtitle={handleSide(item.state, item.quantity)}
                position="below"
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Container>
      <Footer />
    </>
  );
}
