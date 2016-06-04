import React, { PropTypes } from 'react'

const NameChanger = ({ name, updateName }) =>
  <div>
    <h1>Hello {name}!</h1>
    <input type="text" value={name} placeholder={name} onChange={(e) => updateName(e.target.value)} />
  </div>

NameChanger.propTypes = {
  name: PropTypes.string,
  updateName: PropTypes.func.isRequired
}

export default NameChanger
