import React, { useState } from 'react'
import EditGenreAuthorLayout from '@layout/edit-information/EditGenreAuthorLayout'
import { useNavigate } from 'react-router-dom'

const EditGenreAuthor = () => {
  const [selectValue, setSelectValue] = useState<string>('visual')
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
    if (selectValue !== '' && artistName !== '' && contact !== '') navigate('/RegisterStep2')
  }
  return (
    <EditGenreAuthorLayout
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

export default EditGenreAuthor
