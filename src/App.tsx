import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SignIn from './pages/Signin'
import NoInformation from './pages/NoInformation'
import Register1 from './pages/RegisterInformation/Register1'
import Register2 from './pages/RegisterInformation/Register2'
import Register3 from './pages/RegisterInformation/Register3'
import EditInformation from './pages/EditInformation'
import './index.css'

const App = () => {
  // 라우트 작성
  // 초반에 할 것: 태블릿, pc에 반응형 maxwidth, % 이용해서 해봐, grid?
  // 폴더이름: 소문자시작(카멜케이스), 파일이름.tsx(tsx만): 대문자시작(파스칼)
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/NoInformation" element={<NoInformation />} />
        <Route path="/RegisterInformation/1" element={<Register1 />} />
        <Route path="/RegisterInformation/2" element={<Register2 />} />
        <Route path="/RegisterInformation/3" element={<Register3 />} />
        <Route path="/EditInformation" element={<EditInformation />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
