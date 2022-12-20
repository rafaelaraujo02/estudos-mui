export default function LiftingState({seunome}){
    
    
    return(
        <>
            <h1>LiftingState</h1>
            <input
                type="text"
                placeholder="Nome: "
                onChange={(e) => seunome(e.target.value)}
            />
        </>
    )
}