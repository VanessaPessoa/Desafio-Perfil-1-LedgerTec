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
    // response.json().then(data => ({
    //     data: data,
    //     status: response.status
    // }))
    // .then(res => {
    //     if(res.data.status){
    //         alert(res.data.message)
    //         this.prepareLogin()
    //     }
    //     else if(!res.data.status){
    //         alert(res.data.message)
    //     }
    // })
}


export {novoDocumento}