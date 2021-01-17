import React, {Component, Fragment} from 'react'
import {connect} from 'react-redux'

import Modal from '../../Modal/Modal'
import classes from './StreamDelete.css'
import history from '../../../history'
import {fetchStream} from '../../../actions'
import {Link} from 'react-router-dom'
import {deleteStream} from '../../../actions'

class StreamDelete extends Component  {

    componentDidMount() {
        this.props.fetchStream(this.props.match.params.id)
        console.log(this.props)
    }

    renderAction() {
        const id = this.props.match.params.id;
        return (
            <Fragment>
                <Link to="/" className={classes.Cancelbtn}>Cancel</Link>
                <button onClick={() => this.props.deleteStream(id)} type="button"  className={classes.Deletebtn}>Delete</button>
            </Fragment>
        )
    }

    renderContent() {
        return (this.props.stream ? 
            `Are you sure you want to delete this stream with title: ${this.props.stream.title}` :
             'Are you sure you want to delete this stream')
    }

    render() {
        return (
            <div>
                <Modal 
                    title = 'Delete Stream'
                    content = {this.renderContent()}
                    action = {this.renderAction()}
                    onDismiss = {() => history.push('/')}
                />
            </div>
        )
    }
  
}

const mapStateToProps = (state, ownProps) => {
    return {
        stream: state.streams[ownProps.match.params.id]
    }
}

export default connect(mapStateToProps, {fetchStream, deleteStream})(StreamDelete)
