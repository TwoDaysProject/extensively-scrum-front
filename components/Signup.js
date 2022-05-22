import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

import { useRouter } from "next/router";

function Signup() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullname, setFullname] = useState("");
  const [adresse, setAdresse] = useState("");
  const [type, setType] = useState("pariculier");
  const [ischecked1, setIschecked1] = useState(true);
  const [ischecked2, setIschecked2] = useState(false);
  //const [password, setPassword] = useState("");

  console.log(type);

  const function2 = (e) => {
    if (ischecked1) {
      setIschecked1(false);
      setIschecked2(true);
      setType(e.target.value);
    } else {
      setType(e.target.value);
    }
  };
  const function1 = (e) => {
    if (ischecked2) {
      setIschecked2(false);
      setIschecked1(true);
      setType(e.target.value);
    } else {
      setType(e.target.value);
    }
  };

  const signIn = (e) => {
    e.preventDefault();
  };
  const register = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        if (auth) {
          const save = async () => {
            const response = await axios({
              method: "post",
              headers: { "Access-Control-Allow-Origin": "*" },
              url: "https://jeeback.herokuapp.com/api/custumer",
              data: {
                id: user.uid,
                fullname: fullname,
                email: email,
                adresse: adresse,
                type: type,
              },
            });
            router.push("/");
          };
          save().catch((error) => {
            console.log("");
          });
        }
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
        // ..
      });
  };

  return (
    <div className="flex flex-col items-center content-center    h-4">
      <img
        onClick={() => {
          router.push("/");
        }}
        className="mr-auto ml-auto mt-5 mb-20 object-contain w-52 hidden forsmall:hidden"
        src="https://i.ibb.co/FzBsVJh/AGRI-1.png"
        alt=""
      />
      <div className="items-center   object-contain flex flex-col">
        <form>
          <h5>Fullname</h5>
          <input
            required
            className="h-8 px-2  w-auto mb-5 bg-slate-900  "
            type="text"
            value={fullname}
            onChange={(e) => setFullname(e.target.value)}
          />
          <h5>Adresse</h5>
          <input
            required
            className="h-8 px-2 mb-5 bg-slate-900 "
            type="text"
            value={adresse}
            onChange={(e) => setAdresse(e.target.value)}
          />
          <h5></h5>

          <h5>e-mail</h5>
          <input
            required
            className="h-8 px-2 mb-5 bg-slate-900 "
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <h5>password</h5>
          <input
            required
            className="h-8 px-2  w-auto mb-5 bg-slate-900   "
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </form>
        <button
          onClick={register}
          type="submit"
          className="bg-slate-900 hover:bg-slate-700 h-14 w-56 border-2 mx-8"
        >
          sign up
        </button>
        <p className="mx-7 my-2 text-xl">Already have account..</p>
        <button
          onClick={() => {
            router.push("/login");
          }}
          type="submit"
          className="hover:bg-slate-700 whitespace-nowrap bg-slate-900 w-56 border-2 h-14 mx-8"
        >
          Login
        </button>
      </div>
    </div>
  );
}

export default Signup;
