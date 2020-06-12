import React from 'react'; 
import { closeModal } from '../../actions/modal_actions'; 
import { createChannel } from '../../actions/channel_actions'; 
import { connect } from 'react-redux';
import ChannelCreateForm from '../channel/channel_create-form'; 
import DirectMessageCreateForm from '../channel/direct_message_create-form';


const Modal = ({modal, closeModal, createChannel, currentUser, users, errors}) => { 
  if (!modal) { 
    return null; 
  }

  let component; 

  switch (modal) {
    case 'createChannel':
      component = <ChannelCreateForm 
      currentUserId={currentUser.id}  
      createChannel={createChannel}
      closeModal={closeModal}
      errors={errors}
      />;
      break 
    case 'createDirectMessage': 
      component = <DirectMessageCreateForm
        currentUserId={currentUser.id}  
        users={users}
        createChannel={createChannel}
        closeModal={closeModal}
        errors={errors}
      />; 
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
    currentUser: state.session.currentUser, 
    users: state.entities.users,
    errors: state.errors, 
  }; 
}

const mapDispatchToProps = (dispatch) => { 

  return { 
    closeModal: () => dispatch(closeModal()), 
    createChannel: (channel) => dispatch(createChannel(channel))
  }; 
}

export default connect(mapStateToProps, mapDispatchToProps)(Modal);