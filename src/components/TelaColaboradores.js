import React, { useState, useEffect, useContext } from 'react';

//ROUTER
import { Link } from 'react-router-dom';

//COMPONENTS
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import { FormControl, Grid, IconButton, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material';

//ARQUIVO DE ESTILOS
import styles from './TelaColaboradores.module.css';

//ICONS
import CameraComponent from './CameraComponent';
import MeetingRoomOutlinedIcon from '@mui/icons-material/MeetingRoomOutlined';
import GroupIcon from '@mui/icons-material/Group';

//MASCARAS PARA TELEFONE
import { MaskField } from 'react-mask-field';
import MyContext from '../context/MyContext';

//FUNÇÃO PARA A MASCARA DE TELEFONE
function CustomMaskFieldTelefone({ inputRef, ...otherProps }) {
  return <MaskField ref={inputRef} mask="(__) _ ____-____" replacement="_" {...otherProps} />;
}
function CustomMaskFieldRg({ inputRef, ...otherProps }) {
  return <MaskField ref={inputRef} mask="_.___.___" replacement="_" {...otherProps} />;
}
function CustomMaskFieldCpf({ inputRef, ...otherProps }) {
  return <MaskField ref={inputRef} mask="___.___.___-__" replacement="_" {...otherProps} />;
}


function MediaCard(props) {
  let editNome = "rafael araújo";
  
  const [typeFunc, editTypeFunc] = useState(false);
  
  if(props.tipo === "editar"){
    editTypeFunc(true);
  }

  const userTemp = "Rafael";
  const [user, setUser] = useState({});

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [rg, setRg] = useState('');
  const [cpf, setCpf] = useState('');
  const [estadoCivil, setEstadoCivil] = useState('');
  const [profissao, setProfissao] = useState('');
  const [funcao, setFuncao] = useState('');
  const [tag, setTag] = useState('');
  const [login, setLogin] = useState('');
  const [imei, setImei] = useState('');
  const [cep, setCep] = useState('');
  const [endereco, setEndereco] = useState('');
  const [uf, setUf] = useState('');
  const [bairro, setBairro] = useState('');
  const [cidade, setCidade] = useState('');
  const [telefone, setTelefone] = useState('');
  const [celular, setCelular] = useState('');

  const [person, setPerson] = useState([])

  {/* npm run backend */}
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
  
  
  function emailValidation() {
    var re = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g;
    if(re.test(email))
      console.log('Email:', email, 'validado');
    else
      alert('E-mail inválido');
  }

  const handleChange = (e, string) => {

    if(string === 'funcao')
      setFuncao(e.target.value);
    if(string === 'uf')
      setUf(e.target.value);
    if(string === 'estadoCivil')
      setEstadoCivil(e.target.value);
  }

  function cadastrar(e){
    e.preventDefault();
    const person = {
      'nome': nome,
      'email': email,
      'rg': rg,
      'cpf': cpf,
      'estadoCivil': estadoCivil,
      'profissao': profissao,
      'funcao': funcao,
      'tag': tag,
      'login': login,
      'imei': imei,
      'cep': cep,
      'endereco': endereco,
      'uf': uf,
      'bairro': bairro,
      'cidade': cidade,
      'telefone': telefone,
      'celular': celular,

    }
    console.log(person)
    
    localStorage.setItem('user', JSON.stringify(person))
    alert('Cadastro realizado com sucesso');
  }

  function verificarCampos(e){
    e.preventDefault();
    if(nome === '')
      alert('Campo "Nome" obrigatório');
    else if(email === '')
      alert('Campo "E-mail" obrigatório');
    else if(rg === '')
      alert('Campo "RG" obrigatório');
    else if(cpf === '')
      alert('Campo "CPF" obrigatório');
    else if(profissao === '')
      alert('Campo "Profissão" obrigatório');
    else if(funcao === '')
      alert('Campo "Função" obrigatório');
    else
      return true;
  }

  //Desestruturação do context
  const { userContext, setUserContext } = useContext(MyContext)
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

                {/* IMAGE SEARCH 
                  <IconButton component="label">
                  <input hidden accept="image/*" type="file" />
                  <CameraComponent />
                </IconButton>
                */}
                <Grid xs={4} item>
                  <CameraComponent/>
                </Grid>
                

                {/* NOME */}
                <Grid xs={8} item className={styles.teste}>
                  <TextField InputLabelProps={{ style: { color: '#094e6f', fontWeight: 600} }}
                    label="Nome" 
                    defaultValue={typeFunc ? "tipo 1" : "tipo 2"}
                    variant="filled" 
                    InputProps={{ disableUnderline: true }}
                    fullWidth required
                    style={{paddingBottom: 6}} 
                    onChange={(e) => setNome(e.target.value)}
                    
                    />

                    {/* E-MAIL */}
                    <Grid item xs={12}>
                      <TextField InputLabelProps={{ style: { color: '#094e6f', fontWeight: 600} }}
                        type="email" 
                        defaultValue={userContext}
                        label="E-mail" 
                        variant="filled" 
                        InputProps={{ disableUnderline: true }}
                        fullWidth required 
                        style={{paddingBottom: 6}} 
                        onChange={(e) => {
                          setEmail(e.target.value)
                        }}
                        onBlur={(e) => {emailValidation()}}
                      />
                    </Grid>

                    {/* RG */}

                    <Grid item xs={6} style={{paddingRight: 4}}>
                      <TextField InputLabelProps={{ style: { color: '#094e6f', fontWeight: 600} }}
                        type="text" 
                        label="RG" 
                        variant="filled" 
                        InputProps={{ disableUnderline: true, inputComponent: CustomMaskFieldRg }}
                        fullWidth required 
                        onChange={(e) => setRg(e.target.value)}
                      />
                    </Grid>
                    
                    {/* CPF */}
                    
                    <Grid item xs={6} style={{paddingLeft: 4}}>
                      <TextField InputLabelProps={{ style: { color: '#094e6f', fontWeight: 600} }}
                        type="text" 
                        label="CPF" 
                        variant="filled" 
                        InputProps={{ disableUnderline: true, inputComponent: CustomMaskFieldCpf }}
                        fullWidth required 
                        onChange={(e) => setCpf(e.target.value)}
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
                    value={estadoCivil}
                    label="Estado Civil"
                    onChange={(e) => handleChange(e, 'estadoCivil')}
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
                    onChange={(e) => setProfissao(e.target.value)}
                  />
                </Grid>
                
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
                    value={funcao}
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
                <Grid item xs={4} style={{paddingTop: 25}}>
                  <TextField InputLabelProps={{ style: { color: '#094e6f', fontWeight: 600} }}
                    type="text" 
                    label="CEP" 
                    variant="filled" 
                    InputProps={{ disableUnderline: true }}
                    fullWidth 
                    onChange={(e) => setCep(e.target.value)}
                  />
                </Grid>

                {/* ENDEREÇO */}
                <Grid item xs={8} style={{paddingTop: 25}}>
                  <TextField InputLabelProps={{ style: { color: '#094e6f', fontWeight: 600} }}
                    type="text" 
                    label="Endereço" 
                    variant="filled" 
                    InputProps={{ disableUnderline: true }}
                    fullWidth 
                    onChange={(e) => setEndereco(e.target.value)}
                  />
                </Grid>

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
                    InputProps={{ disableUnderline: true }}
                    fullWidth 
                    onChange={(e) => setBairro(e.target.value)}
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
                    onChange={(e) => setCidade(e.target.value)}
                  />
                </Grid>

                {/* TELEFONE  */}
                <Grid item xs={4}>
                  <TextField InputLabelProps={{ style: { color: '#094e6f', fontWeight: 600} }}
                    type="text" 
                    label="Telefone" 
                    variant="filled" 
                    InputProps={{ disableUnderline: true, inputComponent: CustomMaskFieldTelefone }}
                    fullWidth 
                    onChange={(e) => setTelefone(e.target.value)}
                  />
                </Grid>

                {/* CELULAR */}
                <Grid item xs={4}>
                  <TextField InputLabelProps={{ style: { color: '#094e6f', fontWeight: 600} }}
                    type="text" 
                    label="Celular" 
                    variant="filled" 
                    InputProps={{ disableUnderline: true, inputComponent: CustomMaskFieldTelefone }}
                    fullWidth 
                    onChange={(e) => setCelular(e.target.value)}
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
                      if(verificarCampos(e) === true){
                          e.preventDefault();
                          cadastrar(e);
                      }                      
                    }}
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