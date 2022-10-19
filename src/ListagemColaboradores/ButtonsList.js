import { Button } from "@mui/material";
import { Box } from "@mui/system";

import EditIcon from '@mui/icons-material/Edit';
import CloseIcon from '@mui/icons-material/CloseOutlined';
import PrintOutlinedIcon from '@mui/icons-material/PrintOutlined';

import teste from './ListCollaborators'

function handleEdit(){
    alert('editar')
}

function handlePrint(){
    alert('print')
}

function handleDelete(e) {
    //ESSA FUNÇÃO PRECISA ACESSAR ROWS E APAGAR A LINHA CORRESPONDENTE AO USUÁRIO
    alert('delete')
} 

function ButtonList(props){
    
    
    return(
        <div>
            <Box sx={{alignItems: 'center'}}>
                <Button id="edit" size="small" style={{minWidth: "40px", marginLeft: "4px"}} 
                        title="Editar" variant="contained" onClick={handleEdit}>
                    <EditIcon/>
                </Button>
                
                <Button size="small" style={{minWidth: "40px", marginLeft: "4px"}} 
                        title="Imprimir Relatório" variant="contained" onClick={handlePrint}>
                    <PrintOutlinedIcon/>
                </Button>
                
                <Button size="small" style={{minWidth: "40px", marginLeft: "4px"}} 
                        title="Excluir" variant="contained" 
                        onClick={ () => { } }>
                    <CloseIcon/>
                </Button>
            </Box>
        </div>
    )
}

export default ButtonList;