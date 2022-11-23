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
                            console.log((person[0].nome))
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
        { field: 'email', headerName: 'E-mail', width: 220},        
        {
          field: 'acoes',
          headerName: 'Ações',
          width: 160,
          renderCell: (params) => (
            <ButtonList/>
          ),
        },
      ];

      function generateRandom() {
        var length = 8,
            charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
            retVal = "";
        for (var i = 0, n = charset.length; i < length; ++i) {
            retVal += charset.charAt(Math.floor(Math.random() * n));
        }
        return retVal;
    }
      
  return (
    <div style={{ height: 400, paddingLeft: '25%', width: '98%' }}>
      
        <DataGrid
             rows={person}
             columns={columns}
             getRowId={(row) =>  generateRandom()}
             pageSize={5}
             rowsPerPageOptions={[5]}
             checkboxSelection  
        />
    </div>
  );
}