import * as React from 'react';

import { IconButton, Typography } from "@mui/material";
import GroupIcon from '@mui/icons-material/Group';

import MeetingRoomOutlinedIcon from '@mui/icons-material/MeetingRoomOutlined';
import styles from './TelaColaboradores.module.css';

const tempName = "Rafael";
const typeHeader = "Listar";

function HeaderCadastroColaboradores(props){

    return(
        <div style={{width: `calc(99% - 20%)`, marginLeft: "25%", marginTop: 15}}>
            {/* INFO LOGIN */}
          <div className={styles.infoLogin}>
            <Typography sx={{fontWeight: "bold"}}>
              <span>Logado como {tempName}</span>
            </Typography>
            {/* <MeetingRoomOutlinedIcon onClick={teste} /> */} 
            <IconButton component="label">
              <MeetingRoomOutlinedIcon />
            </IconButton>
          </div>
          {/* FIM INFO LOGIN */}

          {/* Header COLABORADORES */}
          <div className={styles.headerColab}>
            <GroupIcon/> 
            <Typography className={styles.colabText}>
              <span>COLABORADORES </span>/ {typeHeader}
            </Typography>
          </div>
          {/* FIM HEADER COLABORADORES */}
        </div>
    )
}

export default HeaderCadastroColaboradores;