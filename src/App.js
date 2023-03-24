import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Form from "./components/Form";
import Login from './components/login';
import SearchImage from "./components/SearchImage";
import Styled from "./components/UserImage";
import TelaColaboradores from "./components/TelaColaboradores";
import Location from "./loadImages/Location";
import Navbar from "./Sidebar/Navbar"
import Sidebar from "./Sidebar/Sidebar"
import HeaderCadastroColaboradores from "./components/HeaderCadastroColaboradores";
import { Container } from '@mui/material';
import PageNotFound from './components/PageNotFound';

import UserImage from './components/UserImage'
import UserImageFormFullJS from './components/UserImageFormFullJS'

//NavItems
import Acesso from './components/NavItems/Acesso';
import Patrimonio from './components/NavItems/Patrimonio';
import Mobile from './components/NavItems/Mobile';

import EstudoHooks from './Hooks/EstudoHooks';

import DinamicList from './ListagemColaboradores/DinamicList';
import DataTable from './ListagemColaboradores/DataTable';
import {ProfilePhoto} from './loadImages/ProfilePhoto';

import MyContext from './context/MyContext';

import { useState } from 'react';
import SignInForm from './components/SignInForm';

import InputMask from './components/InputMask';

import AppProvider from "./components/SnackBar/AppProvider";

import PhoneInput from './components/Inputs/PhoneInput';

//context
import UserContext from './components/SnackBar/UserContext' 

function App() {

  const [nome, setNome] = useState();
  const [email, setEmail] = useState();
  const [person, setPerson] = useState({})
  
  return (
    <div className="App">
      <MyContext.Provider value={'email'}>
  
      <Router>
        <Routes>
        
            <Route exact path="/cadastrar" element={
              <AppProvider>
                <Navbar/>
                <TelaColaboradores tipo=""/>
              </AppProvider>
            }/>
            
            <Route exact path="/colaboradores/editar" element={
              <>
                <Navbar/>
                <TelaColaboradores tipo="Editar"/>
              </>
            }/>
            
            <Route exact path="/entrar" element={
              <>
                <Form/>
              </>
            }/>

            <Route exact path="/acesso" element={
              <>
                <HeaderCadastroColaboradores nome="Acesso"/>
                <Navbar/>
                <Acesso/>
              </>
            }/>
            
            <Route exact path="/colaboradores" element={
              <>
                <HeaderCadastroColaboradores nome="Listar"/>
                <Navbar/>
                <DataTable persona={setPerson}/>
                
              </>
            }/>

            <Route exact path="/patrimônio" element={
              <AppProvider>
                <HeaderCadastroColaboradores nome="Patrimônio"/>
                <Navbar/>
                <Patrimonio/>
              </AppProvider>
            }/>
            
            <Route exact path="/mobile" element={
              <UserContext.Provider value={{user: 'user provider'}}>
                <HeaderCadastroColaboradores nome="Mobile"/>
                <Navbar/>
                <Mobile/>
              </UserContext.Provider>
            }/>
            
            <Route exact path="/teste" element={
              <>
                <HeaderCadastroColaboradores nome="Teste"/>
                <Navbar/>
                <SignInForm/>
              </>
            }/>

            <Route path="*" element={
              <>
                <Navbar/>
                <PageNotFound/>
              </>
            }/>
        </Routes>
      </Router>
      </MyContext.Provider>
    </div>
  );
}

export default App;
