import {connect} from 'react-redux';
import {compose} from 'recompose';

import {loginWithGoogle} from 'firebaseConfig/utils';

import Header from './Header';

const mapDispatchToProps = () => ({loginWithGoogle});

export default compose(
  connect(
    null,
    mapDispatchToProps
  )
)(Header);
