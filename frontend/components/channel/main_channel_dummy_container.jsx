import { connect } from "react-redux";
import { logOut } from '../../actions/session_actions';
import React, { useEffect } from 'react';
import MainChannelDummy from "./main_channel_dummy";
import chatsSelector from "../../reducers/chats_selector";

const mapStateToProps = ({entities, session}) => {
  return {
    chats: chatsSelector(entities.channels),
    userId: session.currentUser.id

  }
};

// const MapDispatchToProps = (dispatch) => {
//   return {
//     logOut: () => dispatch(logOut())
//   }
// };

const GetId = (props) => {
  useEffect(
    () => {
      props.history.replace(`/main/${props.userId}/1`)
    }
    , []
  )
   return (< MainChannelDummy />)
}



export default connect(mapStateToProps, null)(GetId); 
