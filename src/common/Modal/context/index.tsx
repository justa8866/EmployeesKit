import React, { createContext, FunctionComponent, PropsWithChildren, useState } from 'react'
import CustomModal from '../index'

interface IModalContextState {
  modal: boolean
  handleModal: (content?: JSX.Element) => void
  modalContent: JSX.Element | undefined
}

const ModalContext = createContext<IModalContextState | null>(null)

export const useModal = () => {
  const [modal, setModal] = useState<boolean>(false)
  const [modalContent, setModalContent] = useState<JSX.Element>()

  const handleModal = (content?: JSX.Element) => {
    setModal(prevState => !prevState)

    if (content) {
      setModalContent(content)
    }
  }

  return { modal, handleModal, modalContent }
}

const ModalProvider: FunctionComponent<PropsWithChildren> = ({ children }: PropsWithChildren) => (
  <ModalContext.Provider value={useModal()}>
    <CustomModal />
    {children}
  </ModalContext.Provider>
)

export { ModalContext, ModalProvider }
