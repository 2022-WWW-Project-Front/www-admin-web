import React, { useState } from 'react'
import RegisterStep2Layout from '@layout/register-information/RegisterStep2Layout'
import { useNavigate } from 'react-router-dom'

const RegisterStep2 = () => {
  const [contentLength, setContentLength] = useState<number>(0)
  const [introduceLength, setIntroduceLength] = useState<number>(0)
  const navigate = useNavigate()

  const checkContentLength = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContentLength(e.target.value.replace(/<br\s*\/?>/gm, '\n').length)
  }

  const checkIntroduceLength = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setIntroduceLength(e.target.value.replace(/<br\s*\/?>/gm, '\n').length)
  }

  const backStep1 = () => {
    navigate('/RegisterStep1')
  }
  const goStep3 = () => {
    // 변경 값 redux를 통해 저장하기
    if (contentLength != 0 && introduceLength != 0) navigate('/RegisterStep3')
  }

  return (
    <RegisterStep2Layout
      checkContentLength={() => checkContentLength}
      contentLength={contentLength}
      checkIntroduceLength={() => checkIntroduceLength}
      introduceLength={introduceLength}
      backStep1={() => backStep1}
      goStep3={() => goStep3}
    />
  )
}

export default RegisterStep2
