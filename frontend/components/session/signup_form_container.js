import { connect } from "react-redux";
import { createNewUser, demoLogIn, clearErrors } from '../../actions/session_actions'
import SessionForm from './session_form';

const mapStateToProps = (state, ownProps) => ({
  errors: state.errors.session,
  formType: 'signup', 
  form: {username:"", email: "", password: "", phoneNumber: ""}
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  processForm: (formData) => dispatch(createNewUser(formData)), 
  demoLogIn: () => dispatch(demoLogIn()),
  clearErrors: () => dispatch(clearErrors())
})

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm)