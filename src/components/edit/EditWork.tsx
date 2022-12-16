import React, { useState, useEffect } from 'react'
import EditWorkLayout from '@layout/edit-information/EditWorkLayout'
import Photo from '@layout/common/Photo'
import { useNavigate } from 'react-router-dom'
import { useBringArtWorkMutation, useUpdateArtWorkMutation, useFileUploadMutation } from '@api/api'
import { useSelector } from 'react-redux'

interface state {
  artistCode: { artistCode: string }
  step1: { genre: string; name: string; email: string; linkTree: string }
  step2: { profile: []; bio: string; description: string }
  step3: { assets: []; workName: string; workExplain: string }
}

const EditWork = () => {
  const [photoComponent, setPhotoComponenet] = useState<JSX.Element[]>([<Photo />])
  const [titleLength, setTitleLength] = useState<number>(0)
  const [introduceLength, setIntroduceLength] = useState<number>(0)
  const [title, setTitle] = useState<string>('')
  const [description, setDescription] = useState<string>('')
  const [fileImage, setFileImage] = useState<string>('')
  const [filesImage, setFilesImage] = useState<
    {
      id: number
      url: string
    }[]
  >([{ id: 0, url: '' }])
  const [index, setIndex] = useState<number>(1)
  const alertFileImage: {
    id: number
    url: string
  }[] = [...filesImage]

  const [getGenre, setGetGenre] = useState<string>('')
  const [getAssets, setGetAssets] = useState<
    {
      genre: string
      isMain: boolean
      type: string
      url: string
    }[]
  >([])
  const alterAssets: {
    genre: string
    isMain: boolean
    type: string
    url: string
  }[] = [...getAssets]

  const [updateArtwork] = useUpdateArtWorkMutation()
  const [bringArtwork] = useBringArtWorkMutation()
  const [fileUpload, { data }] = useFileUploadMutation()

  const checkTitleLength = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTitleLength(e.target.value.replace(/<br\s*\/?>/gm, '\n').trim().length)
    setTitle(e.target.value.trim())
  }

  const checkIntroduceLength = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setIntroduceLength(e.target.value.replace(/<br\s*\/?>/gm, '\n').trim().length)
    setDescription(e.target.value.trim())
  }

  const photoUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    // const files = e.target.files as FileList
    // const formData = new FormData()
    // formData.append('file', files[0])
    // await fileUpload(formData)
    // console.log(alertFileImage)
    // console.log(e.target.type)
    // alertFileImage[Number(e.target.id)].url = data.url
    // setFilesImage(alertFileImage)
  }

  const addPhoto = () => {
    setIndex(index + 1)
    setPhotoComponenet([...photoComponent, <Photo />])
    setFilesImage([...filesImage, { id: index, url: '' }])
  }

  const deleteFileImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    URL.revokeObjectURL(alertFileImage[Number(e.target.id)].url)
    alertFileImage[Number(e.target.id)].url = ''
    setFilesImage(alertFileImage)
  }

  const updateInfo = async () => {
    if (title !== '' && description !== '' && fileImage !== '') {
      // if (title !== '' && description !== '' && alertFileImage[0].url !== '') {
      // const res = await updateArtwork({
      //   data: {
      //     title,
      //     description,
      //     assets: ''
      //   },
      //   code: code.artistCode
      // })
      // console.log(res)
    }
  }

  const code = useSelector((state: state) => {
    return state.artistCode
  })

  const detailArtwork = async () => {
    const res: any = await bringArtwork({
      code: code.artistCode
    })
    setTitle(res.data.data.title)
    setDescription(res.data.data.description)
    setGetAssets(res.data.data.assets)
    setGetGenre(res.data.data.artist.genre)
    console.log(res)
  }

  useEffect(() => {
    detailArtwork()
  }, [])

  return (
    <>
      <EditWorkLayout
        photoComponent={photoComponent}
        addPhoto={() => addPhoto}
        checkTitleLength={() => checkTitleLength}
        titleLength={titleLength}
        checkIntroduceLength={() => checkIntroduceLength}
        introduceLength={introduceLength}
        updateInfo={() => updateInfo}
        fileImage={fileImage}
        filesImage={filesImage}
        photoUpload={() => photoUpload}
        deleteFileImage={() => deleteFileImage}
        title={title}
        description={description}
        getAssets={getAssets}
      />
    </>
  )
}

export default EditWork
