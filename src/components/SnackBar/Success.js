import React, { useContext } from 'react';
import MuiAlert from '@mui/material/Alert';
import { Snackbar } from "@mui/material";
import { Stack } from "@mui/system";
import { AppContext } from './AppProvider'; // import the context provider

export default function Success() {

    const Alert = React.forwardRef(function Alert(props, ref) {
        return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
    });

    // Desestruturação dos estados a partir do hook useContext e do componente 'AppProvider'
    const { showSuccess, setShowSuccess } = useContext(AppContext);
    const { showAlert, setShowAlert } = useContext(AppContext);
    const { message } = useContext(AppContext)

    const handleCloseSuccess = () => {
        setShowSuccess(false);
    };
    
    const handleCloseAlert = () => {
        setShowAlert(false);
    };
    /*
    const handleCloseAlert = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setShowAlert(false);
    };
    */


    return(
        <Stack spacing={2} sx={{ width: '100%' }}>
            <Snackbar open={showSuccess} autoHideDuration={2000} onClose={handleCloseSuccess}>
                <Alert onClose={handleCloseSuccess} severity="success" sx={{ width: '100%' }}>
                    {message}
                </Alert>
            </Snackbar>
            
            <Snackbar open={showAlert} autoHideDuration={2000} onClose={handleCloseAlert}>
                <Alert onClose={handleCloseAlert} severity="warning" sx={{ width: '100%' }}>
                    {message}
                </Alert>
            </Snackbar>
        </Stack>
    )
}
