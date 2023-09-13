import React from "react";
import logo from "../assets/logo.webp";
import logo2 from "../assets/logo2.svg";

function Hero() {
  return (
    <section className="py-32 bg-black" id="hero">
      <div className="container flex flex-col gap-20 justify-center items-center">
        <div className="flex justify-center items-center flex-col gap-6">
          <img src={logo} alt="" className="md:w-5/12" />
          <div className="text-yellow-300 text-5xl font-normal font-Jack">
            Fuck Ftx
          </div>
        </div>

        <div className="grid w-full grid-cols-1 lg:grid-cols-2 justify-between gap-16 items-center">
          <article className="flex flex-col gap-4">
            <h1 className="text-orange-600 text-5xl font-normal font-JackCon leading-10">
              $3.4 Billion Dollar Liquidation Event{" "}
            </h1>

            <div className=" text-white text-base font-normal font-['Jost'] leading-loose tracking-tight">
              A wave of pressure is coming towards alt coins and the macro
              market as FTX plans to liquidate $3.4 billion dollars worth of
              assets recovered from the FTX collapse to pay off its debtors.
              <br />
              <br />
              Bitcoin and Solana are two of Sam Bankman-Fried’s biggest
              holdings! Amid fears of the FTX dump, Solana has dropped a
              whopping 6% in the last couple of days as investors are preparing
              for what’s to come.
            </div>
            <a
              href=""
              className="w-64 h-14 px-8 py-4 origin-top-left -rotate-3 bg-orange-600 rounded border-2 border-amber-600 justify-center items-center gap-2.5 inline-flex"
            >
              <div className="text-white text-xl font-normal font-Jack leading-7 tracking-tight">
                BUY FUCK FTX
              </div>
            </a>

            <div className="flex items-center gap-1">
              <a href="https://twitter.com/FuckFTXeth">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 50 50"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    width="49.9623"
                    height="49.9623"
                    rx="24.9811"
                    fill="white"
                  />
                  <path
                    d="M36.3239 17.832C35.4767 18.2085 34.5642 18.4621 33.6076 18.5774C34.5854 17.9915 35.3326 17.0655 35.688 15.9609C34.7736 16.5027 33.7612 16.8965 32.6835 17.1078C31.8229 16.1876 30.5915 15.6132 29.2334 15.6132C26.1789 15.6132 23.9351 18.4621 24.6248 21.4205C20.6963 21.2226 17.2096 19.34 14.8775 16.4796C13.6384 18.6043 14.2358 21.3859 16.3413 22.794C15.5671 22.7691 14.839 22.5558 14.2013 22.2024C14.1494 24.3923 15.7208 26.4421 17.9953 26.8993C17.3306 27.0799 16.6006 27.1221 15.8591 26.98C16.4604 28.8588 18.2105 30.2246 20.2775 30.263C18.2854 31.8229 15.7823 32.5202 13.2715 32.2244C15.3654 33.5672 17.8493 34.3491 20.5195 34.3491C29.3025 34.3491 34.2626 26.932 33.9629 20.2794C34.8889 19.6147 35.69 18.781 36.3239 17.832Z"
                    fill="black"
                  />
                </svg>
              </a>
              <a href="https://t.me/FuckFTXeth">
                <svg
                  width="41"
                  height="40"
                  viewBox="0 0 51 50"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="0.20752"
                    width="49.9623"
                    height="49.9623"
                    rx="24.9811"
                    fill="white"
                  />
                  <path
                    d="M17.3398 22.885C16.9323 22.7492 16.9284 22.5298 17.3476 22.3901L32.2481 17.4235C32.661 17.2861 32.8976 17.5172 32.7821 17.9216L28.5243 32.8212C28.4072 33.2342 28.1691 33.2483 27.9943 32.8564L25.1886 26.5424L29.8725 20.2971L23.6272 24.9811L17.3398 22.885Z"
                    fill="black"
                  />
                </svg>
              </a>
              <a href="">
                <svg
                  width="41"
                  height="40"
                  viewBox="0 0 51 50"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="0.415039"
                    width="49.9623"
                    height="49.9623"
                    rx="24.9811"
                    fill="white"
                  />
                  <path
                    d="M20.3189 24.1327C20.3189 23.7002 20.6741 23.345 21.1058 23.345H22.4331C22.8655 23.345 23.2358 23.7002 23.2358 24.1484V29.154C23.3901 29.1075 23.5753 29.0611 23.7919 29.0146C24.0849 28.9374 24.3015 28.6751 24.3015 28.3656V22.1549C24.3015 21.7224 24.6567 21.3514 25.1041 21.3514H26.4314C26.8639 21.3514 27.2341 21.7067 27.2341 22.1549V27.9181C27.2341 27.9181 27.5586 27.7787 27.8824 27.6401C28.1297 27.5322 28.2841 27.3006 28.2841 27.0218V20.1471C28.2841 19.7146 28.6393 19.3437 29.0717 19.3437H30.399C30.8315 19.3437 31.1867 19.6989 31.1867 20.1471V25.8174C32.3289 24.9833 33.5025 23.979 34.4288 22.7739C34.7069 22.4187 34.7841 21.9547 34.6297 21.5223C32.9314 16.6404 27.5908 14.0443 22.7126 15.744C17.8345 17.4438 15.2414 22.7889 16.9389 27.6716C17.124 28.2277 17.3713 28.753 17.6643 29.2627C17.8959 29.6644 18.3283 29.8959 18.7915 29.8495C19.0388 29.8337 19.3476 29.803 19.7328 29.7565C20.0723 29.7258 20.3196 29.432 20.3196 29.0918L20.3189 24.1327Z"
                    fill="black"
                  />
                  <path
                    d="M20.2881 32.1669C24.4715 35.2105 30.3225 34.2834 33.363 30.097C34.5209 28.4901 35.1535 26.5588 35.1535 24.5817C35.1535 24.3651 35.1377 24.1493 35.1227 23.9327C31.712 29.0462 25.3978 31.4407 20.2881 32.1669Z"
                    fill="black"
                  />
                </svg>
              </a>
              <a href="">
                <svg
                  width="41"
                  height="40"
                  viewBox="0 0 51 50"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="0.622559"
                    width="49.9623"
                    height="49.9623"
                    rx="24.9811"
                    fill="white"
                  />
                  <g clip-path="url(#clip0_2777_666)">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M23.4589 16.2924C22.344 16.8731 21.4318 17.3646 21.432 17.3846C21.4325 17.4362 24.1078 18.791 24.2028 18.7877C24.246 18.7863 24.5593 18.642 24.899 18.4672L25.5169 18.1495L26.1916 18.4963L26.8663 18.8432L27.9712 18.3467C29.6362 17.5985 29.8091 17.5165 29.782 17.489C29.746 17.4525 29.1488 17.1316 27.5287 16.2787C26.7456 15.8664 25.9857 15.4622 25.8398 15.3804C25.6939 15.2986 25.5546 15.2328 25.5303 15.2341C25.506 15.2354 24.5738 15.7116 23.4589 16.2924ZM18.5689 18.8245L17.4083 19.424V22.0551C17.4083 23.5021 17.4236 24.6861 17.4423 24.6861C17.4609 24.6861 18.0319 24.4385 18.7112 24.136L19.9462 23.586V20.8127L20.5497 21.1415C21.0147 21.3946 21.4801 21.6472 21.9457 21.8993L22.7381 22.3284L23.0908 22.1689C23.3119 22.0688 23.5326 21.9676 23.7529 21.8655C23.9231 21.7863 24.3409 21.5981 24.6814 21.4473C25.0218 21.2964 25.3369 21.1446 25.3816 21.1101C25.441 21.0641 24.7171 20.6641 22.7044 19.6305C21.1872 18.8514 19.8972 18.2165 19.8377 18.2195C19.7782 18.2226 19.2073 18.4948 18.5689 18.8245ZM29.9912 18.9929C29.2007 19.3497 28.5534 19.6559 28.5527 19.6734C28.552 19.6908 28.9828 19.947 29.5101 20.2426C30.0374 20.5382 30.4688 20.7958 30.4688 20.8153C30.4688 20.8346 30.0022 21.0607 29.432 21.3177C28.8618 21.5747 27.4203 22.2257 26.2288 22.7643L22.2364 24.5689C21.2321 25.0229 20.3268 25.4321 20.2247 25.4784C18.1734 26.407 17.6096 26.6647 17.5321 26.7089C17.4543 26.7534 17.4366 27.0122 17.4228 28.3106L17.4062 29.8593L18.4441 30.3881L19.4819 30.9169L20.9211 30.2674C21.7126 29.9102 22.3602 29.5993 22.3602 29.5764C22.3602 29.5535 22.2139 29.4582 22.0352 29.3645C21.8565 29.2708 21.4874 29.0633 21.2151 28.9033C20.9427 28.7434 20.6712 28.5966 20.6116 28.5771C20.552 28.5577 20.5041 28.5238 20.505 28.5016C20.506 28.4795 21.1398 28.1785 21.9132 27.8326C23.4155 27.1609 24.5652 26.6433 27.0335 25.5271C28.1372 25.028 29.241 24.5293 30.345 24.0309C31.3153 23.593 32.4434 23.0815 32.8519 22.8943L33.5947 22.554L33.6112 20.9877L33.6278 19.4214L32.5751 18.8811C31.9962 18.584 31.5013 18.3416 31.4753 18.3425C31.4494 18.3433 30.7815 18.636 29.9912 18.9929ZM33.3126 24.6435C33.1575 24.7193 32.8511 24.8611 32.6318 24.9587C32.4124 25.0563 31.9962 25.2441 31.7068 25.3762L31.1806 25.6161L31.1686 26.9912C31.162 27.7475 31.1342 28.3629 31.1067 28.3589C31.0445 28.3496 30.0584 27.8439 29.0671 27.3128C28.3517 26.9295 28.3068 26.9142 28.1387 26.9975C28.0415 27.0457 27.4606 27.3062 26.8478 27.5765C26.235 27.8469 25.7136 28.0857 25.6891 28.1073C25.6647 28.1289 26.898 28.7974 28.4299 29.5929L31.2151 31.0392L32.4049 30.4237C33.0592 30.0852 33.6156 29.7765 33.6413 29.7377C33.6989 29.6503 33.694 24.4938 33.6363 24.5007C33.6134 24.5035 33.4678 24.5677 33.3126 24.6435ZM26.724 30.696C26.5176 30.7848 26.3113 30.8736 26.105 30.9626C25.4821 31.2321 25.6042 31.241 24.8632 30.8721C24.3696 30.6264 24.1568 30.5506 24.0645 30.5874C23.9952 30.615 23.3991 30.8832 22.7396 31.1834C22.0802 31.4836 21.5178 31.7292 21.4898 31.7292C21.2132 31.7292 21.6731 32.004 23.448 32.8993L25.5295 33.9492L26.4053 33.5168C26.887 33.279 27.8585 32.8028 28.5643 32.4586C29.2701 32.1143 29.8388 31.8237 29.8282 31.8127C29.8175 31.8018 29.2261 31.4981 28.514 31.1379L27.2192 30.483L26.724 30.696Z"
                      fill="black"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_2777_666">
                      <rect
                        width="16.2927"
                        height="18.7358"
                        fill="white"
                        transform="translate(17.4067 15.2229)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </a>
            </div>
          </article>
          <img src={logo2} alt="" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
