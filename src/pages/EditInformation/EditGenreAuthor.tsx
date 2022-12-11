import React from 'react'
import EditInformationLeftBarComponent from '@components/side-bar/EditInformationLeftBar'
import EditGenreAuthorLayoutComponent from '@components/edit/EditGenreAuthor'

const EditGenreAuthor = () => {
  return (
    <div style={{ display: 'flex' }}>
      <EditInformationLeftBarComponent />
      <EditGenreAuthorLayoutComponent />
    </div>
  )
}

export default EditGenreAuthor
