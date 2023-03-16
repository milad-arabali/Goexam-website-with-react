import React, { Component } from 'react'
import style from "./card.module.css"
import down from "../images/down.svg"
import up from "../images/up.svg"

export default class card extends Component {
  constructor (){
    super();
    this.state = ({
        count:0,
    })
  }
  downhandler = () => {
    if(this.state.count >= 1){
  
      this.setState(pervState =>({
        count: pervState.count-1,
  
      }))
    }
  }
      

  uphandler = () => {
    this.setState(pervState =>({
       count: pervState.count+1,
    }))

  }
  render() {
    const {image ,name ,cost} = this.props;
    const {count} = this.state;
    return (
      <div className={style.container}>
        <img src={image} alt="bb"/>
        <h3>{name}</h3>
        <p>{cost}</p>
        <div className={style.count}> 
          <img className={this.state.count ? "" : style.deactive}  src={down} alt='f' onClick={this.downhandler}/>
          <span>{count}</span>
          <img className={style.countimage} src={up} alt='f' onClick={this.uphandler}/>
        </div>
      </div>
    )
  }
}
