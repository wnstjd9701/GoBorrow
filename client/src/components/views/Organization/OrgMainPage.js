import React from 'react';
import Header from '../Header/MainHeader';
import { useParams } from 'react-router-dom';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
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

export default function OrgMainPage() {
  const orgId = useParams();
  return (
    <>
      <Header />
      <Container sx={{ border: '1px solid #ddd' }} fixed>
        <Grid sx={{ margin: 2, justifyContent: 'center' }} maxWidth="lg">
          <img style={{ width: '500px', height: '300px' }} src={testImg.img} alt="" />
          <Card sx={{ margin: '0 30px', minWidth: '30vw' }}>
            <CardContent>
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
      </Container>
    </>
  );
}
