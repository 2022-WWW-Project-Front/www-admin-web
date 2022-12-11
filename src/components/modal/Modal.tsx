import React, { useState, useEffect } from 'react'
import ModalLayout from '@layout/common/ModalLayout'

interface props {
  modalClose: Function
}

const Modal = ({ ...props }: props) => {
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false)
  const [timeCount, setTimeCount] = useState<number>(0)
  const duration: number = 2000
  const start: number = 0
  const end: number = 100
  const stepTime = Math.abs(Math.floor(duration / (end - start)))

  useEffect(() => {
    let currentNumber: number = start
    const timeModal = setInterval(() => {
      currentNumber += 1
      setTimeCount(currentNumber)
      if (currentNumber === end) {
        clearInterval(timeModal)
        setModalIsOpen(!modalIsOpen)
      }
    }, stepTime)
  }, [end, start, stepTime])

  return <ModalLayout modalClose={props.modalClose} modalIsOpen={modalIsOpen} timeCount={timeCount} />
}

export default Modal
