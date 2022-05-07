import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardHeader from '@mui/material/CardHeader';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import SearchBar from '../LandingPage/SearchBar';
import { Grid } from '@mui/material';

export default function SearchResultPage(props) {
  const keyword = props.name;
  return (
    <>
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
              subheader="퇴계중앙기념도서관"
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
              title="단국서점"
              subheaderTypographyProps={{
                fontSize: '0.875rem',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                width: '200px',
              }}
              subheader="단국서점"
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
          <Card sx={{ width: '100%', overflow: 'ellipsis' }}>
            <CardHeader
              titleTypographyProps={{ fontSize: '1.15rem' }}
              title="단국대학교"
              subheaderTypographyProps={{
                fontSize: '0.875rem',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                width: '200px',
              }}
              subheader="경기도 용인시 수지구 죽전로 152경기도 용인시 수지구 죽전로 152경기도 용인시 수지구 죽전로 152"
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
    </>
  );
}
