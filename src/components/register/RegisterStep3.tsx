import React, { useState } from 'react'
import RegisterStep3Layout from '@layout/register-information/RegisterStep3Layout'
import Photo from '@layout/common/Photo'
import { useNavigate } from 'react-router-dom'

const RegisterStep3 = () => {
  const [photoComponent, setPhotoComponenet] = useState<JSX.Element[]>([<Photo />])
  const [titleLength, setTitleLength] = useState<number>(0)
  const [introduceLength, setIntroduceLength] = useState<number>(0)
  const navigate = useNavigate()

  const addPhoto = () => {
    setPhotoComponenet([...photoComponent, <Photo />])
  }

  const checkTitleLength = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTitleLength(e.target.value.replace(/<br\s*\/?>/gm, '\n').length)
  }

  const checkIntroduceLength = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setIntroduceLength(e.target.value.replace(/<br\s*\/?>/gm, '\n').length)
  }

  const backStep2 = () => {
    navigate('/RegisterStep2')
  }

  const register = () => {
    // 리덕스로 데이터 다 보내기
    // 이후 사진 따로, 나머지 데이터 등록
    console.log('등록 끝')
  }

  return (
    <RegisterStep3Layout
      photoComponent={photoComponent}
      addPhoto={addPhoto}
      checkTitleLength={() => checkTitleLength}
      titleLength={titleLength}
      checkIntroduceLength={() => checkIntroduceLength}
      introduceLength={introduceLength}
      backStep2={() => backStep2}
      register={() => register}
    />
  )
}

export default RegisterStep3
