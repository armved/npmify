import { connect } from 'react-redux';
import PackageList from '../components/PackageList';

const mapStateToProps = state => ({
  packages: state.packages.packagesList,
  isFetching: state.packages.isFetching,
});

console.log(`packages: ${mapStateToProps.packages}`);

const PackageListContainer = connect(mapStateToProps)(PackageList);

export default PackageListContainer;
