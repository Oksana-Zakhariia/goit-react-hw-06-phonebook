import { Filter, InputLabel } from './SearchBox.styled';
import { useSelector, useDispatch } from 'react-redux';
import { setContactsFilter } from 'redux/actions';
import { getContactsFilter } from 'redux/selectors';

export const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getContactsFilter);
  console.log(filter);

  const handleFilterChange = () => dispatch(setContactsFilter(value));

  const value = filter.target;
  console.log(value);
  return (
    <InputLabel htmlFor="filter">
      Find contacts by name
      <Filter
        name="filter"
        type="text"
        value={value}
        onChange={handleFilterChange}
      ></Filter>
    </InputLabel>
  );
};
