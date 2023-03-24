import CryptoJS from 'crypto-js';
import Cookies from 'js-cookie';
import axios from 'axios';
import { Cookie } from '@mui/icons-material';


function SignInForm(){

    //ESTE MÉTODO CRIPTOGRAFA O TOKEN ANTES DE SALVÁ-LO NO SESSIONSTORAGE E DESENCRIPTA QUANDO FOR UTILIZÁ-LO
    const SECRET_KEY = 'signutes-token';

    function encryptString(str) {
        const encrypted = CryptoJS.AES.encrypt(str, SECRET_KEY);

        return encrypted.toString();
    }

    function decryptString(str) {
        const decrypted = CryptoJS.AES.decrypt(str, SECRET_KEY);
        return decrypted.toString(CryptoJS.enc.Utf8);
    }
    //TOKEN QUE VEM DO BACKEND. PRECISA SETAR NO MÉTODO DE LOGIN
    const minhaSenha = 'Renan@123';
    const senhaEncriptada = encryptString(minhaSenha);

    //sessionStorage.setItem('criptToken', senhaEncriptada)
    console.log('String criptografada:', senhaEncriptada);

    const senhaDecriptada = decryptString(senhaEncriptada);

    console.log('String descriptografada:', senhaDecriptada);
    // FIM DO MÉTODO DE ENCRIPTAR / DESENCRIPTAR


    // TESTAR MÉTODOS DE ARMAZENAMENTO EM COOKIES

    // Salva o token em um cookie com a flag HTTP Only
    //Cookies.set('meuToken', 'valorDoToken', { httpOnly: true });
   

    const api = axios.create({
        baseURL: 'https://minha-api.com',
    });
    
    api.interceptors.request.use((config) => {
        const token = getCookie('meuToken'); // função que recupera o valor do cookie
        config.headers.Authorization = `Bearer ${token}`; // inclui o token no header da requisição
        return config;
    });
    
    // função que recupera o valor do cookie pelo seu nome
    function getCookie(name) {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        if (parts.length === 2) {
            return parts.pop().split(';').shift();
        }
    }


    //Cookies.set('tokenComHttp', '1234', { httpOnly: true });
    function showCookie(name) {
        const cookies = document.cookie.split(';');
        for(let i = 0; i < cookies.length; i++) {
          const cookie = cookies[i].trim();
          if (cookie.startsWith(name + '=')) {
            return cookie.substring(name.length + 1);
          }
        }
        return null;
    }
      
    const token = showCookie('tokenComHttp');
    console.log('cookie retornado: ', token);
      
    
    // FIM DOS MÉTODOS DE ARMAZENAMENTO EM COOKIES

    return(
        <></>
    )
}

export default SignInForm;