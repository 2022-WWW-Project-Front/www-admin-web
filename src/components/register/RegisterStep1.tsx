import React, { useState } from 'react'
import RegisterStep1Layout from '@layout/register-information/RegisterStep1Layout'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { step1, reset } from '@stores/step1Slice'

const RegisterStep1 = () => {
  const [selectValue, setSelectValue] = useState<string>('visual')
  const [artistName, setArtistName] = useState<string>('')
  const [contact, setContact] = useState<string>('')
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const checkValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectValue(e.target.value.trim())
  }
  const artistNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setArtistName(e.target.value.trim())
  }
  const contractChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setContact(e.target.value.trim())
  }
  const goStep2 = () => {
    if (selectValue !== '' && artistName !== '' && contact !== '') {
      dispatch(reset())
      dispatch(
        step1({
          genre: selectValue,
          name: artistName,
          concat: contact
        })
      )
      navigate('/RegisterStep2')
    }
  }

  return (
    <RegisterStep1Layout
      checkValue={() => checkValue}
      artistNameChange={() => artistNameChange}
      contractChange={() => contractChange}
      goStep2={() => goStep2}
      selectValue={selectValue}
      artistName={artistName}
      contact={contact}
    />
  )
}

export default RegisterStep1
