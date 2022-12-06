import React from 'react'
import styled from 'styled-components'
import Check from '@layout/common/Check'
import NonCheck from '@layout/common/NonCheck'

const RegisterInformation1 = () => {
  return (
    <Container>
      <Genre>
        <GenreName>장르</GenreName>
        <Select>
          <Visual>
            <VisualImg />
            <SelectCheck>
              <Check />
              <Selector>시각</Selector>
            </SelectCheck>
          </Visual>
          <Media>
            <MediaImg />
            <NotSelectCheck>
              <NonCheck />
              <NotSelector>미디어</NotSelector>
            </NotSelectCheck>
          </Media>
          <Living>
            <LivingImg />
            <NotSelectCheck>
              <NonCheck />
              <NotSelector>리빙</NotSelector>
            </NotSelectCheck>
          </Living>
          <Fashion>
            <FashionImg />
            <NotSelectCheck>
              <NonCheck />
              <NotSelector>패션</NotSelector>
            </NotSelectCheck>
          </Fashion>
        </Select>
      </Genre>
      <Author>
        <AuthorName>작가명</AuthorName>
        <AuthorInput placeholder="작가명을 입력해주세요" />
      </Author>
      <Contact>
        <ContactMeans>연락처</ContactMeans>
        <ContactInput placeholder="인스타 ID or e-mail or site" />
      </Contact>
      <Next>다음</Next>
    </Container>
  )
}
const Container = styled.div`
  width: 50vw;
  height: 100vh;
  background-color: #fff;
  font-family: Pretendard;
`
const Genre = styled.div`
  position: relative;
  top: calc(100vh * 15 / 100);
  left: calc(100vw * 8.8 / 100);
`
const GenreName = styled.div`
  font-size: calc(100vh * 2.5 / 100);
  font-weight: 700;
  color: #000;
  margin-bottom: calc(100vh * 1.3 / 100);
`

const Select = styled.div`
  display: flex;
  font-weight: 700;
`

const Visual = styled.div``
const VisualImg = styled.div`
  width: calc(100vw * 9 / 100);
  height: calc(100vw * 9 / 100);
  background-image: url('/public/visual 1.png');
  background-size: cover;
  background-repeat: no-repeat;
  margin-bottom: calc(100vh * 3.5 / 100);
`

const Media = styled.div``
const MediaImg = styled.div`
  width: calc(100vw * 9 / 100);
  height: calc(100vw * 9 / 100);
  background-image: url('/public/media1 2.png');
  background-size: cover;
  background-repeat: no-repeat;
  margin-bottom: calc(100vh * 3.5 / 100);
`

const Living = styled.div``
const LivingImg = styled.div`
  width: calc(100vw * 9 / 100);
  height: calc(100vw * 9 / 100);
  background-image: url('/public/Living2 1.png');
  background-size: cover;
  background-repeat: no-repeat;
  margin-bottom: calc(100vh * 3.5 / 100);
`

const Fashion = styled.div``
const FashionImg = styled.div`
  width: calc(100vw * 9 / 100);
  height: calc(100vw * 9 / 100);
  background-image: url('/public/fashion 1.png');
  background-size: cover;
  background-repeat: no-repeat;
  margin-bottom: calc(100vh * 3.5 / 100);
`
const SelectCheck = styled.div`
  width: 10vw;
  margin-left: calc(100vw * 1 / 100);
  display: flex;
  align-items: center;
  cursor: pointer;
`
const NotSelectCheck = styled.div`
  width: 10vw;
  margin-left: 1.5vh;
  display: flex;
  align-items: center;
  cursor: pointer;
`
const Selector = styled.div`
  color: #000;
  font-size: calc(100vh * 1.5 / 100);
  margin-left: 1.2vw;
`
const NotSelector = styled.div`
  color: #676767;
  font-size: calc(100vh * 1.5 / 100);
  margin-left: 2vh;
`

const Author = styled.div`
  position: relative;
  top: calc(100vh * 25 / 100);
  left: calc(100vw * 8.8 / 100);
`
const AuthorName = styled.div`
  position: relative;
  font-size: calc(100vh * 2.5 / 100);
  font-weight: 700;
  top: calc(100vh * 3 / 100);
`
const AuthorInput = styled.input`
  position: relative;
  top: calc(100vh * 5 / 100);
  width: calc(100vw * 49.5 / 100);
  height: calc(100vh * 6 / 100);
  font: calc(100vh * 3 / 100) Pretendard;
  font-weight: 700;
  border: calc(100vh * 0.125 / 100) solid #242528;
  &:focus {
    outline: none;
    border-color: #5d6dff;
  }
  ::placeholder {
    color: #d9d9d9;
  }
  text-indent: calc(100vh * 2 / 100);
`
const Contact = styled.div`
  position: relative;
  top: calc(100vh * 30 / 100);
  left: calc(100vw * 8.8 / 100);
`
const ContactMeans = styled.div`
  position: relative;
  font-size: calc(100vh * 2.5 / 100);
  font-weight: 700;
  top: calc(100vh * 5 / 100);
`
const ContactInput = styled.input`
  position: relative;
  top: calc(100vh * 7 / 100);
  width: calc(100vw * 49.5 / 100);
  height: calc(100vh * 6 / 100);
  font: calc(100vh * 3 / 100) Pretendard;
  font-weight: 700;
  border: calc(100vh * 0.125 / 100) solid #242528;
  &:focus {
    outline: none;
    border-color: #5d6dff;
  }
  ::placeholder {
    color: #d9d9d9;
  }
  text-indent: calc(100vh * 2 / 100);
`
const Next = styled.div`
  position: absolute;
  width: calc(100vw * 8 / 100);
  bottom: calc(100vh * 6.5 / 100);
  right: 0;
  padding: calc(100vh * 1.2 / 100) 0 calc(100vh * 1.2 / 100) calc(100vw * 1.1 / 100);
  font: calc(100vh * 2.4 / 100) Pretendard;
  font-weight: 500;
  color: #fff;
  background-color: #e9ecf8;
`

export default RegisterInformation1
