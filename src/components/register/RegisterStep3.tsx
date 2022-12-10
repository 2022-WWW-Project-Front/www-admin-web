import React, { useState, useRef } from 'react'
import RegisterStep3Layout from '@layout/register-information/RegisterStep3Layout'
import Photo from '@layout/common/Photo'
import { useNavigate } from 'react-router-dom'

const RegisterStep3 = () => {
  const [photoComponent, setPhotoComponenet] = useState<JSX.Element[]>([<Photo />])
  const [titleLength, setTitleLength] = useState<number>(0)
  const [introduceLength, setIntroduceLength] = useState<number>(0)
  const [fileImage, setFileImage] = useState<
    {
      id: number
      url: string
    }[]
  >([{ id: 0, url: '' }])
  const [file, setFile] = useState<File[]>([])
  const [index, setIndex] = useState<number>(1)
  const alertFileImage: {
    id: number
    url: string
  }[] = [...fileImage]
  const navigate = useNavigate()
  console.log()
  const addPhoto = () => {
    setIndex(index + 1)
    setPhotoComponenet([...photoComponent, <Photo />])
    setFileImage([...fileImage, { id: index, url: '' }])
  }

  const checkTitleLength = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTitleLength(e.target.value.replace(/<br\s*\/?>/gm, '\n').length)
  }

  const checkIntroduceLength = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setIntroduceLength(e.target.value.replace(/<br\s*\/?>/gm, '\n').length)
  }

  const photoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    alertFileImage[Number(e.target.id)].url = URL.createObjectURL(e.target.files![0])
    setFileImage(alertFileImage)
  }

  const deleteFileImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    URL.revokeObjectURL(alertFileImage[Number(e.target.id)].url)
    alertFileImage[Number(e.target.id)].url = ''
    setFileImage(alertFileImage)
  }

  const backStep2 = () => {
    navigate('/RegisterStep2')
  }

  const register = () => {
    if (titleLength != 0 && introduceLength != 0 && alertFileImage[0].url != '') {
      // modal창 나오게 작업
      console.log('modal')
    }
    // 리덕스로 데이터 다 보내기
    // 이후 사진 따로, 나머지 데이터 등록
  }
  return (
    <RegisterStep3Layout
      photoComponent={photoComponent}
      addPhoto={() => addPhoto}
      checkTitleLength={() => checkTitleLength}
      titleLength={titleLength}
      checkIntroduceLength={() => checkIntroduceLength}
      introduceLength={introduceLength}
      backStep2={() => backStep2}
      register={() => register}
      fileImage={fileImage}
      photoUpload={() => photoUpload}
      deleteFileImage={() => deleteFileImage}
      // clickPhotoUpload={() => clickPhotoUpload}
    />
  )
}

export default RegisterStep3
