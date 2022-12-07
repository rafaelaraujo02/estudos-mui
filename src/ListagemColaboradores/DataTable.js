import * as React from 'react';
import { useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Button, Select, TableCell, TableRow, TextField } from '@mui/material';
import ButtonList from './ButtonsList';
import EditIcon from '@mui/icons-material/Edit';
import SearchOutlinedIcon from '@mui/icons-material/Search';


import SearchCollaborators from './SearchCollaborators';
import styled from '@emotion/styled';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';


//style css
import styles from './DataTable.module.css';
import { Link } from 'react-router-dom';
import { Search } from '@mui/icons-material';

//AXIOS

export default function DataTable() {
    
    const [person, setPerson] = useState([]);
    const [data, setData] = useState();


    useEffect(() => {
        fetch("http://localhost:5000/person", {
        method: "GET",
        headers: {
          'Content-Type': 'application/json'
        }
        })
        .then((resp => resp.json()))
        .then((data) => {setPerson(data)}
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
        { field: 'funcao', headerName: 'Função', width: 150 },
        { field: 'celular', headerName: 'Celular', width: 150 },
        { field: 'email', headerName: 'E-mail', width: 200},        
        {
          field: 'acoes',
          headerName: 'Ações',
          width: 160,
          renderCell: (params) => (
            onclick={handleRowClick},
            <ButtonList id={data}/>
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

  const handleRowClick = (params) => {
    
    setData(params.row.id);
    console.log(params.row.nome);
  };
      
  return (
    <div style={{ height: 600, paddingLeft: '25%', width: '98%' }}>
      
      <div style={{display: "flex", justifyContent: 'space-between'}}>
        <Link to="/cadastrar" style={{ textDecoration: 'none' }}>
          <Button 
            variant="contained" 
            className={styles.btn}
            >Adicionar Colaborador
          </Button>
        </Link>
        {/* BUSCAR COLABORADOR */}
        <form onSubmit={(e) => {e.preventDefault(); } }>
            <TextField InputLabelProps={{ style: { color: '#094e6f', fontWeight: 600} }}
                        type="text" 
                        size="small"
                        label="Buscar Colaborador"
                          
                        variant="filled" 
                        InputProps={{ disableUnderline: true }}
                        style={{width: 250}}
            />
            <Button type="submit" size="small" style={{minWidth: "45px", minHeight: "45px", marginLeft: "4px"}} 
                title="Imprimir Relatório" variant="contained">
                <SearchOutlinedIcon/>
            </Button>
            
        </form>
        
      </div>
        <DataGrid
             rows={person}
             columns={columns}
             getRowId={(row) =>  generateRandom()}
             pageSize={15}
             rowsPerPageOptions={[15]}
             componentsProps={{
              toolbar: {
                showQuickFilter: true,
                quickFilterProps: { debounceMs: 500 },
              },
            }}
             onRowClick={handleRowClick}
        />
    </div>
  );
}
