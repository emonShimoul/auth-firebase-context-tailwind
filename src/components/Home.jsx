import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

const Home = () => {
  const { user } = useContext(AuthContext);
  return (
    <div>
      <h2>This is {user && user.displayName}</h2>
    </div>
  );
};

export default Home;
