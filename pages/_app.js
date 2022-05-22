import "../styles/globals.css";
import { StateProvider } from "../components/StateProvider";
import reducer, { initialState } from "../components/reducer";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import payment from "./payment";
function MyApp({ Component, pageProps }) {
  const promise = loadStripe(
    "pk_test_51KJ4HQIzlOTnDTxIpD8fdaMlKNX1GJXaeZy7tEWlz8hSUfuOEgQlJd909LdTrPsPTrYzWULZuTk4zlq61D7ysSLh00Ti2F6mYr"
  );
  return (
    <StateProvider initialState={initialState} reducer={reducer}>
      <Elements stripe={promise}>
        <Component {...pageProps} />
      </Elements>
    </StateProvider>
  );
}

export default MyApp;
