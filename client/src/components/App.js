import React from 'react'
import {Router, Route} from 'react-router-dom'

import classes from './App.css'
import StreamCreate from './streams/StreamCreate/StreamCreate';
import StreamDelete from './streams/StreamDelete/StreamDelete';
import StreamEdit from './streams/StreamEdit/StreamEdit';
import StreamList from './streams/StreamList/StreamList';
import StreamShow from './streams/StreamShow/StreamShow';
import Header from './Header/Header'
import history from '../history'

const App = () => {
    return (
        <div className={classes.Container}>
            <Router history={history}>
                <div>
                    <Header />
                    <Route path='/' exact component={StreamList} />
                    <Route path='/streams/new' exact component={StreamCreate} />
                    <Route path='/streams/edit/:id' exact component={StreamEdit} />
                    <Route path='/streams/delete/:id' exact component={StreamDelete} />
                    <Route path='/streams/show' exact component={StreamShow} />
                </div>
            </Router>
        </div>
    )
}

export default App
