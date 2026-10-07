"use client";
import Link from "next/link";
import Image from "next/image";
import FAQSection from "./FAQSection";
import Home from "./Home";

export default function More() {
  const svgQuestion = (
    <svg
      viewBox="0 0 24 24"
      width="32px"
      height="32px"
      fill="currentColor"
      className="a-accordion__icon"
    >
      <path d="M14.442 16.905c0-1.427-.177-2.564-.531-3.411-.322-.77-.931-1.612-1.827-2.525l-.734-.726c-.787-.786-1.298-1.361-1.533-1.726a3.775 3.775 0 0 1-.646-2.126c0-1.005.249-1.776.747-2.312.498-.536 1.23-.804 2.197-.804.93 0 1.676.26 2.241.782.565.522.847 1.233.847 2.133h3.921c-.028-1.905-.68-3.413-1.953-4.524C15.898.556 14.212 0 12.115 0 9.951 0 8.266.548 7.06 1.645 5.853 2.74 5.25 4.275 5.25 6.248c0 1.752.814 3.476 2.442 5.17l1.996 1.954c.709.813 1.072 1.991 1.092 3.533h3.662Zm.273 5.027c0-.642-.199-1.159-.596-1.551-.397-.393-.936-.59-1.616-.59-.69 0-1.233.204-1.63.611-.397.407-.596.917-.596 1.53 0 .584.194 1.075.582 1.472.387.397.936.596 1.644.596.709 0 1.255-.199 1.637-.596.384-.397.575-.888.575-1.472Z"></path>
    </svg>
  );
  return (
    <div className="container w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
      <div className="w-full mb-8">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-lg sm:text-xl font-bold text-gray-800">
            سایر خدمات علی‌بابا
          </h3>
        </div>

        <div className="grid grid-cols-3 gap-0 sm:gap-0 rounded-lg overflow-hidden border border-gray-200/60">
          {/* دکمه 1 */}
          <div className="bg-white p-3 sm:p-4 hover:bg-gray-50 transition cursor-pointer border-l border-gray-200/60 last:border-l-0">
            <div className="flex flex-col items-center justify-center text-center">
              <Image
                src="/images/cardsvg.svg"
                alt="سفرکارت"
                width={40}
                height={40}
                className="h-10 w-auto sm:h-12 mb-1 sm:mb-2"
              />
              <h3 className="text-xs sm:text-sm text-center">
                سفرکارت (سازمانی)
              </h3>
            </div>
          </div>

          {/* دکمه 2 */}
          <div className="bg-white p-3 sm:p-4 hover:bg-gray-50 transition cursor-pointer border-l border-gray-200/60 last:border-l-0">
            <div className="flex flex-col items-center justify-center text-center">
              <Image
                src="/images/safarAqsati.svg"
                alt="سفر اقساطی"
                width={40}
                height={40}
                className="h-10 w-auto sm:h-12 mb-1 sm:mb-2"
              />
              <h3 className="text-xs sm:text-sm text-center">سفر اقساطی</h3>
            </div>
          </div>

          {/* دکمه 3 */}
          <div className="bg-white p-3 sm:p-4 hover:bg-gray-50 transition cursor-pointer">
            <div className="flex flex-col items-center justify-center text-center">
              <Image
                src="/images/visaSafar.svg"
                alt="ویزای سفر"
                width={40}
                height={40}
                className="h-10 w-auto sm:h-12 mb-1 sm:mb-2"
              />
              <h3 className="text-xs sm:text-sm text-center">ویزای سفر</h3>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between gap-4 md:gap-6 w-full mb-8">
        <div className="w-full md:w-1/2 hover:cursor-pointer">
          <Image
            src="/images/safarCartAlibaba.webp"
            alt="alibaba-logo"
            width={590}
            height={222}
            className="border border-[#0000001f] rounded-lg w-full h-auto object-cover"
          />
        </div>
        <div className="w-full md:w-1/2 hover:cursor-pointer">
          <Image
            src="/images/safarCartAlibaba2.webp"
            alt="alibaba-logo"
            width={590}
            height={222}
            className="border border-[#0000001f] rounded-lg w-full h-auto object-cover"
          />
        </div>
      </div>

      <div className="flex flex-col h-full lg:flex-row items-center justify-around border border-[#0000001f] rounded-lg w-full p-4 sm:p-6 mt-6 gap-6">
        <div className="flex-shrink-0">
          <Image
            src="/images/escan.png"
            alt="alibaba-logo"
            width={148}
            height={185}
            className="w-auto h-auto"
          />
        </div>

        <div className="text-center lg:text-right flex-1">
          <div className="mb-4">
            <h1 className="text-xl sm:text-2xl md:text-[25px] font-bold mb-2">
              اپلیکیشن علی‌بابا
            </h1>
            <p className="text-sm sm:text-base">
              سریع‌تر و مطمئن‌تر به سفر بروید
            </p>
          </div>

          <div className="mt-4">
            <div className="flex justify-center lg:justify-start items-center mb-4 text-[#0077db] gap-1">
              <p className="text-sm sm:text-base">مشاهده لینک های دانلود</p>
              <svg
                viewBox="0 0 24 24"
                width="20"
                height="20"
                fill="currentColor"
              >
                <path d="M16.698 21.266a.75.75 0 0 1-1.08 1.037l-.066-.069-8.25-9.75a.75.75 0 0 1-.058-.89l.058-.078 8.25-9.75a.75.75 0 0 1 1.202.893l-.056.075L8.858 12l7.84 9.266Z"></path>
              </svg>
            </div>
            <div className="flex justify-center lg:justify-start items-center gap-2 flex-wrap">
              <Image
                src="/images/ios.png"
                alt="ios-logo"
                width={20}
                height={20}
                className="w-5 h-5"
              />
              <Image
                src="/images/android.png"
                alt="android-logo"
                width={20}
                height={20}
                className="w-5 h-5"
              />
              <p className="text-[#959ea6] text-xs sm:text-sm">
                قابلیت نصب روی Android و iOs
              </p>
            </div>
          </div>
        </div>

        <div className="flex-shrink-0 mt-4 lg:mt-0">
          <Image
            src="/images/alibabaMobail.webp"
            alt="alibaba-logo"
            width={334}
            height={222}
            className="w-auto h-auto max-w-[200px] sm:max-w-[250px] lg:max-w-[334px]"
          />
        </div>
      </div>

      <div className="porsesh w-full mt-8">
        <FAQSection />
        <Home />
      </div>
    </div>
  );
}
