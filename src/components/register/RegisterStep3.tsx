import React, { useState } from 'react'
import RegisterStep3Layout from '@layout/register-information/RegisterStep3Layout'
import Photo from '@layout/common/Photo'
import { useNavigate } from 'react-router-dom'
import Modal from '@components/modal/Modal'
import { useSelector, useDispatch } from 'react-redux'
import { step3, reset } from '@stores/step3Slice'

const RegisterStep3 = () => {
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
  const [workName, setWorkName] = useState<string>('')
  const [workExplain, setWorkExplain] = useState<string>('')
  const dispatch = useDispatch()
  const regiserInformation = useSelector((state) => {
    console.log(state)
    return state
  })

  const addPhoto = () => {
    setIndex(index + 1)
    setPhotoComponenet([...photoComponent, <Photo />])
    setFileImage([...fileImage, { id: index, url: '' }])
  }

  const checkTitleLength = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTitleLength(e.target.value.replace(/<br\s*\/?>/gm, '\n').trim().length)
    setWorkName(e.target.value.trim())
  }

  const checkIntroduceLength = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setIntroduceLength(e.target.value.replace(/<br\s*\/?>/gm, '\n').trim().length)
    setWorkExplain(e.target.value.trim())
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

  const backStep2 = () => {
    navigate('/RegisterStep2')
  }

  const register = () => {
    if (workName.length !== 0 && workExplain.length !== 0 && alertFileImage[0].url !== '') {
      dispatch(reset())
      dispatch(
        step3({
          assets: alertFileImage,
          workName: workName,
          workExplain: workExplain
        })
      )
      setTimerModalIsOpen(!timerModalIsOpen)
    }
  }

  const modalClose = () => {
    setTimerModalIsOpen(!timerModalIsOpen)
    navigate('/EditGenreAuthor')
  }

  return (
    <>
      <RegisterStep3Layout
        photoComponent={photoComponent}
        addPhoto={() => addPhoto}
        checkTitleLength={() => checkTitleLength}
        titleLength={titleLength}
        checkIntroduceLength={() => checkIntroduceLength}
        introduceLength={introduceLength}
        backStep2={() => backStep2}
        register={() => register}
        fileImage={fileImage}
        photoUpload={() => photoUpload}
        deleteFileImage={() => deleteFileImage}
      />
      {timerModalIsOpen && <Modal modalClose={() => modalClose} />}
    </>
  )
}

export default RegisterStep3
