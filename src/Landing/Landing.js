import React from "react";
import LandingTopAssets from "./LandingTopAssets";
import LandingInfo from "./LandingInfo";
import LandingLearn from "./LandingLearn";
import LandingTopCrypto from "./LandingTopCrypto";

export default function Landing() {
  return (
    <>
      <div className="h-[100vh] px-4">
        <LandingInfo />
      </div>

      <div className="bg-gray-50 mt-4">
        <LandingTopAssets />
      </div>

      <div className="mt-4">
        <LandingLearn />
      </div>

      <LandingTopCrypto />
    </>
  );
}
