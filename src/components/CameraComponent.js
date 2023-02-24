import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { Button, Paper } from '@mui/material';
import CameraAltOutlinedIcon from '@mui/icons-material/CameraAltOutlined';

function CameraComponent(){

    const [imagem, setImagem] = useState(null); 
    const [mouseOver, setMouseOver] = useState(false);

    const handleMouseEnter = () => {
        setMouseOver(true);
      };
    
      const handleMouseLeave = () => {
        setMouseOver(false);
      };

    const StyledPaper = styled(Paper, {})( {
        color: "#6B8068",
        backgroundColor: "#E2E2E2",
        borderRadius: 2,
        height: 180,
        width: 307,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: `url(${imagem})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "right",
    } );

    const handleClick = () => {
        const input = document.createElement('input');
        input.type = 'file';
        input.accept = 'image/*';
        input.addEventListener('change', (event) => {
            const file = event.target.files[0];
            const reader = new FileReader();
            reader.onload = (event) => {
            setImagem(event.target.result);
            };
            reader.readAsDataURL(file);
        });
        input.click();
    };


    return(
        <StyledPaper 
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <Button onClick={handleClick}>
            {mouseOver && (
                <CameraAltOutlinedIcon
                    fontSize="large"
                    style={{ color: '#094e6f'}}
                />
            )}
            </Button>
        </StyledPaper>
    )
}

export default CameraComponent