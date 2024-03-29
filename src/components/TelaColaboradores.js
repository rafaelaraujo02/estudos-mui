import React, { useState, useEffect, useContext } from 'react';

//ROUTER
import { Link } from 'react-router-dom';

//COMPONENTS
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import { Alert, Box, FormControl, Grid, IconButton, Input, InputLabel, MenuItem, Select, Snackbar, SnackbarContent, Stack, TextField, Typography } from '@mui/material';

//ARQUIVO DE ESTILOS
import styles from './TelaColaboradores.module.css';

//ICONS
import CameraComponent from './CameraComponent';
import MeetingRoomOutlinedIcon from '@mui/icons-material/MeetingRoomOutlined';
import GroupIcon from '@mui/icons-material/Group';

//MASCARAS PARA TELEFONE

import { IMaskInput } from 'react-imask';

//snack
import Success from './SnackBar/Success';

import { AppContext } from './SnackBar/AppProvider';
//FUNÇÃO PARA A MASCARA DE TELEFONE





function MediaCard(props) {
  

  
  
  const [typeFunc, editTypeFunc] = useState(false);
  
  if(props.tipo === "editar"){
    editTypeFunc(true);
  }

  const userTemp = "Rafael";
  const [user, setUser] = useState({});

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [rg, setRg] = useState('');
  const [cpf, setCpf] = useState('');
  const [estadoCivil, setEstadoCivil] = useState('');
  const [profession, setProfession] = useState('');
  const [functionPerson, setFunctionPerson] = useState('');
  
  const [cep, setCep] = useState('');
  const [adress, setAdress] = useState('');
  const [uf, setUf] = useState('');
  const [district, setDistrict] = useState('');
  const [cidade, setCidade] = useState('');
  const [phone, setPhone] = useState('');
  const [celular, setCelular] = useState('');

  const [person, setPerson] = useState([])

  useEffect(() => {
    fetch("http://localhost:5000/person", {
    method: "GET",
    headers: {
      'Content-Type': 'application/json'
    }
    })
    .then((resp => resp.json()))
    .then((data) => {setPerson(data)})
    .catch(error => console.log(error))
  }, [])
  
  // EMAIL
  function verificarCampos(e){
    e.preventDefault();
    if(name === '')
      alert('Campo "Nome" obrigatório');
    else if(email === '')
      alert('Campo "E-mail" obrigatório');
    else if(rg === '')
      alert('Campo "RG" obrigatório');
    else if(cpf === '')
      alert('Campo "CPF" obrigatório');
    else if(profession === '')
      alert('Campo "Profissão" obrigatório');
    else if(functionPerson === '')
      alert('Campo "Função" obrigatório');
    else
      return true;
  }

  const { setShowAlert, setShowSuccess } = useContext(AppContext);


  function emailValidation() {
  const re = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g;
  
  if (re.test(email)) {
    console.log('success')
    setShowSuccess(true);
  } else {
    console.log('alert')
    setShowAlert(true);
  } 
  
  }
 /* ---------------------------------------------------------------------------- */
  const handleChange = (e, string) => {

    if(string === 'funcao')
      setFunctionPerson(e.target.value);
    if(string === 'uf')
      setUf(e.target.value);
    if(string === 'estadoCivil')
      setEstadoCivil(e.target.value);
  }

  function handleSubmit(e){
    e.preventDefault();
    const person = {
      'name': name,
      'email': email,
      'rg': rg,
      'cpf': cpf,
      'estadoCivil': estadoCivil,
      'profession': profession,
      'functionPerson': functionPerson,
      'cep': cep,
      'adress': adress,
      'uf': uf,
      'district': district,
      'cidade': cidade,
      'phone': phone,
      'celular': celular,

    }
    console.log(person)
    
    localStorage.setItem('user', JSON.stringify(person))
    alert('Cadastro realizado com sucesso');
  }

  //CONTROLE DE MÁSCARA
  
  
  //FUNÇÕES PARA GERENCIAR OS CAMPOS QUE POSSUEM MÁSCARAS
  
  
  

  



  const [values, setValues] = React.useState({
    textmask: '',
  });

  const TextMaskCustom = React.forwardRef(function TextMaskCustom(props, ref) {
    const { onChange, ...other } = props;
    return (
      <IMaskInput
        {...other}
        mask="(00) 0 0000-0000"
        showmask
        definitions={{
          '#': /[1-9]/,
        }}
        inputRef={ref}
        onAccept={(value) => onChange({ target: { name: props.name, value } })}
        overwrite
      />
    );
  }); 

  const handleChangeCelular = (event) => {
    setCelular(event.target.value)
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  const handleBlur = (event) => {
    alert(celular)
    setShowSuccess(true);
  }
  
  return (
    

    <div className={styles.geral}>
      
      <Grid className={styles.mainGrid}>
        <Card className={styles.card}>

          {/* INFO LOGIN */}
          <div className={styles.infoLogin}>
            <Typography sx={{fontWeight: "bold"}}>
              <span>Logado como {userTemp}</span>
            </Typography>
            {/* <MeetingRoomOutlinedIcon onClick={teste} /> */} 
            <Link to="/">
              <IconButton component="label">
                <MeetingRoomOutlinedIcon />
              </IconButton>
            </Link>
          </div>
          {/* FIM INFO LOGIN */}

          {/* Header COLABORADORES */}
          <div className={styles.headerColab}>
            <GroupIcon /> 
            <Typography className={styles.colabText}>
              <span>COLABORADORES </span>/ {props.tipo}
            </Typography>
          </div>
          {/* FIM HEADER COLABORADORES */}

          <CardContent>
        
            <form>
              <Grid container spacing={1}>

                <Grid xs={4} item>
                  <CameraComponent/>
                </Grid>
                

                {/* NOME */}
                <Grid xs={8} item className={styles.teste}>
                  <TextField InputLabelProps={{ style: { color: '#094e6f', fontWeight: 600} }}
                    label="Nome" 
                    variant="filled"
                    InputProps={{ disableUnderline: true }}
                    fullWidth required
                    style={{paddingBottom: 6}}
                    onChange={(e) => {
                      setName(e.target.value)
                    }}
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
                        onChange={(e) => {
                          setEmail(e.target.value)
                        }}
                        onBlur={(e) => emailValidation(e)}
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
                        onChange={(e) => {
                          setRg(e.target.value.replace(/\D/g, ''))
                        }}
                      />
                    </Grid>
                    
                    {/* CPF InputProps={{ disableUnderline: true, inputComponent: CustomMaskFieldCpf }}*/}
                    
                    <Grid item xs={6} style={{paddingLeft: 4}}>
                      <TextField InputLabelProps={{ style: { color: '#094e6f', fontWeight: 600} }}
                        type="text" 
                        label="CPF" 
                        variant="filled" 
                        InputProps={{ disableUnderline: true }}
                        fullWidth required 
                        onChange={(e) => {
                          setCpf(e.target.value.replace(/\D/g, ''))
                        }}
                        
                      />
                    </Grid>
                </Grid>

                <FormControl 
                  variant="filled" 
                  sx={{ marginTop: 1, 
                        marginLeft: 1, 
                        minWidth: 307, 
                  }}>
                  <InputLabel style={{color: "#094e6f", fontWeight: 600}} id="demo-simple-select-label">Estado Civil</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Estado Civil"
                    onChange={(e) => {
                      handleChange(e, 'estadoCivil')
                      
                    }}
                  >
                    
                    <MenuItem value={"solteiro"}>Solteiro(a)</MenuItem>
                    <MenuItem value={"casado"}>Casado(a)</MenuItem>
                    <MenuItem value={"separado"}>Separado(a)</MenuItem>
                    <MenuItem value={"divorciado"}>Divorciado(a)</MenuItem>
                    <MenuItem value={"viuvo"}>Viúvo(a)</MenuItem>
                  </Select>
                </FormControl>
                {/* PROFISSÃO */}
                <Grid item xs={4}>
                  <TextField InputLabelProps={{ style: { color: '#094e6f', fontWeight: 600} }}
                    type="text" 
                    label="Profissão" 
                    variant="filled" 
                    InputProps={{ disableUnderline: true }}
                    fullWidth required 
                    onChange={(e) => {
                      setProfession(e.target.value)
                    }}
                  />
                </Grid>
                {/* FUNÇÃO */}
                <FormControl 
                  variant="filled" 
                  required
                  sx={{ marginTop: 1, 
                        marginLeft: 1, 
                        minWidth: 307, 
                  }}>
                  <InputLabel style={{color: "#094e6f", fontWeight: 600}} id="demo-simple-select-label">Função</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Funcao"
                    onChange={(e) => handleChange(e, 'funcao')}
                  >
                    <MenuItem value={"aluno"}>Aluno(a)</MenuItem>
                    <MenuItem value={"estagiario"}>Estagiário(a)</MenuItem>
                    <MenuItem value={"funcionario"}>Funcionário(a)</MenuItem>
                    <MenuItem value={"professor"}>Professor(a)</MenuItem>
                    <MenuItem value={"pesquisador"}>Pesquisador(a)</MenuItem>
                  </Select>
                </FormControl>

                

                {/* CEP */}
                <Grid item xs={4} style={{paddingTop: 24}}>
                  <TextField InputLabelProps={{ style: { color: '#094e6f', fontWeight: 600} }}
                    type="text" 
                    label="CEP" 
                    variant="filled" 
                    InputProps={{ disableUnderline: true }}
                    fullWidth 
                    onChange={(e) => {
                      setCep(e.target.value.replace(/\D/g, ''))
                    }}
                    
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
                    onChange={(e) => {
                      setAdress(e.target.value)
                    }}
                    
                  />
                </Grid>
                {/* ESTADO */}    
                <FormControl 
                  variant="filled" 
                  sx={{ marginTop: 1, 
                        marginLeft: 1, 
                        minWidth: 307, 
                  }}>
                  <InputLabel style={{color: "#094e6f", fontWeight: 600}} id="demo-simple-select-label">UF</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={uf}
                    label="UF"
                    onChange={(e) => handleChange(e, 'uf')}
                  >
                    <MenuItem value={"AC"}>AC</MenuItem>
                    <MenuItem value={"AL"}>AL</MenuItem>
                    <MenuItem value={"AP"}>AP</MenuItem>
                    <MenuItem value={"AM"}>AM</MenuItem>
                    <MenuItem value={"BA"}>BA</MenuItem>
                    <MenuItem value={"CE"}>CE</MenuItem>
                    <MenuItem value={"DF"}>DF</MenuItem>
                    <MenuItem value={"ES"}>ES</MenuItem>
                    <MenuItem value={"GO"}>GO</MenuItem>
                    <MenuItem value={"MA"}>MA</MenuItem>
                    <MenuItem value={"MT"}>MT</MenuItem>
                    <MenuItem value={"MS"}>MS</MenuItem>
                    <MenuItem value={"MG"}>MG</MenuItem>
                    <MenuItem value={"PA"}>PA</MenuItem>
                    <MenuItem value={"PB"}>PB</MenuItem>
                    <MenuItem value={"PR"}>PR</MenuItem>
                    <MenuItem value={"PE"}>PE</MenuItem>
                    <MenuItem value={"PI"}>PI</MenuItem>
                    <MenuItem value={"RJ"}>RJ</MenuItem>
                    <MenuItem value={"RN"}>RN</MenuItem>
                    <MenuItem value={"RS"}>RS</MenuItem>
                    <MenuItem value={"RO"}>RO</MenuItem>
                    <MenuItem value={"RR"}>RR</MenuItem>
                    <MenuItem value={"SC"}>SC</MenuItem>
                    <MenuItem value={"SP"}>SP</MenuItem>
                    <MenuItem value={"SE"}>SE</MenuItem>
                    <MenuItem value={"TO"}>TO</MenuItem>
                    
                  </Select>
                </FormControl>

                {/* BAIRRO */}
                <Grid item xs={8}>
                  <TextField InputLabelProps={{ style: { color: '#094e6f', fontWeight: 600} }}
                    type="text" 
                    label="Bairro" 
                    variant="filled" 
                    value={district}
                    InputProps={{ disableUnderline: true }}
                    fullWidth 
                    onChange={(e) => {
                      setDistrict(e.target.value)
                    }}
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
                    onChange={(e) => {
                      setCidade(e.target.value)
                    }}
                  />
                </Grid>

                {/* TELEFONE  
                InputProps={{ disableUnderline: true, inputComponent: CustomMaskFieldTelefone }}
                */}
                <Grid item xs={4}>
                  <FormControl variant="filled" fullWidth sx={{backgroundColor: '#ececec', height: 56}}>
                    <InputLabel 
                      htmlFor="formatted-text-mask-input" 
                      style={{ color: '#094e6f', fontWeight: 600 }}
                    >
                      Telefone
                    </InputLabel>
                    <Input
                      value={values.textmask}
                      onChange={handleChangeCelular}
                      name="textmask"
                      id="formatted-text-mask-input"
                      inputComponent={TextMaskCustom}
                      type="tel"
                      variant="filled"
                      sx={{height: 56, paddingLeft: 1.5}}
                    />
                  </FormControl>
                </Grid>

                {/* CELULAR */}
                <Grid item xs={4} >
                  <TextField
                    InputLabelProps={{style: { color: '#094e6f', fontWeight: 600 } }}
                    type="text"
                    label="Celular"
                    variant="filled"
                    InputProps={{ disableUnderline: true }}
                    fullWidth
                    onChange={(e) => {
                      setCelular(e.target.value.replace(/\D/g, ''))
                    }}
                  />
                </Grid>
                
                {/* BOTÃO */}
                <Grid item xs={12}>
                  <Button 
                    className={styles.btn}
                    type="submit" 
                    variant="contained"  
                    fullWidth
                    onClick={(e) => {
                      //IF PARA EDIÇÃO
                      console.log('verificarCampos: ', verificarCampos(e))
                      console.log('TypeFunc: ', typeFunc)
                      if(verificarCampos(e) === true && typeFunc){
                          e.preventDefault();
                          console.log('Apertou no botão e o handle submit foi pra edição')
                          handleSubmit(e); //era cadastrar()
                      }else if(verificarCampos(e) === true){
                        e.preventDefault();
                        handleSubmit(e);
                      }else{
                        console.log('nem um nem outro')
                      }        
                    }}
                    >{typeFunc ? "Editar" : "Cadastrar"}
                  </Button>
                </Grid>


              </Grid>
            </form>
          </CardContent>
        </Card>
      </Grid>

      <Success/>
      

    </div>
    
    
  );
}

export default MediaCard;