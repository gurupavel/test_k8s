import React, {Component} from 'react';
import {AxiosService} from '../../servises/axios';
import {toast} from 'react-toastify';
import {contactAdmin} from "../../actions/auth";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import styled, {css} from 'styled-components'
import {AuthContainer, ErrorContainer, Button, Input, InputLabel} from "./CommonStyles";
import {onEnterClick} from "../../servises/utils";


class ContactUs extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      phone: '',
      email: '',
      information: '',
      emailError: '',
      nameError: '',
      phoneError: '',
      passwordError: '',
    }
  }

  componentDidMount() {

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

  handleClick = async () => {
    const {name, email, phone, information} = this.state;

    const payload = {
      "name": name,
      "email": email,
      "phone": phone,
      "information": information,
    };

    // to refactor in redux form
    if (!name) {
      this.setState({
        nameError: 'Name cannot be blank'
      })
    }
    if (!email) {
      this.setState({
        emailError: 'Email cannot be blank'
      })
    }
    if (!phone) {
      this.setState({
        phoneError: 'Phone cannot be blank'
      })
    }
    if (!information) {
      this.setState({
        informationError: 'Information cannot be blank'
      })
    }

    if (phone && information && name && email) {
      this.props.contactAdmin(payload);
    }
  }


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
            Contact us
          </PageTitle>

          <InputContainer firstInput>
            <InputLabel>
              Name
            </InputLabel>

            <Input
              error={this.state.nameError}
              onChange={(event) => this.setState({name: event.target.value, nameError: ''})}
              onKeyDown={(e) => onEnterClick(e, this.handleClick)}
            />
            {this.renderError('nameError')}
          </InputContainer>

          <InputContainer>
            <InputLabel>
              Phone Number
            </InputLabel>

            <Input
              error={this.state.phoneError}
              type="tel"
              onChange={(event) => this.setState({phone: event.target.value, phoneError: ''})}
              onKeyDown={(e) => onEnterClick(e, this.handleClick)}
            />
            {this.renderError('phoneError')}
          </InputContainer>


          <InputContainer>
            <InputLabel>
              Email
            </InputLabel>

            <Input
              error={this.state.emailError}
              onChange={(event) => this.setState({email: event.target.value, emailError: ''})}
              onKeyDown={(e) => onEnterClick(e, this.handleClick)}
            />
            {this.renderError('emailError')}
          </InputContainer>

          <InputContainer>
            <InputLabel>
              Description
            </InputLabel>

            <TextArea
              error={this.state.informationError}
              rows={8}
              onChange={(event) => this.setState({information: event.target.value, informationError: ''})}
              onKeyDown={(e) => onEnterClick(e, this.handleClick)}
            />
            {this.renderError('informationError')}
          </InputContainer>


          <Button
            onClick={this.handleClick.bind(this)}
          >
            SEND
          </Button>

        </RightPart>

      </AuthContainer>
    );
  }

}

const RightPart = styled.div`
  margin-top: 90px;
  background: white;
  opacity: 0.9;
  padding: 40px 70px 50px 70px;
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
	margin-bottom: 33px;
`

const TextArea = styled.textarea`
  width: calc(100% - 12px);
  border: 1px solid rgba(0,0,0,0.5);
  border-radius: 4px;
  font-size: 18px;
  padding-left: 10px;
  padding-top: 5px;
  ${props =>
  props.error &&
  css`
      border: 1px solid red;
      `};

`

const PageTitle = styled.div`
	color: rgba(0,0,0,0.87);
	font-size: 40px;
	font-weight: 500;
	letter-spacing: 0.28px;
	line-height: 55px;
  margin-bottom: 37px;
  margin-left: -20px;

`

const mapStateToProps = (state) => {
  return {
    auth: state.auth
  }
};

const mapDispatchToProps = (dispatch) => bindActionCreators({
  contactAdmin
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ContactUs);
