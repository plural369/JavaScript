import React, {Component} from 'react'

export default class Saudacao extends Component{

    state = {
        tipo:'Fala',
        nome:'Pedro'
    }
    constructor(props) {
        super(props)

        this.setTipo = this.setTipo.bind(this)
        this.setNome = this.setNome.bind(this)
    }
    setTipo(e){
        //console.log(e.target.value)
        //this.props.tipo = e.target.value
        this.setState({tipo: e.target.value})
    }

    setNome(e){
        this.setState({nome: e.target.value})
    }
// sem o this

    // render(){
    //     const {tipo, nome} = this.state
    //     return(
    //         <div>
    //             <h1>{tipo} {nome}!</h1>
    //             <hr />
    //             <input type="text" placeholder='Tipo...' value={tipo} 
    //             onChange={e=> this.setTipo(e)} />
    //             <input type="text" placeholder='Nome...' value={nome} onChange={e=> this.setNome(e)}/>
    //         </div>
    //     )
    // }

    
    render(){
        const {tipo, nome} = this.state
        return(
            <div>
                <h1>{tipo} {nome}!</h1>
                <hr />
                <input type="text" placeholder='Tipo...' value={tipo} onChange={this.setTipo} />
                <input type="text" placeholder='Nome...' value={nome} onChange={this.setNome}/>
            </div>
        )
    }
}