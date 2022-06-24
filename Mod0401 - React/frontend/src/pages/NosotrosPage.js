import React from 'react';

const NosotrosPage = (props) => {
    return (
        <main className='holder'>
            <div className='historia'>
                <h2>Historia</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit minus optio at rem neque! Ducimus corporis, iste vero, cum minus culpa dolorem delectus doloribus laudantium ipsam neque quaerat saepe dolor.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit minus optio at rem neque! Ducimus corporis, iste vero, cum minus culpa dolorem delectus doloribus laudantium ipsam neque quaerat saepe dolor.</p>
            </div>
            <div className='staff'>
                <h2>Staff</h2>
                <div className='personas'>
                    <div className='persona'>
                        <img src='img/nosotros/nosotros1.jpg' alt="me"/>
                        <h5>Julián Castro</h5>
                        <h6>Creador</h6>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit minus optio at rem neque! Ducimus corporis, iste vero, cum minus culpa dolorem delectus doloribus laudantium ipsam neque quaerat saepe dolor.</p>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default NosotrosPage;