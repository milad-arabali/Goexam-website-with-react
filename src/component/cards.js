import React, { Component } from 'react'
import style from "./cards.module.css"
import Card from './card'
import iphone10 from "../images/iphone10.jpg"
import iphone11 from "../images/iphone11.jpg"
import iphone12 from "../images/iphone12.jpg"
import s21 from "../images/s21.jpg"


export default class cards extends Component {
  render() {
    return (
      
      <div className={style.container}>  
      <Card image={iphone10} name="iphone x" cost="500$" />
      <Card image={iphone11} name="iphone 11" cost="600$" />
      <Card image={iphone12} name="iphone 12" cost="700$" />
      <Card image={s21} name="s21" cost="800$" />
      </div>
      
    )
  }
}
