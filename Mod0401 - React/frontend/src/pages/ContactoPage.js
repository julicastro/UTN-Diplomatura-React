import React from 'react';

const ContactoPage = (props) => {
    return (

        <main className='holder contacto'>
            <div>
                <h2>Contacto Rápido</h2>
                <form>
                    <p>
                        <label for="nombre">Nombre</label>
                        <input type="text" name="" />
                    </p>
                    <p>
                        <label for="email">Email</label>
                        <input type="text" name="" />
                    </p>
                    <p>
                        <label for="telefono">Telefono</label>
                        <input type="text" name="" />
                    </p>
                    <p>
                        <label for="mensaje">Mensaje</label>
                        <textarea name=""></textarea>
                    </p>
                    <p className='acciones'>
                        <input type="submit" value="Enviar"/>
                    </p>
                </form>
            </div>
            <div className='datos'>
                <h2>Otras vías de comunicación</h2>
                <p>También puede contactarse con nosotros usando los siguientes medios</p>
                <ul>
                    <li>Teléfono: 43242388</li>
                    <li>Email: contacto@transportesx.com.ar</li>
                    <li>Facebook:</li>
                    <li>Twitter:</li>
                    <li>Instagram:</li>
                </ul>
            </div>
        </main>
    )
}

export default ContactoPage;