import React, {Component} from 'react';
import {connect} from 'react-redux';
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import Paper from '@material-ui/core/Paper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import CommentIcon from '@material-ui/icons/Comment';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import {AxiosService} from "../servises/axios";
import {toast} from "react-toastify";
import styled, { css } from 'styled-components'
import localStorage from "local-storage";


export const HomeContainer = styled.div`
  display: flex;
  justify-content: center;
  background: linear-gradient(rgba(0, 0, 0, 0.15), rgba(0, 0, 0, 0.15)), url(/images/auth_background.jpg);
  background-size: 100% 100%;
  min-height: 1030px;
  width: 100%;
  
  ${props =>
  props.justifyEnd &&
  css`
    justify-content: flex-end;
  `};
  
  @media (min-width: 1441px) and (max-width: 1920px) {
    min-height: 1080px;
  }
`


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


class Home extends Component {

  constructor(props) {

    super(props);

    // Initial state
    this.state = {
      data: []
    }
  }

  componentDidMount() {


    let saveTime = new Date(localStorage.get('loginTime'));
    let currentTime = new Date();
    let difference = currentTime.getTime() - saveTime.getTime(); // This will give difference in milliseconds
    let resultInMinutes = Math.round(difference / 60000);

    // if (!localStorage.get('isAuth') || resultInMinutes > 10) { //!this.props.auth || !this.props.auth.isAuth
    //   this.props.history.push('/login');
    // }

    let params = (new URL(document.location)).searchParams;
    let verification = params.get("verification"); // is the string "Jonathan"

    if (verification && !localStorage.get('isVerified')) {
      localStorage.set('isVerified', 'true');
      toast.success("Your account has been verified!");
    }

    AxiosService.GET('/product', {}, 'product')
      .then((response) => {
        const self = this;
        if (response.status === 200) {
          console.log(response);
          self.setState({
            data: response.data.content
          });
        } else if (response.status === 500) {
          // TODO: Better error rendering
          toast.warn('500 Internal server error');
        } else {
          toast.warn(response.data);
        }
      })
      .catch(function (error) {
        toast.error(error);
      });
  }

  handleApprove = (event) => {
    alert('TODO: approving trucks will be implemented in up-coming sprints');
    console.log(event);
  };

  handleProductClick = (event) => {
    let namedItem = event.currentTarget.attributes.getNamedItem('data-tag');
    if (namedItem) {
      let currentItemIdentifier = namedItem.value;
      let currentItem = this.state.data.find((element) => element.id === parseInt(currentItemIdentifier));
      this.props.history.push({
        pathname: '/product',
        state: {item: currentItem}
      });
    }
  };

  render() {
    return (

      <MuiThemeProvider>
        <div style={styles.menuContainer}>
          <Paper>
            <MenuList>
              <MenuItem>Draft truck list</MenuItem>
              <MenuItem>My account</MenuItem>
              <MenuItem>Logout</MenuItem>
            </MenuList>
          </Paper>
        </div>
        <div style={styles.contentContainer}>
          <Paper>
            <h1>Draft trucks</h1>
            <List>
              {
                this.state.data.map((item, key) => {
                  // TODO: Remove this because it breaks identifiers coming from the database
                  item.id = key;
                  return <ListItem key={key} dense button data-tag={item.id}
                                   onClick={this.handleProductClick}>
                    <Checkbox
                      tabIndex={-1}
                      disableRipple
                    />
                    <ListItemText primary={item.manufacturer + " " + item.type}/>
                    <ListItemSecondaryAction>
                      <IconButton aria-label="Approve" onClick={this.handleApprove}>
                        <CommentIcon/>
                      </IconButton>
                    </ListItemSecondaryAction>
                  </ListItem>
                })
              }
            </List>
          </Paper>
        </div>
      </MuiThemeProvider>

    );
  }
}


const styles = {
  menuContainer: {
    float: 'left',
    width: '400px',
    height: '600px',
    background: '1px solid red'
  },
  contentContainer: {
    float: 'left',
    width: '800px',
    height: '600px'
  }
};

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};


export default connect(mapStateToProps, null)(Home);


{/*<HomeContainer>*/}

  {/*<LeftPart>*/}

  {/*</LeftPart>*/}
  {/*<RightPart>*/}

  {/*</RightPart>*/}
{/*</HomeContainer>*/}