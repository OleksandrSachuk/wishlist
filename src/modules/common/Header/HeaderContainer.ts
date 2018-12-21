import {connect} from 'react-redux';
import {compose} from 'recompose';

import {authorizationGoogleButton} from 'modules/authorization/actions/authorization';

import Header from './Header';

const mapStateToProps = null;
const mapDispatchToProps = {
  authorizationGoogleButton
};

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(Header);
