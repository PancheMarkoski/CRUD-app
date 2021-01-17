import React, {Component} from 'react'
import {connect} from 'react-redux'

import classes from './StreamList.css'
import {fetchStreams} from '../../../actions'
import { FaStream } from "react-icons/fa"
import {Link} from 'react-router-dom'

class StreamList extends Component {
    componentDidMount() {
        this.props.fetchStreams();
    }


renderAdmin = (stream) => {
    if(stream.userId === this.props.currentUserId) {
        return (
            <div className={classes.Buttons}>
                <Link to={`/streams/edit/${stream.id}`} className={classes.BtnEdit}>Edit</Link>
                <Link to={`/streams/delete/${stream.id}`} className={classes.BtnDelete} >Delete</Link>
            </div>
        )
    }
}

renderCreate = () => {
    if(this.props.isSignedIn)
    return (
        <div className={classes.CreateStreamContainer}>
            <Link to='/streams/new' className={classes.CreateStream}>
                Create Stream
            </Link>
        </div>
    )
}

renderCreatedStreams = () => {
   return this.props.streams.map(stream => {
        return (
            <div key={stream.id} className={classes.StreamCard}>
                <div className={classes.StreamCardIcon}><FaStream /></div>
                <div className={classes.StreamCardConteinerItem}>
                    <h1 className={classes.StreamCardH1}>{stream.title}</h1>
                    <p>{stream.description}</p>
                </div>
                {this.renderAdmin(stream)}
            </div>
            
        )
    })
    
}



    render() {
        return (
            <div>
                <h1>Streams</h1>
                {this.renderCreatedStreams()}
                {this.renderCreate()}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        streams: Object.values(state.streams),
        currentUserId: state.auth.userId,
        isSignedIn: state.auth.isSignedIn
    }
}

export default connect(mapStateToProps, {fetchStreams})(StreamList)
