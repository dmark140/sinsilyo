import React from "react";
import LandingPhone from "./LandingPhone";
import { Button } from "@/components/ui/button";

export default function LandingInfo() {
  return (
    <div className="LandingPhoneMD:flex  LandingPhoneMD:items-center gap-4 ">
      <div className="w-fit mx-auto">
        <LandingPhone />
      </div>
      <div className="mx-4">
        <div
          className="text-4xl font-bold 
        LandingPhoneMD:mt-0
        mt-4
        
        "
        >
          Get started in crypto trading
          <span className="  bg-black rounded-md text-white ">
            without risking
          </span>
          your own money
        </div>

        <div className="text-xl  mb-4 mt-8">
          Sign up for a free Demo account today to gain real market experience
          with Demo funds!
        </div>
        <Button
          className="text-xl p-5 mt-8 w-full 
        LandingPhoneMD:w-fit "
        >
          {" "}
          Start Trading
        </Button>
      </div>
    </div>
  );
}
