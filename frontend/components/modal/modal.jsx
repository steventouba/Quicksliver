import React from 'react'; 
import { closeModal } from '../../actions/modal_actions'; 
import { createChannel } from '../../actions/channel_actions'; 
import { connect } from 'react-redux';
import ChannelCreateFrom from '../channel/channel_create-form'; 

const Modal = ({modal, closeModal, createChannel, currentUser}) => { 
  if (!modal) { 
    return null; 
  }

  let component; 
  switch (modal) {
    case 'createChannel':
      component = <ChannelCreateFrom 
        currentUserId={currentUser.id}  
        createChannel={createChannel}
        closeModal={closeModal}
      /> 
      break 
  
    default:
      return null;  //returning null here because on refresh modal is an empty object {}; 
  }

  return ( 
    <div className='modal-background' onClick={closeModal}>
      <div className='modal-child' onClick={e => e.stopPropagation()}>
        {component}
      </div>
    </div>
  )
}

const mapStateToProps = (state) => { 
  return { 
    modal: state.ui.modal, 
    currentUser: state.session.currentUser
  }; 
}

const mapDispatchToProps = (dispatch) => { 

  return { 
    closeModal: () => dispatch(closeModal()), 
    createChannel: (channel) => dispatch(createChannel(channel))
  }; 
}

export default connect(mapStateToProps, mapDispatchToProps)(Modal);