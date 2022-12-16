import React, { useState } from 'react'
import SigninLayout from '@layout/signin/SigninLayout'
import { useNavigate } from 'react-router-dom'
import { useRequestSignInMutation, useRequestArtworkDetailMutation } from '@api/api'
import { useDispatch } from 'react-redux'
import { artistCode } from '@stores/artistCodeSlice'
import { step1 } from '@stores/step1Slice'
import { step2 } from '@stores/step2Slice'
import { step3 } from '@stores/step3Slice'

const Singin = () => {
  const navigate = useNavigate()
  const [code, setCode] = useState<string>('')
  const [requestSignIn] = useRequestSignInMutation()
  const dispatch = useDispatch()

  const login = async (e: React.KeyboardEvent<Element>) => {
    if (e.key === 'Enter' || e.type === 'click') {
      if (code === '') {
        alert('코드를 입력해주세요!')
        return
      } else {
        const info: any = await requestSignIn({
          code
        })
        // const artworkInfo: any = await requestArtworkDetail({
        //   code
        // })
        // console.log(artworkInfo)
        if (info.error) {
          alert('로그인에 실패했습니다. 코드를 다시 확인해주세요.')
          return
        } else {
          console.log(info)
          dispatch(
            artistCode({
              artistCode: code
            })
          )
          // dispatch(
          //   step1({
          //     genre: info.data.data.genre,
          //     name: info.data.data.nickname,
          //     email: info.data.data.email,
          //     linkTree: info.data.data.linkTree
          //   })
          // )
          // dispatch(
          //   step2({
          //     profile: [info.data.data.profile],
          //     bio: info.data.data.bio,
          //     description: info.data.data.description
          //   })
          // )
          // dispatch(
          //   step3({
          //     workName: artworkInfo.data.data.title,
          //     workExplain: artworkInfo.data.data.description
          //   })
          // )

          // if (info.data.data.profileImage) {
          navigate('/EditGenreAuthor')
          // } else {
          //   console.log(info.data)
          //   navigate('/RegisterStep1')
          // }
        }
      }
    }
  }

  const checkArtistCode = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCode(e.target.value.trim())
  }

  return <SigninLayout login={() => login} checkArtistCode={() => checkArtistCode} />
}

export default Singin
