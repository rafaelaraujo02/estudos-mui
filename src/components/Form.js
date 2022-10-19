import React from 'react';
import styles from './Form.module.css';
import { Grid, TextField, Button, Card, CardContent } from "@mui/material";
import logo from '../assets/logo_nutes.jpg';

function Form(){

    return(
        <div className="App"> 
          <Grid sx={{ margin: 20, marginLeft: 45, width: 450}}>
            <Card className={styles.card}>
              <CardContent>
                <img src={logo} className={styles.logo}/>
                
                <form>
                  <Grid container spacing={1}>
                    <Grid xs={12} item>
                      <TextField 
                        label="Usuário" 
                        variant="filled" 
                        InputProps={{ disableUnderline: true }}
                        fullWidth required 
                      />
                    </Grid>
                    
                    <Grid item xs={12}>
                      <TextField 
                        type="password" 
                        label="Senha" 
                        variant="filled" 
                        InputProps={{ disableUnderline: true }}
                        fullWidth required 
                      />
                    </Grid>
                    
                    <Grid item xs={12}>
                      <Button 
                        className={styles.example}
                        type="submit" 
                        variant="contained"  
                        fullWidth
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