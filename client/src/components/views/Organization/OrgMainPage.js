import React from 'react';
import Header from '../Header/MainHeader';
import { useParams } from 'react-router-dom';
import { Container } from '@mui/material';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format&dpr=2 2x`,
  };
}

const testImg = [
  {
    img: 'https://s3.ap-northeast-2.amazonaws.com/img.castlejun-2.shop/dku.jpg',
    title: 'DKU',
    cols: 4,
    rows: 2,
  },
];

export default function OrgMainPage() {
  const orgId = useParams();
  return (
    <>
      <Header />
      <Container fixed>
        <ImageList sx={{ overflow: 'hidden', width: 500, height: 600 }} variant="quilted" cols={4} rowHeight={121}>
          {testImg.map(item => (
            <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
              <img {...srcset(item.img, 121, item.rows, item.cols)} alt={item.title} loading="lazy" />
            </ImageListItem>
          ))}
        </ImageList>
        <div>{orgId.organizationId} OrgMainPage</div>
      </Container>
    </>
  );
}
