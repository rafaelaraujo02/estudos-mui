import * as React from 'react';

import { IconButton, Typography } from "@mui/material";
import GroupIcon from '@mui/icons-material/Group';

import MeetingRoomOutlinedIcon from '@mui/icons-material/MeetingRoomOutlined';
import styles from './TelaColaboradores.module.css';
import { Link } from 'react-router-dom';

import useMediaQuery from '@mui/material/useMediaQuery';


const tempName = "Rafael";
//767px smartphone
//400px = 25%
//767px = 48%
//
function HeaderCadastroColaboradores(props){
  const matches = useMediaQuery('(min-width:767px)');

    return(
        <div style={{width: `calc(99% - 25%)`, marginLeft: "25%", marginTop: 15, marginBottom: 15}}>
            {/* INFO LOGIN */}
          <div className={styles.infoLogin}>
            <Typography sx={{fontWeight: "bold"}}>
              <span>Logado como {tempName}</span>
            </Typography>
            {/* <MeetingRoomOutlinedIcon onClick={teste} /> */} 
              <Link to="/entrar">
                <IconButton component="label">
                    <MeetingRoomOutlinedIcon/>
                </IconButton>
              </Link>
          </div>
          {/* FIM INFO LOGIN */}

          {/* Header COLABORADORES */}
          <div className={styles.headerColab}>
            <GroupIcon/> 
            <Typography className={styles.colabText}>
              <span>COLABORADORES /</span> {props.nome}
            </Typography>
          </div>
          {/* FIM HEADER COLABORADORES */}
        </div>
    )
}

export default HeaderCadastroColaboradores; 