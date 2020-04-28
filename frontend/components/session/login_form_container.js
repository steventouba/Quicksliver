import { connect } from "react-redux";
import { logIn } from '../../actions/session_actions'
import SessionForm from './session_form'; 

const mapStateToProps = (state, ownProps) => ({
  errors: state.errors.session, 
  formType: 'login', 
  form: { email: "", password: ""}
}); 

const mapDispatchToProps = (dispatch, ownProps) => ({ 
  processForm: (formData) => dispatch(logIn(formData))
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm)