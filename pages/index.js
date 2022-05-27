
import Head from "next/head";
import Navbar from "../components/navbar/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useRouter } from "next/router";
import LeftNavBar from "../components/projects/LeftNavBar";
import Content from "../components/projects/Content";
export default function Home({ results }) {
  const router = useRouter();

  return (
    <div>
      <Head>
        <title>extensivly</title>
        <meta name="description" content="extensivly" />
        <link rel="icon" href="/AGRI (1).ico" />
      </Head>
      <Navbar />
      <LeftNavBar />
      <Content />
    </div>
  );
}