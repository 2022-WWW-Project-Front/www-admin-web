import React from 'react'
import styled from 'styled-components'

const RegisterInformation2 = () => {
  return (
    <Container>
      <Artist>
        <ArtistArea>아티스트 사진</ArtistArea>
        <ArtistPhotoAndExplanation>
          <ArtistPhoto>
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
          <Explanation>
            <ExplanationList>권장사이즈 : 500x500 px이상</ExplanationList>
            <ExplanationList>가로세로 정비율 이미지만 등록할 수 있습니다</ExplanationList>
            <ExplanationList>파일형식은 jpg, jpeg, gif,png만 등록이 가능합니다</ExplanationList>
            <ExplanationList>인물사진이 아닌 그래픽으로 대체할 수 있습니다</ExplanationList>
            <ExplanationList>
              팀당 한장만 등록할 수 있습니다 단체팀의 경우 같이 나오는 사진으로 올려주세요
            </ExplanationList>
            <ExplanationList>사진 용량은 최대 10mb까지 허용합니다</ExplanationList>
          </Explanation>
        </ArtistPhotoAndExplanation>
      </Artist>
      <ArtistExplain>
        <AuthorName>작가 설명</AuthorName>
        <Input placeholder="본인소개를 간단하게 적어주세요" />
        <TitleCount>
          <span>0</span>/30자
        </TitleCount>
        <TextArea placeholder="본인을 설명할만한 문구, 간단한 약력, 지향하는 디자인 등 자류롭게 적어주세요" />
        <TextAreaCount>
          <span>0</span>/900자
        </TextAreaCount>
      </ArtistExplain>
      <Back>뒤로</Back>
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
const Artist = styled.div`
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

const ArtistPhotoAndExplanation = styled.div`
  display: flex;
  font-weight: 700;
`
const ArtistPhoto = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  top: calc(100vh * 2 / 100);
  cursor: pointer;
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
  background-color: #1635f4;
  color: #fff;
  font: calc(100vh * 1.5 / 100) Pretendard;
  font-weight: 700;
  top: calc(100vh * 3 / 100);
  left: calc(100vh * 10 / 100);
  padding: calc(100vh * 0.5 / 100) calc(100vh * 1 / 100) calc(100vh * 0.5 / 100) calc(100vh * 1 / 100);
  text-align: center;
`
const Explanation = styled.div`
  position: relative;
  color: #3d3f4e;
  top: calc(100vh * 7 / 100);
  left: calc(100vw * 4 / 100);
  font: calc(100vh * 1.5 / 100) Pretendard;
  font-weight: 700;
`
const ExplanationList = styled.li`
  margin-bottom: calc(100vh * 1 / 100);
  font-size: calc(100vh * 1.5 / 100);
`

const ArtistExplain = styled.div`
  position: relative;
  top: calc(100vh * 30 / 100);
  left: calc(100vw * 8.8 / 100);
  font-size: calc(100vh * 2.5 / 100);
  font-weight: 700;
`
const AuthorName = styled.div`
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

export default RegisterInformation2
