import React, { useState } from 'react';
import MaterialTable from '@mui/material/Table'

import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import ButtonList from '../ListagemColaboradores/ButtonsList';


const empList = [
  { id: 1, nome: "Neeraj", email: 'neeraj@gmail.com', celular: 9876543210, funcao: 'funcionario' },
  { id: 2, nome: "Raj", email: 'raj@gmail.com', celular: 6678901234, funcao: 'funcionario' },
  { id: 3, nome: "David", email: 'david342@gmail.com', celular: 6312345678, funcao: 'funcionario' },
  { id: 4, nome: "Vikas", email: 'vikas75@gmail.com', celular: 9787654321, funcao: 'funcionario' },
]

function Tabela2() {
  const [tableData, setTableData] = useState(empList)
  const [selectedRows, setSelectedRows] = useState([])
  const columns = [
    { title: "ID", field: "id" },
    { title: "nome", field: "nome" },
    { title: "Email", field: "email" },
    { title: "celular Number", field: 'celular' },
    { title: "Age", field: 'age' },
    { title: "Joining Year", field: 'year' }
  ]
  const handleBulkDelete = () => {
    const updatedData = tableData.filter(row => !selectedRows.includes(row))
    setTableData(updatedData)
  }

  return (
    <div className="Tabela2">
      <h1 align="center">React-App</h1>
      <h4 align='center'>Bulk Delete with Material Table</h4>
      <MaterialTable
        title="Employee Data"
        data={tableData}
        onSelectionChange={(rows) => setSelectedRows(rows)}
        columns={columns}
        options={{
          selection: true
        }}
        actions={[
          {
            icon: 'delete',
            tooltip: "Delete all selected rows",
            onClick: () => handleBulkDelete()
          }
        ]}
      />
      <Table size="small" aria-label="a dense table">
        <TableHead>
            <TableRow>
                <TableCell sx={{color: "#094e6f", fontWeight: "bold", border: "none"}}>NOME</TableCell>
                <TableCell sx={{color: "#094e6f", fontWeight: "bold", border: "none"}}>FUNÇÃO</TableCell>
                <TableCell sx={{color: "#094e6f", fontWeight: "bold", border: "none"}}>CELULAR</TableCell>
                <TableCell sx={{color: "#094e6f", fontWeight: "bold", border: "none"}}>E-MAIL</TableCell>
                <TableCell sx={{color: "#094e6f", fontWeight: "bold", border: "none"}}>AÇÕES</TableCell>
            </TableRow>
        </TableHead>

        <TableBody>
        
        {tableData.map((data) => (
            <TableRow
            key={data.nome}
            sx={{'&:last-child td, &:last-child th': { border: 0 } }}
            >
            <TableCell sx={{color: "#094e6f", border: "none"}} component="th" scope="row">
                {data.nome}
            </TableCell>
            <TableCell sx={{color: "#094e6f", border: "none"}}>{data.funcao}</TableCell>
            <TableCell sx={{color: "#094e6f", border: "none"}}>{data.celular}</TableCell>
            <TableCell sx={{color: "#094e6f", border: "none"}}>{data.email}</TableCell>
            <TableCell sx={{border: "none"}}> <ButtonList/> </TableCell>
            </TableRow>
        ))}
    
        </TableBody>
    </Table>
    </div>
  );
}

export default Tabela2;