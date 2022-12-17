import React, { useState, useEffect } from 'react'
import EditWorkLayout from '@layout/edit-information/EditWorkLayout'
import Photo from '@layout/common/Photo'
import { useBringArtWorkMutation, useUpdateArtWorkMutation, useFileUploadMutation } from '@api/api'
import { useSelector } from 'react-redux'

interface state {
  artistCode: { artistCode: string }
  step1: { genre: string; name: string; email: string; linkTree: string }
  step2: { profile: []; bio: string; description: string }
  step3: { assets: []; workName: string; workExplain: string }
}

const ALLOW_FILE_EXTENSION = /(\.jpg|\.jpeg|\.png|\.gif)$/i

const EditWork = () => {
  const [photoComponent, setPhotoComponenet] = useState<JSX.Element[]>([<Photo />])
  const [titleLength, setTitleLength] = useState<number>(0)
  const [introduceLength, setIntroduceLength] = useState<number>(0)
  const [title, setTitle] = useState<string>('')
  const [description, setDescription] = useState<string>('')
  const [fileImage, setFileImage] = useState<string>('')
  const [photoComponentIndex, setPhotoComponentIndex] = useState<number>(0)
  const [getGenre, setGetGenre] = useState<string>('')
  const [filesImage, setFilesImage] = useState([{ genre: getGenre, isMain: false, type: 'image', url: '' }])
  const alertFileImage: any = [...filesImage]
  const [id, setId] = useState(0)
  const [workId, setWorkId] = useState(0)
  filesImage[0].genre = getGenre

  const [getAssets, setGetAssets] = useState([])
  const alterAssets: any = [...getAssets]

  const [updateArtwork] = useUpdateArtWorkMutation()
  const [bringArtwork] = useBringArtWorkMutation()
  const [fileUpload, { data }] = useFileUploadMutation()
  const [index, setIndex] = useState(0)
  const checkTitleLength = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTitleLength(e.target.value.replace(/<br\s*\/?>/gm, '\n').trim().length)
    setTitle(e.target.value.trim())
  }

  const checkIntroduceLength = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setIntroduceLength(e.target.value.replace(/<br\s*\/?>/gm, '\n').trim().length)
    setDescription(e.target.value.trim())
  }

  const workPhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!ALLOW_FILE_EXTENSION.exec(e.target.value)) {
      alert('파일 형식을 확인해주세요.')
      return
    }
    // const files = e.target.files as FileList
    // const formData = new FormData()
    // formData.append('file', files[0])
    // await fileUpload(formData)

    alterAssets.splice(Number(e.target.id), 1, URL.createObjectURL(e.target.files![0]))
    setWorkId(Number(e.target.id))
    setGetAssets(alterAssets)
  }

  const workDeleteFileImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    setGetAssets(getAssets.filter((ele, index) => Number(e.target.id) !== index))
  }

  const photoUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    // slice를 통해 getAssets에 있는 해당 위치에 잘라내고 붙혀넣기
    if (!ALLOW_FILE_EXTENSION.exec(e.target.value)) {
      alert('파일 형식을 확인해주세요.')
      return
    }
    // const files = e.target.files as FileList
    // const formData = new FormData()
    // formData.append('file', files[0])
    // await fileUpload(formData)
    setIndex(index + 1)
    alertFileImage[index].url = URL.createObjectURL(e.target.files![0])
    setId(index)
    setFileImage(alertFileImage)
  }

  const addPhoto = () => {
    setPhotoComponenet([...photoComponent, <Photo />])
    setFilesImage([...filesImage, { genre: getGenre, isMain: false, type: 'image', url: '' }])
    // 해당 filesImage를 통하여 getAssets에 값을 추가, index대신 다른 것으로 대체를 해야할 듯
    // type같은 경우 file을 읽어서 image인지 avi인지 방법을 찾아보기
    // isMain의 경우 일단은 1번 작품이 되게 끔 설정해보기
  }

  const deleteFileImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    // slice를 통해 getAssets에 있는 해당 위치에 잘라내고 붙혀넣기
    URL.revokeObjectURL(alertFileImage[Number(e.target.id)].url)
    alertFileImage[Number(e.target.id)].url = ''
    setFilesImage(alertFileImage)
  }

  const updateInfo = async () => {
    if (description !== '') {
      // if (alertFileImage[0].url !== '') {
      //   const res = await updateArtwork({
      //     data: {
      //       title,
      //       description,
      //       assets: getAssets.concat(alertFileImage)
      //     },
      //     code: code.artistCode
      //   })
      // } else {
      //   const res = await updateArtwork({
      //     data: {
      //       title,
      //       description,
      //       assets: getAssets
      //     },
      //     code: code.artistCode
      //   })
      // }
      alert('수정이 완료되었습니다!')
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
    setPhotoComponentIndex(res.data.data.assets.length)
    setGetGenre(res.data.data.artist.genre)
    console.log(res)
  }

  useEffect(() => {
    detailArtwork()
    if (data !== '' && data !== undefined && id !== 0) {
      alertFileImage[id].url = data.url
    }
    if (data !== '' && data !== undefined && workId !== 0) {
      alterAssets[workId].url = data.url
    }
  }, [data])

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
        photoComponentIndex={photoComponentIndex}
        workPhotoUpload={() => workPhotoUpload}
        workDeleteFileImage={() => workDeleteFileImage}
      />
    </>
  )
}

export default EditWork
