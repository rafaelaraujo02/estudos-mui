import React, { useState } from 'react'
import Table from '@mui/material/Table'
import { Button, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { Box } from '@mui/system';
import EditIcon from '@mui/icons-material/Edit';
import CloseIcon from '@mui/icons-material/CloseOutlined';
import PrintOutlinedIcon from '@mui/icons-material/PrintOutlined';
import ButtonList from './ButtonsList';
import SearchCollaborators from './SearchCollaborators';


function createData({nome, funcao, celular, email, acoes}) {
    
    return { nome, funcao, celular, email, acoes };
}

//CONSTANTE TEMPORÁRIA PARA POPULAR TABELA
const rows = [
    createData( {
        nome:'Francisco Nascimento', 
        funcao:'Funcionário', 
        celular:'83 99999-9999', 
        email:'francisco@gmail.com',
        
        }   
    ),
    createData( {
        nome:'Maria josé ', 
        funcao:'Funcionário', 
        celular:'83 99999-9999', 
        email:'maria@gmail.com',
        
        }   
    ),
    createData( {
        nome:'Antonio silva pereira', 
        funcao:'Funcionário', 
        celular:'83 99999-9999', 
        email:'antonio@gmail.com',
        
        }   
    ),
    
];


function Alunos(){


        return(
          <TableContainer sx={{width: `calc(100% - 25%)`, minWidth: 900, margin: "25%", border: "none", marginTop: 5}}>
              {/* MARGIN DEFAULT: 25% 
              */}
              <SearchCollaborators />
              {
                
                //rows[0].acoes = <ButtonList nome = {nome}/>
              }
                <Table size="small" aria-label="a dense table" sx={{marginTop: 3}}>
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
                    
                    {rows.map((row) => (
                        <TableRow
                        key={row.nome}
                        sx={{'&:last-child td, &:last-child th': { border: 0 } }}
                        >
                        <TableCell sx={{color: "#094e6f", border: "none"}} component="th" scope="row">
                            {row.nome}
                        </TableCell>
                        <TableCell sx={{color: "#094e6f", border: "none"}}>{row.funcao}</TableCell>
                        <TableCell sx={{color: "#094e6f", border: "none"}}>{row.celular}</TableCell>
                        <TableCell sx={{color: "#094e6f", border: "none"}}>{row.email}</TableCell>
                        <TableCell sx={{border: "none"}}> <ButtonList rows = {rows}/> </TableCell>
                        </TableRow>
                    ))}
                
                    </TableBody>
                </Table>
            </TableContainer>
        )
    
}

export default Alunos;