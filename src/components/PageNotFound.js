import { Container } from "@mui/material";
import errorImage from '../assets/404.jpg'

export default function PageNotFound(){
    return(
        <Container style={{textAlign: "center"}}>
            <h1>Página Não Encontrada</h1>
            <img src={errorImage} width={400} ></img>
        </Container>
    )
}
