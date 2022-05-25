import { useRouter } from "next/router";
import { Pagination } from "@mui/material";
import { useState } from "react";

function Nav({ count }) {
  const router = useRouter();
  const [page, setPage] = useState(1);
  const [key, setKey] = useState("fetchALL");

  const handleChange = (event, value) => {
    setPage(value);
    console.log(page);
    router.push(`/?category=${key}&page=${page}`);
  };
  return (
    <nav className="relative">
      <div
        className="flex px-10 
      sm:px-20 text-2xl whitespace-nowrap 
      space-x-10 sm:space-x-20 overflow-x-scroll 
      scrollbar-hide"
      ></div>
      <div
        className="absolute top-0 right-0 bg-gradient-to-l 
      from-[#0622A] h-10 w-1/12"
      />
      <div className="flex justify-center pt-4">
        <Pagination
          onChange={handleChange}
          count={Math.floor(count / 3) + 1}
          color="primary"
        />
      </div>
    </nav>
  );
}

export default Nav;
