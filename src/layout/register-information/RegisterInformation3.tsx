import React from 'react'
import styled from 'styled-components'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper'

import 'swiper/css'
import 'swiper/css/pagination'

const RegisterInformation3 = () => {
  const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  return (
    <Container>
      <Work>
        <ArtistArea>작품 사진</ArtistArea>
        <Swiper
          // pagination={{
          //   type: 'fraction'
          // }}
          // modules={[Pagination]}
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
          {number.map((num, idx) => (
            <SwiperSlide key={idx}>
              <ArtistPhoto>
                <IndexNumber>{idx + 1}</IndexNumber>
                <Photo>
                  <svg
                    width="6vh"
                    height="6vh"
                    viewBox="0 0 60 60"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M55 47C55 49.7615 52.7615 52 50 52H10C7.23857 52 5 49.7615 5 47V21C5 18.2386 7.23857 16 10 16H17.5L23.75 7H36.25L42.5 16H50C52.7615 16 55 18.2386 55 21V47ZM22 32.5C22 28.0817 25.5817 24.5 30 24.5C34.4183 24.5 38 28.0817 38 32.5C38 36.9183 34.4183 40.5 30 40.5C25.5817 40.5 22 36.9183 22 32.5ZM30 20.5C23.3726 20.5 18 25.8726 18 32.5C18 39.1274 23.3726 44.5 30 44.5C36.6274 44.5 42 39.1274 42 32.5C42 25.8726 36.6274 20.5 30 20.5Z"
                      fill="#1635F4"
                    />
                  </svg>
                </Photo>
                <AddButton>추가</AddButton>
              </ArtistPhoto>
            </SwiperSlide>
          ))}
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
  // width: 72vw;
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

const Photo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: calc(100vh * 18 / 100);
  height: calc(100vh * 18 / 100);
  background-color: #e9ecf8;
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

export default RegisterInformation3
