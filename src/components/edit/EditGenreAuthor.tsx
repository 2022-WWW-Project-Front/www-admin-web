import React, { useState, useEffect } from 'react'
import EditGenreAuthorLayout from '@layout/edit-information/EditGenreAuthorLayout'
import { useNavigate } from 'react-router-dom'
import { useRequestSignInMutation, useEditGenreAuthorArtistMutation } from '@api/api'
import { useSelector, useDispatch } from 'react-redux'

interface state {
  artistCode: { artistCode: string }
  step1: { genre: string; name: string; email: string; linkTree: string }
  step2: { profile: []; bio: string; description: string }
  step3: { assets: []; workName: string; workExplain: string }
}

const EditGenreAuthor = () => {
  const [selectValue, setSelectValue] = useState<string>('visual')
  const [artistName, setArtistName] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [linkTree, setLinkTree] = useState<string>('')
  const [requestSignIn] = useRequestSignInMutation()
  const [editGenreAuthorArtist] = useEditGenreAuthorArtistMutation()
  const dispatch = useDispatch()

  const checkValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectValue(e.target.value)
  }
  const artistNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setArtistName(e.target.value)
  }
  const emailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value.trim())
  }
  const linkTreeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLinkTree(e.target.value.trim())
  }

  const code = useSelector((state: state) => {
    return state.artistCode
  })

  const detailGenreAuthor = async () => {
    const res: any = await requestSignIn({
      code: code.artistCode
    })
    setSelectValue(res.data.data.genre)
    setArtistName(res.data.data.nickname)
    setEmail(res.data.data.email)
    setLinkTree(res.data.data.linkTree)
  }

  const saveInfo = async () => {
    if (selectValue !== '' && artistName !== '' && email !== '') {
      await editGenreAuthorArtist({
        code: code.artistCode,
        data: {
          genre: selectValue,
          nickname: artistName,
          email: email,
          linkTree: linkTree
        }
      })
      alert('수정이 완료되었습니다!')
    }
  }

  useEffect(() => {
    detailGenreAuthor()
  }, [])

  return (
    <EditGenreAuthorLayout
      checkValue={() => checkValue}
      artistNameChange={() => artistNameChange}
      emailChange={() => emailChange}
      linkTreeChange={() => linkTreeChange}
      saveInfo={() => saveInfo}
      selectValue={selectValue}
      artistName={artistName}
      email={email}
      linkTree={linkTree}
    />
  )
}

export default EditGenreAuthor
