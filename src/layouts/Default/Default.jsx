import React, { PropTypes } from 'react'
import TopNav from 'components/TopNav'

const Default = ({ children }) =>
  <div>
    <TopNav />
    {children}
  </div>

Default.propTypes = {
  children: PropTypes.element
}

export default Default
