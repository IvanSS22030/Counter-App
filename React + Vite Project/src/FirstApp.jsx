
import { Fragment } from 'react'
import PropTypes from 'prop-types';

export default function Borrable({title, subtitle, name}) {

  // console.log(props)

  
  return (
<Fragment>
    <h1>{title}</h1>
    <p> {subtitle}</p>
    <p> {name}</p>
    
</Fragment>
  )
}

Borrable.propType = {
title: PropTypes.string.isRequired,
subtitle: PropTypes.number.isRequired
}

Borrable.defaultProps = {
title: "No hay titulo",
subtitle: "No hay Subtitulo",
name: "Liam marco"
}