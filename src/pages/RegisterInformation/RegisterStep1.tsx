import React from 'react'
import RegisterLeftBarComponent from '@components/side-bar/RegisterLeftBar'
import RegisterStep1Component from '@components/register/RegisterStep1'

const RegisterStep1 = () => {
  return (
    <div style={{ display: 'flex' }}>
      <RegisterLeftBarComponent />
      <RegisterStep1Component />
    </div>
  )
}

export default RegisterStep1
