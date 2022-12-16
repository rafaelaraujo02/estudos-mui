import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Form from "./components/Form";
import Login from './components/login';
import Mascara from "./components/Mascara";
import NewForm from "./components/TestForm";
import SearchImage from "./components/SearchImage";
import Styled from "./components/UserImage";
import TelaColaboradores from "./components/TelaColaboradores";
import ListCollaborators from "./ListagemColaboradores/ListCollaborators";
import ListaImagens from "./loadImages/listaImagens";
import Location from "./loadImages/Location";
import Navbar from "./Sidebar/Navbar"
import Sidebar from "./Sidebar/Sidebar"
import HeaderCadastroColaboradores from "./components/HeaderCadastroColaboradores";
import TabelaTeste from './testes/Tabela'
import Tabela2 from './testes/Tabela2'
import AppMain from './estudo/AppMain'
import AppMainFunction from './estudo/AppMainFunction'
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
import TesteMaterialTable from './estudo/EstudoTabela/MaterialTable';

import MyContext from './context/MyContext';

import { useState } from 'react';

function App() {

  const [email, setEmail] = useState()

    const handleSubmit = ({ email }) => {
        console.log('dados APP: ', { email })
        setEmail(email)
    }

  return (
    <div className="App">
      <MyContext.Provider value={'email'}>
  
      <Router>
        <Routes>
            <Route exact path="/teste" element={<AppMainFunction/>}/>

            <Route exact path="/cadastrar" element={
              <>
                <Navbar/>
                <TelaColaboradores tipo="Cadastrar"/>
              </>
            }/>
            
            <Route exact path="/colaboradores/editar" element={
                  <>
                    <Navbar/>
                    <TelaColaboradores tipo="Editar" emailContext={email}/>
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
                <DataTable onSubmit={handleSubmit}/>
              </>
            }/>

            <Route exact path="/patrimônio" element={
              <>
                <HeaderCadastroColaboradores nome="Patrimônio"/>
                <Navbar/>
                <Patrimonio/>
              </>
            }/>
            
            <Route exact path="/mobile" element={
              <>
                <HeaderCadastroColaboradores nome="Mobile"/>
                <Navbar/>
                <Mobile/>
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
