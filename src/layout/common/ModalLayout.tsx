import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

interface props {
  modalClose: Function
  modalIsOpen: boolean
  timeCount: number
}

const ModalLayout = ({ ...props }: props) => {
  return (
    <>
      {!props.modalIsOpen ? (
        <FavoriteContainer>
          <FavoriteModalBody>
            <Maincontents>UPloading</Maincontents>
            <SubSentence>작품을 등록중입니다</SubSentence>
            <PercentBar />
            <PercentBarBackground />
            <Percent>{props.timeCount}%</Percent>
          </FavoriteModalBody>
        </FavoriteContainer>
      ) : (
        <FavoriteContainer>
          <FavoriteModalBody>
            <Maincontents>upload Complete</Maincontents>
            <SubSentence>작품이 등록되었습니다</SubSentence>
            <Ok onClick={props.modalClose()}>확인</Ok>
          </FavoriteModalBody>
        </FavoriteContainer>
      )}
    </>
  )
}

const FavoriteContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
`
const FavoriteModalBody = styled.div`
  position: absolute;
  width: 36vw;
  height: 40.3vh;
  text-align: center;
  background-color: #fff;
`
const Maincontents = styled.div`
  position: relative;
  display: flex;
  text-align: center;
  justify-content: center;
  font: calc(100vh * 2.8 / 100) www;
  top: calc(100vh * 13.3 / 100);
`
const SubSentence = styled.div`
  position: relative;
  display: flex;
  text-align: center;
  justify-content: center;
  font: calc(100vh * 2 / 100) Pretendard;
  top: calc(100vh * 15 / 100);
`
const Percent = styled.div`
  position: relative;
  display: flex;
  text-align: center;
  justify-content: center;
  font: calc(100vh * 2 / 100) Pretendard;
  top: calc(100vh * 25 / 100);
  color: #1635f4;
`
const PercentBar = styled.div`
  @keyframes PercentBar {
    0% {
      position: relative;
      top: calc(100vh * 23 / 100);
      width: calc(100vw * 0 / 100);
      height: calc(100vh * 0.7 / 100);
      background-color: #1635f4;
      border: calc(100vh * 0.125 / 100) solid #1635f4;
    }
    100% {
      position: relative;
      top: calc(100vh * 23 / 100);
      width: calc(100vw * 26.1 / 100);
      height: calc(100vh * 0.7 / 100);
      background-color: #1635f4;
      border: calc(100vh * 0.125 / 100) solid #1635f4;
    }
  }
  position: relative;
  top: calc(100vh * 23 / 100);
  width: calc(100vw * 26.1 / 100);
  height: calc(100vh * 0.7 / 100);
  margin: auto;
  background-color: #1635f4;
  border: calc(100vh * 0.125 / 100) solid #1635f4;
  margin-left: 4.8758vw;
  animation-name: PercentBar;
  animation-duration: 2s;
  animation-timing-function: linear;
  animation-iteration-count: 1;
  z-index: 2;
`
const PercentBarBackground = styled.div`
  position: relative;
  top: calc(100vh * 22.1 / 100);
  background-color: #e9ecf8;
  margin: auto;
  margin-left: 4.8758vw;
  width: calc(100vw * 26.1 / 100);
  height: calc(100vh * 0.9 / 100);
`
const Ok = styled.div`
  position: relative;
  top: calc(100vh * 23 / 100);
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

export default ModalLayout
