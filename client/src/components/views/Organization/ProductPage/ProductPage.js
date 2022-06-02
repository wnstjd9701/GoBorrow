import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../../Public/Header/MainHeader';
import Footer from '../../Public/Footer/Footer';
import Sidebar from '../MainPage/SideBar/Sidebar';
import { SET_MENU } from '../../../../_actions/action_type';
import { styled, useTheme } from '@mui/material/styles';
import { Box, useMediaQuery } from '@mui/material';
import Button from '@mui/material/Button';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';

const Main = styled('main', { shouldForwardProp: prop => prop !== 'open' })(({ theme, open }) => ({
  ...theme.typography.mainContent,
  ...(!open && {
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    [theme.breakpoints.up('md')]: {
      marginLeft: -240,
      width: '100%',
    },
    [theme.breakpoints.down('md')]: {
      marginLeft: '20px',
      width: '100%',
      padding: '16px',
    },
    [theme.breakpoints.down('sm')]: {
      marginLeft: '10px',
      width: '100%',
      padding: '16px',
      marginRight: '10px',
    },
  }),
  ...(open && {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    width: '`calc(100% - 260px)`',
    [theme.breakpoints.down('md')]: {
      marginLeft: '20px',
    },
    [theme.breakpoints.down('sm')]: {
      marginLeft: '10px',
      justifyContent: 'center',
    },
  }),
}));

const itemData = [
  {
    img: 'https://s3.ap-northeast-2.amazonaws.com/img.castlejun-2.shop/%EC%9A%B0%EC%82%B0.jpg',
    title: '우산',
    state: true,
    quantity: '3',
  },
  {
    img: 'https://s3.ap-northeast-2.amazonaws.com/img.castlejun-2.shop/%EB%85%B8%ED%8A%B8%EB%B6%81.jpeg',
    title: '노트북',
    state: false,
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

const CustomImageList = styled(ImageList)(({ theme }) => ({
  margin: '15px',
  gridTemplateColumns: 'repeat(4, 1fr) !important',
  gap: '10px !important',
  overflowY: 'visible !important',
  [theme.breakpoints.down('sm')]: {
    gridTemplateColumns: 'repeat(2, 1fr) !important',
  },
}));

function ProductPage() {
  const theme = useTheme();
  const matchDownMd = useMediaQuery(theme.breakpoints.down('lg'));
  const matchDownSm = useMediaQuery(theme.breakpoints.down('md'));
  const dispatch = useDispatch();

  const leftDrawerOpened = useSelector(state => state.customization.opened);

  const handleLeftDrawerToggle = () => {
    dispatch({ type: SET_MENU, opened: !leftDrawerOpened });
  };

  useEffect(() => {
    dispatch({ type: SET_MENU, opened: !matchDownMd });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [matchDownMd]);
  return (
    <>
      <Header org="1" />
      <Box sx={{ display: 'flex' }}>
        <Sidebar drawerOpen={leftDrawerOpened} drawerToggle={handleLeftDrawerToggle} />
        <Main theme={theme} open={leftDrawerOpened} sx={{ flexGrow: 1, overflow: 'visible' }}>
          <CustomImageList>
            {itemData.map(item => (
              <ImageListItem
                key={item.img}
                sx={{
                  boxShadow:
                    'rgb(145 158 171 / 20%) 0px 3px 1px -2px, rgb(145 158 171 / 14%) 0px 2px 2px 0px, rgb(145 158 171 / 12%) 0px 1px 5px 0px',
                }}
              >
                <img
                  src={`${item.img}?w=248&fit=crop&auto=format`}
                  srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                  alt={item.title}
                  loading="lazy"
                  style={{ objectFit: 'scale-down', background: 'rgb(255,255,255)', borderRadius: '10px 10px 0 0' }}
                />
                <ImageListItemBar
                  sx={{
                    textAlign: 'center',
                    background: 'rgb(252,251,252)',
                    borderRadius: '0 0 10px 10px',
                    overflow: 'visible !important',
                  }}
                  title={<b>{item.title}</b>}
                  subtitle={<b>재고: {item.quantity}</b>}
                  position="below"
                />
                <div style={{ textAlign: 'center' }}>
                  <Button>수정</Button>
                  <Button color="error">삭제</Button>
                </div>
              </ImageListItem>
            ))}
          </CustomImageList>
        </Main>
      </Box>
      <Footer />
    </>
  );
}

export default ProductPage;
