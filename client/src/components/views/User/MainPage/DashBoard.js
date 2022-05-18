import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Pagination from '@mui/material/Pagination';
import { Button } from '@mui/material';

export default function DashBoard() {
  const [expanded, setExpanded] = useState(false);
  const handleChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <Box maxWidth="md" style={{ margin: '30px auto' }} sx={{ flexGrow: 1 }}>
      <Grid style={{ justifyContent: 'center' }} container spacing={2}>
        <Grid style={{ minWidth: 300, maxWidth: 360 }} item xs={4}>
          <div style={{ margin: '20px auto', textAlign: 'center', fontSize: 16, fontWeight: 'bold' }}>승인 대기</div>{' '}
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
              <div style={{ textAlign: 'right' }}>
                <Button
                  size="small"
                  style={{
                    borderRadius: 15,
                    backgroundColor: 'white',
                    borderColor: 'black',
                    color: 'red',
                    marginRight: '7px',
                    marginBottom: '7px',
                    fontWeight: 'bold',
                  }}
                >
                  대여 취소
                </Button>
              </div>
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
                  <b>대여 기간:</b> 2022-04-12 ~ 2022-04-12 <br />
                  <b>대여 시간:</b> 12:30 ~ 17:30
                </Typography>
              </AccordionDetails>
              <div style={{ textAlign: 'right' }}>
                <Button
                  size="small"
                  style={{
                    borderRadius: 15,
                    backgroundColor: 'white',
                    borderColor: 'black',
                    color: 'red',
                    marginRight: '7px',
                    marginBottom: '7px',
                    fontWeight: 'bold',
                  }}
                >
                  대여 취소
                </Button>
              </div>
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
              <div style={{ textAlign: 'right' }}>
                <Button
                  size="small"
                  style={{
                    borderRadius: 15,
                    backgroundColor: 'white',
                    borderColor: 'black',
                    color: 'red',
                    marginRight: '7px',
                    marginBottom: '7px',
                    fontWeight: 'bold',
                  }}
                >
                  대여 취소
                </Button>
              </div>
            </Accordion>
          </div>
          <div style={{ margin: '5px' }}>
            <Pagination style={{ justifyContent: 'center' }} count={5} shape="rounded" />
          </div>
        </Grid>
        <Grid style={{ minWidth: 300, maxWidth: 360 }} item xs={4}>
          <div style={{ margin: '20px auto', textAlign: 'center', fontSize: 16, fontWeight: 'bold' }}>반납 예정</div>{' '}
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
                  <b>대여 기간:</b> 2022-04-12 ~ 2022-04-12 <br />
                  <b>대여 시간:</b> 12:30 ~ 17:30
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
          <div style={{ margin: '5px' }}>
            <Pagination style={{ justifyContent: 'center' }} count={5} shape="rounded" />
          </div>
        </Grid>
        <Grid style={{ minWidth: 300, maxWidth: 360 }} item xs={4}>
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
              <div style={{ textAlign: 'right' }}>
                <Button
                  size="small"
                  style={{
                    borderRadius: 15,
                    backgroundColor: 'white',
                    borderColor: 'black',
                    color: 'red',
                    marginRight: '7px',
                    marginBottom: '7px',
                    fontWeight: 'bold',
                  }}
                >
                  삭제
                </Button>
              </div>
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
                  <b>대여 기간:</b> 2022-04-12 ~ 2022-04-12 <br />
                  <b>대여 시간:</b> 12:30 ~ 17:30
                </Typography>
              </AccordionDetails>
              <div style={{ textAlign: 'right' }}>
                <Button
                  size="small"
                  style={{
                    borderRadius: 15,
                    backgroundColor: 'white',
                    borderColor: 'black',
                    color: 'red',
                    marginRight: '7px',
                    marginBottom: '7px',
                    fontWeight: 'bold',
                  }}
                >
                  삭제
                </Button>
              </div>
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
              <div style={{ textAlign: 'right' }}>
                <Button
                  size="small"
                  style={{
                    borderRadius: 15,
                    backgroundColor: 'white',
                    borderColor: 'black',
                    color: 'red',
                    marginRight: '7px',
                    marginBottom: '7px',
                    fontWeight: 'bold',
                  }}
                >
                  삭제
                </Button>
              </div>
            </Accordion>
          </div>
          <div style={{ margin: '5px' }}>
            <Pagination style={{ justifyContent: 'center' }} count={5} shape="rounded" />
          </div>
        </Grid>
      </Grid>
    </Box>
  );
}
