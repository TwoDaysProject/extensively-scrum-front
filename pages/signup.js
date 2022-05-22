import Head from "next/head";
import Header from "../components/Header";
import Signup from "../components/Signup";

function signup() {
  return (
    <div>
      <Head>
        <title>Agri</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/AGRI (1).ico" />
      </Head>
      <Header />
      <Signup />
    </div>
  );
}

export default signup;
