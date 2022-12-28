import Image from "next/image";
import left from "./leftimg.png";
import right from "./rightimg.png";
import { get } from "@vercel/edge-config";
const images = [
  "https://directv.com/dtvassets/sales/directv/upper_funnel/stream/explore_stream_home/hero-carousel/hero-caro-dsk-fox-legomasters-2.jpg?noretina=true",
  "https://www.directv.com/dtvassets/sales/directv/upper_funnel/stream/explore_stream_home/hero-carousel/hero-caro-dsk-abc-livekellyandryan-2.jpg",
  "https://www.directv.com/dtvassets/sales/directv/upper_funnel/agnostic/hero-carousel/1304550-dtv-hero-caro_walkingdead.jpg",
  "https://www.directv.com/dtvassets/sales/directv/upper_funnel/stream/holiday_22/heroes/1378605-dtv-hero-caro_Merry_Swissmas.jpg",
  "https://www.directv.com/dtvassets/sales/directv/upper_funnel/stream/explore_stream_home/hero-carousel/hero-caro-dsk-lifetime-marriedatfirstsight-2.jpg",
  "https://www.directv.com/dtvassets/sales/directv/upper_funnel/agnostic/hero-carousel/1304550-dtv-hero-caro_walkingdead.jpg",
  "https://www.directv.com/dtvassets/sales/directv/upper_funnel/stream/holiday_22/heroes/1378605-dtv-hero-caro_Merry_Swissmas.jpg",
];

export default async function Page() {
  const shouldShowHeader = await get("shouldShowHeader");
  return (
    <h1>
      {shouldShowHeader && (
        <div className="h-24 bg-[#102641] text-white py-8 px-11 text-sm flex flex-col justify-center">
          <p className="font-semibold">GET BACK IN THE GAME WITH DIRECTV</p>
          <p>Missing the sports you love? DIRECTV has you covered.</p>
        </div>
      )}
      <div className=" pt-[80px] xl:pt-[120px] flex flex-col justify-center text-center">
        <div className=" flex flex-row justify-center">
          <h2 className="text-xl xl:text-2xl font-thin">
            DIRECTV SATELLITE & DIRECTV STREAM
          </h2>
        </div>
        <h1 className="pt-4 flex flex-row justify-center text-[64px] xl:text-7xl font-bold">
          DIRECTV brings the holidays home.
        </h1>
        <div className="flex flex-row justify-center ">
          <h3 className=" pt-8 text-xl xl:text-2xl font-thin max-w-2xl text-center">
            No matter how you want your TV, DIRECTV delivers. It’s choice,
            without compromise.
          </h3>
        </div>

        <div className="relative flex  flex-row mt-6">
          <div className=" py-12 flex flex-row gap-4 w-screen max-w-screen overflow-x-hidden animate-marquee-infinite pr-2">
            {images.map((x: any) => {
              return (
                <Image
                  key={x}
                  width={300}
                  height={450}
                  className="rounded-md  w-full h-full  object-contain "
                  src={x}
                  alt=""
                />
              );
            })}
          </div>

          <div className="absolute top-0  py-12 animate-marquee-infinite2 flex flex-row gap-4 w-screen justify-between pl-2">
            {images.map((x: any) => {
              return (
                <Image
                  key={x}
                  width={300}
                  height={450}
                  className="rounded-md  w-full h-full  object-contain "
                  src={x}
                  alt=""
                />
              );
            })}
          </div>
        </div>

        <h2 className="text-[40px] xl:text-[44px] font-bold">
          Our best offers of the season!
        </h2>
        <div className="flex flex-row justify-center ">
          <h3 className=" pt-8 text-xl xl:text-2xl font-thin max-w-2xl text-center">
            Give yourself the gift of unbelievable holiday offers this season
            with DIRECTV SATELLITE and DIRECTV STREAM.
          </h3>
        </div>
        <div className="flex flex-row gap-4 justify-center mt-4 mb-12">
          <div className="pt-10 px-8 bg-[#112641] text-white rounded-md ">
            <h4 className="font-serif font-bold pb-8 text-base italic">
              DIRECTV SATELLITE
            </h4>
            <div className="flex flex-row justify-center">
              <h5 className="text-4xl max-w-md font-thin">
                Get up to $300 in VISA reward cards2 & save $120 off your
                first-year price
              </h5>
            </div>
            <button className="text-lg py-4 px-8 my-8 hover:bg-white hover:text-[#112641] rounded-full border border-white">
              Learn More
            </button>
            <div className="flex flex-row justify-center mb-4">
              <Image alt="" width={500} height={350} src={left} />
            </div>
          </div>
          <div className="pt-10 px-8 bg-[#112641] text-white rounded-md ">
            <h4 className="font-serif font-bold pb-8 text-base italic">
              DIRECTV SATELLITE
            </h4>
            <div className="flex flex-row justify-center">
              <h5 className="text-4xl max-w-md font-thin">
                Save $50 over first 5 mos. with a qualifying package & purchase
                our device
              </h5>
            </div>
            <button className="text-lg py-4 px-8 my-8 hover:bg-white hover:text-[#112641] rounded-full border border-white">
              Learn More
            </button>
            <div className="flex flex-row justify-center mb-4">
              <Image alt="" width={500} height={350} src={right} />
            </div>
          </div>
        </div>
      </div>
    </h1>
  );
}
