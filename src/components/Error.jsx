import React from 'react'
import { Link } from 'react-router-dom'

export default function Error() {
  return (
    <div className="container text-center py-5 ">
      <h1>Ooops, hubo un error!</h1>

      <p>Regresa a la página de inicio</p>
      <Link to="/" className="btn btn-danger">
        Ir a Inicio
      </Link>
    </div>
  )
}
