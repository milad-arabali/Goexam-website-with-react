import React,{Component} from "react";


class h extends Component {
    
    constructor(){
        super()

        this.state ={

            name : "benz",

        }
    }
    
    render(){
        return(
            
                <React.Fragment>
                <h1>this is a{this.state.name} </h1>

                </React.Fragment>

        )
    }
}

// function h (props){
//     return(
//                     <h1>this is a{props.color} </h1>
    
        
//                 )
// }
export default h;