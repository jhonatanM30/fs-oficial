import React, { useState, useEffect } from 'react'
import '../css/crudApp.css';
import { Nav } from './Nav';
import { Footer } from './Footer';
import { Content } from './Content';






const CrudApp = () => {
    
    return (
        <div className="main-container">            
            <Nav></Nav>   
            <Content></Content><br></br>                                           
            <Footer></Footer>
        </div>
    )
};

export default CrudApp;