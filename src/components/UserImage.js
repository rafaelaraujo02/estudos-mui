import styled from '@emotion/styled';
import { Button, Paper } from '@mui/material';
import logo from '../assets/logo_nutes.jpg'
import CameraAltOutlinedIcon from '@mui/icons-material/CameraAltOutlined';
import React, {useState, useRef, useEffect} from 'react';
import { Container } from '@mui/system';

function Styled(){
    const [urlImage, setUrlImage] = useState(`url("https://conteudo.imguol.com.br/c/entretenimento/54/2020/04/28/cachorro-pug-1588098472110_v2_1x1.jpg")`)
    const imageRef = useRef();
    const [logo2, setLogo2] = useState();

    //COMPONENTE AO QUAL SERÁ GUARDADA A FOTO 
    let StyledPaper = styled(Paper, {})( {
        color: "#6B8068",
        backgroundColor: "#E2E2E2",
        borderRadius: 2,
        height: 180,
        width: 283,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundImage: urlImage,
        //background: `url(${logo})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "right",
        
    } ) ;

    function handleImage(e){
        setUrlImage(`url("https://www.petz.com.br/blog/wp-content/uploads/2019/05/cachorro-independente-1.jpg")`);
        //const caminho = e.target.value;
        //imageRef.current.src = {caminho};
    }
    
    return(
        <>
            <Container sx={{
                width: 280, 
                height: 180,
                marginTop: 30,
                color: "#6B8068",
                backgroundColor: "#E2E2E2",
                borderRadius: 2,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "right",
            }}>
                <input
                    accept="image/*"
                    style={{ display: 'none' }}
                    id="btn"
                    type="file"
                    onChange={(e) => {
                        console.log(e.target.value);
                        
                    }}
                />
                <label htmlFor="btn">
                    <Button variant="raised" component="span" id='btn'>
                        <CameraAltOutlinedIcon fontSize="large" style={{color: "#094e6f"}}/>
                    </Button>
                </label> 
                </Container>
        </>
    )
    {/* 
        <Container sx={{
                //backgroundImage: `url(${logo})`, 
                width: 280, 
                height: 180,
                color: "#6B8068",
                backgroundColor: "#E2E2E2",
                borderRadius: 2,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "right",
            }}>

            <img src={logo} alt="Imagem" style={{width: 280, height: 180}}></img>

            <img src={logo} alt="Imagem" ref={imageRef} style={{width: 280, height: 180, border: "1px solid black"}}></img>

    */}
}

export default Styled