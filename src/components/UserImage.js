import styled from '@emotion/styled';
import { Button, Paper } from '@mui/material';
import logo from '../assets/logo_nutes.jpg'
import CameraAltOutlinedIcon from '@mui/icons-material/CameraAltOutlined';
import React, {useState, useRef, useEffect} from 'react';



function Styled(){
    var imagem = `url("https://post.healthline.com/wp-content/uploads/2020/08/3180-Pug_green_grass-732x549-thumbnail-732x549.jpg")`;

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
        backgroundImage: imagem,
        //background: `url(${logo})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "right",
        
    } ) ;

    function handleImage(event){
    
        //PEGAR A IMAGEM SELECIONADA E SUBSTITUIR EM StyledPaper E ESCONDER O ÍCONE
        imagem = `url(${logo})`;
        
        StyledPaper = styled(Paper, {})( {
            color: "#6B8068",
            backgroundColor: "#E2E2E2",
            borderRadius: 2,
            height: 180,
            width: 283,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundImage: imagem,
            //background: `url(${logo})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "right",
            
        } ) ;
        console.log(event.currentTarget.id);
    };

    const [image, setImage] = useState();
    useEffect(() => {
        setImage(
            `url(${logo})`
        );
    });

    
    return(
        <StyledPaper>
            <input
                accept="image/*"
                style={{ display: 'none' }}
                id="btn"
                type="file"
                onClick={(handleImage)}
            />
            <label htmlFor="btn">
                <Button variant="raised" component="span" id='btn'>
                    <CameraAltOutlinedIcon fontSize="large" style={{color: "#094e6f"}}/>
                </Button>
            </label> 
        </StyledPaper>
    )
}

export default Styled