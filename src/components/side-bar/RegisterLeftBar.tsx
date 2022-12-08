import React, { useState } from 'react'
import RegisterLeftBarLayout from '@layout/common/RegisterLeftBarLayout'
import { useLocation } from 'react-router-dom'

interface location {
  hash: string
  key: string
  pathname: string
  search: string
  state: string | null
}

const RegisterLeftBar = () => {
  const location: location = useLocation()

  return <RegisterLeftBarLayout />
}

export default RegisterLeftBar
