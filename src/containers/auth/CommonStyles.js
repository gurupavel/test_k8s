import styled, { css } from 'styled-components'


export const AuthContainer = styled.div`
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

export const ErrorContainer = styled.div`
  text-align: left;
	color: red;
	margin: 10px 0 10px 0;
`


export const HelpBlock = styled.div`
  margin-top: ${props => props.marginTop}px;

	a {
    color: rgba(0,0,0,0.87);
    font-size: 18.06px;
    letter-spacing: 0.15px;
    line-height: 25px;
    border-bottom: 1px solid black;
    text-decoration: none;
	}
`


export const Button = styled.button`
  background: #353535;
	height: 60px;
	width: 265px;
	display: flex;
	justify-content: center;
	align-items: center;
	color: #FFFFFF;
	font-size: 14.85px;
	font-weight: bold;
	letter-spacing: 1.25px;
	line-height: 16px;
	text-align: center;
	border-radius: 4px;
	
	${props =>
  props.regBtn &&
  css`
    margin-top: 50px;
  `};
	
	${props =>
  props.modalBtn &&
  css`
		font-size: 18px;
  `};
`

export const Input = styled.input`
  width: calc(100% - 12px);
  height: 46px;
  border: 1px solid rgba(0,0,0,0.5);
  border-radius: 4px;
  font-size: 18px;
  padding-left: 10px;

  ${props =>
  props.error &&
  css`
    border: 1px solid red;
  `};
  
`

export const InputLabel = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-bottom: 9px;
	color: rgba(0,0,0,0.87);
	font-size: 18.06px;
	letter-spacing: 0.15px;
	line-height: 24px;
`