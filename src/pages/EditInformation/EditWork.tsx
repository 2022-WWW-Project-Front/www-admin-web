import React from 'react'
import EditInformationLeftBarComponent from '@components/side-bar/EditInformationLeftBar'
import EditWorkComponent from '@components/edit/EditWork'

const EditWork = () => {
  return (
    <div style={{ display: 'flex' }}>
      <EditInformationLeftBarComponent />
      <EditWorkComponent />
    </div>
  )
}

export default EditWork
