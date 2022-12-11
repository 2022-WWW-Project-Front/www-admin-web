import React from 'react'
import styled from 'styled-components'

interface props {
  logout: Function
  goEditGenreAuthor: Function
  goEditArtist: Function
  goEditWork: Function
}

const EditInformationLeftBarLayout = ({ ...props }: props) => {
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

      {location.pathname == '/EditGenreAuthor' ? (
        <Step1
          style={{
            color: '#A4ABBE',
            backgroundColor: '#fff',
            padding: 'calc(100vh * 2 / 100) 0 calc(100vh * 2 / 100) calc(100vw * 3 / 100)',
            top: 'calc(100vh * 53 / 100)',
            left: '0',
            width: 'calc(100vh * 26 / 100)',
            cursor: 'pointer'
          }}
          onClick={props.goEditGenreAuthor()}
        >
          장르 & 연락처 수정
        </Step1>
      ) : (
        <Step1 onClick={props.goEditGenreAuthor()}>장르 & 연락처 수정</Step1>
      )}

      {location.pathname == '/EditArtist' ? (
        <Step2
          style={{
            color: '#A4ABBE',
            backgroundColor: '#fff',
            padding: 'calc(100vh * 2 / 100) 0 calc(100vh * 2 / 100) calc(100vw * 3 / 100)',
            top: 'calc(100vh * 60 / 100)',
            left: '0',
            width: 'calc(100vh * 20.5 / 100)',
            cursor: 'pointer'
          }}
          onClick={props.goEditArtist()}
        >
          아티스트 수정
        </Step2>
      ) : location.pathname == '/EditGenreAuthor' ? (
        <Step2 style={{ top: 'calc(100vh * 58 / 100)' }} onClick={props.goEditArtist()}>
          아티스트 수정
        </Step2>
      ) : (
        <Step2 onClick={props.goEditArtist()}>아티스트 수정</Step2>
      )}

      {location.pathname == '/EditWork' ? (
        <Step3
          style={{
            color: '#A4ABBE',
            backgroundColor: '#fff',
            padding: 'calc(100vh * 2 / 100) 0 calc(100vh * 2 / 100) calc(100vw * 3 / 100)',
            top: 'calc(100vh * 67 / 100)',
            left: '0',
            width: 'calc(100vh * 16 / 100)',
            cursor: 'pointer'
          }}
          onClick={props.goEditWork()}
        >
          작품수정
        </Step3>
      ) : (
        <Step3 onClick={props.goEditWork()}>작품수정</Step3>
      )}
      <Logout onClick={props.logout()}>로그아웃</Logout>
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
  top: calc(100vh * 15 / 100);
  left: calc(100vw * 3 / 100);
`
const Step1 = styled.div`
  position: relative;
  color: #fff;
  top: calc(100vh * 55 / 100);
  left: calc(100vw * 3 / 100);
  font: calc(100vh * 3 / 100) Pretendard;
  font-weight: 700;
  cursor: pointer;
`
const Step2 = styled.div`
  position: relative;
  color: #fff;
  top: calc(100vh * 62 / 100);
  left: calc(100vw * 3 / 100);
  font: calc(100vh * 3 / 100) Pretendard;
  font-weight: 700;
  cursor: pointer;
`
const Step3 = styled.div`
  position: relative;
  color: #fff;
  top: calc(100vh * 65 / 100);
  left: calc(100vw * 3 / 100);
  font: calc(100vh * 3 / 100) Pretendard;
  font-weight: 700;
  cursor: pointer;
`
const Logout = styled.div`
  position: relative;
  top: calc(100vh * 72 / 100);
  left: calc(100vw * 20 / 100);
  font: calc(100vh * 1.5 / 100) Pretendard;
  font-weight: 700;
  color: #e9ecf8;
  cursor: pointer;
`

export default EditInformationLeftBarLayout
