import React, { useState } from 'react'
import RegisterStep1Layout from '@layout/register-information/RegisterStep1Layout'
import { useNavigate } from 'react-router-dom'

const RegisterStep1 = () => {
  const [selectValue, setSelectValue] = useState<string>('시각')
  const [artistName, setArtistName] = useState<string>('')
  const [contact, setContact] = useState<string>('')
  const navigate = useNavigate()

  const checkValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectValue(e.target.value)
  }
  const artistNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setArtistName(e.target.value)
  }
  const contractChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setContact(e.target.value)
  }
  const goStep2 = () => {
    // 변경 값 redux를 통해 저장하기
    if (selectValue != '' && artistName != '' && contact != '') navigate('/RegisterStep2')
    else if (artistName == '') alert('작가명을 입력해주세요!')
    else if (contact == '') alert('연락처를 입력해주세요!')
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
