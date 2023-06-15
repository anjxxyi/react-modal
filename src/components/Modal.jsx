import React from 'react'

const Modal = (props) => {
  const setModal = props.setModal;
  return (
    <div className="modalWindow">
      <div className="modalBox">
        <h2 className="title">Lorem Ipsum</h2>
        <div className="contents">
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
          </p>
          <p>
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
          </p>
          <p>
            It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
          </p>
          <p>
            It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
        <button className="imgType" onClick={() => {setModal(false)}}>
          <img src="https://img.icons8.com/?size=512&id=82771&format=png" alt="ModalClose" />
        </button>
      </div>
    </div>
  )
}

export default Modal