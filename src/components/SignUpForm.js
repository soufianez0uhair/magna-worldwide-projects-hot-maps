import { Link } from "react-router-dom";

const SignUpForm = () => {
  return (
    <form className="SignUpForm">
      <h2 className="SignUpForm__title">Sign Up</h2>
      <div className="SignUpForm__2cols">
        <div className="SignUpForm__field">
          <label htmlFor="firstName" className="SignUpForm__label">First Name</label>
          <input type="text" id="firstName" name="firstName" className="SignUpForm__input" />
        </div>
        <div className="SignUpForm__field">
          <label htmlFor="lastName" className="SignUpForm__label">Last Name</label>
          <input type="text" id="lastName" name="lastName" className="SignUpForm__input" />
        </div>
      </div>
      <div className="SignUpForm__field">
          <label htmlFor="email" className="SignUpForm__label">Email</label>
          <input type="email" id="email" name="email" formNoValidate className="SignUpForm__input" />
      </div>
      <div className="SignUpForm__field">
          <label htmlFor="password" className="SignUpForm__label">Password</label>
          <input type="password" id="password" name="password" className="SignUpForm__input" />
      </div>
      <div className="SignUpForm__field">
          <label htmlFor="password2" className="SignUpForm__label">Confirm Password</label>
          <input type="password" id="password2" name="password2" className="SignUpForm__input" />
      </div>
      <button className="btn btn--signup">Sign Up</button>
      <p className="SignUpForm__redirect">Already Have an account ? <Link to="/user/login" >Log In</Link></p>
    </form>
  )
}

export default SignUpForm;