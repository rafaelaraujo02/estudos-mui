import { useState } from 'react';
export const ProfilePhoto = () => {

  //ESSA FUNÇÃO CONVERTE UMA IMAGEM PARA BASE64 E SALVA EM NEWPICTURE
    const [newPicture, setNewPicture] = useState();
  
    const handleProfile = (e) => {
      // Selecionando o arquivo 
      const file = e.target.files[0];
  
      // Criando um objeto FileReader
      const reader = new FileReader();
  
      // Adicionamos um evento para
      // escutar o Reader
      reader.addEventListener(
        "load",
        () => {
          //  Quando carregado,
          // reader.result retornará
          // o objeto convertido em Base64
          setNewPicture(reader.result);
        },
        false
      );
  
      // Caso file esteja populado
      // dispara a função.
      if (file) {
        reader.readAsDataURL(file);
      }
    };
  
    console.log(newPicture)
    return (
      <input
        type="file"
        name="profile"
        accept="image/*"
        onChange={(e) => handleProfile(e)}
      />
    );
};