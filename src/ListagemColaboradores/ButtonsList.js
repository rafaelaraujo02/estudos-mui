import React, { useEffect,useState } from 'react';

import { Button } from "@mui/material";
import { Box } from "@mui/system";

import EditIcon from '@mui/icons-material/Edit';
import CloseIcon from '@mui/icons-material/CloseOutlined';
import PrintOutlinedIcon from '@mui/icons-material/PrintOutlined';

import teste from './ListCollaborators';

import TelaColaboradores from '../components/TelaColaboradores';
import Navbar from '../Sidebar/Navbar';
import { Link } from 'react-router-dom';

export async function handleEdit(person){
    alert('editar')
    console.log('handleEdit Buttonlist: ', person)
}

function handlePrint(){
    alert('print')
}

export async function deleteExp(id) {
    const settings = {
      method: 'DELETE',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    }
    try {
      const url = `http://localhost:5000/person/${id}`
      const response = await fetch(url, settings)
      const data = await response.json()
      alert('Deletado com Sucesso');
      window.location.reload(true);
      return data
    } catch (e) {
      console.log('Error', e)
      return e
    }
  }


function ButtonList(props){
    
    const [teste, setTeste] = useState()
    
    
    
    return(
        <div>
            <Box sx={{alignItems: 'center'}}>
                <Link to='editar'>

                <Button id="edit" size="small" style={{minWidth: "40px", marginLeft: "4px"}} 
                        title="Editar" variant="contained" disabled={props.isClicked} onClick={() => handleEdit(props.person)}>
                    <EditIcon/>
                </Button>
                </Link>
                
                <Button size="small" style={{minWidth: "40px", marginLeft: "4px"}} 
                        title="Imprimir Relatório" variant="contained" onClick={handlePrint}>
                    <PrintOutlinedIcon/>
                </Button>
                
                <Button size="small" style={{minWidth: "40px", marginLeft: "4px"}} 
                        title="Excluir" variant="contained" 
                        onClick={ () => deleteExp(props.person.id)}>
                    <CloseIcon/>
                </Button>
            </Box>
        </div>
    )
}

export default ButtonList;