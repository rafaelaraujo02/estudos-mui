import React, { useEffect } from 'react';
import styles from './Form.module.css';
import { Grid, TextField, Button, Card, CardContent } from "@mui/material";
import logo from '../assets/logo_nutes.jpg';


function Form(){

  function validarForm(e){
    e.preventDefault();
    alert('validar form')
  }

    return(
        <div className="app"> 
          <Grid className={styles.mainGrid}>

            <Card className={styles.card}>
              <CardContent>
                <img src={logo} className={styles.logo}/>
                
                <form>
                  <Grid container spacing={1}>
                    <Grid xs={12} item={true}>
                      <TextField InputLabelProps={{ style: { color: '#094e6f', fontWeight: 600} }}
                        label="Usuário" 
                        variant="filled" 
                        InputProps={{ disableUnderline: true }}
                        fullWidth required 
                      />
                    </Grid>
                    
                    <Grid item={true} xs={12} >
                      <TextField InputLabelProps={{ style: { color: '#094e6f', fontWeight: 600} }}
                        type="password" 
                        label="Senha" 
                        variant="filled" 
                        InputProps={{ disableUnderline: true }}
                        fullWidth required 
                      />
                    </Grid>
                    
                    <Grid item={true} xs={12}>
                      <Button 
                        sx={{backgroundColor: "#094e6f"}}
                        type="submit" 
                        variant="contained"  
                        fullWidth
                        onClick={(e) => {validarForm(e)}}
                        >Submit
                      </Button>
                    </Grid>

                  </Grid>
                </form>
              </CardContent>
            </Card>
          </Grid>
        </div>
    )
}

export default Form