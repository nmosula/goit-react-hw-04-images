import PropTypes from 'prop-types';
import { StyledButton } from './ButtonLoadMore.styled';

const ButtonLoadMore = ({ onClick }) => (
  <StyledButton type="button" onClick={onClick}>
    Load More
  </StyledButton>
);

ButtonLoadMore.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default ButtonLoadMore;