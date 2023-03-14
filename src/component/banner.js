import React from 'react';
import style from"./banner.module.css"
import bannerimg from "../images/banner.jpg"

const banner = () => {
    return (
        <div className={style.banner}>
            <img src={bannerimg} alt="a"/>
            <div className={style.container}>
                <h1>Goexam</h1>
                <p>We'r learning <span>React</span></p>
            </div>
        </div>
    );
};

export default banner;
