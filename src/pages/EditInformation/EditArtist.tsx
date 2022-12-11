import React from 'react'
import EditInformationLeftBarComponent from '@components/side-bar/EditInformationLeftBar'
import EditArtistComponent from '@components/edit/EditArtist'

const EditArtist = () => {
  return (
    <div style={{ display: 'flex' }}>
      <EditInformationLeftBarComponent />
      <EditArtistComponent />
    </div>
  )
}

export default EditArtist
