import React, { useEffect, useState } from 'react';
import Header from '../Header/MainHeader';
import authAxios from '../../../lib/refreshToken';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SearchBar from './SearchBar';

export default function LandingPage(props) {
  const [name, setName] = useState(null);

  const [expanded, setExpanded] = useState(false);
  const handleChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  useEffect(
    () =>
      async function () {
        const { profile } = await authAxios.get('/users/profile');
        console.log('h');
        if (profile.isSuccess) {
          setName(profile.name);
        }
      },
    [],
  );
  return (
    <>
      <Header />
      <SearchBar />
      <Box style={{ width: 900, margin: '30px auto' }} sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <div style={{ margin: '20px auto', textAlign: 'center', fontSize: 16, fontWeight: 'bold' }}>대여 승인 신청</div>{' '}
            <div>
              <Accordion expanded={expanded === 'panel1-1'} onChange={handleChange('panel1-1')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1-1bh-content" id="panel1-1bh-header">
                  <Typography sx={{ fontWeight: 'bold', flexShrink: 0 }}>단국대학교 산학협력단</Typography>
                  <Typography style={{ fontSize: '0.9rem', margin: '0 auto' }} sx={{ color: 'text.secondary' }}>
                    노트북
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography style={{ fontSize: '0.9rem' }}>
                    <b>제품 코드:</b> 44043 <br />
                    <b>대여 기간:</b> 2022-04-10 ~ 2022-04-17
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion expanded={expanded === 'panel1-2'} onChange={handleChange('panel1-2')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1-2bh-content" id="panel1-2bh-header">
                  <Typography sx={{ fontWeight: 'bold', flexShrink: 0 }}>용인시청</Typography>
                  <Typography style={{ fontSize: '0.9rem', margin: '0 auto' }} sx={{ color: 'text.secondary' }}>
                    용인시청 스터디룸
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography style={{ fontSize: '0.9rem' }}>
                    <b>제품 코드:</b> R203 <br />
                    <b>대여 기간:</b> 2022-04-12 12:30 ~ 2022-04-12 17:30
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion expanded={expanded === 'panel1-3'} onChange={handleChange('panel1-3')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1-3bh-content" id="panel1-3bh-header">
                  <Typography sx={{ fontWeight: 'bold', flexShrink: 0 }}>단국대학교 총학생회</Typography>
                  <Typography style={{ fontSize: '0.9rem', margin: '0 auto' }} sx={{ color: 'text.secondary' }}>
                    우산
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography style={{ fontSize: '0.9rem' }}>
                    <b>제품 코드:</b> CWE2045 <br />
                    <b>대여 기간:</b> 2022-04-12 ~ 2022-04-14
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </div>
          </Grid>
          <Grid item xs={4}>
            <div style={{ margin: '20px auto', textAlign: 'center', fontSize: 16, fontWeight: 'bold' }}>대여중(반납 예정)</div>{' '}
            <div>
              <Accordion expanded={expanded === 'panel2-1'} onChange={handleChange('panel2-1')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2-1bh-content" id="panel2-1bh-header">
                  <Typography sx={{ fontWeight: 'bold', flexShrink: 0 }}>단국대학교 산학협력단</Typography>
                  <Typography style={{ fontSize: '0.9rem', margin: '0 auto' }} sx={{ color: 'text.secondary' }}>
                    노트북
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography style={{ fontSize: '0.9rem' }}>
                    <b>제품 코드:</b> 44043 <br />
                    <b>대여 기간:</b> 2022-04-10 ~ 2022-04-17
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion expanded={expanded === 'panel2-2'} onChange={handleChange('panel2-2')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2-2bh-content" id="panel2-2bh-header">
                  <Typography sx={{ fontWeight: 'bold', flexShrink: 0 }}>용인시청</Typography>
                  <Typography style={{ fontSize: '0.9rem', margin: '0 auto' }} sx={{ color: 'text.secondary' }}>
                    용인시청 스터디룸
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography style={{ fontSize: '0.9rem' }}>
                    <b>제품 코드:</b> R203 <br />
                    <b>대여 기간:</b> 2022-04-12 12:30 ~ 2022-04-12 17:30
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion expanded={expanded === 'panel2-3'} onChange={handleChange('panel2-3')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2-3bh-content" id="panel2-3bh-header">
                  <Typography sx={{ fontWeight: 'bold', flexShrink: 0 }}>단국대학교 총학생회</Typography>
                  <Typography style={{ fontSize: '0.9rem', margin: '0 auto' }} sx={{ color: 'text.secondary' }}>
                    우산
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography style={{ fontSize: '0.9rem' }}>
                    <b>제품 코드:</b> CWE2045 <br />
                    <b>대여 기간:</b> 2022-04-12 ~ 2022-04-14
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </div>
          </Grid>
          <Grid item xs={4}>
            <div style={{ margin: '20px auto', textAlign: 'center', fontSize: 16, fontWeight: 'bold' }}>반납 완료</div>{' '}
            <div>
              <Accordion expanded={expanded === 'panel3-1'} onChange={handleChange('panel3-1')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel3-1bh-content" id="panel3-1bh-header">
                  <Typography sx={{ fontWeight: 'bold', flexShrink: 0 }}>단국대학교 산학협력단</Typography>
                  <Typography style={{ fontSize: '0.9rem', margin: '0 auto' }} sx={{ color: 'text.secondary' }}>
                    노트북
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography style={{ fontSize: '0.9rem' }}>
                    <b>제품 코드:</b> 44043 <br />
                    <b>대여 기간:</b> 2022-04-10 ~ 2022-04-17
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion expanded={expanded === 'panel3-2'} onChange={handleChange('panel3-2')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel3-2bh-content" id="panel3-2bh-header">
                  <Typography sx={{ fontWeight: 'bold', flexShrink: 0 }}>용인시청</Typography>
                  <Typography style={{ fontSize: '0.9rem', margin: '0 auto' }} sx={{ color: 'text.secondary' }}>
                    용인시청 스터디룸
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography style={{ fontSize: '0.9rem' }}>
                    <b>제품 코드:</b> R203 <br />
                    <b>대여 기간:</b> 2022-04-12 12:30 ~ 2022-04-12 17:30
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion expanded={expanded === 'panel3-3'} onChange={handleChange('panel3-3')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel3-3bh-content" id="panel3-3bh-header">
                  <Typography sx={{ fontWeight: 'bold', flexShrink: 0 }}>단국대학교 총학생회</Typography>
                  <Typography style={{ fontSize: '0.9rem', margin: '0 auto' }} sx={{ color: 'text.secondary' }}>
                    우산
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography style={{ fontSize: '0.9rem' }}>
                    <b>제품 코드:</b> CWE2045 <br />
                    <b>대여 기간:</b> 2022-04-12 ~ 2022-04-14
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </div>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
