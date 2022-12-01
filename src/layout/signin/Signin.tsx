import React from 'react'
import styled from 'styled-components'

const Signin = () => {
  return (
    <Background>
      <Logo />
      <Container>Login</Container>
    </Background>
  )
}
const Background = styled.div`
  position: relative;
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
  background-image: url('../../icons/favoriteIcon.png');
`
const Container = styled.div`
  width: 723px;
  height: 435px;
  background-color: #fff;
  margin-top: 60px;
`

export default Signin
