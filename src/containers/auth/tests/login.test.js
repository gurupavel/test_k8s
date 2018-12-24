import React from 'react';
import { shallow, configure } from 'enzyme';
import {Login} from "../Login";
import Adapter from "enzyme-adapter-react-16";
import ToJson from "enzyme-to-json";
import 'jest-styled-components'

configure({adapter: new Adapter()});

describe('login page test', () => {

  it('login should contain 2 inputs and button', () => {

    const props = {
      auth: {
        emailError: 'error'
      }
    }

    const login = shallow(<Login {...props}/>).dive();

    expect(login.find('Button').length).toBe(1);

      // console.log(login.debug());

    // login.find('TextField').simulate('change', {currentTarget: {value: 'kek'}});
    // login.find('button').simulate('click');

    // expect(props.logIn).toHaveBeenCalledWith({text: 'kek'});
  })



  // it('login should contain 2 inputs', () => {
  //
  //   jest.spyOn(api, 'signIn').mockImplementation(() => Promise.resolve({data: 'user is logged in'}))
  //
  //   login.find('button').simulate('click');
  //
  //   expect(api.signIn).toHaveBeenCalledWith('input1val', 'input2val');
  // })
  //
  // it('login should contain 2 inputs', () => {
  //
  //   expect(login.find('input').length).toBe(2);
  //   console.log(login.debug());
  // })

  //
  // it('search should contain 1 el inside div', () => {
  //
  //   expect(searchIcon.find('div').children().length).toBe(1);
  // })
  //
  // it('defaultAvatar should contain 1 img', () => {
  //
  //   expect(defaultAvatar.find('img').exists()).toBe(true);
  // })
  //
  // it('defaultAvatar has class', () => {
  //
  //   expect(defaultAvatar.find('img').hasClass('kek')).toBe(true);
  // })
  //
  // it('defaultAvatar text', () => {
  //
  //   // selectors
  //   // find('div .img #kek a[href="tabi"]') all css selectors
  //
  //   // find('[text="Some Title"]') props selectors except key/ref
  //
  //   // constructor/displayName
  //
  //   // find({href: 'http://kek'}) object
  //
  //
  //   // expect(defaultAvatar.find('div').text()).toBe('kek');
  //
  // })

  it('snapshot testing', () => {

    // const mobileStickyFoorter = shallow(<MobileStickyFooter/>);
    //
    //
    // expect(ToJson(mobileStickyFoorter)).toMatchSnapshot();

    // selectors
    // find('div .img #kek a[href="tabi"]') all css selectors

    // find('[text="Some Title"]') props selectors except key/ref

    // constructor/displayName

    // find({href: 'http://kek'}) object


    // expect(defaultAvatar.find('div').text()).toBe('kek');

  })

  it('props testing', () => {
    // let color = '#697379';
    //
    // const search = shallow(<Search color={color}/>);
    //
    // expect(search.props().children.props.children.props.fill).toBe(color);
    // expect(search.find('path').props().fill).toBe(color);

  })

  // conditional rendering
  it('props testing 2', () => {
    // const egg = shallow(<Egg hide={false}/>);
    //
    //
    // expect(egg.find('div').length).toBe(1);
    //
    // egg.setProps({hide: true});
    //
    // //first node
    // expect(egg.get(0)).toBeNull();

  })

  //
  // // simulate testing
  // it('simulate testing', () => {
  //
  //   expect(login.find('div').length).toBe(1);
  //
  //   login.simulate('click');
  //
  //   expect(login.find('div').length).toBe(2);
  //
  // })
  //
  // // simulate testing
  // it('simulate testing 2', () => {
  //
  //   //empty state
  //   expect(login.find('h2').text()).toBe('');
  //
  //   login.simulate('change', {currentTarget: 'Alex'});
  //
  //   expect(login.find('h2').text()).toBe('Alex');
  //
  // })
  //
  //
  // // setState testing
  // it('setState testing', () => {
  //
  //   //to check attr name
  //   expect(login.find('button').attributeName('disabled')).toBe('true');
  //
  //   login.setState({disabled: false});
  //
  //   expect(login.find('button').attributeName('disabled')).toBe('false');
  //
  // })
  //
  // // setState testing
  // it('lifecycle testing', () => {
  //
  //   jest.spyOn(Login.prototype, 'componentDidMount');
  //
  //   const login = shallow(<Login/>);
  //
  //
  //   expect(login.prototype.componentDidMount.mock.calls.length).toBe(1);
  //
  //   expect(login.find('button').attributeName('disabled')).toBe('false');
  //   // check state or props change
  //   // expect(login.find('button').attributeName('disabled')).toBe('false');
  //
  // })
  //
  //
  // // setState testing
  // it('methods testing', () => {
  //
  //
  //   const login = shallow(<Login/>);
  //
  //   const result = login.instance().methodName('param');
  //
  //   expect(result).toBe(true);
  //
  //   login.find('li').at(0).simulate


  // })


});

