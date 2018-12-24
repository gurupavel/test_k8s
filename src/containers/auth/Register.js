import React, {Component} from 'react';
import {AxiosService} from '../../servises/axios';
import {toast} from 'react-toastify';
import {signUp} from "../../actions/auth";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import styled, {css} from 'styled-components'
import {Link} from "react-router-dom";
import {AuthContainer, ErrorContainer, HelpBlock, Button, Input, InputLabel} from "./CommonStyles";
import {onEnterClick} from "../../servises/utils";


class Register extends Component {

  constructor(props) {
    super(props);
    this.state = {
      first_name: 'Name',
      last_name: 'Surname',
      email: '',
      password: '',
      confirmPassword: '',
      location: 'paris',
      organization: 'moonshot',
      role: 'renter',
      emailError: '',
      passwordError: ''
    }
  }

  static getDerivedStateFromProps(props, state) {
    if (props.auth.emailError !== state.emailError) {
      return {
        emailError: props.auth.emailError,
      };
    }
    return null;
  }

  renderError = (type) => {

    if (this.state[type]) {
      return (
        <ErrorContainer>
          {this.state[type]}
        </ErrorContainer>
      )
    }

  };

  handleClick = () => {
    const {email, password, confirmPassword} = this.state;

    if (!email) {
      this.setState({
        emailError: 'Email cannot be blank'
      });
    }

    if (password && password === confirmPassword) {
      const payload = {
        "credentials": {
          "email": email,
          "password": password
        },
        "name": this.state.first_name + ' ' + this.state.last_name,
        "location": this.state.location,
        "organization": this.state.organization,
        "role": this.state.role
      };
      this.props.signUp(payload);

    } else {
      this.setState({
        passwordError: 'Invalid password'
      });
    }
  }

  render() {
    console.log(this.props.auth);

    return (
      <AuthContainer justifyEnd>
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
            Create an account
          </PageTitle>

          <InputContainer firstInput>
            <InputLabel>
              Email Address
            </InputLabel>

            <Input
              error={this.state.emailError}
              value={this.state.email}
              onChange={(event) => this.setState({email: event.target.value, emailError: ''})}
              onKeyDown={(e) => onEnterClick(e, this.handleClick)}
            />
            {this.renderError('emailError')}

          </InputContainer>

          <InputContainer>
            <InputLabel>
              Password
            </InputLabel>

            <Input
              type="password"
              onChange={(event) => this.setState({password: event.target.value, passwordError: ''})}
              onKeyDown={(e) => onEnterClick(e, this.handleClick)}
            />
          </InputContainer>


          <InputContainer>
            <InputLabel>
              Confirm Password
            </InputLabel>

            <Input
              error={this.state.passwordError}
              type="password"
              onChange={(event) => this.setState({confirmPassword: event.target.value, passwordError: ''})}
              onKeyDown={(e) => onEnterClick(e, this.handleClick)}
            />
            {this.renderError('passwordError')}
          </InputContainer>


          <Button
            regBtn
            onClick={this.handleClick}
          >
            CREATE ACCOUNT
          </Button>

          <HelpBlock marginTop={15}>
            <Link
              to="/contact-us"
            >
              I need help!
            </Link>
          </HelpBlock>
        </RightPart>

      </AuthContainer>
    );
  }

  handleResend = (event) => {
    const payload = {
      email: this.state.email,
      action: "signup",
    };

    AxiosService.POST('/user/repeat_letter', JSON.stringify(payload), {}, 'register')
      .then((response) => {
        if (response.data.code === 200) {
          toast.success('Successfully! Please check your email');
        }
        if (response.data.code === 500) {
          toast.warn('500 Internal server error');
        }
      })
      .catch(function (error) {
        toast.error(error);
      });
  }
}


const RightPart = styled.div`
  background: white;
  opacity: 0.9;
  padding: 130px 6% 0 4%;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 42%;
`


const LeftPart = styled.div`
  position: absolute;
  left: 6%;
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
    width: 337px;
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
  margin-bottom: 45px;

	${props =>
  props.firstInput &&
  css`
      margin-bottom: 115px;
  `};
`

const PageTitle = styled.div`
	color: rgba(0,0,0,0.87);
	font-size: 40px;
	font-weight: 500;
	letter-spacing: 0.28px;
	line-height: 55px;
  margin-bottom: 97px;
`

const mapStateToProps = (state) => {
  return {
    auth: state.auth
  }
};

const mapDispatchToProps = (dispatch) => bindActionCreators({
  signUp
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Register);
