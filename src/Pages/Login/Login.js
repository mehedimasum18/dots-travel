import React from 'react';
import { useHistory, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';


const Login = () => {
    

    const {setUser,signInUsingGoogle, setLoading} = useFirebase();
   
    const history = useHistory();
  const location = useLocation();
  const redirect_uri = location.state?.from || "/";

    const handleGoogleSignIn = () => {
      console.log(signInUsingGoogle);
    signInUsingGoogle()
      .then((result) => {
        const getUser = result.user;
        setUser(getUser);
        history.push(redirect_uri);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(true);
        console.log(err);
      });
  };
    return (
      <div className="d-flex align-items-center justify-content-center">
        <div>
          <h2
            style={{
              fontWeight: "bolder",
              fontSize: "5em",
              paddingBottom: ".5em",
            }}
          >
            Please Login{" "}
          </h2>
          <h4 className="mb-4 fw-bold">Login With</h4>

          <button onClick={handleGoogleSignIn} className="btn btn-warning mb-3">
            Google Sign In
          </button>
          <span>
            Don't have an account? <Link to="/login">Create an account?</Link>
          </span>
        </div>
      </div>
    );
};

export default Login;