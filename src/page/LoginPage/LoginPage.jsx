import React from "react";

import NavBar from "../../components/NavBar/NavBar";
import Login from "../../components/LoginPageComponents/Login";
import Footer from "../../components/Footer/Footer";

const LoginPage = () => {
  return (
    <React.Fragment>
      <NavBar />
      <section>
        <Login />
      </section>
      <Footer />
    </React.Fragment>
  );
};

export default LoginPage;
