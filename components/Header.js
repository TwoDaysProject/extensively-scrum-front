// no need for that import React from 'react';

import {
  BadgeCheckIcon,
  CollectionIcon,
  HomeIcon,
  LightningBoltIcon,
  SearchCircleIcon,
  UserIcon,
  ShoppingCartIcon,
  ShoppingBagIcon,
} from "@heroicons/react/outline";
import Image from "next/image";
import HeaderItem from "./HeaderItem";
import { useRouter } from "next/router";
import { useHistory } from "react-router-dom";
//import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";

function Header() {
  const router = useRouter();
  const history = useHistory();
  const handleAuth = () => {
    router.push("/login");
  };

  return (
    <header className="flex flex-col xl:flex-row m-5 justify-between items-center h-auto  ">
      <div className="flex flex-grow justify-evenly max-w-2xl">
        <HeaderItem
          title="HOME"
          Icon={HomeIcon}
          Function={() => {
            router.push("/");
          }}
        />
        <HeaderItem title="SEARCH" Icon={SearchCircleIcon} />

        <HeaderItem
          className="pt-1"
          title={"Sign In"}
          Icon={UserIcon}
          Function={handleAuth}
        />
      </div>

      <Image
        className="object-contain"
        src="https://i.ibb.co/FzBsVJh/AGRI-1.png"
        width={200}
        height={100}
      />
    </header>
  );
}

export default Header;
