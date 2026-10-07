"use client";
import { useState } from "react";
import Image from "next/image";

const Footer = () => {
  const [openMenus, setOpenMenus] = useState({
    alibaba: false,
    services: false,
    info: false,
  });

  const toggleMenu = (menu) => {
    setOpenMenus((prev) => ({
      ...prev,
      [menu]: !prev[menu],
    }));
  };

  return (
    <div className="w-full overflow-x-hidden">
      <div className="w-full border-t border-[#0000001f]">
        <div className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 py-6 sm:py-8">
          <div className="flex flex-col md:flex-row justify-between gap-6 text-[#4b5259]">
            {/* کارت 1 */}
            <div className="bg-white p-4 sm:p-5 w-full md:w-1/3 ">
              <div className="flex items-center gap-3 sm:gap-4">
                <Image
                  src="/images/ticket.webp"
                  alt="ticket"
                  width={89}
                  height={89}
                  className="w-16 sm:w-auto h-auto"
                />
                <div>
                  <h3 className="font-bold text-gray-700 text-sm sm:text-base">
                    رتبه یک سفر
                  </h3>
                  <p className="text-xs sm:text-sm">
                    معتبرترین عرضه‌کننده محصولات گردشگری در ایران
                  </p>
                </div>
              </div>
            </div>

            {/* کارت 2 */}
            <div className="bg-[white] p-4 sm:p-5 w-full md:w-1/3">
              <div className="flex items-center gap-3 sm:gap-4">
                <Image
                  src="/images/device.webp"
                  alt="device"
                  width={89}
                  height={89}
                  className="w-16 sm:w-auto h-auto"
                />
                <div>
                  <h3 className="font-bold text-gray-700 text-sm sm:text-base">
                    همسفر هر سفر
                  </h3>
                  <p className="text-xs sm:text-sm">
                    ارائه تمامی خدمات سفر (پرواز، قطار، اتوبوس، هتل و تور)
                  </p>
                </div>
              </div>
            </div>

            {/* کارت 3 */}
            <div className="bg-white p-4 sm:p-5 w-full md:w-1/3">
              <div className="flex items-center gap-3 sm:gap-4">
                <Image
                  src="/images/massage.webp"
                  alt="massage"
                  width={89}
                  height={89}
                  className="w-16 sm:w-auto h-auto"
                />
                <div>
                  <h3 className="font-bold text-gray-700 text-sm sm:text-base">
                    همسفر همه لحظات سفر
                  </h3>
                  <p className="text-xs sm:text-sm">
                    پشتیبانی و همراهی ۲۴ ساعته در تمامی مراحل سفر
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* بخش دوم: لینک‌ها و لوگو */}
      <div className="w-full bg-white">
        <div className="w-full max-w-[1200px] mx-auto px-4 sm:px-6">
          <div className="border-t border-gray-200 w-full"></div>
        </div>

        <div className="py-6 sm:py-8">
          <div className="w-full max-w-[1200px] mx-auto px-4 sm:px-6">
            <div className="flex flex-col lg:flex-row justify-between gap-8 lg:gap-12">
              <div className="flex-col flex-wrap gap-6 md:gap-8 lg:grid lg:grid-cols-2 xl:grid-cols-3 lg:gap-12 w-full">
                {" "}
                <div>
                  <h3
                    onClick={() => toggleMenu("alibaba")}
                    className="text-black font-bold text-sm sm:text-base mb-3 sm:mb-4 flex items-center justify-between cursor-pointer md:cursor-default"
                  >
                    عالی‌بابا
                    <svg
                      viewBox="0 0 24 24"
                      width="1.2em"
                      height="1.2em"
                      fill="currentColor"
                      className={`block md:hidden transition-transform text-gray-500 duration-300 ${openMenus.alibaba ? "rotate-180" : "rotate-0"}`}
                    >
                      <path d="M21.266 7.302a.75.75 0 0 1 1.037 1.08l-.069.066-9.75 8.25a.75.75 0 0 1-.89.058l-.078-.058-9.75-8.25a.75.75 0 0 1 .893-1.202l.075.056L12 15.142l9.266-7.84Z"></path>
                    </svg>
                  </h3>
                  <ul
                    className={`space-y-1 sm:space-y-2 overflow-hidden transition-all duration-300 ${
                      openMenus.alibaba
                        ? "max-h-96 opacity-100"
                        : "max-h-0 opacity-0 md:max-h-96 md:opacity-100"
                    }`}
                  >
                    <li className="text-gray-900 text-xs sm:text-sm hover:text-gray-500 cursor-pointer transition">
                      درباره ما
                    </li>
                    <li className="text-gray-900 text-xs sm:text-sm hover:text-gray-500 cursor-pointer transition">
                      تماس با ما
                    </li>
                    <li className="text-gray-900 text-xs sm:text-sm hover:text-gray-500 cursor-pointer transition">
                      چرا عالی‌بابا
                    </li>
                    <li className="text-gray-900 text-xs sm:text-sm hover:text-gray-500 cursor-pointer transition">
                      علی بابا پالس
                    </li>
                    <li className="text-gray-900 text-xs sm:text-sm hover:text-gray-500 cursor-pointer transition">
                      بیمه مسافرتی
                    </li>
                    <li className="text-gray-900 text-xs sm:text-sm hover:text-gray-500 cursor-pointer transition">
                      مجله عالی‌بابا
                    </li>
                  </ul>
                </div>
                {/* خدمات مشتریان */}
                <div>
                  <h3
                    onClick={() => toggleMenu("services")}
                    className="text-black font-bold text-sm sm:text-base mb-3 sm:mb-4 flex items-center justify-between cursor-pointer md:cursor-default"
                  >
                    خدمات مشتریان
                    <svg
                      viewBox="0 0 24 24"
                      width="1.2em"
                      height="1.2em"
                      fill="currentColor"
                      className={`block md:hidden transition-transform text-gray-500 duration-300 ${openMenus.services ? "rotate-180" : "rotate-0"}`}
                    >
                      <path d="M21.266 7.302a.75.75 0 0 1 1.037 1.08l-.069.066-9.75 8.25a.75.75 0 0 1-.89.058l-.078-.058-9.75-8.25a.75.75 0 0 1 .893-1.202l.075.056L12 15.142l9.266-7.84Z"></path>
                    </svg>
                  </h3>
                  <ul
                    className={`space-y-1 sm:space-y-2 overflow-hidden transition-all duration-300 ${
                      openMenus.services
                        ? "max-h-96 opacity-100"
                        : "max-h-0 opacity-0 md:max-h-96 md:opacity-100"
                    }`}
                  >
                    <li className="text-gray-900 text-xs sm:text-sm hover:text-gray-500 cursor-pointer transition">
                      مرکز پشتیبانی آنلاین
                    </li>
                    <li className="text-gray-900 text-xs sm:text-sm hover:text-gray-500 cursor-pointer transition">
                      راهنمای خرید
                    </li>
                    <li className="text-gray-900 text-xs sm:text-sm hover:text-gray-500 cursor-pointer transition">
                      راهنمای استرداد
                    </li>
                    <li className="text-gray-900 text-xs sm:text-sm hover:text-gray-500 cursor-pointer transition">
                      قوانین و مقررات
                    </li>
                    <li className="text-gray-900 text-xs sm:text-sm hover:text-gray-500 cursor-pointer transition">
                      پرسش و پاسخ
                    </li>
                  </ul>
                </div>
                {/* اطلاعات تکمیلی */}
                <div>
                  <h3
                    onClick={() => toggleMenu("info")}
                    className="text-black font-bold text-sm sm:text-base mb-3 sm:mb-4 flex items-center justify-between cursor-pointer md:cursor-default"
                  >
                    اطلاعات تکمیلی
                    <svg
                      viewBox="0 0 24 24"
                      width="1.2em"
                      height="1.2em"
                      fill="currentColor"
                      className={`block md:hidden transition-transform text-gray-500 duration-300 ${openMenus.info ? "rotate-180" : "rotate-0"}`}
                    >
                      <path d="M21.266 7.302a.75.75 0 0 1 1.037 1.08l-.069.066-9.75 8.25a.75.75 0 0 1-.89.058l-.078-.058-9.75-8.25a.75.75 0 0 1 .893-1.202l.075.056L12 15.142l9.266-7.84Z"></path>
                    </svg>
                  </h3>
                  <ul
                    className={`space-y-1 sm:space-y-2 overflow-hidden transition-all duration-300 ${
                      openMenus.info
                        ? "max-h-96 opacity-100"
                        : "max-h-0 opacity-0 md:max-h-96 md:opacity-100"
                    }`}
                  >
                    <li className="text-gray-900 text-xs sm:text-sm hover:text-gray-500 cursor-pointer transition">
                      فروش سازمانی
                    </li>
                    <li className="text-gray-900 text-xs sm:text-sm hover:text-gray-500 cursor-pointer transition">
                      پنل آژانس علی‌بابا
                    </li>
                    <li className="text-gray-900 text-xs sm:text-sm hover:text-gray-500 cursor-pointer transition">
                      فرصت‌های شغلی
                    </li>
                    <li className="text-gray-900 text-xs sm:text-sm hover:text-gray-500 cursor-pointer transition">
                      سنجش رضایتمندی
                    </li>
                  </ul>
                </div>
              </div>

              <div className="w-full lg:w-auto text-center lg:text-right">
                <div className="flex justify-center lg:justify-end mb-4 sm:mb-6">
                  <Image
                    src="/images/alibabaLogo.svg"
                    alt="alibaba-logo"
                    width={160}
                    height={48}
                    className="h-10 sm:h-12 w-auto"
                  />
                </div>

                <div className="flex flex-wrap justify-center lg:justify-end items-center gap-2 mb-4 sm:mb-6">
                  <span className="text-gray-700 text-xs sm:text-sm">
                    تلفن پشتیبانی:
                  </span>
                  <div className="text-gray-700 text-xs sm:text-sm font-medium">
                    ۰۲۱-۴۳۹۰۰۰۰۰
                  </div>
                </div>

                <div className="flex justify-center lg:justify-end">
                  <div className="flex flex-wrap gap-2 sm:gap-3 items-center justify-center max-w-[300px] sm:max-w-none">
                    <Image
                      src="/images/img1.jpg"
                      alt="img1"
                      width={69}
                      height={69}
                      className="cursor-pointer w-14 sm:w-16 h-auto rounded-md hover:scale-105 transition"
                    />
                    <Image
                      src="/images/img2.png"
                      alt="img2"
                      width={69}
                      height={69}
                      className="cursor-pointer w-14 sm:w-16 h-auto rounded-md hover:scale-105 transition"
                    />
                    <Image
                      src="/images/img3.png"
                      alt="img3"
                      width={69}
                      height={69}
                      className="cursor-pointer w-14 sm:w-16 h-auto rounded-md hover:scale-105 transition"
                    />
                    <Image
                      src="/images/img4.svg"
                      alt="img4"
                      width={69}
                      height={69}
                      className="cursor-pointer w-14 sm:w-16 h-auto rounded-md hover:scale-105 transition"
                    />
                    <Image
                      src="/images/img5.png"
                      alt="img5"
                      width={69}
                      height={69}
                      className="cursor-pointer w-14 sm:w-16 h-auto rounded-md hover:scale-105 transition"
                    />
                    <Image
                      src="/images/img6.svg"
                      alt="img6"
                      width={69}
                      height={69}
                      className="cursor-pointer w-14 sm:w-16 h-auto rounded-md hover:scale-105 transition"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full max-w-[1200px] mx-auto px-4 sm:px-6">
          <div className="border-t border-gray-200 w-full"></div>
        </div>

        <div className="py-4 sm:py-6">
          <div className="w-full max-w-[1200px] mx-auto px-4 sm:px-6">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4 text-gray-500">
              <div>
                <p className="text-xs sm:text-sm">ساخته شده توسط بیتا زارعی</p>
              </div>
              <div className="flex gap-1 items-center sm:gap-5 items-center flex-wrap justify-center">
                <svg
                  viewBox="0 0 32 32"
                  width="20"
                  height="20"
                  fill="currentColor"
                  className="hover:text-blue-600 cursor-pointer transition"
                >
                  <path
                    d="M25.333 0A6.667 6.667 0 0132 6.667v18.666A6.667 6.667 0 0125.333 32H6.667A6.667 6.667 0 010 25.333V6.667A6.667 6.667 0 016.667 0h18.666zm-8.637 11.13h-4.174v15.305h4.174v-7.797c0-4.331 5.565-4.686 5.565 0v7.797h4.174V17.03c0-7.309-7.797-7.043-9.74-3.445V11.13h.001zm-6.957 0H5.565v15.305H9.74V11.13h-.001zM7.652 4.458a2.445 2.445 0 00-2.435 2.454 2.445 2.445 0 002.435 2.454 2.444 2.444 0 002.435-2.454 2.444 2.444 0 00-2.435-2.454z"
                    fillRule="evenodd"
                  ></path>
                </svg>
                <svg
                  viewBox="0 0 32 32"
                  width="20"
                  height="20"
                  fill="currentColor"
                  className="hover:text-pink-500 cursor-pointer transition"
                >
                  <path
                    d="M17.638.001c2.88.005 3.49.028 4.951.095 1.703.078 2.866.348 3.883.743a7.841 7.841 0 012.833 1.845 7.842 7.842 0 011.845 2.833c.395 1.018.666 2.18.743 3.883.072 1.56.093 2.149.096 5.558v2.073c-.003 3.41-.024 3.999-.096 5.558-.077 1.703-.348 2.866-.743 3.883a7.844 7.844 0 01-1.845 2.833 7.842 7.842 0 01-2.833 1.845c-1.017.395-2.18.666-3.883.743-1.56.072-2.148.093-5.558.096h-2.073c-3.41-.003-3.998-.024-5.558-.096-1.702-.077-2.865-.348-3.883-.743a7.841 7.841 0 01-2.833-1.845A7.84 7.84 0 01.84 26.472c-.395-1.017-.665-2.18-.743-3.883-.067-1.462-.09-2.071-.095-4.95V14.35c.005-2.88.028-3.489.095-4.951.078-1.702.348-2.865.743-3.883a7.84 7.84 0 011.845-2.833A7.84 7.84 0 015.517.84C6.535.444 7.697.174 9.4.096c1.462-.067 2.071-.09 4.951-.095h3.287zm-.947 2.88h-1.392l-.323.001h-.596c-2.825.006-3.403.027-4.85.093-1.559.071-2.405.332-2.969.55a4.95 4.95 0 00-1.84 1.197 4.955 4.955 0 00-1.195 1.84c-.22.563-.48 1.41-.551 2.97-.066 1.445-.087 2.023-.092 4.848v.596l-.001.323v2.31c.006 2.825.027 3.403.093 4.849.07 1.56.332 2.406.55 2.97.29.747.638 1.28 1.197 1.84.56.559 1.093.906 1.84 1.196.563.219 1.41.48 2.97.55.385.018.709.032 1.03.044l.241.009c.769.024 1.605.035 3.302.039l.565.001h2.649l.565-.001c1.876-.004 2.7-.017 3.544-.048l.242-.01c.245-.009.499-.02.788-.034 1.56-.07 2.406-.331 2.97-.55a4.956 4.956 0 001.84-1.197 4.96 4.96 0 001.196-1.839c.219-.564.48-1.41.55-2.97.014-.29.025-.544.035-.788l.01-.243c.03-.843.043-1.668.047-3.543l.001-.565v-2.648l-.001-.566c.003-1.1-.01-2.202-.04-3.302l-.008-.241a108.34 108.34 0 00-.044-1.03c-.07-1.56-.331-2.407-.55-2.97a4.957 4.957 0 00-1.197-1.84 4.956 4.956 0 00-1.839-1.196c-.564-.22-1.41-.48-2.97-.551-1.446-.066-2.024-.087-4.849-.092h-.596l-.322-.001v-.001zm-.696 4.9a8.214 8.214 0 11.181 16.426 8.214 8.214 0 01-.181-16.426zm0 2.882a5.331 5.331 0 10-.146 10.662 5.331 5.331 0 00.146-10.662zm8.538-5.126a1.92 1.92 0 11.088 3.84 1.92 1.92 0 01-.088-3.84z"
                    fillRule="evenodd"
                  ></path>{" "}
                </svg>
                <svg
                  viewBox="0 0 32 32"
                  width="24"
                  height="24"
                  fill="currentColor"
                  className="hover:text-red-600 cursor-pointer transition"
                >
                  <path
                    d="M28.057 25.12l-.853 3.202a4.955 4.955 0 01-6.06 3.515l-3.02-.814a15.185 15.185 0 009.933-5.904v.001zM16.007 2.127c7.66.004 13.871 6.214 13.871 13.873a13.873 13.873 0 01-16.586 13.604A13.881 13.881 0 012.39 18.703a13.867 13.867 0 015.905-14.24 13.877 13.877 0 017.71-2.335l.002-.001zM.892 18.415a15.172 15.172 0 005.606 9.527l-2.81-.749A4.952 4.952 0 01.17 21.135l.722-2.72zm19.825-.112a3.96 3.96 0 10-1.497 7.779 3.96 3.96 0 001.497-7.779zm-9.943-1.915a3.96 3.96 0 10-1.506 7.775 3.96 3.96 0 001.506-7.775zm5.48-2.02a1.76 1.76 0 10-.656 3.46 1.76 1.76 0 00.657-3.46zm6.482-6.544a3.961 3.961 0 00-1.5 7.778 3.94 3.94 0 002.974-.607 3.96 3.96 0 001.658-4.08 3.96 3.96 0 00-3.132-3.091zm2.43-3.86l3.152.837a4.953 4.953 0 013.522 6.044l-.866 3.277a15.168 15.168 0 00-5.808-10.159v.001zm-12.38 1.945a3.962 3.962 0 10-1.496 7.782 3.962 3.962 0 001.496-7.782zM7.107.673A4.957 4.957 0 0110.868.17l2.946.768a15.176 15.176 0 00-9.746 5.524l.735-2.776A4.953 4.953 0 017.107.673z"
                    fillRule="evenodd"
                  ></path>{" "}
                </svg>
                <svg
                  viewBox="0 0 20 20"
                  width="24"
                  height="24"
                  fill="currentColor"
                  className="hover:text-red-600 cursor-pointer transition"
                >
                  <path d="m10.282 13.788-.264 3.722c.379 0 .542-.162.74-.358l1.775-1.696 3.679 2.694c.674.376 1.15.178 1.332-.621l2.414-11.315c.215-.998-.36-1.388-1.018-1.143L4.747 10.504c-.969.377-.953.916-.165 1.16l3.63 1.13L16.64 7.52c.397-.263.758-.117.46.145l-6.818 6.123Z"></path>
                </svg>
                <svg
                  viewBox="0 0 20 20"
                  width="24"
                  height="24"
                  fill="currentColor"
                  className="hover:text-red-600 cursor-pointer transition"
                >
                  <path
                    d="M19.128 6.858c.248.248.427.558.519.897.528 2.127.406 5.487.01 7.696a2.012 2.012 0 0 1-1.416 1.416c-1.241.338-6.239.338-6.239.338s-4.997 0-6.239-.338a2.012 2.012 0 0 1-1.416-1.416c-.531-2.118-.386-5.48-.01-7.686a2.011 2.011 0 0 1 1.416-1.416C6.995 6.01 11.992 6 11.992 6s4.997 0 6.239.339c.339.091.648.27.897.519Zm-4.581 4.745-4.146 2.4v-4.8l4.146 2.4Z"
                    fillRule="evenodd"
                  ></path>
                </svg>
                <svg
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  fill="currentColor"
                  className="hover:text-red-600 cursor-pointer transition"
                >
                  <path
                    d="M4.13574 4.70508H8.73476L12.636 9.85653L17.3476 4.71618L19.4669 4.71582L13.5948 11.1225L19.7582 19.2611H15.1592L11.0765 13.87L6.13715 19.2589H4.01794L10.1177 12.604L4.13574 4.70508ZM15.9049 17.7611L7.15332 6.20508H7.98913L16.7407 17.7611H15.9049Z"
                    fillRule="evenodd"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
