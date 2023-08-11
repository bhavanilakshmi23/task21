
import React, { Component } from 'react';
import { Navbar } from './components/includes/Navbar';
import { Sidebar } from './components/includes/Sidebar';
import { Footer } from './components/includes/Footer';
import { StudentAddForm } from './components/students/add';
import { StudentList } from './components/students/list';
import {Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import {NotificationContainer, NotificationManager} from 'react-notifications';
import 'react-notifications/lib/notifications.css';



class App extends Component {
  render() {
    return (
        <Router>
            <div className="wrapper">
                <Navbar />
                <Sidebar />
                <div className="content-wrapper">
                    <section className="content">
                        <Switch>
                            <Route exact path="/" component={StudentAddForm} />
                            <Route exact path="/student/:id" component={StudentAddForm} />
                            <Route exact path="/students/list" component={StudentList} />
                        </Switch>
                    </section>
                </div>
                <Footer />
                <NotificationContainer />
            </div>
        </Router>
    );
  }
}

export default App;