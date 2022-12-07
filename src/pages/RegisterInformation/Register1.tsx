import React from 'react'
import RegisterLeftBar from '@layout/common/RegisterLeftBar'
import RegisterInformationLayout from '@layout/register-information/RegisterInformation1'

const Register1 = () => {
  return (
    <div style={{ display: 'flex' }}>
      <RegisterLeftBar />
      <RegisterInformationLayout />
    </div>
  )
}

export default Register1
