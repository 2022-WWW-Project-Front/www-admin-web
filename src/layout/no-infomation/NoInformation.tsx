import React from 'react'
import styled from 'styled-components'

const NoInformation = () => {
  return (
    <Background>
      <Logo>
        <svg
          width="calc(100vw * 12 / 100)"
          height="calc(100vh * 8.9 / 100)"
          viewBox="0 0 235 82"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M180.514 81.9966V62.8514H145.434V81.9966H180.514Z" fill="#121820" />
          <path d="M19.1627 0H0V81.9966H19.1627V0Z" fill="#121820" />
          <path d="M54.9967 0H35.834V64.5892H54.9967V0Z" fill="#121820" />
          <path d="M90.8356 0H71.6729V81.9966H90.8356V0Z" fill="#1635F4" />
          <path d="M36.6289 81.9966V62.8514H1.54932V81.9966H36.6289Z" fill="#121820" />
          <path d="M89.4814 81.9966V62.8514H54.4019V81.9966H89.4814Z" fill="#121820" />
          <path d="M126.938 0H107.775V64.5892H126.938V0Z" fill="#1635F4" />
          <path d="M162.777 0H143.614V81.9966H162.777V0Z" fill="#1635F4" />
          <path d="M108.57 81.9966V62.8514H71.9409V81.9966H108.57Z" fill="#1635F4" />
          <path d="M161.423 82V62.8548H126.343V82H161.423Z" fill="#1635F4" />
          <path d="M198.881 0H179.719V64.5892H198.881V0Z" fill="#121820" />
          <path d="M234.716 0H215.554V81.9966H234.716V0Z" fill="#121820" />
          <path d="M233.364 82V62.8548H198.285V82H233.364Z" fill="#121820" />
        </svg>
      </Logo>
      <Container>
        <MainSentence>There are no registered works</MainSentence>
        <br />
        <SubSentence>등록된 작품이 없습니다 신규 등록 해주세요</SubSentence>
        <Button>신규등록 하러가기</Button>
      </Container>
    </Background>
  )
}

const Background = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(22, 53, 244, 0.1) 100%);
`
const Logo = styled.div`
  position: relative;
  width: calc(100vw * 12 / 100);
  height: calc(100vh * 8.9 / 100);
  margin: auto;
  top: calc(100vh * 18 / 100);
`
const Container = styled.div`
  position: relative;
  width: calc(100vw * 36.5 / 100);
  height: calc(100vh * 40.3 / 100);
  top: calc(100vh * 23.6 / 100);
  background-color: #fff;
  margin: auto;
`
const MainSentence = styled.span`
  position: relative;
  display: flex;
  justify-content: center;
  font: calc(100vh * 2.8 / 100) www;
  top: calc(100vh * 13.3 / 100);
`
const SubSentence = styled.span`
  position: relative;
  display: flex;
  justify-content: center;
  font: calc(100vh * 2 / 100) Pretendard;
  top: calc(100vh * 13.5 / 100);
`
const Button = styled.div`
  position: relative;
  top: calc(100vh * 21 / 100);
  width: calc(100vw * 26.1 / 100);
  height: calc(100vh * 5.2 / 100);
  font: calc(100vh * 3 / 100) Pretendard nomal;
  border: calc(100vh * 0.125 / 100) solid #1635f4;
  background-color: #1635f4;
  color: #fff;
  cursor: pointer;
  line-height: calc(100vh * 4.8 / 100);
  text-align: center;
  margin: auto;
  cursor: pointer;
`

export default NoInformation
