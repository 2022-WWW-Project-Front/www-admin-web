import React, { useState } from 'react'
import RegisterStep1Layout from '@layout/register-information/RegisterStep1Layout'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { step1, reset } from '@stores/step1Slice'

const RegisterStep1 = () => {
  const [selectValue, setSelectValue] = useState<string>('visual')
  const [artistName, setArtistName] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [linkTree, setLinkTree] = useState<string>('')
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const checkValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectValue(e.target.value.trim())
  }
  const artistNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setArtistName(e.target.value.trim())
  }
  const emailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value.trim())
  }
  const linkTreeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLinkTree(e.target.value.trim())
  }
  const goStep2 = () => {
    if (selectValue !== '' && artistName !== '' && email !== '') {
      dispatch(reset())
      dispatch(
        step1({
          genre: selectValue,
          nickname: artistName,
          email: email,
          linkTree: linkTree
        })
      )
      navigate('/RegisterStep2')
    }
  }

  return (
    <RegisterStep1Layout
      checkValue={() => checkValue}
      artistNameChange={() => artistNameChange}
      emailChange={() => emailChange}
      linkTreeChange={() => linkTreeChange}
      goStep2={() => goStep2}
      selectValue={selectValue}
      artistName={artistName}
      email={email}
      linkTree={linkTree}
    />
  )
}

export default RegisterStep1
