import React from "react";
import Navbar from "./component/navbar";
import Banner from './component/banner';
import Cards from './component/cards';
import Search from './component/search';
import Logos from "./component/logos";
import Footer from './component/footer';


class APP extends React.Component{

    render(){
        return (
            <>
               <Navbar/>
               <Banner/>
               <Cards/>
               <Search/>
               <Logos/>
               <Footer/>
            </>
        
    )}

}


export default APP;