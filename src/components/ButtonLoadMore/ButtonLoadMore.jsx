import PropTypes from 'prop-types';
import { StyledButton, Section } from './ButtonLoadMore.styled';

const ButtonLoadMore = ({ onClick }) => (
  <Section>
    <StyledButton type="button" onClick={onClick}>
      Load More
    </StyledButton>
  </Section>
);

ButtonLoadMore.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default ButtonLoadMore;