import React from 'react'
import ReactDOM from 'react-dom'

//import BomDia from './componentes/BomDia'
// import Multi, {BoaTarde, BoaNoite} from './componentes/Multiplos'

//import Saudacao from './componentes/Saudacao'

import Pai from './componentes/Pai'
import Filho from './componentes/Filho'
// import Primeiro from './componentes/Primeiro'

// ReactDOM.render(<Primeiro/>, document.getElementById('root'))

//ReactDOM.render(<BomDia nome="Guilherme"/>, document.getElementById('root'))

// ReactDOM.render(
//     <div>
//         <Multi.BoaTarde nome='Beatriz'/>
//         <BoaNoite nome='Gabriel'/>
//     </div>
// , document.getElementById('root'))

ReactDOM.render(
    <div>
        <Pai nome="Arthur" sobrenome="Espadoni">
            {/* Como passar os filhos por aqui? */}
            <Filho nome="Gabriel" />
            <Filho nome="Beatriz" />
            <Filho nome="Eduardo" />
        </Pai>
    </div>
, document.getElementById('root'))