import React, { useEffect, useState, useContext } from 'react';
import styled from '@emotion/styled';
import { Alert, Button, Paper, Snackbar } from '@mui/material';
import CameraAltOutlinedIcon from '@mui/icons-material/CameraAltOutlined';

//IMPORT DO SNACKBAR
import Success from './SnackBar/Success';
import AppProvider from './SnackBar/AppProvider';
import { Stack } from '@mui/system';
import MuiAlert from '@mui/material/Alert';

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
        background: imagem ? `url(${imagem})` : "#E2E2E2",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      });
      

    const handleClick = () => {
        const input = document.createElement('input');
        input.type = 'file';
        input.accept = 'image/*';
        input.addEventListener('change', (event) => {
            const file = event.target.files[0];
            const reader = new FileReader();
            reader.onload = (event) => {
                if(event.target.result.length > 200000){ //200kb 
                    //ACESSAR UMA SNACKBAR INFORMANDO QUE A IMAGEM ESTÁ MUITO GRANDE
                    
                    
                }else{

                    setImagem(event.target.result);
                    //console.log('image: ', event.target.result)
                    const formData = new FormData();
                    formData.append('file', file);
                    fetch('/upload', {
                        method: 'POST',
                        body: formData
                    })
                    .then(response => response.json())
                    .then(data => console.log(data))
                    .catch(error => console.error(error));
                }
            };
            reader.readAsDataURL(file);
        });
        input.click();
        
    };
    /*
        import axios from 'axios';

        const handleClick = () => {
            const input = document.createElement('input');
            input.type = 'file';
            input.accept = 'image/*';
            input.addEventListener('change', async (event) => {
                const file = event.target.files[0];
                const reader = new FileReader();
                reader.onload = async (event) => {
                try {
                    // Envia a imagem para a API
                    const response = await axios.post('http://exemplo.com/api/imagem', {
                    imagem: event.target.result
                    });

                    // Verifica a resposta da API
                    if (response.status === 200) {
                    console.log('A imagem foi enviada com sucesso!');
                    } else {
                    console.log('Houve um erro ao enviar a imagem.');
                    }
                } catch (error) {
                    console.log(error);
                }
                };
                reader.readAsDataURL(file);
            });
            input.click();
        };

    */
        const Alert = React.forwardRef(function Alert(props, ref) {
            return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
        });
    
        // get setShowSuccess from the context provider using useContext
    
    

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