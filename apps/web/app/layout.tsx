import "../styles/globals.css";
import { Roboto_Flex } from "@next/font/google";

const roboto = Roboto_Flex({
  weight: ["300", "500", "700", "900"],
  subsets: ["latin"],
  variable: "--font-roboto",
});

export default function RootLayout({ children }: any) {
  return (
    <html lang="en">
      <head />
      <body className={roboto.className}>
        <header className="border-b border-gray-200 font-light">
          <div>
            <div className="flex flex-row justify-between mx-12 my-3 text-sm text-[#102641]">
              <div className="align-middle justify-center">
                <p>
                  Call us: {"    "}
                  <span className="font-medium underline">833.605.2025 </span>
                </p>
              </div>
              <div className="flex flex-row">
                <p>DIRECTV - BUSINESS TV</p>
                <div className="flex flex-col justify-center ">
                  <div className="h-4 w-4">
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
        <div className="h-24 flex flex-row justify-between mx-6 font-light">
          <div className="mx-6 flex flex-col justify-center">STREAM</div>
          <div className="mx-6 flex flex-col justify-center">SATELLITE</div>
          <div className="mx-6 flex flex-1 flex-row justify-center">
            <div className="w-[175px] h-[80px] ml-10 pl-2">
              <img
                src="https://www.directv.com/dtvassets/global/logos/dtv/directv/directv_hz_rgb_pos.svg"
                alt="DIRECTV home page"
              ></img>
            </div>
          </div>
          <div className="mx-6 flex flex-col justify-center">SUPPORT</div>
          <div className="mx-6 flex flex-col justify-center">SIGN-IN</div>
          <div className="mx-6 flex flex-col justify-center">
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
        <div>{children}</div>
      </body>
    </html>
  );
}
