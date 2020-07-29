import React from "react";
import CssBaseline from '@material-ui/core/CssBaseline'
import Container from '@material-ui/core/Container'

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Header from './../components/header/header'
import Content from './../pages/content/content';
import Home from './../pages/home/home-container';
import PageNotFound from './../pages/404/page-not-found';



const App = () => {

    const renderSwitch = () => (
        <Switch>
            <Route path="/content" render={(props) => <Content {...props}/>} />
            <Route exact path="/" render={(props) => <Home {...props}/>}/>
            <Route render={(props) => <PageNotFound {...props}/>} />
        </Switch>
    );

    return (
        <Router>
            <React.Fragment>
                <CssBaseline/>
                <Header/>
                <Container>
                    <main>
                        {renderSwitch()}
                    </main>
                </Container>
            </React.Fragment>
        </Router>
    )
};

// Expose It
export default App

