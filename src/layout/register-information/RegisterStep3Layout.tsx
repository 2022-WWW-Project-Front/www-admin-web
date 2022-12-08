import React from 'react'
import styled from 'styled-components'
import Photo from '@layout/common/Photo'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'

interface props {
  photoComponent: JSX.Element[]
  addPhoto: Function
}

const RegisterStep3Layout = ({ photoComponent, addPhoto }: props) => {
  return (
    <Container>
      <Work>
        <ArtistArea>작품 사진</ArtistArea>
        <Swiper
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50
            },
            1324: {
              slidesPerView: 4,
              spaceBetween: 50
            },
            1980: {
              slidesPerView: 5,
              spaceBetween: 50
            }
          }}
        >
          {photoComponent.map((element, index) => (
            <SwiperSlide key={index}>
              <ArtistPhoto>
                <IndexNumber>{index + 1}</IndexNumber>
                <Photo />
                <AddButton>추가</AddButton>
              </ArtistPhoto>
            </SwiperSlide>
          ))}
          <SwiperSlide>
            <AddPhotoButton onClick={() => addPhoto()}>
              <svg
                width="14.4vh"
                height="14.4vh"
                viewBox="0 0 155 155"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <line y1="56.5" x2="115" y2="56.5" stroke="#868A98" strokeWidth="2" />
                <line x1="58.5" y1="4.37114e-08" x2="58.5" y2="115" stroke="#868A98" strokeWidth="2" />
              </svg>
            </AddPhotoButton>
          </SwiperSlide>
          <SwiperSlide>
            <AddExplain>
              <ExplanationList>작품사진 최소 1개 이상</ExplanationList>
              <ExplanationList>가로 세로비율을 자율입니다</ExplanationList>
              <ExplanationList>파일형식은 jpg,jpeg만 등록 가능 합니다</ExplanationList>
            </AddExplain>
          </SwiperSlide>
        </Swiper>
      </Work>
      <WorkExplain>
        <WorkName>작품 설명</WorkName>
        <Input placeholder="작품 제목을 입력해주세요" />
        <TitleCount>
          <span>0</span>/30자
        </TitleCount>
        <TextArea placeholder="작품 설명을 적어주세요" />
        <TextAreaCount>
          <span>0</span>/900자
        </TextAreaCount>
      </WorkExplain>
      <Back>뒤로</Back>
      <Next>등록완료</Next>
    </Container>
  )
}
const Container = styled.div`
  width: 60vw;
  height: 100vh;
  background-color: #fff;
  font-family: Pretendard;
`
const Work = styled.div`
  position: relative;
  top: calc(100vh * 15 / 100);
  left: calc(100vw * 8.8 / 100);
`
const ArtistArea = styled.div`
  font-size: calc(100vh * 2.5 / 100);
  font-weight: 700;
  color: #000;
  margin-bottom: calc(100vh * 1.3 / 100);
`

const ArtistPhoto = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  top: calc(100vh * 2 / 100);
  cursor: pointer;
`
const IndexNumber = styled.div`
  position: absolute;
  padding: calc(100vh * 0.8 / 100);
  background-color: #fff;
`

const AddPhotoButton = styled.div`
  position: relative;
  top: calc(100vh * 6.2 / 100);
`
const AddExplain = styled.div`
  position: relative;
  color: #3d3f4e;
  top: calc(100vh * 8 / 100);
  right: calc(100vw * 2 / 100);
  font: calc(100vh * 1.5 / 100) Pretendard;
  font-weight: 700;
`

const ExplanationList = styled.li`
  margin-bottom: calc(100vh * 1 / 100);
  font-size: calc(100vh * 1.5 / 100);
  width: 13vw;
  list-style: inside;
`

const AddButton = styled.div`
  position: relative;
  width: calc(100vh * 6 / 100);
  height: 7vh;
  background-color: #1635f4;
  color: #fff;
  font: calc(100vh * 1.5 / 100) Pretendard;
  font-weight: 700;
  top: calc(100vh * 3 / 100);
  left: calc(100vh * 10 / 100);
  padding: calc(100vh * 0.5 / 100) calc(100vh * 1 / 100) calc(100vh * 0.5 / 100) calc(100vh * 1 / 100);
  text-align: center;
`

const WorkExplain = styled.div`
  position: relative;
  top: calc(100vh * 25 / 100);
  left: calc(100vw * 8.8 / 100);
  font-size: calc(100vh * 2.5 / 100);
  font-weight: 700;
`
const WorkName = styled.div`
  font-size: calc(100vh * 2.5 / 100);
  font-weight: 700;
`
const Input = styled.input`
  position: relative;
  top: calc(100vh * 3 / 100);
  width: calc(100vw * 49.5 / 100);
  height: calc(100vh * 6 / 100);
  font: calc(100vh * 2.5 / 100) Pretendard;
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
const TitleCount = styled.div`
  position: absolute;
  font: calc(100vh * 1.5 / 100) Pretendard;
  left: calc(100vw * 45 / 100);
  color: #d9d9d9;
`

const TextArea = styled.textarea`
  position: relative;
  top: calc(100vh * 6 / 100);
  width: calc(100vw * 49.5 / 100);
  height: calc(100vh * 20 / 100);
  font: calc(100vh * 1.5 / 100) Pretendard;
  font-weight: 500;
  border: 0.125vh solid #242528;
  &:focus {
    outline: none;
    border-color: #5d6dff;
  }
  ::placeholder {
    color: #d9d9d9;
  }
  text-indent: 2vh;
  resize: none;
`
const TextAreaCount = styled.div`
  position: absolute;
  font: calc(100vh * 1.5 / 100) Pretendard;
  top: calc(100vh * 32 / 100);
  left: calc(100vw * 45 / 100);
  color: #d9d9d9;
`

const Back = styled.div`
  position: absolute;
  width: calc(100vw * 8 / 100);
  bottom: calc(100vh * 13.5 / 100);
  right: 0;
  padding: calc(100vh * 1.2 / 100) 0 calc(100vh * 1.2 / 100) calc(100vw * 1.1 / 100);
  font: calc(100vh * 2.4 / 100) Pretendard;
  font-weight: 500;
  color: #fff;
  background-color: #5b5d6c;
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

export default RegisterStep3Layout
