import { useDispatch } from 'react-redux';

const Register = () => {
  const dispatch = useDispatch;

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    dispatch({
      name: form.elements.name.value,
      email: form.elements.email.value,
      password: form.elements.password.value,
    });
    form.reset();
  };

  return (
    <div className="form">
      <div>
        <h1>User Registration</h1>
      </div>

      {/* Calling to the methods */}
      {/* <div className="messages">
        {errorMessage()}
        {successMessage()}
      </div> */}

      <form>
        {/* Labels and inputs for form data */}
        <label className="label">Name</label>
        <input
          // onChange={handleName}
          className="input"
          // value={name}
          type="text"
        />

        <label className="label">Email</label>
        <input
          // onChange={handleEmail}
          className="input"
          // value={email}
          type="email"
        />

        <label className="label">Password</label>
        <input
          // onChange={handlePassword}
          className="input"
          // value={password}
          type="password"
        />

        <button onClick={handleSubmit} className="btn" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Register;
