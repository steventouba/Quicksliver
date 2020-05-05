import {receiveMessage} from '../../actions/message_actions'
import { connect } from 'react-redux'
import { fetchUserChannels } from "../../actions/channel_actions";
import { fetchChannelMemberships } from "../../actions/channel_memberships_actions";
import Listener from './listener'

const mapStateToProps = (state) => { 

  return(
    {
      channels: Object.values(state.entities.channels), 
      currentUser: state.session.currentUser
    }
  )
}


const mapDispatchToProps = (dispatch) => { 

  return ( 
    { 
      receiveMessage: (message) => dispatch(receiveMessage(message)), 
      fetchUserChannels: (userId) => dispatch(fetchUserChannels(userId)),
      fetchChannelMemberships: (userId) => dispatch(fetchChannelMemberships(userId))
    }
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Listener)