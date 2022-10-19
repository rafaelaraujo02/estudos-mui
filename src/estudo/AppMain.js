import React, { Component } from 'react';
import AddTask from './AddTask';

import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import ButtonList from '../ListagemColaboradores/ButtonsList';
import SearchCollaborators from '../ListagemColaboradores/SearchCollaborators';
import TelaColaboradores from '../components/TelaColaboradores'


class AppMain extends Component{
    constructor(){
        super();
        this.state = {
            tasks: [],
        };

        this.createTask = this.createTask.bind(this);
    }

    createTask(newTask){
        const { tasks } = this.state;

        this.setState({
            tasks: [...tasks, newTask],
        })
    }

    render(){

        const { tasks } = this.state;
        return(
            <>

                {/*
                    { tasks.map((task) => (
                        <h1>{task.nome}</h1>
                        )) }
                    */}
                
                <TableContainer sx={{width: `calc(100% - 25%)`, minWidth: 900, margin: "25%", border: "none", marginTop: 5}}>
                {/* MARGIN DEFAULT: 25% */}
                
                {   /* 
                    Atualmente está adicionando pessoa, futuramente será
                    <AddTask onCreate={this.createTask} />     
                   */
                }
                <Table size="small" aria-label="a dense table">
                    <TableHead>
                        <TableRow>
                            <TableCell sx={{color: "#094e6f", fontWeight: "bold", border: "none"}}>ID</TableCell>
                            <TableCell sx={{color: "#094e6f", fontWeight: "bold", border: "none"}}>NOME</TableCell>
                            <TableCell sx={{color: "#094e6f", fontWeight: "bold", border: "none"}}>FUNÇÃO</TableCell>
                            <TableCell sx={{color: "#094e6f", fontWeight: "bold", border: "none"}}>CELULAR</TableCell>
                            <TableCell sx={{color: "#094e6f", fontWeight: "bold", border: "none"}}>E-MAIL</TableCell>
                            <TableCell sx={{color: "#094e6f", fontWeight: "bold", border: "none"}}>AÇÕES</TableCell>
                        </TableRow>
                    </TableHead>

                    <TableBody>
                    
                    {tasks.map((row) => (
                        <TableRow
                        key={row.id}
                        sx={{'&:last-child td, &:last-child th': { border: 0 } }}
                        >
                        <TableCell sx={{color: "#094e6f", border: "none"}} component="th" scope="row">
                            {row.id}
                        </TableCell>
                        <TableCell sx={{color: "#094e6f", border: "none"}}>{row.nome}</TableCell>
                        <TableCell sx={{color: "#094e6f", border: "none"}}>{row.funcao}</TableCell>
                        <TableCell sx={{color: "#094e6f", border: "none"}}>{row.celular}</TableCell>
                        <TableCell sx={{color: "#094e6f", border: "none"}}>{row.email}</TableCell>
                        <TableCell sx={{border: "none"}}> <ButtonList/> </TableCell>
                        </TableRow>
                    ))}
                
                    </TableBody>
                </Table>
            </TableContainer>
            </>
        )
    }

}

export default AppMain;