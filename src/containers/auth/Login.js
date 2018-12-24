import React, {Component} from 'react';
import {toast} from 'react-toastify';
import {logIn} from "../../actions/auth";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import styled, {css} from 'styled-components'
import {Link} from 'react-router-dom';
import {AuthContainer, ErrorContainer, HelpBlock, Button, Input, InputLabel} from "./CommonStyles";
import {onEnterClick} from "../../servises/utils";


export class Login extends Component {

  state = {
    email: '',
    password: '',
    rememberMeChecked: false,
    error: ''
  };

  static getDerivedStateFromProps(props, state) {
    if (props.auth.emailError !== state.emailError) {
      return {
        emailError: props.auth.emailError,
      };
    }
    return null;
  }

  handleClick = () => {
    const {email, password} = this.state;

    if (!email || !password) {
      this.setState({
        error: 'Email or Password cannot be blank'
      })
    } else {
      const payload = {
        email,
        password
      };

      this.props.logIn(payload);
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
    const {rememberMeChecked, error, email, password} = this.state;

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
            Login to your account
          </PageTitle>

          <InputContainer>
            <InputLabel>
              Email
            </InputLabel>

            <Input
              error={error}
              value={email}
              onChange={(event) => this.setState({email: event.target.value, error: ''})}
              onKeyDown={(e) => onEnterClick(e, this.handleClick)}
            />
          </InputContainer>

          <InputContainer>
            <InputLabel>
              Password
            </InputLabel>

            <Input
              error={error}
              value={password}
              type="password"
              onChange={(event) => this.setState({password: event.target.value, error: ''})}
              onKeyDown={(e) => onEnterClick(e, this.handleClick)}
            />
            {this.renderError()}
          </InputContainer>

          <RememberForgot>
            <div>
              <label className="passenger-details-checkbox">
                <input type="checkbox"
                       defaultChecked={rememberMeChecked}
                       onChange={() => this.setState({rememberMeChecked: !rememberMeChecked})}
                />
                <span className="checkmark"/>
                <div className="remember">Remember Me</div>
              </label>
            </div>

            <Link
              to="/reset_password"
            >
              Forgot Password
            </Link>
          </RememberForgot>

          <Button
            onClick={this.handleClick.bind(this)}
          >
            LOGIN
          </Button>

          <BreakLine/>

          <RegisterBlock>
            Don’t have an account?
            <Link
              to="/register"
            >
              Sign up
            </Link>
          </RegisterBlock>

          <HelpBlock marginTop={40}>
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
  margin-bottom: 60px;
`


const PageTitle = styled.div`
	color: rgba(0,0,0,0.87);
	font-size: 40px;
	font-weight: 500;
	letter-spacing: 0.28px;
	line-height: 55px;
  margin-bottom: 144px;
`

const BreakLine = styled.div`
	width: 100%;
	border-bottom: 1px solid black;
	margin: 20px 0 20px 0;
`


const RegisterBlock = styled.div`
  a {
    margin-left: 20px;
    font-size: 18px;
    font-weight: bold;
    letter-spacing: 0.12px;
    line-height: 25px;
    text-decoration: none;
  }
  
  a:visited{
    color: #000;
  }
`

const RememberForgot = styled.div`
	display: flex;
	justify-content: space-between;
	width: 100%;
	margin-bottom: 50px;
	
	
  /* Customize the label (the container) */
  .passenger-details-checkbox {
    display: block;
    position: relative;
    margin-right: 5px;
    font-size: 22px;
    height: 35px;
    width: 35px;
    margin-top: 6px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
  
  /* Hide the browser's default checkbox */
  .passenger-details-checkbox input, .payment-checkbox input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
  }
  
  /* Create a custom checkbox */
  .checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 28px;
    width: 28px;
    border: 1px solid gray;
    background-color: #fff;
  }
  
  /* Create the checkmark/indicator (hidden when not checked) */
  .checkmark:after {
    content: "";
    position: absolute;
    display: none;
  }
  
  /* Show the checkmark when checked */
  .passenger-details-checkbox input:checked ~ .checkmark:after {
    left: 9px;
    top: 3px;
    width: 8px;
    height: 14px;
    border: solid black;
    border-width: 0 3px 3px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
    content: '';
  }
  
  /* Style the checkmark/indicator */
  .passenger-details-checkbox .checkmark:after {
    display: block;
    left: 5px;
    top: -7px;
    width: 8px;
    height: 14px;
    border-width: 0 3px 3px 0;
    font-size: 32px;
  }

	
	.remember {
    color: rgba(0,0,0,0.87);
    font-size: 18px;
    letter-spacing: 0.12px;
    line-height: 29px;
    margin-left: 39px;
    width: 120px;
	}

	a {
    margin-top: 6px;
    color: rgba(0,0,0,0.87);
    font-size: 18px;
    letter-spacing: 0.12px;
    line-height: 25px;
    text-decoration: none;
    margin-bottom: 15px;
    border-bottom: 1px solid black;
	}
`

const mapStateToProps = (state) => {
  return {
    auth: state.auth
  }
};

const mapDispatchToProps = (dispatch) => bindActionCreators({
  logIn,
}, dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(Login);
