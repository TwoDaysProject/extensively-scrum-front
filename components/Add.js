import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { getProviders } from "next-auth/react";

import { useRouter } from "next/router";

function Add() {
  const router = useRouter();
  const [fullname, setFullname] = useState("");
  const [project, setProject] = useState("");
  const [member1, setMember1] = useState("");
  const [member2, setMember2] = useState("");
  const [member3, setMember3] = useState("");
  const add = async () => {
    const res = await fetch(
      "https://extensively-scrum.herokuapp.com/api/project/newProject",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: fullname,
          description: project,
        }),
      }
    );
    console.log(res);
    const res2 = await fetch(
      "https://extensively-scrum.herokuapp.com/api/account/sendInvitationEmail",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: member1,
        }),
      }
    );
    const res3 = await fetch(
      "https://extensively-scrum.herokuapp.com/api/account/sendInvitationEmail",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: member2,
        }),
      }
    );
    const res4 = await fetch(
      "https://extensively-scrum.herokuapp.com/api/account/sendInvitationEmail",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: member3,
        }),
      }
    );

    router.push("/");
  };
  const register = (e) => {
    e.preventDefault();
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
      <div className="  items-center   object-contain flex flex-col">
        <form>
          <h5>name</h5>
          <input
            className="h-8 px-2 mb-5 bg-slate-900 "
            type="text"
            value={fullname}
            onChange={(e) => setFullname(e.target.value)}
          />
          <h5>description</h5>
          <input
            className="h-8 px-2 mb-5 bg-slate-900 "
            type="text"
            value={project}
            onChange={(e) => setProject(e.target.value)}
          />
          <h5>member1</h5>
          <input
            className="h-8 px-2   mb-5 bg-slate-900  "
            type="text"
            value={member1}
            onChange={(e) => setMember1(e.target.value)}
          />
          <h5>member2</h5>
          <input
            className="h-8 px-2   mb-5 bg-slate-900  "
            type="text"
            value={member2}
            onChange={(e) => setMember2(e.target.value)}
          />
          <h5>member3</h5>
          <input
            className="h-8 px-2   mb-5 bg-slate-900  "
            type="text"
            value={member3}
            onChange={(e) => setMember3(e.target.value)}
          />
        </form>
        <button
          onClick={add}
          type="submit"
          className=" hover:bg-slate-700  bg-slate-900  h-14 w-56   border-2 mx-8  "
        >
          Add
        </button>
      </div>
    </div>
  );
}

export default Add;
