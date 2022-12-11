import React from 'react'
import RegisterLeftBarLayout from '@layout/common/RegisterLeftBarLayout'
import { useLocation, useNavigate } from 'react-router-dom'

interface location {
  hash: string
  key: string
  pathname: string
  search: string
  state: string | null
}

const RegisterLeftBar = () => {
  const location: location = useLocation()
  const navigate = useNavigate()

  const logout = () => {
    navigate('/')
  }

  return <RegisterLeftBarLayout logout={() => logout} />
}

export default RegisterLeftBar
