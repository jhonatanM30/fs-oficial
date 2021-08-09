import React from 'react'
import '../css/curso.css'

export const CursoCss = () => {
    return (
        <div className="container">
            <section className="flex-container">
                <article className="item">
                    <h2>Sucursal Virtual Personas</h2>
                    <p>Todos los días de la semana podrás realizar pagos, transferencias, consultas y conocer nuestros productos y servicios, de una manera fácil y segura. Solo necesitas un computador con conexión a Internet y lo tendrás todo a tu alcance. A toda hora y en todo momento, ¡la Sucursal Virtual Personas está disponible para ti!</p>
                </article>
                <article className="item">
                    <img src="https://placeimg.com/400/300/people" alt="" />
                </article>
            </section>
            <section className="flex-container">
                <article className="item flex-order">
                    <h2>Beneficios y características</h2>
                    <p>Realiza transacciones desde cualquier lugar y a cualquier hora. No tendrás necesidad de desplazarte ni llevar dinero en efectivo, garantizando así tu seguridad y privacidad.
                        Disponibilidad todos los días para realizar pagos, transferencias y tus consultas financieras.
                        En el momento en el que la Sucursal Virtual personas requiera mantenimiento, te estaremos informando oportunamente para que realices tus transacciones antes o después del periodo de mantenimiento.
                        Para acceder a la Sucursal Virtual Personas, crea tu usuario personalizado para garantizarte privacidad y seguridad.</p>
                </article>
                <article className="item">
                    <img src="https://placeimg.com/400/300/arch" alt="" />
                </article>
            </section>
        </div>

    )
}
