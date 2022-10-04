import Header from "../components/Header";
import Layout from "../components/Layout";
import LoginForm from "../components/LoginForm";

const LoginPage = (props) => {
  return (
    <Layout>
      <Header>Log In</Header>
      <LoginForm />
    </Layout>
  );
};

export default LoginPage;
