import { singInWithGooglePopUp, createUserDocumentFromAuth} from "../../utils/firebase/firebase.util";


function SingIn() {

    const logGoogleUser = async () => {
        const {user} = await singInWithGooglePopUp ();
        const userDocRef = createUserDocumentFromAuth(user)
    }

  return (
    <div>
      <h1>sing In</h1>
      <button onClick={logGoogleUser}>
            Sing with google
      </button>
    </div>
  );
}

export default SingIn;
