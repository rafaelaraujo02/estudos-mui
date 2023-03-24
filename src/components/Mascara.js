import React, { useState, forwardRef } from 'react';
import { IMaskInput } from 'react-imask';

export const MaskContext = React.createContext();

export const Mascara = ({children}) => {
  
  const TextMaskCustomTel = React.forwardRef(function TextMaskCustomTel(props, ref) {
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
  
  const TextMaskCustomRg = React.forwardRef(function TextMaskCustomRg(props, ref) {
    const { onChange, ...other } = props;
    return (
      <IMaskInput
        {...other}
        mask="0.000.000"
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
  
  const TextMaskCustomCpf = React.forwardRef(function TextMaskCustomCpf(props, ref) {
    const { onChange, ...other } = props;
    return (
      <IMaskInput
        {...other}
        mask="000.000.000-00"
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
  

  return (
    <MaskContext.Provider value={{ TextMaskCustomTel, TextMaskCustomRg, TextMaskCustomCpf }}>
      {children}
    </MaskContext.Provider>
  );
}

