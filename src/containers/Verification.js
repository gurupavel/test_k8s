import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import { signUp } from "../actions/auth";

class Verification extends React.PureComponent {

  componentDidMount() {
    this.props.signUp();
    setTimeout(()=>this.props.history.push('/home'), 500);
  }

  render() {
    return (
      <div>
        Successfully!
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
  signUp
}, dispatch);

export default connect(null, mapDispatchToProps)(Verification);