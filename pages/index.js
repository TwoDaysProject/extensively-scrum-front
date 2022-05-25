
import Head from "next/head";
import Header from "../components/Header";
import Nav from "../components/Nav";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useRouter } from "next/router";
export default function Home({ results }) {
  const router = useRouter();

  return (
    <div>
      <Head>
        <title>extensivly</title>
        <meta name="description" content="extensivly" />
        <link rel="icon" href="/AGRI (1).ico" />
      </Head>

      <Header />
      <Nav count={5} />
    </div>
  );
}