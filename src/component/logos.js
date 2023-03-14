import React from 'react';
import style from "./logos.module.css"
import xiaomi from "../images/xiaomi.png"
import samsung from "../images/samsung.jpg"
import apple from "../images/apple.jpg"

const logos = () => {
    return (
        <div className={style.container}>
            <h3>Who suppoert us?</h3>
            <div>
                <img src={xiaomi}/>
                <img src={samsung}/>
                <img src={apple}/>



            </div>
            
        </div>
    );
};

export default logos;