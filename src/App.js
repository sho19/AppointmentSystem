import React from 'react';
import './App.css';
import Home from "./Screens/AuthenticationScreen/Home";
import {Switch,Route} from 'react-router-dom'
import RegisterationComponent from "./Screens/SigninSignup/Registeration.component";
import SignInComponent from "./Screens/SigninSignup/SignInComponent";
import {AuthContext} from './contexts/AuthContext';
import axios from 'axios';
import {UserContext} from './contexts/UserConetext';
import Header from "./Components/header/header.component";
import ls from 'local-storage'


function App() {
    const [isLogged, setIsLogged] = React.useState(false);
    const [isloading, setloading] = React.useState(true);
    const [usercontext, setUserContext] = React.useState({});

    React.useEffect(() => {
        _retrieveData();
    }, []);

    const _retrieveData = async () => {
        try {
            let value = ls.get('login');
            value = JSON.parse(value);
            console.log('retrieve value', value);
            if (value !== null) {
                if (value.login == 'true') {
                    let data = value.data;
                    setUserContext(data);
                    setIsLogged(true);
                }
            }
            setloading(false);
        } catch (error) {
            console.log(error, 'callled');
            setloading(false);
        }
    };

    const authContext = React.useMemo(
        () => ({
            signIn: async (data) => {
                const options = {
                    url:
                        'https://myappointmentsystem.herokuapp.com/login?category=service_provider',
                    method: 'POST',
                    data: {
                        userName: data.email,
                        password: data.password,
                    },
                };
                setloading(true);
                axios(options)
                    .then((response) => {
                        let result = response.data;
                        console.log(result, 'ee');
                        if (result.status == 200) {
                            if (
                                data.email == result.data.userName &&
                                data.password == result.data.password
                            ) {
                                let newObj = {
                                    login: 'true',
                                    data: result.data,
                                };
                                setUserContext(data);
                                ls.set('login', JSON.stringify(newObj));
                                // AsyncStorage.setItem('@login', JSON.stringify(newObj));
                                setIsLogged(true);
                            }
                        } else if (result.status == 400) {
                            // ToastAndroid.show(
                            //     response.data.result.toString(),
                            //     ToastAndroid.LONG,
                           //  )
                        }
                        setloading(false);
                    })
                    .catch((e) => {
                        setloading(false);
                        console.log(e, 'ee');
                    });
            },
            signUp: (data) => {
                const options = {
                    url: 'https://myappointmentsystem.herokuapp.com/signUp',
                    method: 'POST',
                    data: {
                        name: data.name,
                        category: 'service_provider',
                        userName: data.email,
                        password: data.password,
                        description:data.description
                    },
                };
                setloading(true);
                axios(options)
                    .then((response) => {
                        let result = response.data;
                        console.log(result, 'signup');
                        if (result) {
                            if (result == 'service_providercreated succesfully') {
                                // ToastAndroid.show(
                                //     'Account created succesfully',
                                //     ToastAndroid.LONG,
                                // );
                            }
                        }
                        setloading(false);
                    })
                    .catch((e) => {
                        setloading(false);
                        console.log(e, 'ee');
                    });
            },
            logout: async (data) => {
                console.log('logout');
                setloading(true);
                try {
                    ls.clear();
                    setloading(false);
                    setIsLogged(false);
                } catch (exception) {
                    setloading(false);
                }
            },
        }),
        [],
    );

    return (
        <AuthContext.Provider value={authContext}>
            <UserContext.Provider value={usercontext}>
                {isloading ?
                    (
                        <h1>Loading...</h1>
                    ):
                !isLogged ?
                    (
                        <Switch>
                            <Route exact path={'/'} exact component={SignInComponent}/>
                            <Route exact path={'/sign-up'} component={RegisterationComponent}/>
                        </Switch>
                    ): (
                        <div>
                            <Header/>
                            <Home/>
                        </div>
                        )}
            </UserContext.Provider>
        </AuthContext.Provider>

    )
}

export default App;
