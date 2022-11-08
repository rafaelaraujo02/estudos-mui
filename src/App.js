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

function App() {

  /* 
git status
git add .
git commit -m "message"
git push origin main

git init
git remote add origin https://github.com/proffredbublitz/senselab_general
git checkout -b branch-nova
git add .
git commit -m "Pesquisa"
git push origin branch-nova

git init
git add .
git commit -m "Pesquisa"
git checkout -b Pesquisa
git remote add origin https://github.com/proffredbublitz/senselab_general.git

git init
git add .
git commit -m "6Leva - Pesquisas"
git checkout -b 6LEVA
git remote add origin https://github.com/proffredbublitz/senselab_general
git push -u origin 6Leva

  */
  return (
    <div className="App">
      {/* 
      <HeaderCadastroColaboradores/>
      <Navbar/>
      <AppMain/>
      <ListCollaborators/>
      <TabelaTeste/>
      <Tabela2/>
      */} 
      <Router>
        <Routes>
            <Route exact path="/" element={<UserImageFormFullJS/>}/>

            <Route exact path="/cadastrar" element={<TelaColaboradores/>}/>
            
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
                <ListCollaborators/>
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
      
    </div>
  );
}

export default App;
