import Header from "../components/Header";
import Layout from "../components/Layout";
import SignUpForm from "../components/SignupForm";

const SignUpPage = (props) => {
  return (
    <Layout>
      <Header>Sign Up</Header>
      <SignUpForm />
    </Layout>
  );
};

export default SignUpPage;
