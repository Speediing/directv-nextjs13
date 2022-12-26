import Image from "next/image";

const images = [
  "https://directv.com/dtvassets/sales/directv/upper_funnel/stream/explore_stream_home/hero-carousel/hero-caro-dsk-fox-legomasters-2.jpg?noretina=true",
  "https://www.directv.com/dtvassets/sales/directv/upper_funnel/stream/explore_stream_home/hero-carousel/hero-caro-dsk-abc-livekellyandryan-2.jpg",
  "https://www.directv.com/dtvassets/sales/directv/upper_funnel/agnostic/hero-carousel/1304550-dtv-hero-caro_walkingdead.jpg",
  "https://www.directv.com/dtvassets/sales/directv/upper_funnel/stream/holiday_22/heroes/1378605-dtv-hero-caro_Merry_Swissmas.jpg",
  "https://www.directv.com/dtvassets/sales/directv/upper_funnel/stream/explore_stream_home/hero-carousel/hero-caro-dsk-lifetime-marriedatfirstsight-2.jpg",
  "https://www.directv.com/dtvassets/sales/directv/upper_funnel/agnostic/hero-carousel/1304550-dtv-hero-caro_walkingdead.jpg",
  "https://www.directv.com/dtvassets/sales/directv/upper_funnel/stream/holiday_22/heroes/1378605-dtv-hero-caro_Merry_Swissmas.jpg",
];

export default function Page() {
  return (
    <h1>
      <div className="h-24 bg-[#102641] text-white py-8 px-11 text-sm flex flex-col justify-center">
        <p className="font-semibold">GET BACK IN THE GAME WITH DIRECTV</p>
        <p>Missing the sports you love? DIRECTV has you covered.</p>
      </div>
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
          <h1 className=" pt-8 text-xl xl:text-2xl font-thin max-w-2xl text-center">
            No matter how you want your TV, DIRECTV delivers. It’s choice,
            without compromise.
          </h1>
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
      </div>
    </h1>
  );
}
