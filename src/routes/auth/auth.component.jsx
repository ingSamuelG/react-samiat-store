import SingUpForm from "../../components/sign-up-form/sign-up-form.component";
import SignInForm from "../../components/sign-in-form/sign-in-form.component";
import "./auth.style.scss";

function SingIn() {
  return (
    <div className="auth-selection-container">
      <SignInForm />
      <SingUpForm />
    </div>
  );
}

export default SingIn;
