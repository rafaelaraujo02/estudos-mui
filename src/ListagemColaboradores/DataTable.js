import * as React from 'react';
import { useState, useEffect } from 'react';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
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

export default function DataTable({persona}) {

  const BASE_URL = process.env.REACT_APP_BASE_URL;
  console.log('dotenv: ', BASE_URL)

    //Recebe os dados do bd.json
    const [person, setPerson] = useState([]);
    //Recebe os dados do usuário referente à linha da tabela selecionada (Está bugada)
    const [data, setData] = useState();
    //Recebe os dados do usuário referente à linha da tabela selecionada
    let dataUserRow;
    let isClicked = false;

  
    useEffect(() => {
        fetch(`${process.env.BASEURL}`, {
        method: "GET",
        headers: {
          'Content-Type': 'application/json'
        }
        })
        .then((resp => resp.json()))
        .then((data) => {setPerson(data)})
        .catch(error => console.log(error))
      }, [])
      
      const columns = [
        { field: 'id', headerName: 'ID', width: 70,  headerClassName: 'super-app-theme--header',},
        { field: 'name', headerName: 'Nome', width: 300 },
        { field: 'functionPerson', headerName: 'Função', width: 150 },
        { field: 'cellphone', headerName: 'Celular', width: 150 },
        { field: 'email', headerName: 'E-mail', width: 200},        
        {
          field: 'acoes',
          headerName: 'Ações',
          width: 160,
          renderCell: (params) => (
            onclick={handleRowClick},
            <ButtonList dataPerson={data} isClicked={false}/>
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
    console.log('primeiro console handleRowClick:', params.row);
    //const dados = params.row;
    dataUserRow = params.row;
    console.log('segundo console handlerowClick', dataUserRow);
    setData(dataUserRow);
    //console.log(data);
    isClicked = true;
    const emailPassado = params.row.email;
    persona(dataUserRow);
    //seuEmail(emailPassado);
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
          
        </div>
          <DataGrid
              sx={{color: '#094e6f'}}
              rows={person}
              columns={columns}
              getRowId={(row) =>  generateRandom()}
              pageSize={15}
              rowsPerPageOptions={[15]}
              components={{ Toolbar: GridToolbar }}
              componentsProps={{
                toolbar: {
                  showQuickFilter: true,
                  quickFilterProps: { debounceMs: 500 },
                },
              }}
              //onRowClick={handleRowClick}
              onCellClick={handleRowClick}
          />
      </div>
    
  );
}
