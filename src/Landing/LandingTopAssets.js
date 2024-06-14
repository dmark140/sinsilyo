import React from "react";
import { Bitcoin } from "lucide-react";
import LandingCards from "./LandingCards";
import { Button } from "@/components/ui/button";
export default function LandingTopAssets() {
  const CardsList = [
    {
      Label: "Bitcoin",
      Price: "₱3,950,025.24",
      Percentage: "0.23%",
      PercentageTrend: "Down",
      Icon: Bitcoin,
    },

    {
      Label: "Ethereum",
      Price: "₱206,382.80",
      Percentage: "0.23%",
      PercentageTrend: "Down",
      Icon: Bitcoin,
    },

    {
      Label: "Tether",
      Price: "₱58.59",
      Percentage: "0.04",
      PercentageTrend: "Up",
      Icon: Bitcoin,
    },

    {
      Label: "Solana",
      Price: "₱8,863.62",
      Percentage: "1.83%",
      PercentageTrend: "Down",
      Icon: Bitcoin,
    },

    {
      Label: "USDC",
      Price: "₱58.60",
      Percentage: "0.00%",
      PercentageTrend: "",
      Icon: Bitcoin,
    },
    {
      Label: "XRP",
      Price: "₱28.24",
      Percentage: "0.75%",
      PercentageTrend: "Down",
      Icon: Bitcoin,
    },
  ];
  return (
    <div>
      <div
        className="lgLC:grid lgLC:grid-cols-2
    
    "
      >
        <div className="px-8 mt-2  xsLC:mt-[50px] ">
          <div
            className="mt-2  lgLC:text-4xl lgLC:font-[400] 
        text-2xl font-[450] 
        "
          >
            Explore crypto like Bitcoin, Ethereum, and Dogecoin
          </div>
          <div className="mt-4  lgLC:text-4xl  font-[350] text-sm ">
            Simply and securely buy, sell, and manage hundreds of
            cryptocurrencies.
          </div>
          <Button className="mt-8">See more assets</Button>
        </div>

        <div
          className="
       
       lgLC:w-full lgLC:max-w-[412px] lgLC:mx-auto
       lgLC:grid lgLC:grid-cols-2
       mdLC:grid mdLC:grid-cols-4
        gap-4 p-4 xsLC:flex xsLC:flex-wrap"
        >
          {CardsList.map((e, i) => (
            <div className="mx-auto" key={i}>
              <LandingCards item={e} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
