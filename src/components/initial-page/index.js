import { connect } from 'react-redux';
import setUserName from '../../redux/actions/setUserName';
import InitialPageContainer from "./initialPageContainer";

const mapDispatchToProps = dispatch => ({
  setUserName: userName => dispatch(setUserName(userName)),
  dispatch,
});

export default connect(null, mapDispatchToProps)(InitialPageContainer);
