import React, { useState, useEffect } from 'react'
import EditArtistLayout from '@layout/edit-information/EditArtistLayout'
import { useNavigate } from 'react-router-dom'
import { useRequestSignInMutation, useEditGenreAuthorArtistMutation, useFileUploadMutation } from '@api/api'
import { useSelector } from 'react-redux'

interface state {
  artistCode: { artistCode: string }
  step1: { genre: string; name: string; email: string; linkTree: string }
  step2: { profile: []; bio: string; description: string }
  step3: { assets: []; workName: string; workExplain: string }
}

const EditArtist = () => {
  const [contentLength, setContentLength] = useState<number>(0)
  const [introduceLength, setIntroduceLength] = useState<number>(0)
  const [description, setDescription] = useState<string>('')
  const [bio, setBio] = useState<string>('')
  const [fileImage, setFileImage] = useState<string>('')
  const [requestSignIn] = useRequestSignInMutation()
  const [editGenreAuthorArtist] = useEditGenreAuthorArtistMutation()
  const [fileUpload, { data }] = useFileUploadMutation()

  const checkContentLength = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContentLength(e.target.value.replace(/<br\s*\/?>/gm, '\n').length)
    setBio(e.target.value.trim())
  }

  const checkIntroduceLength = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setIntroduceLength(e.target.value.replace(/<br\s*\/?>/gm, '\n').length)
    setDescription(e.target.value.trim())
  }

  const photoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFileImage(URL.createObjectURL(e.target.files![0]))
    const files = e.target.files as FileList

    const formData = new FormData()
    formData.append('file', files[0])
    fileUpload(formData)
  }

  const code = useSelector((state: state) => {
    return state.artistCode
  })

  const saveInfo = async () => {
    if (bio !== '' && description !== '' && fileImage !== '') {
      if (data) {
        await editGenreAuthorArtist({
          data: {
            bio,
            description,
            profileImage: data.url
          },
          code: code.artistCode
        })
      } else {
        await editGenreAuthorArtist({
          data: {
            bio,
            description
          },
          code: code.artistCode
        })
      }
      alert('수정이 완료되었습니다!')
    }
  }

  const detailArtist = async () => {
    const res: any = await requestSignIn({
      code: code.artistCode
    })
    setBio(res.data.data.bio)
    setDescription(res.data.data.description)
    setFileImage(res.data.data.profileImage)
  }

  useEffect(() => {
    detailArtist()
  }, [])

  return (
    <EditArtistLayout
      checkContentLength={() => checkContentLength}
      contentLength={contentLength}
      checkIntroduceLength={() => checkIntroduceLength}
      introduceLength={introduceLength}
      photoUpload={() => photoUpload}
      fileImage={fileImage}
      bio={bio}
      description={description}
      saveInfo={() => saveInfo}
    />
  )
}

export default EditArtist
