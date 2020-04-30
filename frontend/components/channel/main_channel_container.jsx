import { connect } from "react-redux";
import { logOut } from '../../actions/session_actions';
import React, { useEffect } from 'react';
import MainChannel from "./main_channel";
import chatsSelector from "../../reducers/chats_selector";

const mapStateToProps = ({entities, session}) => {

  return {
    chats: chatsSelector(entities.channels),
    userId: session.currentUser.id

  }
};

const MapDispatchToProps = (dispatch) => {
  return {
    logOut: () => dispatch(logOut())
  }
};

const GetId = (props) => {
  debugger
  useEffect(
    () => {
      props.history.replace(`/main/${props.userId}`)
    }
    , []
  )
    return (< MainChannel />)
}



export default connect(mapStateToProps, MapDispatchToProps)(GetId); 
