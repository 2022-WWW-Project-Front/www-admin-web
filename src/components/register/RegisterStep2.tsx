import React, { useState, useEffect } from 'react'
import RegisterStep2Layout from '@layout/register-information/RegisterStep2Layout'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { step2, reset } from '@stores/step2Slice'

const RegisterStep2 = () => {
  const [contentLength, setContentLength] = useState<number>(0)
  const [introduceLength, setIntroduceLength] = useState<number>(0)
  const [bio, setBio] = useState<string>('')
  const [description, setDescription] = useState<string>('')
  const [fileImage, setFileImage] = useState<string>('')
  const [file, setFile] = useState<File>()
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const checkContentLength = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContentLength(e.target.value.replace(/<br\s*\/?>/gm, '\n').trim().length)
    setBio(e.target.value.trim())
  }

  const checkIntroduceLength = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setIntroduceLength(e.target.value.replace(/<br\s*\/?>/gm, '\n').trim().length)
    setDescription(e.target.value.trim())
  }

  const photoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFileImage(URL.createObjectURL(e.target.files![0]))
  }

  const backStep1 = () => {
    navigate('/RegisterStep1')
  }

  const goStep3 = () => {
    if (bio.length !== 0 && description.length !== 0 && fileImage !== '') {
      dispatch(reset())
      dispatch(
        step2({
          profile: fileImage,
          bio: bio,
          description: description
        })
      )
      navigate('/RegisterStep3')
    }
  }

  return (
    <RegisterStep2Layout
      checkContentLength={() => checkContentLength}
      contentLength={contentLength}
      checkIntroduceLength={() => checkIntroduceLength}
      introduceLength={introduceLength}
      photoUpload={() => photoUpload}
      fileImage={fileImage}
      backStep1={() => backStep1}
      goStep3={() => goStep3}
    />
  )
}

export default RegisterStep2
