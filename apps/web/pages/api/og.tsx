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
        <div tw="bg-white flex w-full h-full flex flex-col justify-center">
          <div tw="flex justify-center text-center flex-col w-full py-4 px-4 items-center justify-between p-8">
            <img
              tw="mt-24"
              src="https://imagedelivery.net/SBiDhSEL5O7whXBpnfPxxw/6b16c945-6155-4a3f-d75a-ca3f561ca700/big"
            />
            <h2 tw="text-3xl font-thin">DIRECTV SATELLITE & DIRECTV STREAM</h2>
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
