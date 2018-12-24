import * as React from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './Home';
import Product from './Product'
import Register from './auth/Register';
import Login from './auth/Login';
import SetNewPassword from './auth/SetNewPassword';
import ContactUs from './auth/ContactUs';
import Welcome from './auth/Welcome';
import PasswordRecovery from './auth/PasswordRecovery';
import { ConnectedRouter } from 'react-router-redux';
import configureStore from '../store/configureStore';
import { Slide, toast, ToastContainer } from 'react-toastify';
import createHistory from 'history/createBrowserHistory';
import 'react-toastify/dist/ReactToastify.css';
import Verification from "./Verification";

const history = createHistory();
// const store = configureStore(history);
const store = configureStore();

export const App = () => (
    <BrowserRouter>
        <div className="App">
            <ToastContainer
                autoClose={3000}
                transition={Slide}
                position={toast.POSITION.BOTTOM_LEFT}
                pauseOnHover={true}
                style={{
                    width: '100%',
                    left: 0,
                }}
            />
            <Provider store={store}>
                <ConnectedRouter history={history}>
                    <Switch>
                        <Route path="/" exact component={Home}/>
                        <Route path="/login" component={Login}/>
                        <Route path="/register" component={Register}/>
                        <Route path="/verification" component={Verification}/>
                        <Route path="/home" component={Home}/>
                        <Route path="/product" component={Product}/>
                        <Route path="/recovery" component={SetNewPassword}/>
                        <Route path="/reset_password" component={PasswordRecovery}/>
                        <Route path="/contact-us" component={ContactUs}/>
                        <Route path="/welcome" component={Welcome}/>
                    </Switch>
                </ConnectedRouter>
            </Provider>
        </div>

    </BrowserRouter>
);