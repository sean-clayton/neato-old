import React, { PropTypes } from 'react'

const NameChanger = ({ name, updateName }) => {
  const handleChange = value => updateName(value)

  return (
    <div>
      <h1>Hello {name}</h1>
      <input
        type="text"
        value={name}
        placeholder={name}
        onChange={e => handleChange(e.target.value)}
        onBlur={e => handleChange(e.target.value)} />
    </div>
  )
}

NameChanger.propTypes = {
  name: PropTypes.string,
  updateName: PropTypes.func.isRequired
}

export default NameChanger
