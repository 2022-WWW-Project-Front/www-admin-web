import React from 'react'
import styled from 'styled-components'
import Photo from '@layout/common/Photo'

interface props {
  checkContentLength: Function
  checkIntroduceLength: Function
  contentLength: number
  introduceLength: number
  photoUpload: Function
  backStep1: Function
  goStep3: Function
  fileImage: string
}

const RegisterStep2Layout = ({ ...props }: props) => {
  return (
    <Container>
      <Artist>
        <ArtistArea>아티스트 사진</ArtistArea>
        <ArtistPhotoAndExplanation>
          {props.fileImage != '' ? (
            <ArtistPhoto>
              <UploadPhoto src={props.fileImage} />
              <AddButton
                type="file"
                accept="image/jpg,impge/png,image/jpeg,image/gif"
                onChange={props.photoUpload()}
                id="AddandEdit"
              />
              <Edit htmlFor="AddandEdit">변경</Edit>
            </ArtistPhoto>
          ) : (
            <ArtistPhoto>
              <Photo />
              <AddButton
                type="file"
                accept="image/jpg,impge/png,image/jpeg,image/gif"
                onChange={props.photoUpload()}
                id="AddandEdit"
              />
              <Add htmlFor="AddandEdit">추가</Add>
            </ArtistPhoto>
          )}

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
        <Input
          placeholder="본인소개를 간단하게 적어주세요"
          onKeyUp={props.checkIntroduceLength()}
          maxLength={30}
        />
        <TitleCount>
          <span>{props.introduceLength}</span>/30자
        </TitleCount>
        <TextArea
          placeholder="본인을 설명할만한 문구, 간단한 약력, 지향하는 디자인 등 자류롭게 적어주세요"
          onKeyUp={props.checkContentLength()}
          maxLength={900}
        />
        <TextAreaCount>
          <span>{props.contentLength}</span>/900자
        </TextAreaCount>
      </ArtistExplain>
      <Back onClick={props.backStep1()}>뒤로</Back>
      {props.contentLength != 0 && props.introduceLength != 0 && props.fileImage != '' ? (
        <Next style={{ backgroundColor: '#1635F4', cursor: 'pointer' }} onClick={props.goStep3()}>
          다음
        </Next>
      ) : (
        <Next>다음</Next>
      )}
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

const UploadPhoto = styled.img`
  position: relative;
  width: calc(100vh * 18 / 100);
  height: calc(100vh * 18 / 100);
  display: flex;
  background-size: cover;
  background-repeat: no-repeat;
  flex-direction: column;
  cursor: pointer;
`
const AddButton = styled.input`
  display: none;
`
const Edit = styled.label`
  position: relative;
  width: calc(100vh * 6 / 100);
  background-color: #3d3f4e;
  color: #fff;
  font: calc(100vh * 1.5 / 100) Pretendard;
  font-weight: 700;
  top: calc(100vh * 3 / 100);
  left: calc(100vh * 11.2 / 100);
  padding: calc(100vh * 0.5 / 100) calc(100vh * 0.4 / 100) calc(100vh * 0.5 / 100) calc(100vh * 0.4 / 100);
  text-align: center;
  cursor: pointer;
`
const Add = styled.label`
  position: relative;
  width: calc(100vh * 6 / 100);
  background-color: #1635f4;
  color: #fff;
  font: calc(100vh * 1.5 / 100) Pretendard;
  font-weight: 700;
  top: calc(100vh * 3 / 100);
  left: calc(100vh * 11.2 / 100);
  padding: calc(100vh * 0.5 / 100) calc(100vh * 0.4 / 100) calc(100vh * 0.5 / 100) calc(100vh * 0.4 / 100);
  text-align: center;
  cursor: pointer;
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
  cursor: pointer;
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

export default RegisterStep2Layout
