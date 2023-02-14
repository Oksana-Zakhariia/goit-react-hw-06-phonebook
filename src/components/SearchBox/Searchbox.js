import { Filter, InputLabel } from './SearchBox.styled';

export const SearchBox = ({ value, onChange }) => {
  return (
    <InputLabel htmlFor="filter">
      Find contacts by name
      <Filter
        name="filter"
        type="text"
        value={value}
        onChange={onChange}
      ></Filter>
    </InputLabel>
  );
};
