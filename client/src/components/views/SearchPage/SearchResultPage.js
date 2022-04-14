import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardHeader from '@mui/material/CardHeader';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import { Grid } from '@mui/material';
import { Container } from '@mui/material';

export default function SearchResultPage() {
  return (
    <>
      <Container fixed>
        <Grid style={{ margin: '30px auto' }} maxWidth="lg" columns={15} container spacing={-1}>
          <Grid item xs={5}>
            <Card style={{ margin: '20px auto' }} sx={{ maxWidth: 330 }}>
              <CardHeader
                titleTypographyProps={{ fontSize: '1.15rem' }}
                title="단국대학교"
                subheaderTypographyProps={{ fontSize: '0.875rem' }}
                subheader="단국대학교 총학생회 대여팀입니다."
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
          <Grid item xs={5}>
            <Card style={{ margin: '20px auto' }} sx={{ maxWidth: 330 }}>
              <CardHeader
                titleTypographyProps={{ fontSize: '1.15rem' }}
                title="단국대학교"
                subheaderTypographyProps={{ fontSize: '0.875rem' }}
                subheader="단국대학교 총학생회 대여팀입니다."
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
          <Grid item xs={5}>
            <Card style={{ margin: '20px auto' }} sx={{ maxWidth: 330 }}>
              <CardHeader
                titleTypographyProps={{ fontSize: '1.15rem' }}
                title="단국대학교"
                subheaderTypographyProps={{ fontSize: '0.875rem' }}
                subheader="단국대학교 총학생회 대여팀입니다."
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
        <Grid style={{ margin: '30px auto' }} maxWidth="lg" columns={15} container spacing={0}>
          <Grid item xs={5}>
            <Card style={{ margin: '20px auto' }} sx={{ maxWidth: 320 }}>
              <CardHeader
                titleTypographyProps={{ fontSize: '1.15rem' }}
                title="단국대학교"
                subheaderTypographyProps={{ fontSize: '0.875rem' }}
                subheader="단국대학교 총학생회 대여팀입니다."
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
          <Grid item xs={5}>
            <Card style={{ margin: '20px auto' }} sx={{ maxWidth: 320 }}>
              <CardHeader
                titleTypographyProps={{ fontSize: '1.15rem' }}
                title="단국대학교"
                subheaderTypographyProps={{ fontSize: '0.875rem' }}
                subheader="단국대학교 총학생회 대여팀입니다."
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
          <Grid item xs={5}>
            <Card style={{ margin: '20px auto' }} sx={{ maxWidth: 320 }}>
              <CardHeader
                titleTypographyProps={{ fontSize: '1.15rem' }}
                title="단국대학교"
                subheaderTypographyProps={{ fontSize: '0.875rem' }}
                subheader="단국대학교 총학생회 대여팀입니다."
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
    </>
  );
}
