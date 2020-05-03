import {receiveMessage} from '../../actions/message_actions'
import { connect } from 'react-redux'
import Listener from './listener'

const mapStateToProps = (state) => { 
  debugger
  return(
    {
      channels: Object.values(state.entities.channels)
    }
  )
}


const mapDispatchToProps = (dispatch) => { 

  return ( 
    { 
      receiveMessage: (message) => dispatch(receiveMessage(message))
    }
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Listener)