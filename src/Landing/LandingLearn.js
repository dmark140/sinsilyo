import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowUp, Book, GraduationCap, Timer } from "lucide-react";
import React from "react";

export default function LandingLearn() {
  const reasonsToUsePlatform = [
    {
      icon: Book,
      title: "Risk-Free Learning Environment",
      points: [
        {
          subheading: "Practice Without Financial Risk",
          description:
            "Engage in trading without the fear of losing real money. This platform provides a safe space to learn and make mistakes.",
        },
        {
          subheading: "Develop Skills",
          description:
            "Hone your trading strategies and skills in a controlled, risk-free setting.",
        },
      ],
    },
    {
      icon: Timer,
      title: "Real-Time Market Data",
      points: [
        {
          subheading: "Up-to-Date Information",
          description:
            "Access real-time market data to simulate a genuine trading experience.",
        },
        {
          subheading: "Market Conditions",
          description:
            "Experience actual market conditions, making your practice as realistic as possible.",
        },
      ],
    },
    {
      icon: GraduationCap,
      title: "Educational Resources",
      points: [
        {
          subheading: "Comprehensive Tutorials",
          description:
            "Benefit from a wide range of educational materials, including tutorials, webinars, and articles tailored for both beginners and advanced traders.",
        },
        {
          subheading: "Expert Insights",
          description:
            "Gain access to insights and strategies from experienced traders and market analysts.",
        },
      ],
    },
  ];

  return (
    <div>
      <div className="NavHidde:flex">
        {reasonsToUsePlatform.map((e, i) => (
          <>
            <Card className="border-0 shadow-none  NavHidde:w-[340px] w-[450px]  mx-auto ">
              <CardHeader className=" ">
                <CardTitle className="text-xl NavHidde:h-16 NavHidde:block flex w-fit mx-auto NavHidde:mx-0">
                  <e.icon width={20} />
                  {e.title}
                </CardTitle>
                <CardDescription>
                  <br />
                  {e.points.map((ee, ii) => (
                    <div key={ii}>
                      {ee.description}
                      <br />
                      <br />
                    </div>
                  ))}
                </CardDescription>
              </CardHeader>
            </Card>
          </>
        ))}
      </div>
    </div>
  );
}
