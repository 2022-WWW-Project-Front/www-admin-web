import React, { useState } from 'react'
import EditWorkLayout from '@layout/edit-information/EditWorkLayout'
import Photo from '@layout/common/Photo'
import { useNavigate } from 'react-router-dom'
import Modal from '@components/modal/Modal'

const EditWork = () => {
  const [photoComponent, setPhotoComponenet] = useState<JSX.Element[]>([<Photo />])
  const [titleLength, setTitleLength] = useState<number>(0)
  const [introduceLength, setIntroduceLength] = useState<number>(0)
  const [fileImage, setFileImage] = useState<
    {
      id: number
      url: string
    }[]
  >([{ id: 0, url: '' }])
  const [file, setFile] = useState<File[]>([])
  const [index, setIndex] = useState<number>(1)
  const alertFileImage: {
    id: number
    url: string
  }[] = [...fileImage]
  const navigate = useNavigate()
  const [timerModalIsOpen, setTimerModalIsOpen] = useState<boolean>(false)

  const addPhoto = () => {
    setIndex(index + 1)
    setPhotoComponenet([...photoComponent, <Photo />])
    setFileImage([...fileImage, { id: index, url: '' }])
  }

  const checkTitleLength = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTitleLength(e.target.value.replace(/<br\s*\/?>/gm, '\n').length)
  }

  const checkIntroduceLength = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setIntroduceLength(e.target.value.replace(/<br\s*\/?>/gm, '\n').length)
  }

  const photoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    alertFileImage[Number(e.target.id)].url = URL.createObjectURL(e.target.files![0])
    setFileImage(alertFileImage)
  }

  const deleteFileImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    URL.revokeObjectURL(alertFileImage[Number(e.target.id)].url)
    alertFileImage[Number(e.target.id)].url = ''
    setFileImage(alertFileImage)
  }

  const register = () => {
    if (titleLength !== 0 && introduceLength !== 0 && alertFileImage[0].url !== '') {
      // modal창 나오게 작업
      setTimerModalIsOpen(!timerModalIsOpen)
    }
    // 리덕스로 데이터 다 보내기
    // 이후 사진 따로, 나머지 데이터 등록
  }

  const modalClose = () => {
    setTimerModalIsOpen(!timerModalIsOpen)
    navigate('/EditInformation')
  }
  return (
    <>
      <EditWorkLayout
        photoComponent={photoComponent}
        addPhoto={() => addPhoto}
        checkTitleLength={() => checkTitleLength}
        titleLength={titleLength}
        checkIntroduceLength={() => checkIntroduceLength}
        introduceLength={introduceLength}
        register={() => register}
        fileImage={fileImage}
        photoUpload={() => photoUpload}
        deleteFileImage={() => deleteFileImage}
      />
      {timerModalIsOpen && <Modal modalClose={() => modalClose} />}
    </>
  )
}

export default EditWork
