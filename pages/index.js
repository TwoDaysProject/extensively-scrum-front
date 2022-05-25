import Head from "next/head";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useRouter } from "next/router";


export default function Home({ results }) {
  const router = useRouter();
  return (<div>
      <Head>
            <title>extensivly</title>
            <meta name="description" content="extensivly" />
      </Head>
    </div>);
}
