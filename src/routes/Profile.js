import Layout from "../components/Layout";
import Header from "../components/Header";
import { useAuthContext } from "../hooks/useAuthContext";

const Profile = (props) => {
  const { user } = useAuthContext();

  return (
    <Layout>
      <Header>Hello {user.displayName}</Header>
    </Layout>
  );
};

export default Profile;
