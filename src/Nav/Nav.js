"use client";
import { Button } from "@/components/ui/button";
import {
  ArrowLeftRight,
  Bitcoin,
  Eye,
  Hourglass,
  Menu,
  Parentheses,
  Watch,
} from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

export default function Nav() {
  const [menuIsOpen, setmenuIsOpen] = useState(false);

  const menuList = [
    {
      label: "Cryptocurrencies",
      logo: Bitcoin,
      badge: false,
    },
    {
      label: "Exchange",
      logo: ArrowLeftRight,
      badge: false,
    },
    {
      label: "NFT",
      logo: Parentheses,
      badge: false,
    },
    {
      label: "Portfolio",
      logo: Eye,
      badge: false,
    },
    {
      label: "Watchlist",
      logo: Eye,
      badge: false,
    },
    {
      label: "Products",
      logo: Eye,
      badge: false,
    },
  ];
  const test = () => {
    alert("");
  };
  return (
    <>
      <div className="h-[58px] z-50  border flex justify-between w-full fixed top-0 bg-white">
        <Image
          src={`/sinsilyoLogoBlue.png`}
          width={100}
          height={100}
          className="py-5 mx-5 "
          alt="logo"
        />
        <div className=" hidden w-full  NavHidde:flex  NavHidde:visible">
          <div className="w-full">
            {menuList.map((e, i) => (
              <Button
                key={i}
                variant="ghost"
                className="mt-2.5 font-semibold relative"
                onClick={test}
              >
                {/* <e.logo className="w-4 h-4 font-bold" strokeWidth={2.5} /> */}
                &nbsp; {e.label}
                {e.badge && (
                  <>
                    <div className="absolute inline-flex items-center justify-center w-3 h-3 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full top-[5px] end-[5px] dark:border-gray-900"></div>
                  </>
                )}
              </Button>
            ))}
          </div>
        </div>
        <div className="flex gap-2 mx-2 pt-2.5">
          <Button variant="outline" className=" invisible   NavHidde:visible">
            Sign in
          </Button>
          <Button variant="">Sign up</Button>
          <Button
            variant="ghost"
            className="visible  NavHidde:hidden"
            onClick={() => setmenuIsOpen(!menuIsOpen)}
          >
            <Menu />
          </Button>
        </div>
      </div>

      {menuIsOpen && (
        <div className=" bg-white z-50 fixed  h-full w-full mt-12">
          <div className="mx-auto">
            {menuList.map((e, i) => (
              <Button
                key={i}
                variant="ghost"
                className="mt-2.5 font-semibold relative w-full text-left  "
              >
                {/* <e.logo className="w-4 h-4 font-bold" strokeWidth={2.5} /> */}
                {e.label}
              </Button>
            ))}
          </div>
          <div className="flex gap-2 mx-2 pt-2.5">
            <Button className="w-full" variant="outline">
              Sign in
            </Button>
            <Button className="w-full" variant="">
              Sign up
            </Button>
          </div>
        </div>
      )}
    </>
  );
}
