import { ImageResponse } from "@vercel/og";

export const config = {
  runtime: "experimental-edge",
};

export default function OG() {
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
        <div tw="bg-gray-50 flex w-full h-full flex flex-col justify-center">
          <div tw="flex justify-center text-center flex-col w-full py-12 px-4 items-center justify-between p-8">
            <h2 tw="text-3xl font-thin">DIRECTV SATELLITE & DIRECTV STREAM</h2>
            <h2 tw=" text-6xl font-bold">DIRECTV brings the holidays home.</h2>
            <h2 tw="text-3xl font-thin">
              No matter how you want your TV, DIRECTV delivers. It’s choice,
              without compromise.
            </h2>
          </div>
        </div>
      </div>
    )
  );
}
