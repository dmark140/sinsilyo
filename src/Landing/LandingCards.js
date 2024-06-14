import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowUp, Bitcoin } from "lucide-react";
import * as React from "react";
export default function LandingCards(p) {
  return (
    <Card className="w-[150px] shadow-lg  lgLC:w-[180px]  ">
      <CardHeader className="relative">
        <CardTitle className="lgLC:text-lg">
          <p.item.Icon />
          {p.item.Label}
        </CardTitle>
        <CardDescription className=" absolute top-[65px]">
          {p.item.Price}
        </CardDescription>
      </CardHeader>
      <CardFooter className="flex justify-between  lgLC:text-2xl">
        <span className="hidden lgLC:block ">
          <ArrowUp strokeWidth="2" className="text-green-700" size={40} />
        </span>
        <span className=" lgLC:hidden ">
          <ArrowUp strokeWidth="2" className="text-red-700" />
        </span>
        <span className="text-green-700 font-bold">{p.item.Percentage}</span>
      </CardFooter>
    </Card>
  );
}
