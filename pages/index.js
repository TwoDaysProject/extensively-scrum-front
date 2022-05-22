import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Results from "../components/Results";
import requests from "../utils/requests";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { auth } from "../components/firebase";
import { useStateValues } from "../components/StateProvider";
import { useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";
export default function Home({ results }) {
  const [{ _ }, dispatch] = useStateValues();
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
