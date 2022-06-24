import React from 'react';

const HomePage = (props) => {
    return (
       <main className='holder'>
            <div className='homeimg'>
                <img src="img/home/img01.jpg" alt='avion'/>
            </div>
            <div className='columnas'>
                <div className='bienvenidos'>
                    <h2>Bienvenidos</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit minus optio at rem neque! Ducimus corporis, iste vero, cum minus culpa dolorem delectus doloribus laudantium ipsam neque quaerat saepe dolor.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit minus optio at rem neque! Ducimus corporis, iste vero, cum minus culpa dolorem delectus doloribus laudantium ipsam neque quaerat saepe dolor.</p>

                </div>
                <div className='testimonios'>
                    <h2>Testimonios</h2>
                    <div className='testimonio'>    
                        <span className='cita'>Simplemente Excelente</span>
                        <span className='autor'>Lionel Messi - messi.com</span>
                    </div>
                </div>
            </div>
       </main>
    )
}

export default HomePage;