import { useState, useEffect } from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import Header from '../Header/MainHeader';
import { Grid, Container, Card, CardContent, Typography, Box } from '@mui/material';
import Footer from '../Footer/Footer';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import { Button } from '@material-ui/core';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';

function srcset(image, width, height, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${width * cols}&h=${height * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${width * cols}&h=${height * rows}&fit=crop&auto=format&dpr=2 2x`,
  };
}

export default function ProductMainPage() {
  const [startDate, setStartDate] = useState(new Date());
  const [lastDate, setFinishDate] = useState(new Date());
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);

  useEffect(() => {
    if (selectedImage) {
      setImageUrl(URL.createObjectURL(selectedImage));
    }
  }, [selectedImage]);

  return (
    <>
      <Header />
      <Container sx={{ maxWidth: 'max-content', border: '1px solid #ddd', background: 'rgb(249, 250, 251)', borderRadius: '10px' }} fixed>
        <Grid sx={{ textAlign: 'center', margin: '16px auto', justifyContent: 'center', maxWidth: 'max-content !important' }}>
          <div style={{ margin: '5px auto', display: 'inline-block', textAlign: 'center', verticalAlign: 'top' }}>
            <ImageList
              sx={{
                width: '500px',
                height: '750px',
                transform: 'translateZ(0)',
              }}
              rowHeight={250}
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
          </div>
          <FormControl>
            <Card sx={{ display: 'inline-block', margin: '5px 30px', minWidth: '30vw' }}>
              <CardContent sx={{ padding: '30px' }}>
                <Typography variant="h4" component="div">
                  우산
                </Typography>
                <Typography sx={{ fontSize: 14, margin: '10px auto', marginBottom: '30px' }} color="text.secondary" gutterBottom>
                  제품 파손시, 제품 가격 청구예정입니다.
                </Typography>
                <FormLabel id="demo-radio-buttons-group-label">
                  <b style={{ color: 'black' }}>품목 선택</b>
                </FormLabel>
                <RadioGroup aria-labelledby="demo-radio-buttons-group-label" defaultValue="female" name="radio-buttons-group">
                  <FormControlLabel
                    style={{ marginTop: '5px', marginBottom: '10px' }}
                    value="접이식 우산(UR1022)"
                    control={<Radio />}
                    label="UR1022"
                  />
                  <FormControlLabel style={{ marginBottom: '10px' }} value="투명 장우산(UR1023)" control={<Radio />} label="UR1023" />
                  <FormControlLabel style={{ marginBottom: '10px' }} value="블랙 장우산(UR1024)" control={<Radio />} label="UR1024" />
                </RadioGroup>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  {' '}
                  <h3>일자 선택</h3>
                  <Stack spacing={3}>
                    <DateTimePicker
                      renderInput={params => <TextField {...params} />}
                      label="대여 시작일"
                      value={startDate}
                      onChange={newValue => {
                        setStartDate(newValue);
                      }}
                      minDateTime={new Date()}
                    />
                    <DateTimePicker
                      renderInput={params => <TextField {...params} />}
                      label="대여 종료일"
                      value={lastDate}
                      onChange={newValue => {
                        setFinishDate(newValue);
                      }}
                      minDateTime={startDate}
                    />
                  </Stack>
                </LocalizationProvider>
                <h3>인증 정보</h3>
                <Box
                  component="form"
                  sx={{
                    textAlign: 'left',
                    '& .MuiTextField-root': { width: '25ch' },
                  }}
                  noValidate
                  autoComplete="off"
                >
                  <div style={{ marginBottom: '10px' }}>
                    <TextField id="authId" label="학번" defaultValue="32XXXXXX" />
                  </div>
                  <label nhtmlfor="contained-button-file">
                    <Input
                      onChange={e => setSelectedImage(e.target.files[0])}
                      label="파일"
                      accept="image/*"
                      id="contained-button-file"
                      multiple
                      type="file"
                    />
                  </label>
                  {imageUrl && selectedImage && (
                    <Box mt={2}>
                      <div style={{ textAlign: 'left' }}>
                        <img src={imageUrl} alt={selectedImage.name} height="100px" />
                      </div>
                    </Box>
                  )}
                </Box>
                <Button style={{ margin: '15px auto 0' }} type="submit" variant="outlined">
                  예약하기
                </Button>
              </CardContent>
            </Card>
          </FormControl>
        </Grid>
      </Container>
      <Footer />
    </>
  );
}

const Input = styled('input')({
  display: 'block',
});

const itemData = [
  {
    img: 'https://s3.ap-northeast-2.amazonaws.com/img.castlejun-2.shop/yellowUmb.jpeg',
    title: 'UR1022',
    featured: true,
  },
  {
    img: 'https://s3.ap-northeast-2.amazonaws.com/img.castlejun-2.shop/brownumb.jpg',
    title: 'UR1023',
  },
  {
    img: 'https://s3.ap-northeast-2.amazonaws.com/img.castlejun-2.shop/%EC%9A%B0%EC%82%B0.jpg',
    title: 'UR1024',
  },
];
