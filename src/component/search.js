import React, { Component } from 'react'
import style from "./search.module.css"

export default class search extends Component {
  constructor(){
    super();
    this.state =  {
      text:"",
    }    
  }
  changetext = (event)=>{
      this.setState({
        text: event.target.value,



      })
  }
  render() {
    return (
      <div className={style.container}>
        <p>search what do want</p>
        <input type="text" value={this.state.text} onChange={this.changetext} placeholder='search...'/>
        <span>{this.state.text}</span>






      </div>
    )
  }
}
