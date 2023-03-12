
import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import { StyledModal, Backdrop } from './Modal.styled';

const pathToModal = document.querySelector('#modal-picture');

const Modal = ({ img, tags, onClose }) => {

  useEffect(() => {

    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
    
  }, [onClose]);
  

  const handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };


    return createPortal(
      <Backdrop onClick={handleBackdropClick}>
        <StyledModal>
          <img src={img} alt={tags} />
        </StyledModal>
      </Backdrop>,
      pathToModal
    );

}

Modal.propTypes = {
  img: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Modal;