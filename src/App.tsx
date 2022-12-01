import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SignIn from './pages/Signin'
import './index.css'

const App = () => {
  // 라우트 작성
  // 초반에 할 것: 태블릿, pc에 반응형 maxwidth, % 이용해서 해봐, grid?
  // 폴더이름: 소문자시작(카멜케이스), 파일이름.tsx(tsx만): 대문자시작(파스칼)
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<SignIn />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
