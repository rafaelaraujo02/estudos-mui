import React, {useState} from 'react';

import Table from '@mui/material/Table';
import { TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

import ButtonList from '../ListagemColaboradores/ButtonsList';

let idGlobal;
function randomId(maxNumber){
    idGlobal = Math.round(Math.random() * maxNumber); 
    return idGlobal;
}

const empList = [
    { id: 1, nome: "Neeraj", email: 'neeraj@gmail.com', celular: 9876543210, funcao: 'Funcionário' },
    { id: 2, nome: "Raj", email: 'raj@gmail.com', celular: 6678901234, funcao: 'Pesquisador' },
    { id: 3, nome: "David", email: 'david342@gmail.com', celular: 6312345678, funcao: 'Funcionário' },
    { id: 4, nome: "Vikas", email: 'vikas75@gmail.com', celular: 9787654321, funcao: 'Aluno' },
  ]

function Tabela(){

    const id = idGlobal;
    const [tableData, setTableData] = useState(empList)
    const [selectedRows, setSelectedRows] = useState([])
    const columns = [
        { title: "ID", field: "id" },
        { title: "Name", field: "name" },
        { title: "Email", field: "email" },
        { title: "Phone Number", field: 'phone' },
        { title: "Age", field: 'age' },
        { title: "Joining Year", field: 'year' }
    ]
    const handleBulkDelete = () => {
        const updatedData = tableData.filter(row => !selectedRows.includes(row))
        setTableData(updatedData)
    }

    return(
        <TableContainer  sx={{width: `calc(100% - 25%)`, minWidth: 900, margin: "25%", border: "none", marginTop: 5}}>
            <Table size="small" aria-label="a dense table">
                <TableHead>
                        <TableRow>
                            <TableCell sx={{color: "#094e6f", fontWeight: "bold", border: "none"}}>ID</TableCell>
                            <TableCell sx={{color: "#094e6f", fontWeight: "bold", border: "none"}}>NOME</TableCell>
                            <TableCell sx={{color: "#094e6f", fontWeight: "bold", border: "none"}}>FUNÇÃO</TableCell>
                            <TableCell sx={{color: "#094e6f", fontWeight: "bold", border: "none"}}>CELULAR</TableCell>
                            <TableCell sx={{color: "#094e6f", fontWeight: "bold", border: "none"}}>E-MAIL</TableCell>
                            <TableCell sx={{color: "#094e6f", fontWeight: "bold", border: "none"}}>AÇÕES</TableCell>
                        </TableRow>
                </TableHead>
                <TableBody>
                    
                    {empList.map((row) => (
                        <TableRow
                        key={row.id}
                        sx={{'&:last-child td, &:last-child th': { border: 0 } }}
                        

                        onSelect={(rows) => setSelectedRows(rows)}
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
                        >
                        <TableCell sx={{color: "#094e6f", border: "none"}} component="th" scope="row">
                            {row.id}
                        </TableCell>
                        <TableCell sx={{color: "#094e6f", border: "none"}}>{row.nome}</TableCell>
                        <TableCell sx={{color: "#094e6f", border: "none"}}>{row.funcao}</TableCell>
                        <TableCell sx={{color: "#094e6f", border: "none"}}>{row.celular}</TableCell>
                        <TableCell sx={{color: "#094e6f", border: "none"}}>{row.email}</TableCell>
                        <TableCell sx={{border: "none"}}> <ButtonList id ={id} /> </TableCell>
                        </TableRow>
                    ))}
                
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default Tabela