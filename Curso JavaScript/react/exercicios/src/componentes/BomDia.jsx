import React, {Fragment} from "react";

// para retornar um ou mais valores, pode se retornar como array, React.Fragment, div

export default props => 
    <Fragment>
        <h1>Bom dia {props.nome}!</h1> 
        <h2>Até Breve</h2>
    </Fragment>

// export default props => 
//     <div>
//         <h1>Bom dia {props.nome}!</h1> 
//         <h2>Até Breve</h2>
//     </div>

// export default props => 
//     [
//         <h1>Bom dia {props.nome}!</h1> 
//         <h2>Até Breve</h2>
//     ]

// export default props => 
//     <React.Fragment>
//         <h1>Bom dia {props.nome}!</h1> 
//         <h2>Até Breve</h2>
//     </React.Fragment>