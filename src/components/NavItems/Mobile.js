import { Container } from "@mui/material";
import Engrenagem from '../../assets/engrenagem.png'

//context
import UserContext from '../../components/SnackBar/UserContext'
import { useContext } from 'react';

export default function Mobile(){

    const { user } = useContext(UserContext)
    console.log('User context Recuperado: ', {user})


   
    return(
        <Container style={{textAlign: "center"}}>
            <h1>Em construção</h1>
            <img alt="engrenagem" src={Engrenagem} width={400} ></img>
        </Container>
    )
}