import "../styles/globals.css";
import { Roboto_Flex } from "@next/font/google";
import { footerItems } from "ui";
import { AnalyticsWrapper } from "./Analytics";
const roboto = Roboto_Flex({
  weight: ["300", "500", "700", "900"],
  subsets: ["latin"],
  variable: "--font-roboto",
});

export default function RootLayout({ children }: any) {
  return (
    <html lang="en">
      <head />
      <body className={`${roboto.className} text-[#102641]`}>
        <header className="font-light border-b border-gray-200">
          <div>
            <div className="flex flex-row justify-between mx-12 my-3 xl:text-base text-sm text-[#102641]">
              <div className="justify-center align-middle">
                <p>
                  Call us: {"    "}
                  <span className="font-medium underline ">833.605.2025 </span>
                </p>
              </div>
              <div className="flex flex-row">
                <p>DIRECTV - BUSINESS TV!!</p>
                <div className="flex flex-col justify-center ">
                  <div className="w-4 h-4">
                    <img
                      className=""
                      src="https://www.directv.com/dtvassets/global/icons/2022/arrow-right_lt-bg.svg"
                    ></img>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
        <div className="flex flex-row justify-between h-24 mx-6 font-light xl:text-xl ">
          <div className="flex flex-col justify-center mx-6 cursor-pointer">
            STREAM
          </div>
          <div className="flex flex-col justify-center mx-6 cursor-pointer">
            SATELLITE
          </div>
          <div className="flex flex-row justify-center flex-1 mx-6">
            <div className="w-[175px] h-[80px] ml-10 pl-2 cursor-pointer">
              <img
                src="https://www.directv.com/dtvassets/global/logos/dtv/directv/directv_hz_rgb_pos.svg"
                alt="DIRECTV home page"
              ></img>
            </div>
          </div>
          <div className="flex flex-col justify-center mx-6 cursor-pointer">
            SUPPORT
          </div>
          <div className="flex flex-col justify-center mx-6 cursor-pointer">
            SIGN-IN
          </div>
          <div className="flex flex-col justify-center mx-6 cursor-pointer">
            <span className="w-6 h-6">
              <svg viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="m5.31 12.76a7.282 7.282 0 0 0 11.333 6.065l5.377 5.307a1.428 1.428 0 0 0 1.021.417 1.473 1.473 0 0 0 1.021-.417 1.384 1.384 0 0 0 .419-1.016 1.46 1.46 0 0 0 -.419-1.016l-5.385-5.36a7.051 7.051 0 0 0 1.2-3.98 7.29 7.29 0 0 0 -14.57 0zm11.706 0a4.41 4.41 0 1 1 -4.41-4.39 4.4 4.4 0 0 1 4.41 4.39z"
                  fill="#000"
                ></path>
                <path d="m0 0h30v30h-30z" fill="none"></path>
              </svg>
            </span>
          </div>
        </div>
        <AnalyticsWrapper />
        <div>{children}</div>
        <footer className="py-20 bg-[#121212] px-32 xl:px-44 text-white">
          <span aria-hidden="true" className="fill-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              id="directv"
              x="0"
              y="0"
              version="1.1"
              width="118"
              height="23"
              viewBox="46 108 420 50"
            >
              <path fill="none" d="M0 0h490.6v288H0z"></path>
              <path d="M310.9 146.6c-1.5 6.8-6 10.8-12.7 10.8-4.4 0-8.2-1.7-10.9-5.8-2.5-4-2.3-13.1-2.3-15.8 0 0-.1-15.5.4-17.4-5.9-.2-11.5-.4-15.2-.5-.5 2.3-.4 19.9-.4 19.9 0 8.5.7 16.2 5.5 22.4 5.2 6.6 13.4 10.6 22.8 10.6 16 0 26.2-10.8 28.1-24.1h-15.3zM287.3 112.5c.5-.9 3.3-6.1 11-6.1 5.7 0 9.7 3 11.7 7.9 5.3.6 10.8 1.4 16.2 2.4-2-13-11.8-23.6-27.9-23.6-5.9 0-11.5 1.6-15.3 4-6.5 4.1-9.9 9-11.6 14.9 3.7.1 9.3.2 15.9.5zM92.9 101c-4.9-5.2-12.1-7.3-21.2-7.3H45.2V151c4.8-1.9 9.8-3.7 14.9-5.5V107h11.4c4.9 0 8.6 1.7 11 4.7 2.9 3.6 3.2 6.7 3.2 25.7 4.9-1.4 15-4 15-4-.1-18.4-.1-24.3-7.8-32.4zM185 137.2c5.9-2.1 11.3-6.8 13.2-14.2-13.4 2-34.2 5.6-53.9 10.8v36.3h14.9v-30.4h10.7l14.9 30.4H202l-17-32.9zM261.7 156.6h-35.2v-18.4h30.1v-13.4h-30.1v-5.2c-4.9.4-9.9 1-14.9 1.6v48.9h50.2v-13.3h-.1v-.2zM72.7 170.1c7.9 0 15.1-2.3 20.1-7.3 4.5-4.5 6.4-9.6 7.2-15.2-18.2 6.8-34.5 14.4-48.6 22.5h21.3zM114.4 170.1h14.9v-32.2c-5.1 1.5-10 3-14.9 4.6v27.6zM114.4 130.1c4.9-1.1 9.8-2.2 14.9-3.2V93.8h-14.9v36.3zM261.7 93.8h-50.1v21.1c5-.5 9.9-.9 14.9-1.2v-6.6h35.3V93.8h-.1zM428.8 170.1h-11.2l-25.1-76.3h15.4l15.3 49.7 15.3-49.7H454zM365.2 107.1v63h-14.9v-63h-19.9V93.8h54.7v13.3zM159.1 107.1h14c6.4 0 10.8 3.7 10.8 10.9l14.9-1.8c-.5-12.3-9.6-22.4-24.7-22.4h-29.9v30.3c4.9-.9 9.9-1.7 14.9-2.5v-14.5z"></path>{" "}
            </svg>
          </span>
          <p className="pb-4 border-b pt-11 border-b-gray-600">
            Need help? Call us at 855.559.1455
          </p>
          <div className="flex flex-row justify-start gap-3 mt-8 text-sm font-light">
            {footerItems.map((x: any, i: any) => {
              if (i % 2 === 1) return <p className="text-gray-500">{x}</p>;
              return <p className="text-white cursor-pointer">{x}</p>;
            })}
          </div>
        </footer>
      </body>
    </html>
  );
}
