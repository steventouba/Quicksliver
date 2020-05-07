import React from 'react'; 
import { closeModal } from '../../actions/modal_actions'; 
import { connect } from 'react-redux';
import ChannelCreateFrom from '../channel/channel_create-form'; 

const Modal = ({modal, closeModal, currentUser}) => { 
  debugger
  if (!modal) { 
    return null; 
  }

  let component; 
  switch (modal) {
    case 'createChannel':
      component = <ChannelCreateFrom 
        currentUserId={currentUser.id}  
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
    closeModal: () => dispatch(closeModal())
  }; 
}

export default connect(mapStateToProps, mapDispatchToProps)(Modal);