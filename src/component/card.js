import React, { Component } from 'react'
import style from "./card.module.css"


export default class card extends Component {
  render() {
    const {image ,name ,cost} = this.props;
    return (
      
      <div className={style.container}>
        <img src={image} alt="bb"/>
        <h3>{name}</h3>
        <p>{cost}</p>
      </div>
    )
  }
}
