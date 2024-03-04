import SingUpForm from "../../components/sign-up-form/sign-up-form.component";
import SignInForm from "../../components/sign-in-form/sign-in-form.component";
import { AuthSelectionContainer } from "./auth.style.jsx";

function SingIn() {
  return (
    <AuthSelectionContainer>
      <SignInForm />
      <SingUpForm />
    </AuthSelectionContainer>
  );
}

export default SingIn;
