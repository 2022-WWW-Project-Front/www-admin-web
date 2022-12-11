import React from 'react'
import RegisterLeftBarComponent from '@components/side-bar/RegisterLeftBar'
import RegisterStep3Component from '@components/register/RegisterStep3'

const RegisterStep3 = () => {
  return (
    <div style={{ display: 'flex' }}>
      <RegisterLeftBarComponent />
      <RegisterStep3Component />
    </div>
  )
}

export default RegisterStep3
