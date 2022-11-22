import * as React from 'react';
import { useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Button, Select, TableCell, TableRow } from '@mui/material';
import ButtonList from './ButtonsList';
import EditIcon from '@mui/icons-material/Edit';


export default function DataTable() {
    const [person, setPerson] = useState([])

    useEffect(() => {
        fetch("http://localhost:5000/person", {
        method: "GET",
        headers: {
          'Content-Type': 'application/json'
        }
        })
        .then((resp => resp.json()))
        .then((data) => {
                            setPerson(data); 
                            console.log(person)
                        }
            )
        .catch(error => console.log(error))
      }, [])

    const rows = [
        {   id: 1,
            nome: 'rafael araujo',
            funcao: 'estagiário',
            celular: '83 98877-6655',
            email: 'rafael@teste.com',

        },
    ];
    
      const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'nome', headerName: 'Nome', width: 300 },
        { field: 'funcao', headerName: 'Função', width: 130 },
        { field: 'celular', headerName: 'Celular', width: 130 },
        { field: 'email', headerName: 'E-mail', width: 180 },        
        {
          field: 'acoes',
          headerName: 'Ações',
          width: 160,
          renderCell: (params) => (
            <ButtonList/>
          ),
        },
      ];
      
  return (
    <div style={{ height: 400, paddingLeft: '25%', width: '98%' }}>
      {/* 
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection  
      />
      */}
        <DataGrid
             rows={rows}
             columns={columns}
             pageSize={5}
             rowsPerPageOptions={[5]}
             checkboxSelection  
        />
    </div>
  );
}
