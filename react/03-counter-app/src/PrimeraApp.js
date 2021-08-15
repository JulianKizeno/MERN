import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

//FC functional components

const PrimeraApp = ( { saludo, subtitulo } ) => {

    return (
        <Fragment>
            {/* <pre> { JSON.stringify(saludo,  null, 3) } </pre> */}
            <h1>{ saludo }</h1>
            <p>{ subtitulo }</p>
        </Fragment>
    )

}

PrimeraApp.propTypes = {
    saludo: PropTypes.string.isRequired
}

PrimeraApp.defaultProps = {
    subtitulo: 'Mi primera aplicación'
}

export default PrimeraApp;