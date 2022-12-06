import React from 'react'
import styled from 'styled-components'

const EditInformationLeftBar = () => {
  return (
    <Container>
      <Logo>
        <svg width="200" height="69" viewBox="0 0 200 69" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M153.813 53.6055H123.923V69.933H153.813V53.6055Z" fill="white" />
          <path d="M16.3275 0H0V69.933H16.3275V0Z" fill="white" />
          <path d="M46.8637 0H30.5361V55.086H46.8637V0Z" fill="white" />
          <path d="M77.3978 0H61.0703V69.933H77.3978V0Z" fill="white" />
          <path d="M31.2128 53.6055H1.32227V69.933H31.2128V53.6055Z" fill="white" />
          <path d="M76.2441 53.6055H46.3535V69.933H76.2441V53.6055Z" fill="white" />
          <path d="M108.165 0H91.8379V55.086H108.165V0Z" fill="white" />
          <path d="M138.702 0H122.374V69.933H138.702V0Z" fill="white" />
          <path d="M92.5117 53.6055H62.6211V69.933H92.5117V53.6055Z" fill="white" />
          <path d="M137.548 53.6055H107.657V69.933H137.548V53.6055Z" fill="white" />
          <path d="M169.464 0H153.137V55.086H169.464V0Z" fill="white" />
          <path d="M200.001 0H183.674V69.933H200.001V0Z" fill="white" />
          <path d="M198.848 53.6055H168.957V69.933H198.848V53.6055Z" fill="white" />
        </svg>
      </Logo>
      <Selected>
        <Step1>장르 & 연락처 수정</Step1>
      </Selected>
      <Step2>아티스트 수정</Step2>
      <Step3>작품수정</Step3>
      <Logout>로그아웃</Logout>
    </Container>
  )
}

const Container = styled.div`
  width: 27vw;
  height: auto;
  background-color: #868a98;
`
const Logo = styled.div`
  position: relative;
  top: 11rem;
  margin-bottom: 26rem;
  margin-left 3.125rem;
`
const Selected = styled.div`
  position: relative;
  width: 20rem;
  height: 2.5rem;
  top: -1.5rem;
  background-color: #fff;
  padding: 1.25rem 0 1.25rem 0;
  margin-bottom: 1.75rem;
`
const Step1 = styled.div`
  position: relative;
  top: 0.2rem;
  margin: 0 0 3rem 3.125rem;
  font: 2rem Pretendard;
  font-weight: 700;
  line-height: 2.375rem;
  letter-spacing: -0.00125rem;
  color: #a4abbe;
  cursor: pointer;
`
const Step2 = styled.div`
  position: relative;
  top: -1.3rem;
  margin: 0 0 3rem 3.125rem;
  font: 2rem Pretendard;
  font-weight: 700;
  line-height: 2.375rem;
  letter-spacing: -0.00125rem;
  color: #fff;
  cursor: pointer;
`
const Step3 = styled.div`
  position: relative;
  top: -1.3rem;
  margin: 0 0 5.5rem 3.125rem;
  font: 2rem Pretendard;
  font-weight: 700;
  line-height: 2.375rem;
  letter-spacing: -0.00125rem;
  color: #fff;
  cursor: pointer;
`
const Logout = styled.div`
  position: relative;
  top: -1.35rem;
  margin-left: 20vw;
  font: 1rem Pretendard;
  font-weight: 700;
  line-height: 1.2rem;
  letter-spacing: -0.00125rem;
  color: #e9ecf8;
  cursor: pointer;
`

export default EditInformationLeftBar
