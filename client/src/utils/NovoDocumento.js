const novoDocumento =(id, props) =>{
        this.state={
            autorID: id, 
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    
    const response = await fetch('http://localhost:5000/api/documents/', {
        method: 'POST',
        headers:{
            'Content-Type': 'application/json'
        },
    })
}

export {novoDocumento}