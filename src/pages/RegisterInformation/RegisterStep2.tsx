import React from 'react'
import RegisterLeftBarComponent from '@components/side-bar/RegisterLeftBar'
import RegisterStep2Component from '@components/register/RegisterStep2'

const RegisterStep2 = () => {
  return (
    <div style={{ display: 'flex' }}>
      <RegisterLeftBarComponent />
      <RegisterStep2Component />
    </div>
  )
}

export default RegisterStep2
