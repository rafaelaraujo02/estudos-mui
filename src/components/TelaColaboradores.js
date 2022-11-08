import * as React from 'react';
import { useState } from 'react';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import { FormControl, Grid, IconButton, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material';

import styles from './TelaColaboradores.module.css';
import UserImage from './UserImage';
import useMediaQuery from '@mui/material/useMediaQuery';

//HEADER COLABORADORES
import GroupIcon from '@mui/icons-material/Group';
import MeetingRoomOutlinedIcon from '@mui/icons-material/MeetingRoomOutlined';

//MASCARA
import { MaskField } from 'react-mask-field';
import HeaderCadastroColaboradores from './HeaderCadastroColaboradores';

function CustomMaskField({ inputRef, ...otherProps }) {
  return <MaskField ref={inputRef} mask="(__) _ ____-____" replacement="_" {...otherProps} />;
}

function cadastrarColaborador(e){
  e.preventDefault();
  alert('Cadastro Realizado com Sucesso');
}


function MediaCard() {

  const [id, setId] = useState();
  const [nome, setNome] = useState();
  const [email, setEmail] = useState();
  const [funcao, setFuncao] = useState();
  const [celular, setCelular] = useState();
  const [estadoCivil, setEstadoCivil] = useState();

  
  const handleChange = (event) => {
    setEstadoCivil(event.target.value);
  };

  return (
    <div>

      <Grid sx={{ margin: 20}}>
        <Card className={styles.card}>
          
          {/* CHAMAR O COMPONENTE HEADER COLABORADORES */}
          <HeaderCadastroColaboradores labelNome="Cadastrar"/>
          <CardContent>
        
            <form onSubmit={(e) => {e.preventDefault()}}>
              <Grid container spacing={1}>

                {/* IMAGE SEARCH */}
                <Grid xs={4} item>
                  <UserImage />
                </Grid>

                {/* NOME */}
                <Grid xs={8} item className={styles.teste}>
                  <TextField InputLabelProps={{ style: { color: '#094e6f', fontWeight: 600} }}
                    label="Nome" 
                    variant="filled" 
                    InputProps={{ disableUnderline: true }}
                    fullWidth required
                    style={{paddingBottom: 6}} 
                    onChange={(e) => {setNome(e.target.value)} }
                    />

                    {/* E-MAIL */}
                    <Grid item xs={12}>
                      <TextField InputLabelProps={{ style: { color: '#094e6f', fontWeight: 600} }}
                        type="email" 
                        label="E-mail" 
                        variant="filled" 
                        InputProps={{ disableUnderline: true }}
                        fullWidth required 
                        style={{paddingBottom: 6}} 
                        onChange={(e) => {setEmail(e.target.value)} }
                      />
                    </Grid>

                    {/* RG */}

                    <Grid item xs={6} style={{paddingRight: 4}}>
                      <TextField InputLabelProps={{ style: { color: '#094e6f', fontWeight: 600} }}
                        type="text" 
                        label="RG" 
                        variant="filled" 
                        InputProps={{ disableUnderline: true }}
                        fullWidth required 
                      />
                    </Grid>
                    
                    {/* CPF */}
                    
                    <Grid item xs={6} style={{paddingLeft: 4}}>
                      <TextField InputLabelProps={{ style: { color: '#094e6f', fontWeight: 600} }}
                        type="text" 
                        label="CPF" 
                        variant="filled" 
                        InputProps={{ disableUnderline: true }}
                        fullWidth required 
                      />
                    </Grid>
                </Grid>

                {/* ESTADO CIVIL - SELECT - PRECISA ALTERAR */}
                <Grid item xs={4}>
                  <FormControl variant="filled" sx={{ minWidth: 280 }}>
                    <InputLabel id="demo-simple-select-filled-label" sx={{color: '#094e6f', fontWeight: 600}}>Estado Civil</InputLabel>
                    <Select
                      labelId="demo-simple-select-filled-label"
                      id="demo-simple-select-filled"
                      value={estadoCivil}
                      onChange={handleChange}
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value={"solteiro"}>Solteiro(a)</MenuItem>
                      <MenuItem value={"casado"}>Casado(a)</MenuItem>
                      <MenuItem value={"viúvo"}>Viúvo(a)</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>

                {/* PROFISSÃO */}
                <Grid item xs={4}>
                  <TextField InputLabelProps={{ style: { color: '#094e6f', fontWeight: 600} }}
                    type="text" 
                    label="Profissão" 
                    variant="filled" 
                    InputProps={{ disableUnderline: true }}
                    fullWidth required 
                  />
                </Grid>
                {/* FUNÇÃO - SELECT - PRECISA ALTERAR */}
                <Grid item xs={4}>
                  <TextField InputLabelProps={{ style: { color: '#094e6f', fontWeight: 600} }}
                    type="text" 
                    label="Função" 
                    variant="filled" 
                    InputProps={{ disableUnderline: true }}
                    fullWidth required 
                    onChange={(e) => {setFuncao(e.target.value)} }
                  />
                </Grid>
                {/* NUMERO DA TAG */}
                <Grid item xs={4}>
                  <TextField InputLabelProps={{ style: { color: '#094e6f', fontWeight: 600} }}
                    type="text" 
                    label="Número da TAG" 
                    variant="filled" 
                    InputProps={{ disableUnderline: true }}
                    fullWidth 
                  />
                </Grid>

                {/* LOGIN */}
                <Grid item xs={4}>
                  <TextField InputLabelProps={{ style: { color: '#094e6f', fontWeight: 600} }}
                    type="text" 
                    label="Login" 
                    variant="filled" 
                    InputProps={{ disableUnderline: true }}
                    fullWidth 
                  />
                </Grid>

                {/* IMEI */}
                <Grid item xs={4}>
                  <TextField InputLabelProps={{ style: { color: '#094e6f', fontWeight: 600} }}
                    type="text" 
                    label="IMEI" 
                    variant="filled" 
                    InputProps={{ disableUnderline: true }}
                    fullWidth 
                  />
                </Grid>

                {/* CEP */}
                <Grid item xs={4} style={{paddingTop: 24}}>
                  <TextField InputLabelProps={{ style: { color: '#094e6f', fontWeight: 600} }}
                    type="text" 
                    label="CEP" 
                    variant="filled" 
                    InputProps={{ disableUnderline: true }}
                    fullWidth 
                  />
                </Grid>

                {/* ENDEREÇO */}
                <Grid item xs={8} style={{paddingTop: 24}}>
                  <TextField InputLabelProps={{ style: { color: '#094e6f', fontWeight: 600} }}
                    type="text" 
                    label="Endereço" 
                    variant="filled" 
                    InputProps={{ disableUnderline: true }}
                    fullWidth 
                  
                  />
                </Grid>

                {/* UF - SELECT - FALTA ALTERAR */}
                <Grid item xs={4}>
                  <TextField InputLabelProps={{ style: { color: '#094e6f', fontWeight: 600} }}
                    type="text" 
                    label="UF" 
                    variant="filled" 
                    InputProps={{ disableUnderline: true }}
                    fullWidth 
                  />
                </Grid>

                {/* BAIRRO */}
                <Grid item xs={8}>
                  <TextField InputLabelProps={{ style: { color: '#094e6f', fontWeight: 600} }}
                    type="text" 
                    label="Bairro" 
                    variant="filled" 
                    InputProps={{ disableUnderline: true }}
                    fullWidth 
                  />
                </Grid>

                {/* CIDADE */}
                <Grid item xs={4}>
                  <TextField InputLabelProps={{ style: { color: '#094e6f', fontWeight: 600} }}
                    type="text" 
                    label="Cidade" 
                    variant="filled" 
                    InputProps={{ disableUnderline: true }}
                    fullWidth 
                  />
                </Grid>

                {/* TELEFONE */}
                <Grid item xs={4}>
                  <TextField InputLabelProps={{ style: { color: '#094e6f', fontWeight: 600} }}
                    type="text" 
                    label="Telefone" 
                    variant="filled" 
                    InputProps={{ disableUnderline: true, inputComponent: CustomMaskField }}
                    fullWidth 
                  />
                </Grid>

                {/* CELULAR */}
                <Grid item xs={4}>
                  <TextField InputLabelProps={{ style: { color: '#094e6f', fontWeight: 600} }}
                    type="text" 
                    label="Celular" 
                    variant="filled" 
                    InputProps={{ disableUnderline: true }}
                    fullWidth 
                    onChange={(e) => {setCelular(e.target.value)} }
                  />
                </Grid>
                
                {/* BOTÃO */}
                <Grid item xs={12}>
                  <Button 
                    className={styles.btn}
                    type="submit" 
                    variant="contained"  
                    fullWidth
                    onSubmit={cadastrarColaborador}
                    >Cadastrar
                  </Button>
                </Grid>


              </Grid>
            </form>
          </CardContent>
        </Card>
      </Grid>
    </div>
    
  );
}

export default MediaCard;