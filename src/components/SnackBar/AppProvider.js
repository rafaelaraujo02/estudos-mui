import { createContext, useState } from "react";

export const AppContext = createContext({
  showSuccess: false,
  showAlert: false,
  setShowSuccess: () => {},
  setShowAlert: () => {},
  message: '',
  setMessage: () => '',
});

const AppProvider = ({ children }) => {
  const [showSuccess, setShowSuccess] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [message, setMessage] = useState('')

  return (
    <AppContext.Provider value={{ showSuccess, setShowSuccess, showAlert, setShowAlert, message, setMessage }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
