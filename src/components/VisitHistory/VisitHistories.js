import React from "react";
import "./Visit.css";

import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";

const columns = [
  { id: "sno", label: "S.No.", minWidth: 170 },
  { id: "hospital_name", label: "Hospital Name", minWidth: 170 },
  { id: "date", label: "Date", minWidth: 170 },
  {
    id: "health_issue",
    label: "Health Issue",
    minWidth: 340,
    align: "right",
    format: (value) => value.toFixed(2),
  },
  {
    id: "purpose",
    label: "Purpose of Visit",
    minWidth: 150,
    align: "right",
    format: (value) => value.toFixed(2),
  },
];
function createData(sno, hospital_name, health_issue, purpose) {
  return { sno, hospital_name, date: Date.now(), health_issue, purpose };
}

const rows = [
  createData(1, "India", "xyz", "sdfsd"),
  createData(2, "China", "dsfs", "sdfsd"),
  createData(3, "Italy", "dushf", "sdfsd"),
  createData(3, "Italy", "dushf", "sdfsd"),
  createData(3, "Italy", "dushf", "sdfsd"),
  createData(3, "Italy", "dushf", "sdfsd"),
  createData(3, "Italy", "dushf", "sdfsd"),
  createData(3, "Italy", "dushf", "sdfsd"),
];
const VisitHistories = (props) => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <div className="visitHistories">
      <h1>Visits History</h1>
      <div className="visits">
        <Paper sx={{ width: "100%", overflow: "hidden" }}>
          <TableContainer sx={{ maxHeight: 440 }}>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  {columns.map((column) => (
                    <TableCell
                      key={column.id}
                      align={column.align}
                      style={{ minWidth: column.minWidth }}
                    >
                      {column.label}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {rows
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row) => {
                    return (
                      <TableRow
                        hover
                        role="checkbox"
                        tabIndex={-1}
                        key={row.code}
                        onClick={() => props.setShowPopup(true)}
                      >
                        {columns.map((column) => {
                          const value = row[column.id];
                          return (
                            <TableCell key={column.id} align={column.align}>
                              {column.format && typeof value === "number"
                                ? column.format(value)
                                : value}
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
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Paper>
      </div>
    </div>
  );
};

export default VisitHistories;
