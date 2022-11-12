import PropTypes from 'prop-types';
import {
  FilterContainer,
  FilterTitle,
  FilterInput,
} from 'components/Filter/Filter.styled';

export const Filter = ({ value, onChange }) => {
  return (
    <FilterContainer>
      <FilterTitle>Find contacts by name:</FilterTitle>
      <FilterInput type="text" value={value} onChange={onChange} />
    </FilterContainer>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
