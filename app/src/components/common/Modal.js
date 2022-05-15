import React from 'react'

const Modal = props => {
  const description = props.description
  const closeModal = props.closeModal

  return <div className="modal basic">
      <div className="wrapper">
        <button className="btnIcon btnClose" onClick={closeModal}>
          <span className="icon-cross"></span>
        </button>

        <div className="content">
          <h3>Description</h3>
          <p dangerouslySetInnerHTML={{__html: description}}></p>
        </div>
      </div>
    </div>
}

export default Modal