import React, {Component} from 'react';
import {createPassword} from "../../actions/auth";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import styled, {css} from 'styled-components'
import {Link} from 'react-router-dom';
import {ErrorContainer, HelpBlock, Button, Input} from "./CommonStyles";
import {onEnterClick} from "../../servises/utils";
import Modal from 'react-modal';


export class Welcome extends Component {

  constructor(props) {
    super(props);
    this.state = {
      password: '',
      error: '',
      modalVisibility: false
    }
  }

  handleClick = () => {
    const {password} = this.state;

    if (!password) {
      this.setState({
        error: 'Password cannot be blank'
      })
    } else {
      const payload = {
        password
      };

      this.props.createPassword(payload);
    }

  }

  closeModal = () => {
    this.props.history.push('/home');
  };

  renderError = () => {

    if (this.state.error) {
      return (
        <ErrorContainer>
          {this.state.error}
        </ErrorContainer>
      )
    }
  };

  renderImages = () => {

    return [0, 1, 2].map((item, i) => {
      return (
        <img src="/images/defaultTruck.jpg" alt=""/>
      )
    })
  };

  render() {
    const {modalVisibility} = this.props;

    return (
      <WelcomeContainer>
        <Modal
          isOpen={modalVisibility}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <ModalContent>
            <div>Congratulations, Grace</div>
            <div>You are good to go!</div>
            <Button
              modalBtn
              onClick={this.closeModal}
            >
              GO TO HOMEPAGE
            </Button>
          </ModalContent>
        </Modal>
        <LeftPart>
          <LeftHeader>
            <div>
              equivvy
            </div>
            <div>
              Rent, share and manage
            </div>
          </LeftHeader>

          {this.renderImages()}
        </LeftPart>

        <RightPart>
          <OrganizationLogo>
            ORGANIZATION
            LOGO
          </OrganizationLogo>

          <PageTitle>
            <div>
              Welcome Grace!
            </div>
            <div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco
            </div>
          </PageTitle>

          <InputContainer>
            <InputLabel>
              <span>
                Create password
              </span>

              <div>
                <div>
                  <div>
                    &ndash; One lowercase character
                  </div>
                  <div>
                    &ndash; One uppercase character
                  </div>
                </div>

                <div>
                  <div>
                    &ndash; 8 characters minimum
                  </div>
                  <div>
                    &ndash; One number
                  </div>
                </div>
              </div>

            </InputLabel>

            <Input
              error={this.state.error}
              type="password"
              onChange={(event) => this.setState({password: event.target.value, error: ''})}
              onKeyDown={(e) => onEnterClick(e, this.handleClick)}
            />
            {this.renderError()}
          </InputContainer>

          <Button
            onClick={this.handleClick}
          >
            GET STARTED
          </Button>

          <HelpBlock marginTop={40}>
            <Link
              to="/contact-us"
            >
              help
            </Link>
          </HelpBlock>
        </RightPart>

      </WelcomeContainer>
    );
  }
}

const WelcomeContainer = styled.div`
  display: flex;
  min-height: 1030px;
  width: 100%;
  
  @media (min-width: 1441px) and (max-width: 1920px) {
    min-height: 1080px;
  }
`

const LeftPart = styled.div`
  width: 305px;
  border-right: 1px solid gray;
  
  img {
    width: 100%;
    border-bottom: 1px solid;
  }
`

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
 
  div:first-child {
    width: 513px;
    color: #4A4A4A;
    font-size: 48px;
    font-weight: 600;
    line-height: 66px;
  	text-align: center;
  	margin-top: 70px;
  }
   
  div:nth-child(2) {
    width: 333px;
    color: #4A4A4A;
    font-size: 36px;
    line-height: 49px;
    text-align: center;
    margin-top: 30px;
    margin-bottom: 100px;
  }
  
`

const LeftHeader = styled.div`
  padding-left: 20px;
	height: 101px;
	background-color: #4A4A4A;
	color: white;
	
  div:first-child {
    font-size: 48px;
    font-weight: 600;
    letter-spacing: -0.38px;
    line-height: 63px;
    text-align: left;
  }
  
  div:last-child {
    font-size: 18.06px;
    font-weight: 500;
    letter-spacing: 0.15px;
    line-height: 24px;
  	text-align: left;
}
`

const OrganizationLogo = styled.div`
  margin-top: 96px;
  padding-top: 12px;
  padding-bottom: 12px;
  width: 197px;
	border: 1px solid #979797;
	background-color: #E1DFE2;
	color: #4A4A4A;
	font-size: 24px;
	font-weight: 500;
	line-height: 33px;
	text-align: center;
  margin-bottom: 55px;
`


const RightPart = styled.div`
  background-color: #D8D8D8;
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
`

const InputContainer = styled.div`
	width: 393px;
  color: rgba(0,0,0,0.87);
  font-size: 18.06px;
  letter-spacing: 0.15px;
  line-height: 24px;
  margin-bottom: 60px;
  margin-left: -25px;
`

const InputLabel = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 9px;

	>span {
	  color: #4A4A4A;
	font-size: 18px;
	font-weight: 600;
	line-height: 25px;
	text-align: center;
	margin-bottom: 10px;
	}
	
	>div {
	  display: flex;
	  
	  >div:first-child {
	    width: 210px;
	    	    margin-bottom: 5px;
	  } 
	  
	  >div {
    color: #4A4A4A;
    font-size: 14px;
    letter-spacing: 0.12px;
    line-height: 19px;
    text-align: left;
    }
	}
	
	
`

const PageTitle = styled.div`
	div:first-child {
    color: #4A4A4A;
    font-size: 60px;
    font-weight: 500;
    line-height: 82px;
    text-align: center;
    margin-bottom: 30px;
	}
	
	div:last-child {
    width: 738px;
    color: #4A4A4A;
    font-size: 22px;
    letter-spacing: 0.16px;
    line-height: 30px;
    text-align: left;
    margin-left: 60px;
    margin-bottom: 105px;
	}
`

const customStyles = {
  overlay: {
    backgroundColor: 'rgba(100, 100, 100, 0.75)'
  },
  content : {
    top           : '50%',
    left          : '50%',
    marginRight   : '-50%',
    transform     : 'translate(-50%, -50%)',
    height        : '439px',
    width         : '643px',
    border        : '1px solid #4A4A4A',
    borderRadius  : '5px',
    padding       : '0'
  }
};

Modal.setAppElement('#root');


const mapStateToProps = (state) => {
  return {
    auth: state.auth
  }
};

const mapDispatchToProps = (dispatch) => bindActionCreators({
  createPassword,
}, dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(Welcome);
