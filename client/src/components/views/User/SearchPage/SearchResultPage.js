import * as React from 'react';
import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardHeader from '@mui/material/CardHeader';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import { Grid } from '@mui/material';
import Pagination from '@mui/material/Pagination';

export default function SearchResultPage(props) {
  const keyword = props.name;
  return (
    <>
      <Grid style={{ justifyContent: 'center', marginTop: 5 }} maxWidth="lg" columns={15} container spacing={0}>
        <Grid style={{ maxWidth: 450, padding: '3px 10px', minWidth: 300, inlineSize: 'max-content' }} item xs={5}>
          <Card style={{}} sx={{ width: '100%' }}>
            <Link to="1">
              <CardHeader
                titleTypographyProps={{ fontSize: '1.15rem' }}
                title="기관: 단국대학교"
                subheaderTypographyProps={{
                  color: 'black',
                  fontSize: '0.875rem',
                  textOverflow: 'ellipsis',
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  width: '200px',
                }}
                subheader="총학생회"
                action={
                  <IconButton aria-label="add to favorites">
                    <FavoriteBorderIcon />
                  </IconButton>
                }
              />
            </Link>
            <CardMedia
              component="img"
              height="140vmin"
              image="https://s3.ap-northeast-2.amazonaws.com/img.castlejun-2.shop/dku.jpg"
              alt="green iguana"
            />
            <CardActions sx={{ placeContent: 'center' }}>
              <Button size="small">Share</Button>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid style={{ maxWidth: 450, padding: '3px 10px', minWidth: 300, inlineSize: 'max-content' }} item xs={5}>
          <Card style={{}} sx={{ width: '100%' }}>
            <Link to="2">
              <CardHeader
                titleTypographyProps={{ fontSize: '1.15rem' }}
                title="기관: 단국대학교"
                subheaderTypographyProps={{
                  color: 'black',
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
            </Link>
            <CardMedia
              component="img"
              height="140vmin"
              image="https://s3.ap-northeast-2.amazonaws.com/img.castlejun-2.shop/%EB%8B%A8%EA%B5%AD%EB%8C%80+%EB%A1%9C%EA%B3%A03.jpg"
              alt="green iguana"
            />
            <CardActions sx={{ placeContent: 'center' }}>
              <Button size="small">Share</Button>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid style={{ maxWidth: 450, padding: '3px 10px', minWidth: 300, inlineSize: 'max-content' }} item xs={5}>
          <Card style={{}} sx={{ width: '100%' }}>
            <Link to="3">
              <CardHeader
                titleTypographyProps={{ fontSize: '1.15rem' }}
                title="(주)단국대 바이크"
                subheaderTypographyProps={{
                  color: 'black',
                  fontSize: '0.875rem',
                  textOverflow: 'ellipsis',
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  width: '200px',
                }}
                subheader="(주)단국바이크"
                action={
                  <IconButton aria-label="add to favorites">
                    <FavoriteBorderIcon />
                  </IconButton>
                }
              />
            </Link>
            <CardMedia
              component="img"
              height="140vmin"
              image="https://s3.ap-northeast-2.amazonaws.com/img.castlejun-2.shop/%EC%9E%90%EC%A0%84%EA%B1%B0.jpg"
              alt="green iguana"
            />
            <CardActions sx={{ placeContent: 'center' }}>
              <Button size="small">Share</Button>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
      <Grid style={{ justifyContent: 'center', marginTop: 5 }} maxWidth="lg" columns={15} container spacing={0}>
        <Grid style={{ maxWidth: 450, padding: '3px 10px', minWidth: 300, inlineSize: 'max-content' }} item xs={5}>
          <Card style={{}} sx={{ width: '100%' }}>
            <Link to="4">
              <CardHeader
                titleTypographyProps={{ fontSize: '1.15rem' }}
                title="기관: 단국대학교"
                subheaderTypographyProps={{
                  color: 'black',
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
            </Link>
            <CardMedia
              component="img"
              height="140vmin"
              image="https://s3.ap-northeast-2.amazonaws.com/img.castlejun-2.shop/%EB%8B%A8%EA%B5%AD%EB%8C%80%EB%A1%9C%EA%B3%A02.jpeg"
              alt="green iguana"
            />
            <CardActions sx={{ placeContent: 'center' }}>
              <Button size="small">Share</Button>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid style={{ maxWidth: 450, padding: '3px 10px', minWidth: 300, inlineSize: 'max-content' }} item xs={5}>
          <Card style={{}} sx={{ width: '100%' }}>
            <Link to="5">
              <CardHeader
                titleTypographyProps={{ fontSize: '1.15rem' }}
                title="단국대서점"
                subheaderTypographyProps={{
                  color: 'black',
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
            </Link>
            <CardMedia
              component="img"
              height="140vmin"
              image="https://s3.ap-northeast-2.amazonaws.com/img.castlejun-2.shop/%EB%8B%A8%EA%B5%AD%EB%8C%80%EB%A1%9C%EA%B3%A0.png"
              alt="green iguana"
            />
            <CardActions sx={{ placeContent: 'center' }}>
              <Button size="small">Share</Button>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid style={{ maxWidth: 450, padding: '3px 10px', minWidth: 300, inlineSize: 'max-content' }} item xs={5}>
          <Card style={{}} sx={{ width: '100%' }}>
            <Link to="2">
              <CardHeader
                titleTypographyProps={{ fontSize: '1.15rem' }}
                title="기관: 단국대학교"
                subheaderTypographyProps={{
                  color: 'black',
                  fontSize: '0.875rem',
                  textOverflow: 'ellipsis',
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  width: '200px',
                }}
                subheader="융합대학 학생회"
                action={
                  <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                  </IconButton>
                }
              />
            </Link>
            <CardMedia
              component="img"
              height="140vmin"
              image="https://s3.ap-northeast-2.amazonaws.com/img.castlejun-2.shop/%EB%8B%A8%EA%B5%AD%EB%8C%80+%EB%A1%9C%EA%B3%A03.jpg"
              alt="green iguana"
            />
            <CardActions sx={{ placeContent: 'center' }}>
              <Button size="small">Share</Button>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
      <Pagination style={{ justifyContent: 'center' }} count={5} shape="rounded" />
    </>
  );
}
