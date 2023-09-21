import ReusableForm from "./ReusableForm/ReusableForm";

const App = () => {

  const handleSignUp = (data) => {
    console.log(data)
  }

  const handleUpdate = (data) => {
    console.log(data)
  }

  const handleSignin = (data) => {
    console.log(data)
  }


  return (
    <div>
      <ReusableForm formTitle="SignUp" formBtn="SignUp" handleSubmit={handleSignUp} />
      <ReusableForm formTitle="Profile Update" formBtn="Update" handleSubmit={handleUpdate} />
      <ReusableForm formTitle="Signin" formBtn="Signin" handleSubmit={handleSignin} />
    </div>
  );
};

export default App;