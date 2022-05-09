import React from 'react';
import Header from '../Header/MainHeader';
import Footer from '../Footer/Footer';
import { Container, Grid } from '@mui/material';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardHeader from '@mui/material/CardHeader';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';

export default function Favorite() {
  return (
    <>
      <Header />
      <Container style={{ maxWidth: 'max-content' }} fixed>
        <div>
          <h1>찜한 기관/조직</h1>
        </div>
        <Grid style={{ justifyContent: 'center', marginTop: 5 }} maxWidth="lg" columns={15} container spacing={0}>
          <Grid style={{ maxWidth: 450, padding: '3px 10px', minWidth: 300, inlineSize: 'max-content' }} item xs={5}>
            <Card style={{}} sx={{ width: '100%' }}>
              <CardHeader
                titleTypographyProps={{ fontSize: '1.15rem' }}
                title="기관: 단국대학교"
                subheaderTypographyProps={{
                  fontSize: '0.875rem',
                  textOverflow: 'ellipsis',
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  width: '200px',
                }}
                subheader="총학생회"
                action={
                  <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                  </IconButton>
                }
              />
              <CardMedia
                component="img"
                height="140"
                image="https://s3.ap-northeast-2.amazonaws.com/img.castlejun-2.shop/dku.jpg"
                alt="green iguana"
              />
              <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid style={{ maxWidth: 450, padding: '3px 10px', minWidth: 300, inlineSize: 'max-content' }} item xs={5}>
            <Card style={{}} sx={{ width: '100%' }}>
              <CardHeader
                titleTypographyProps={{ fontSize: '1.15rem' }}
                title="기관: 단국대학교"
                subheaderTypographyProps={{
                  fontSize: '0.875rem',
                  textOverflow: 'ellipsis',
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  width: '200px',
                }}
                subheader="소프트웨어학과 학생회"
                action={
                  <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                  </IconButton>
                }
              />
              <CardMedia
                component="img"
                height="140"
                image="https://s3.ap-northeast-2.amazonaws.com/img.castlejun-2.shop/dku.jpg"
                alt="green iguana"
              />
              <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid style={{ maxWidth: 450, padding: '3px 10px', minWidth: 300, inlineSize: 'max-content' }} item xs={5}>
            <Card style={{}} sx={{ width: '100%' }}>
              <CardHeader
                titleTypographyProps={{ fontSize: '1.15rem' }}
                title="(주)단국바이크"
                subheaderTypographyProps={{
                  fontSize: '0.875rem',
                  textOverflow: 'ellipsis',
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  width: '200px',
                }}
                subheader="(주)단국바이크"
                action={
                  <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                  </IconButton>
                }
              />
              <CardMedia
                component="img"
                height="140"
                image="https://s3.ap-northeast-2.amazonaws.com/img.castlejun-2.shop/dku.jpg"
                alt="green iguana"
              />
              <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </>
  );
}
