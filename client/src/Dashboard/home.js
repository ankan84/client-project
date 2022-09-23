import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import axios from "axios";
import NavBar from './navbar';
import {useNavigate} from 'react-router-dom'
const columns = [
  { id: 'name_business', label: 'Business_Name', minWidth: 170 },
  { id: 'nature_business', label: 'Business_Nature', minWidth: 100 },
  {
    id: 'phone_no',
    label: 'phone_no',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
 
  {
    id: 'email',
    label: 'email',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'pan_card',
    label: 'pan_card',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toFixed(2),
  },
  {
    id: 'aadher_card',
    label: 'aadher_card',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toFixed(2),
  },
  {
    id: 'proprietor_photo',
    label: 'proprietor_photo',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toFixed(2),
  },
  {
    id: 'rent_deed',
    label: 'rent_deed',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toFixed(2),
  },
  {
    id: 'current_bill',
    label: ' current_bill',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toFixed(2),
  },
  {
    id: 'bank_passbook',
    label: ' bank_passbook',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toFixed(2),
  },
  {
    id: 'aadhar_property',
    label: 'aadhar_property',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toFixed(2),
  },
  {
    id: 'municipal_tax',
    label: 'municipal_tax',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toFixed(2),
  },
  {
    id: 'hsn_code',
    label: 'hsn_code',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toFixed(2),
  },
  {
    id: 'office_address',
    label: 'office_address',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toFixed(2),
  },
  {
    id: 'residential_address',
    label: 'residential_address',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toFixed(2),
  },
];
  const columns1 = [
   
    { id: 'your_name', label: 'Customer_Name', minWidth: 100 },
    {
      id: 'dob',
      label: 'dob',
      minWidth: 170,
      align: 'right',
      format: (value) => value.toLocaleString('en-US'),
    },
   
    {
      id: 'mob_number',
      label: 'mob_number',
      minWidth: 170,
      align: 'right',
      format: (value) => value.toLocaleString('en-US'),
    },
    {
      id: 'email',
      label: 'email',
      minWidth: 170,
      align: 'right',
      format: (value) => value.toLocaleString('en-US'),
    },
    {
      id: 'father_name',
      label: 'father_name',
      minWidth: 170,
      align: 'right',
      format: (value) => value.toLocaleString('en-US'),
    },
    {
      id: 'pan_number',
      label: 'pan_number',
      minWidth: 170,
      align: 'right',
      format: (value) => value.toLocaleString('en-US'),
    },
    {
      id: 'pan_photo',
      label: 'pan_photo',
      minWidth: 170,
      align: 'right',
      format: (value) => value.toLocaleString('en-US'),
    },
    {
      id: 'bank_statement',
      label: 'bank_statement',
      minWidth: 170,
      align: 'right',
      format: (value) => value.toFixed(2),
    },
    {
      id: 'lic_premium',
      label: 'lic_premium',
      minWidth: 170,
      align: 'right',
      format: (value) => value.toFixed(2),
    },
    {
      id: 'medical_insurance',
      label: 'medical_insurance',
      minWidth: 170,
      align: 'right',
      format: (value) => value.toFixed(2),
    },
    {
      id: 'aadhar_no',
      label: 'aadhar_no',
      minWidth: 170,
      align: 'right',
      format: (value) => value.toFixed(2),
    },
    {
      id: 'aadhar_photo',
      label: 'aadhar_photo',
      minWidth: 170,
      align: 'right',
      format: (value) => value.toFixed(2),
    },
    {
      id: 'loan_statement',
      label: ' loan_statement',
      minWidth: 170,
      align: 'right',
      format: (value) => value.toFixed(2),
    },
    {
      id: 'donation_receipt',
      label: 'donation_receipt',
      minWidth: 170,
      align: 'right',
      format: (value) => value.toFixed(2),
    },
    {
      id: 'property',
      label: 'property',
      minWidth: 170,
      align: 'right',
      format: (value) => value.toFixed(2),
    },
    {
      id: 'curr_address',
      label: 'curr_address',
      minWidth: 170,
      align: 'right',
      format: (value) => value.toFixed(2),
    },
    {
      id: 'permanent_address',
      label: 'permanent_address',
      minWidth: 170,
      align: 'right',
      format: (value) => value.toFixed(2),
    },
    {
      id: 'form_16',
      label: 'form_16',
      minWidth: 170,
      align: 'right',
      format: (value) => value.toFixed(2),
    },
  
];





const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  container: {
    maxHeight: 440,
  },
});
const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);







export default function StickyHeadTable() {
  const navigate=useNavigate();


  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const[gst_data,setgst_data]=React.useState([]);
  const[gst_filling,setgst_filling]=React.useState([]);
  const baseUrl="http://www.pavantaxconsultants.com:5000/gst/gst_details"
  const baseUrl1="http://www.pavantaxconsultants.com:5000/gst_filling/gst_fillingdetails"






  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  React.useEffect(async () =>{
    await axios.get(baseUrl).then((response) => {
      setgst_data(response.data);

    });
  }, []);
  React.useEffect(async () => {

    await axios.get(baseUrl1).then((response) => {
      setgst_filling(response.data);
    });
  }, []);
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };



  return (
    <>
    <NavBar id1="#gst_data" id2="#gst_filling_data"/>
    <hr></hr>
    <p id="gst_data" style={{ fontWeight:"bold", fontSize:"40px" , marginTop: "0px", marginBottom: "0px"}}>
      GST Data:</p>
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <StyledTableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </StyledTableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {gst_data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                  {columns.map((column) => {
                    const value = row[column.id];
                    return (
                      <TableCell key={column.id} align={column.align}>
                        {column.format && typeof value === 'number' ? column.format(value) : value}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={gst_data.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
    
    
    <br></br>
    
    <p id="gst_filling_data" style={{ fontWeight:"bold", fontSize:"40px" , marginTop: "0px", marginBottom: "0px"}}>
      GST Filling Data:</p>
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns1.map((column1) => (
                <StyledTableCell
                  key={column1.id}
                  align={column1.align}
                  style={{ minWidth: column1.minWidth }}
                >
                  {column1.label}
                </StyledTableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {gst_filling.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                  {columns1.map((column1) => {
                    const value = row[column1.id];
                    return (
                      <TableCell key={column1.id} align={column1.align}>
                        {column1.format && typeof value === 'number' ? column1.format(value) : value}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={gst_data.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
    </>

  );

}
