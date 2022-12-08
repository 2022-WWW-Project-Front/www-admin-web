import React, { Component, useState } from 'react'
import RegisterStep3Layout from '@layout/register-information/RegisterStep3Layout'
import Photo from '@layout/common/Photo'

const RegisterStep3 = () => {
  const [photoComponent, setPhotoComponenet] = useState<JSX.Element[]>([<Photo />])
  const addPhoto = () => {
    setPhotoComponenet([...photoComponent, <Photo />])
  }
  return <RegisterStep3Layout photoComponent={photoComponent} addPhoto={addPhoto} />
}

export default RegisterStep3
