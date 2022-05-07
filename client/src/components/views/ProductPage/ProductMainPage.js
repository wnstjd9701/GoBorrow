import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import Header from '../Header/MainHeader';
import { Grid, Container } from '@mui/material';
import Footer from '../Footer/Footer';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

function srcset(image, width, height, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${width * cols}&h=${height * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${width * cols}&h=${height * rows}&fit=crop&auto=format&dpr=2 2x`,
  };
}

export default function ProductMainPage() {
  return (
    <>
      <Header />
      <Container maxWidth="lg" fixed>
        <Grid container spacing={0}>
          <Grid item xs={7}>
            <ImageList
              sx={{
                width: 500,
                transform: 'translateZ(0)',
              }}
              rowHeight={200}
              gap={1}
            >
              {itemData.map(item => {
                const cols = item.featured ? 2 : 1;
                const rows = item.featured ? 2 : 1;

                return (
                  <ImageListItem key={item.img} cols={cols} rows={rows}>
                    <img {...srcset(item.img, 250, 200, rows, cols)} alt={item.title} loading="lazy" />
                    <ImageListItemBar
                      sx={{
                        background: 'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' + 'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
                      }}
                      title={item.title}
                      position="top"
                      actionIcon={
                        <IconButton sx={{ color: 'white' }} aria-label={`star ${item.title}`}>
                          <StarBorderIcon />
                        </IconButton>
                      }
                      actionPosition="left"
                    />
                  </ImageListItem>
                );
              })}
            </ImageList>
          </Grid>
          <Grid item xs={5}>
            <FormControl sx={{ padding: '20px' }}>
              <FormLabel id="demo-radio-buttons-group-label">상품 이름</FormLabel>
              <div style={{ fontSize: '15px' }}>우산</div>
              <FormLabel id="demo-radio-buttons-group-label">품목 선택</FormLabel>
              <RadioGroup aria-labelledby="demo-radio-buttons-group-label" defaultValue="female" name="radio-buttons-group">
                <FormControlLabel value="접이식 우산(UR1022)" control={<Radio />} label="UR1022" />
                <FormControlLabel value="투명 장우산(UR1023)" control={<Radio />} label="UR1023" />
                <FormControlLabel value="블랙 장우산(UR1024)" control={<Radio />} label="UR1024" />
              </RadioGroup>
            </FormControl>
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </>
  );
}

const itemData = [
  {
    img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
    title: 'Breakfast',
    author: '@bkristastucchio',
    featured: true,
  },
  {
    img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
    title: 'Burger',
    author: '@rollelflex_graphy726',
  },
  {
    img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
    title: 'Camera',
    author: '@helloimnik',
  },
  {
    img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
    title: 'Coffee',
    author: '@nolanissac',
  },
];
