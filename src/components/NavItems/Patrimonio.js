import { Container } from "@mui/material";
import Engrenagem from '../../assets/engrenagem.png'

import { AppContext } from "../SnackBar/AppProvider";
import { useContext } from "react";
import Success from '../SnackBar/Success';

export default function Patrimonio(){
    const { setShowAlert, setShowSuccess, setMessage } = useContext(AppContext);
    //PASSAR O TEXTO QUE SERÁ APLICADO NO SNACKBAR
    return(
        <Container style={{textAlign: "center"}}>
            <h1>Em construção</h1>
            <img alt="Engrenagem" src={Engrenagem} width={400} ></img>
            
            <button onClick={() => {
                setShowAlert(true)
                setMessage('Clicou no botão Alert')
            }}>Alert</button>
            
            <button onClick={() => {
                setShowSuccess(true)
                setMessage('Clicou no botão Success')
            }}>Success</button>
            <Success/>
        </Container>
    )
}