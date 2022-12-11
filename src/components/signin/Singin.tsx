import React, { useState } from 'react'
import SigninLayout from '@layout/signin/SigninLayout'
import { useNavigate } from 'react-router-dom'

const Singin = () => {
  const navigate = useNavigate()
  const [artistCode, setArtistCode] = useState<string>('')

  const login = (e: React.KeyboardEvent<Element>) => {
    // 로그인 했을 시 api 호출 부분
    if (e.key === 'Enter' || e.type === 'click') {
      if (artistCode == 'ok') {
        // 성공 시
        navigate('/NoInformation')
      }
      // 실패 시
      else alert('유효한 작가 코드가 아닙니다!')
    }
  }

  const checkArtistCode = (e: React.ChangeEvent<HTMLInputElement>) => {
    setArtistCode(e.target.value)
  }

  return <SigninLayout login={() => login} checkArtistCode={() => checkArtistCode} />
}

export default Singin
