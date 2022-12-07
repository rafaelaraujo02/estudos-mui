import { Button, TextField } from "@mui/material";

import SearchOutlinedIcon from '@mui/icons-material/Search';
import { Component } from "react";

import generators from '../lib/generators'

class SearchCollaborators extends Component{
    constructor(){
        super();

        this.state = {
            id: 0,
            nome: '',
        };

        this.handleInput = this.handleInput.bind(this);
    }

    handleInput(e){
        e.preventDefault();

        this.setState({
            nome: e.target.value,
        });
    }


    render(){

        const {nome} = this.state;
        const {onCreate} = this.props;

        return(
            <div style={{marginBottom: 5, marginLeft: 5}}>
                <form onSubmit={(e) => {e.preventDefault(); } }>
                    <TextField InputLabelProps={{ style: { color: '#094e6f', fontWeight: 600} }}
                                type="text" 
                                size="small"
                                label="Buscar Colaborador"
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
            </div>
        )
    }
}

export default SearchCollaborators;