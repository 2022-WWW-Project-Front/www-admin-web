import React from 'react'
import EditInformationLeftBarLayout from '@layout/common/EditInformationLeftBarLayout'
import { useLocation, useNavigate } from 'react-router-dom'

interface location {
  hash: string
  key: string
  pathname: string
  search: string
  state: string | null
}

const EditInformationLeftBar = () => {
  const location: location = useLocation()
  const navigate = useNavigate()

  const logout = () => {
    navigate('/')
  }

  const goEditGenreAuthor = () => {
    navigate('/EditGenreAuthor')
  }

  const goEditArtist = () => {
    navigate('/EditArtist')
  }

  const goEditWork = () => {
    navigate('/EditWork')
  }

  return (
    <EditInformationLeftBarLayout
      logout={() => logout}
      goEditGenreAuthor={() => goEditGenreAuthor}
      goEditArtist={() => goEditArtist}
      goEditWork={() => goEditWork}
    />
  )
}

export default EditInformationLeftBar
