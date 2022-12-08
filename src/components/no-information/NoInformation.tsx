import React from 'react'
import NoInformationLayout from '@layout/no-infomation/NoInformationLayout'
import { useNavigate } from 'react-router-dom'

const NoInformation = () => {
  const navigate = useNavigate()

  const goRegister = () => {
    navigate('/RegisterStep1')
  }

  return <NoInformationLayout goRegister={() => goRegister} />
}

export default NoInformation
