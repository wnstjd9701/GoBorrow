import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles(theme => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

function createData(name, position, email, github, contact) {
  return { name, position, email, github, contact };
}

const rows = [
  createData('이성준', 'Backend, Frontend', 'sung0651@gmail.com', 'castlejun-2', '010-5530-0651'),
  createData('윤준성', 'Backend', 'wnstjd9701@naver.com', 'wnstjd9701', '010-2657-0707'),
  createData('최지윤', 'Backend, Frontend', 'cjy5025@naver.com', 'J1yun', '010-7208-5025'),
  createData('최한윤', 'Backend', 'chlgksdbs98@naver.com', 'chlgksdbs', '010-6205-7949'),
];

const useStyles = makeStyles({
  table: {
    minWidth: 800,
    maxWidth: 800,
    margin: '0 auto',
  },
});

export default function Contributor() {
  const classes = useStyles();
  const header_style = {
    cursor: 'pointer',
    margin: '0 auto',
    display: 'block',
    animation: 'none',
  };
  return (
    <>
      <header>
        <img
          className="App-logo"
          style={header_style}
          src="https://ufwo.s3.ap-northeast-2.amazonaws.com/%ED%8C%80+%EB%A1%9C%EA%B3%A0.png"
          href="https://ufwo.s3.ap-northeast-2.amazonaws.com/%ED%8C%80+%EB%A1%9C%EA%B3%A0.png"
          alt="profile"
        ></img>
      </header>
      <TableContainer style={{ width: 'fit-content', margin: '0 auto' }} component={Paper}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="center">TEAM GoBorrow</StyledTableCell>
              <StyledTableCell align="center">Position</StyledTableCell>
              <StyledTableCell align="center">Email&nbsp;</StyledTableCell>
              <StyledTableCell align="center">Github&nbsp;</StyledTableCell>
              <StyledTableCell align="center">Contact&nbsp;</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map(row => (
              <StyledTableRow key={row.name}>
                <StyledTableCell align="center" component="th" scope="row">
                  {row.name}
                </StyledTableCell>

                <StyledTableCell align="center">{row.position}</StyledTableCell>
                <StyledTableCell align="center">{row.email}</StyledTableCell>
                <StyledTableCell align="center">{row.github}</StyledTableCell>
                <StyledTableCell align="center">{row.contact}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
