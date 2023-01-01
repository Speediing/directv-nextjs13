import { ImageResponse } from "@vercel/og";

export const config = {
  runtime: "experimental-edge",
};
const font = fetch(
  new URL("../../assets/Roboto-Regular.ttf", import.meta.url)
).then((res) => res.arrayBuffer());

const roboBold = fetch(
  new URL("../../assets/Roboto-Bold.ttf", import.meta.url)
).then((res) => res.arrayBuffer());

export default async function OG() {
  const fontData = await font;
  const roboBoldData = await roboBold;
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "Roboto",
          backgroundColor: "white",
        }}
      >
        <div tw="bg-[#FBFBFB] flex w-full h-full flex flex-col justify-center">
          <div tw="flex justify-center text-center flex-col w-full py-4 px-4 items-center justify-between p-8">
            <div tw="flex flex-row justify-between gap-24">
              <div tw="mt-22 flex">
                <svg
                  height={65}
                  viewBox="0 0 75 65"
                  fill="black"
                  style={{ margin: "0 0" }}
                >
                  <path d="M37.59.25l36.95 64H.64l36.95-64z"></path>
                </svg>
              </div>
              <div tw="flex flex-col justify-center h-full">
                <h2 tw="text-3xl font-thin mt-24 mx-12">+</h2>
              </div>
              <img
                tw="w-[80px] h-[70px] mt-22"
                src="https://imagedelivery.net/SBiDhSEL5O7whXBpnfPxxw/417aa4a4-63e5-4809-a4e1-20d46e0e3600/big"
              />
            </div>
            <h2 tw="text-3xl pt-14 font-thin">
              DIRECTV SATELLITE & DIRECTV STREAM
            </h2>
            <h2 style={{ fontFamily: "RobotoBold" }} tw=" text-6xl font-bold">
              DIRECTV brings the holidays home.
            </h2>
            <h2 tw="text-3xl font-thin">
              No matter how you want your TV, DIRECTV delivers. It’s choice,
              without compromise.
            </h2>
          </div>
          <img
            tw="w-[100%]"
            src="https://imagedelivery.net/SBiDhSEL5O7whXBpnfPxxw/e64f386a-7252-40d7-a787-7f797b500000/big"
          />
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: "Roboto",
          data: fontData,
          style: "normal",
        },
        {
          name: "RobotoBold",
          data: roboBoldData,
          style: "normal",
        },
      ],
    }
  );
}
