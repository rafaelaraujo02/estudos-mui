function NewForm(){

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        const data = Object.fromEntries(formData)
    }

    return(
        <form onSubmit="handleSubmit">
            <input type="text" placeholder="nome"/>
            <button type="submit">Enviar</button>
        </form>
    )
}

export default NewForm