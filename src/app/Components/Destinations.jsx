import React from "react";




import CardDestinations from "./CardDestinations";
import TopDestinations from "./TopDestinations";
export default function Destinations() {
  return (
    <section className="w-full mt-5 " id='destinations'>
      <div>
        <h4 className="text-[#5E6282] font-semibold text-lg text-center overflow-hidden">
          Top Selling
        </h4>

     <TopDestinations/>
      </div>

      {/* destinations  */}
      <div className='flex lg:gap-x-8 flex-col lg:flex-row justify-center items-center w-full gap-y-5 lg:gap-y-0  lg:w-9/12 mx-auto py-8  '>
        <CardDestinations
          title="Rome,Italy"
          img="/rome.png"
          desc="10 Days Trip"
          price="$5.42K"
        />
        <CardDestinations
          title="London,UK"
          img="/london.png"
          desc="12 Days Trip"
          price="$4.2K"
        />
        <CardDestinations
          title="Full Europe"
          img="/europe.png"
          desc="18 Days Trip"
          price="$15K"
        />
      </div>
    </section>
  );
}
