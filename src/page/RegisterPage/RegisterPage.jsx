import React from "react";

import NavBar from "../../components/NavBar/NavBar";
import SignUp from "../../components/RegisterPageComponents/SignUp";
import Footer from "../../components/Footer/Footer";

const RegisterPage = () => {
  return (
    <React.Fragment>
      <NavBar />
      <section>
        <SignUp />
      </section>
      <Footer />
    </React.Fragment>
  );
};

export default RegisterPage;
