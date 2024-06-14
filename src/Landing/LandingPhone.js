import React from "react";

import {
  ArrowDown,
  ArrowLeft,
  ArrowUpDown,
  Banknote,
  BanknoteIcon,
  Battery,
  BatteryMedium,
  Bitcoin,
  ChevronDown,
  ChevronRight,
  Dot,
  Signal,
  Wifi,
  X,
} from "lucide-react";
export default function LandingPhone() {
  const listx = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <div>
      <div>
        <br />
        <div className="w-[300px] rounded-2xl mx-4  border h-[600px]  shadow-2xl">
          <div className="px-4">
            <div className="flex items-center justify-between mt-1">
              <span className="text-xs font-[800]">16:21</span>
              <div className="flex gap-1 text-xs font-bold">
                <Signal width={13} strokeWidth={3} />
                <Wifi width={13} strokeWidth={3} />
                <BatteryMedium width={13} strokeWidth={3} />
              </div>
            </div>
            <div className="flex items-center justify-between mt-2">
              <X width={18} strokeWidth={2.5} calcMode="pt-1" />
              <div className="rounded-full ">
                <div className="text-xs font-bold flex gap-1 items-center bg-gray-200 rounded-full px-2">
                  One-Time order <ChevronDown width={15} strokeWidth={3} />
                </div>
              </div>
            </div>

            <div className="w-fit flex rounded-full  bg-gray-200  mt-8 ">
              <div className="text-xs font-semibold px-2 py-1 rounded-full bg-black text-white">
                Buy
              </div>
              <div className="text-xs font-semibold px-2 py-1 rounded-full  text-black">
                Sell
              </div>
              <div className="text-xs font-semibold px-2 py-1 rounded-full  text-black">
                Swap
              </div>
            </div>
            {/*  */}
            <div>
              <div className="flex mt-4">
                <span className="font-semibold text-6xl ">0</span>
                <span className=" animate-pulse  font-semibold text-6xl border-r-2 border-r-blue-500"></span>
                <span className="font-semibold text-6xl text-gray-400">
                  PHP
                </span>
              </div>
              <div className="text-blue-700 flex items-center">
                <ArrowUpDown strokeWidth={3} width={10} />
                <span className="text-xs font-bold">0.00 BTC</span>
              </div>
            </div>

            {/* buy and sell section */}
            <div className="mt-8">
              <div className="flex mt-4 items-center text-sm">
                <Bitcoin width={40} className="mx-2" strokeWidth={3} />
                <div className="block w-full">
                  <div className="font-semibold">Buy</div>
                  <div className="font-[300] text-gray-500 -mt-1 text-xs">
                    Bitcoin
                  </div>
                </div>

                <div className="block  text-xs">
                  <div className="font-semibold">$23,000.54</div>
                  <div className="font-[300] text-gray-500 -mt-1 text-xs">
                    Price
                  </div>
                </div>
                <div>
                  <ChevronRight width={15} strokeWidth={3} />
                </div>
              </div>

              <div className="flex mt-4 items-center text-sm">
                <BanknoteIcon width={40} className="mx-2" strokeWidth={3} />
                <div className="block w-full">
                  <div className="font-semibold">Buy</div>
                  <div className="font-[300] text-gray-500 -mt-1 text-xs">
                    Bitcoin
                  </div>
                </div>

                <div className="block text-xs">
                  <div className="font-semibold">$15,000.00</div>
                  <div className="font-[300] text-gray-500 -mt-1 text-xs">
                    Available
                  </div>
                </div>
                <div>
                  <ChevronRight width={15} strokeWidth={3} />
                </div>
              </div>
            </div>
          </div>

          {/* prices */}
          <div className="border-t mt-4">
            <div className="flex items-center justify-evenly  mt-2">
              <div className="bg-gray-200  w-[60px] rounded-full">
                <div className="mx-auto w-fit font-semibold text-sm py-1 ">
                  $10
                </div>
              </div>

              <div className="bg-gray-200  w-[60px] rounded-full">
                <div className="mx-auto w-fit font-semibold text-sm py-1 ">
                  $50
                </div>
              </div>

              <div className="bg-gray-200  w-[60px] rounded-full">
                <div className="mx-auto w-fit font-semibold text-sm py-1 ">
                  $100
                </div>
              </div>
            </div>
          </div>

          <div className="mt-4">
            <div className="grid grid-cols-3">
              {listx.map((e) => (
                <>
                  <div className="mx-auto mt-4 font-bold ">{e}</div>
                </>
              ))}
              <div className="mx-auto mt-4 font-bold ">
                <Dot />
              </div>
              <div className="mx-auto mt-4 font-bold ">0</div>
              <div className="mx-auto mt-4 font-bold ">
                <ArrowLeft width={18} strokeWidth={3} />
              </div>
            </div>
          </div>
          <div className="border-2 w-1/3 mx-auto mt-8 border-black rounded-sm"></div>
        </div>
      </div>
    </div>
  );
}
