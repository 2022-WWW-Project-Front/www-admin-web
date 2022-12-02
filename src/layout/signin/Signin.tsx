import React from 'react'
import styled from 'styled-components'

const Signin = () => {
  return (
    <Background>
      <Logo />
      <Container>
        <Sentence>ARTIST LOG-IN</Sentence>
        <InputBundle>
          <Input type="text" placeholder="작가코드입력" />
          <Icon>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z"
                stroke="#1635F4"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M4 21V17C4 15.8954 4.89543 15 6 15H18C19.1046 15 20 15.8954 20 17V21"
                stroke="#1635F4"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Icon>
        </InputBundle>
        <Button>로그인</Button>
      </Container>
    </Background>
  )
}
const Background = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(22, 53, 244, 0.1) 100%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const Logo = styled.div`
  width: 244px;
  height: 86px;
  background-image: url('../../../public/favoriteIcon.png');
`
const Container = styled.div`
  width: 723px;
  height: 435px;
  background-color: #fff;
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  // justify-content: center;
  align-items: center;
`
const Sentence = styled.div`
  width: 120px;
  height: 60px;
  font: 30px www;
  margin-top: 98px;
  margin-bottom: 46px;
`
const InputBundle = styled.div`
  position: relative;
`
const Input = styled.input`
  width: 408px;
  height: 56px;
  font: 24px Pretendard nomal;
  border: 2px solid #1635f4;
  &:focus {
    outline: none;
    border-color: #1635f4;
  }
  margin-bottom: 22px;
  text-indent: 56px;
`
const Icon = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  margin: 17px 16px 15px 24px;
`
const Button = styled.div`
  width: 416px;
  height: 56px;
  background-color: #1635f4;
  color: #fff;
  cursor: pointer;
  font: 24px Pretendard nomal;
  line-height: 56px;
  letter-spacing: -0.2px;
  text-align: center;
  margin-bottom: 97px;
`

export default Signin
