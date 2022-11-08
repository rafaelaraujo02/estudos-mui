import React, {useState, useEffect} from 'react'

export default function EstudoHooks(){
    
    const [count, setCount] = useState(0);
    const [user, setUser] = useState();
    
    //useEffect() VAI RODAR SEMPRE QUE ALGO FOR ALTERADO NA TELA
    useEffect( () => {
        console.log("Roda a cada renderização");
    } );

    //ARRAY DE DEPENDÊNCIAS - EXECUTA SEMPRE QUE O VALOR DE COUNT FOR ALTERADO
    useEffect( () => {
        console.log('Executando após alterar o count');
    }, [count]);

    //Array de Dependências vazio - EXECUTA APÓS A PÁGINA SER CARREGADA (SÓ EXECUTA UMA VEZ)
    //GERALMENTE UTILIZADO QUANDO PRECISAMOS REQUISITAR DADOS DE UMA API
    useEffect(() => {
        console.log('Executando após carregamento da página');
    }, []);

    //CLEAN UP FUNCTION 
    //QUANDO O COUNT MUDAR, MAPEIA O NÚMERO DE CLICKS EM 2 SEGUNDOS
    useEffect(() => {
        const timer = setTimeout(() => {
            console.log(`O incrementador foi alterado ${count} vezes`)
        }, 2000);

        return() => {
            clearTimeout(timer);
        };
    }, [count]);

    //FETCH API - CONSUMIR DADOS DE UMA API EM UM COMPONENTE
    useEffect(() => {
        fetch("https://api.github.com/users/rafaelaraujo02")
            .then((res) => res.json()) //Pega a resposta da API e transforma em JSON
            .then((json) => setUser(json)); //Faz algo com a resposta. Neste caso, passa os dados para a const user
    }, []);

    return(
        <>
            <button onClick={() => setCount( (prevCount) => prevCount + 1) }> Renderizar </button>
            <p>{count}</p>
            <div>
            {/* 
            <h1>Nome: {user.name}</h1>
            <img src={user.avatar_url}/>
            */}
            </div>
        </>
    )
}
