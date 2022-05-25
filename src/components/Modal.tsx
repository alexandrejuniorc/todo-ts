import React from 'react';
// scss
import '../scss/Modal.scss';

interface Props {
  children: React.ReactNode; // is saying it will use JSX inside that child
}

const Modal = ({ children }: Props) => {
  const closeModal = (e: React.MouseEvent): void => {
    const modal = document.getElementById('modal');

    modal!.classList.add('hide');
  };

  return (
    <div id="modal" className="hide">
      <div className="fade" onClick={closeModal}></div>
      <div className="modal">
        <h2>Editar tarefa</h2>
        {children}
      </div>
    </div>
  );
};

export default Modal;
