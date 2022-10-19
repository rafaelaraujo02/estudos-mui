import React, { Component } from 'react';
import TipagemProps from 'prop-types'

import generators from '../lib/generators'
import SearchCollaborators from '../ListagemColaboradores/SearchCollaborators';
import { Button, TextField } from '@mui/material';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';


export default class AddTask extends Component {
    constructor(){
        super();

        this.initialState = {
            id: 0,
            nome: '',
            funcao: '',
            email: '',
            celular: '',
        }

        this.state = this.initialState;

        this.handleInput = this.handleInput.bind(this); 
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInput(e){
        const { randomId } = generators;
        this.setState({
            id: randomId(9999),
            nome: e.target.value,
        });
    }

    handleSubmit(e){
        e.preventDefault();
        
        const { onCreate } = this.props;
        const { id } = this.state;

        if( id > 0 ){
            onCreate(this.state);
            this.setState(this.initialState) 
        }
    }


    render(){

        const { nome } = this.state;

        return(
            <form onSubmit={ this.handleSubmit }>
                {/* 
                <input type="text" value={nome} onChange={this.handleInput}/>
                <button type="submit">Adicionar Tarefa</button>
                */}
                <TextField InputLabelProps={{ style: { color: '#094e6f', fontWeight: 600} }}
                                type="text"
                                size="small"
                                label="Adicionar"
                                value={nome} 
                                variant="filled" 
                                InputProps={{ disableUnderline: true }}
                                style={{width: 250}}
                                onChange={ this.handleInput }
                    />
                    <Button type="submit" size="small" style={{minWidth: "45px", minHeight: "45px", marginLeft: "4px"}} 
                        title="Imprimir Relatório" variant="contained">
                        <SearchOutlinedIcon/>
                    </Button>
            </form>

        )
    }
}

//FAZENDO A TIPAGEM DA PROPS PARA RECEBER A FUNÇÃO (SÓ É OBRIGATÓRIO SE TIVER USANDO O ESLINT)
// npm i -S prop-types
AddTask.propTypes = {
    onCreate: TipagemProps.func
}.isRequired;