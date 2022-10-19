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

function App() {
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

        <Container>
          <Routes>
              <Route exact path="/" element={<Form/>}/>
              <Route exact path="/main" element={
                <div>
                  <HeaderCadastroColaboradores/>
                  <Navbar/>
                  <ListCollaborators/>
                </div>
              }/>
              <Route exact path="/cadastrar" element={<TelaColaboradores/>}/>
              <Route path="*" element={<PageNotFound/>}/>
          </Routes>
        </Container>

        
      </Router>
      
    </div>
  );
}

export default App;
