import React, { useState, useContext } from 'react';
import { IMaskInput } from 'react-imask';
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';

//Puxar o Success
import Success from './SnackBar/Success';

import { AppContext } from './SnackBar/AppProvider';


const TextMaskCustom = React.forwardRef(function TextMaskCustom(props, ref) {
  const { onChange, ...other } = props;
  return (
    <IMaskInput
      {...other}
      mask="(00) 0 0000-0000"
      showmask
      definitions={{
        '#': /[1-9]/,
      }}
      inputRef={ref}
      onAccept={(value) => onChange({ target: { name: props.name, value } })}
      overwrite
    />
  );
}); 


export default function InputMask() {

  const { setShowAlert, setShowSuccess } = useContext(AppContext);

  const [celular, setCelular] = useState('')
  const [values, setValues] = useState({
    textmask: '',
  });
  

  const handleChange = (event) => {
    setCelular(event.target.value)
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  const handleBlur = (event) => {
    alert(celular)
    setShowSuccess(true);
  }

  return (

    <Box
    style={{marginLeft: "40%"}}
    >
      <FormControl variant="filled" fullWidth sx={{backgroundColor: '#ececec', height: 56, width: 300}}>
        <InputLabel 
          htmlFor="formatted-text-mask-input" 
          style={{ color: '#094e6f', fontWeight: 600 }}
          >Celular
        </InputLabel>
        <Input
          value={values.textmask}
          onChange={handleChange}
          onBlur={handleBlur}
          name="textmask"
          id="formatted-text-mask-input"
          inputComponent={TextMaskCustom}
          
          type="tel"
          variant="filled"
          
          sx={{height: 56, paddingLeft: 1.5}}
          />
        </FormControl>
        <Success/>
    </Box>
    
  );
}