import * as React from 'react';
import styled from '@emotion/styled';
import { Button, Paper } from '@mui/material';
//import logo from '../assets/logo_nutes.jpg'
import CameraAltOutlinedIcon from '@mui/icons-material/CameraAltOutlined';

const StyledPaper = styled(Paper, {})( {
    color: "#6B8068",
    backgroundColor: "#E2E2E2",
    borderRadius: 2,
    height: 180,
    width: 307,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    //backgroundImage: `url("https://picsum.photos/300/300")`
    //background: `url(${logo})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "right",
} );

const abrir = () =>{
    alert("teste")
}

function CameraComponent(){
    return(
        <StyledPaper>
            <Button onClick={abrir}>
                <CameraAltOutlinedIcon fontSize="large" style={{color: "#094e6f"}}/>
            </Button>
        </StyledPaper>
    )
}

export default CameraComponent