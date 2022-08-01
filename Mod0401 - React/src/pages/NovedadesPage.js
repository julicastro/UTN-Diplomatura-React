import React from 'react';
import "../styles/components/pages/NovedadesPage.css";
import mia from '../styles/components/img/mia.jpg'; 
import mora from '../styles/components/img/mora.jpg'; 


const NovedadesPage = (props) => {
    return (
        <main class="main">
        <div class="container">
            <div class="row">
                <div class="cubo col-1">
                    <div class="cubo-img">
                        <img src={mia} alt="" />
                    </div>
                    <div class="cubo-text">
                        <h3>Mía</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
                        <span>$10.000</span>
                    </div>
                </div>
                <div class="cubo col-2">
                    <div class="cubo-img">
                        <img src={mora} alt="" />
                    </div>
                    <div class="cubo-text">
                        <div class="cubo-text">
                            <h3>Mora</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
                            <span>$10.000</span>
                        </div>
                    </div>
                </div>
                <div class="cubo col-3">
                    <div class="cubo-img">
                        <img src={mora} alt="" />
                    </div>
                    <div class="cubo-text">
                        <div class="cubo-text">
                            <h3>Mora</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
                            <span>$10.000</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="cubo col-1">
                    <div class="cubo-img">
                        <img src={mia} alt="" />
                    </div> 
                    <div class="cubo-text">
                        <h3>Mía</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
                        <span>$10.000</span>
                    </div>
                </div>
                <div class="cubo col-2">
                    <div class="cubo-img">
                        <img src={mia} alt="" />
                    </div>
                    <div class="cubo-text">
                        <h3>Mía</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
                        <span>$10.000</span>
                    </div>
                </div>
            </div>
        </div>
    </main>
    )
}

export default NovedadesPage;