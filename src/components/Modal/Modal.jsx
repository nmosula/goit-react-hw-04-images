
import { Component } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import { StyledModal, Backdrop } from './Modal.styled';

const pathToModal = document.querySelector('#modal-picture');

class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };

  handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      this.props.onClose();
    }
  };

  render() {
    const { large, tags } = this.props;

    return createPortal(
      <Backdrop onClick={this.handleBackdropClick}>
        <StyledModal>
          <img src={large} alt={tags} />
        </StyledModal>
      </Backdrop>,
      pathToModal
    );
  }
}

Modal.propTypes = {
  large: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Modal;