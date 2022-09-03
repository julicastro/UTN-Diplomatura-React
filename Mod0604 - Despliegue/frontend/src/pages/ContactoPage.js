import React from 'react';
import "../styles/components/pages/ContactoPage.css";
import axios from "axios";
import { useState } from 'react';

const ContactoPage = (props) => {

    const initialForm = {
        nombre: '',
        email: '',
        telefono: '',
        mensaje: ''
    }

    const [sending, setSending] = useState(false);
    const [msg, setMsg] = useState('');
    const [formData, setFormData] = useState(initialForm);

    const handleChange = e => {
        const {name, value} = e.target;
        setFormData(oldData => ({
            ...oldData,
            [name]: value
        }));
    }

    const handleSubmit = async e => {
        e.preventDefault();
        setMsg('');
        setSending(true)
        const response = await
            axios.post('http://localhost:3000/api/contacto', formData);
        setSending(false);
        setMsg(response.data.mensaje);
        if (response.data.error === false) {
            setFormData(initialForm);
        }
    }
    return (

        <div>
            <div class="contact">
                <div class="contact-container">

                    <form action="/contacto" method='post' class="contact-form" onSubmit={handleSubmit}>
                        <div class="form-row">
                            <div class="form-input">
                                <label>Nombre:</label>
                                <input
                                    type="text"
                                    name='nombre'
                                    value={formData.nombre}
                                    onChange={handleChange} />
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="form-input">
                                <label>Email:</label>
                                <input
                                    type="text"
                                    name='email'
                                    value={formData.email}
                                    onChange={handleChange} />
                            </div>
                            <div class="form-input">
                                <label>Telefono:</label>
                                <input
                                    type="text"
                                    name='telefono'
                                    value={formData.telefono}
                                    onChange={handleChange} />
                            </div>
                        </div>
                        <div class="form-input">
                            <label>Mensaje:</label>
                            <textarea
                                type="text"
                                name='mensaje'
                                value={formData.mensaje}
                                onChange={handleChange}></textarea>
                        </div>
                        <div class="form-submit">
                            <input type="submit" value="Enviar" class="boton" />
                        </div>
                        {sending ? <p>Enviando... </p> : null}
                        {msg ? <p>{msg}</p> : null}
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ContactoPage;