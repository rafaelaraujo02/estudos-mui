import { CardContent, Fab, Grid } from "@mui/material";
import CameraAltOutlinedIcon from '@mui/icons-material/CameraAltOutlined';

import classes from './listaImagens.module.css'

const handleUploadClick = (event) => {
    var file = event.target.files[0];
    const reader = new FileReader();
    var url = reader.readAsDataURL(file);

    reader.onloadend = function(e) {
      this.setState({
        selectedFile: [reader.result]
      });
    }.bind(this);
    console.log(url); // Would see a path?

    this.setState({
      mainState: "uploaded",
      selectedFile: event.target.files[0],
      imageUploaded: 1
    });
    console.log(url); // Would see a path?
};



function listaImagens(){

    return(
        <div>
            <CardContent>
                <Grid container justify="center" alignItems="center">
                <input
                accept="image/*"
                className={classes.input}
                id="contained-button-file"
                multiple
                type="file"
                onChange={handleUploadClick}
                />
                <label htmlFor="contained-button-file">
                <Fab component="span" className={classes.button}>
                    <CameraAltOutlinedIcon />
                </Fab>
                </label>
            </Grid>
            </CardContent>
        </div>
    )
}

export default listaImagens;