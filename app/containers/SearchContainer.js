import { connect } from 'react-redux';
import Search from '../components/Search';
import { getPackages } from '../actions/packageActions';

const mapDispatchToProps = dispatch => ({
  onGetPackages: (query) => {
    dispatch(getPackages(query));
  },
});

const SearchContainer = connect(null, mapDispatchToProps)(Search);

export default SearchContainer;
