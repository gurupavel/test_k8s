import React, {Component} from 'react';
import {AxiosService} from '../../servises/axios';
import {toast} from "react-toastify";
import styled, {css} from "styled-components";
import {Link} from "react-router-dom";
import {AuthContainer, ErrorContainer, HelpBlock, Button, Input, InputLabel} from "./CommonStyles";
import {onEnterClick} from "../../servises/utils";
import {bindActionCreators} from "redux";
import {requestNewPassword} from "../../actions/auth";
import connect from "react-redux/es/connect/connect";


class PasswordRecovery extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      error: ''
    };
  }

  handleClick = () => {
    const {email} = this.state;

    if (!email) {
      this.setState({
        error: 'Email cannot be blank'
      })
    } else {
      const payload = {
        email: email
      };
      this.props.requestNewPassword(payload);
    }

  }

  renderError = () => {

    if (this.state.error) {

      return (
        <ErrorContainer>
          {this.state.error}
        </ErrorContainer>
      )
    }

  };

  render() {
    return (
      <AuthContainer>
        <LeftPart>
          <div>
            equivvy
          </div>
          <div>
            Rent, share and manage your equipment on one platform
          </div>
        </LeftPart>
        <RightPart>
          <PageTitle>
            Reset password
          </PageTitle>

          <InputContainer>
            <InputLabel>
              Email
            </InputLabel>

            <Input
              error={this.state.error}
              onChange={(event) => this.setState({email: event.target.value, error: ''})}
              onKeyDown={(e) => onEnterClick(e, this.handleClick)}
            />
            {this.renderError()}
          </InputContainer>


          <Button
            onClick={this.handleClick.bind(this)}
          >
            SEND LINK
          </Button>

          <HelpBlock marginTop={20}>
            <Link
              to="/contact-us"
            >
              help
            </Link>
          </HelpBlock>

        </RightPart>

      </AuthContainer>
    );
  }
}

const RightPart = styled.div`
  margin-top: 160px;
  background: white;
  opacity: 0.9;
  padding: 80px 70px 50px 70px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 615px;
  border-radius: 4px;
  margin-bottom: 100px;
  height: 100%;
`

const LeftPart = styled.div`
  position: absolute;
  left: 2%;
  top: 320px;

div:nth-child(1) {
	color: #353535;
	font-size: 63.65px;
	font-weight: 600;
	letter-spacing: -0.5px;
	line-height: 87px;
	margin-bottom: 55px;
}

div:nth-child(2) {
  width: 325px;
	color: black;
	font-size: 18.06px;
	font-weight: 500;
	letter-spacing: 0.15px;
	line-height: 24px;
}
`

const InputContainer = styled.div`
  width: 100%;
  color: rgba(0,0,0,0.87);
	font-size: 18.06px;
	letter-spacing: 0.15px;
	line-height: 24px;
	margin-bottom: 140px;
`


const PageTitle = styled.div`
	color: rgba(0,0,0,0.87);
	font-size: 40px;
	font-weight: 500;
	letter-spacing: 0.28px;
	line-height: 55px;
  margin-bottom: 140px;
  margin-left: -5px;
`


const mapStateToProps = (state) => {
  return {
    auth: state.auth
  }
};

const mapDispatchToProps = (dispatch) => bindActionCreators({
  requestNewPassword,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(PasswordRecovery);
