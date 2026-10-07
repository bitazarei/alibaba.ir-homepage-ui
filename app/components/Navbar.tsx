"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenEqamat, setIsOpenEqamat] = useState(false);
  const [isOpenMore, setIsOpenMore] = useState(false);

  // const [isScrolled, setIsScrolled] = useState(false);

  //   useEffect(() => {
  //     const handleScroll = () => {
  //       if (typeof window !== "undefined") {
  //         if (window.scrollY > 200) {
  //           setIsScrolled(true);
  //         } else {
  //           setIsScrolled(false);
  //         }
  //       }
  //     };

  //     window.addEventListener("scroll", handleScroll);
  //     return () => {
  //       window.removeEventListener("scroll", handleScroll);
  //     };
  //   }, []);
  return (
    <>
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-[#0000001f]">
        <div className="flex justify-around items-center grid-cols-5 gap-0 p-2">
          <a
            href="#"
            className="btn flex is-md is-raw is-block p-1 text-2 font-medium relative flex-col items-center justify-center min-h-[auto] text-grays-500"
          >
            <svg
              viewBox="0 0 24 24"
              width="24px"
              height="24px"
              fill="currentColor"
              className="text-gray-700"
            >
              <path d="M18.75 21h-3c-.828 0-1.5-.664-1.5-1.482v-4.445a.746.746 0 0 0-.75-.741h-3a.746.746 0 0 0-.75.74v4.446c0 .818-.672 1.482-1.5 1.482h-3C4.007 21 3 20.005 3 18.777v-7.448c0-.67.3-1.296.825-1.72l6.656-6.021a2.255 2.255 0 0 1 3.039 0l6.673 6.036c.513.423.807 1.044.807 1.705v7.448C21 20.005 19.993 21 18.75 21Z"></path>
            </svg>
            <span className="text-xs text-gray-600 mt-1">خانه</span>
          </a>

          <a
            href="#"
            className="flex is-md is-raw is-block p-1 text-2 font-medium relative flex-col items-center justify-center min-h-[auto] text-grays-500"
          >
            <svg
              viewBox="0 0 19 19"
              width="24px"
              height="24px"
              fill="currentColor"
              className="text-gray-700"
            >
              <path
                d="M9.002 1.63724C7.949 1.63724 7.092 2.49424 7.092 3.54724V4.43324H5.456V3.54724C5.45679 2.60694 5.83061 1.70536 6.49542 1.04037C7.16022 0.375376 8.06169 0.00130331 9.002 0.000244141C9.94231 0.00130331 10.8438 0.375376 11.5086 1.04037C12.1734 1.70536 12.5472 2.60694 12.548 3.54724V9.89024H10.912V3.54624C10.912 2.49324 10.055 1.63624 9.002 1.63624V1.63724ZM9.002 16.3672C10.055 16.3672 10.912 15.5102 10.912 14.4572V13.5712H12.548V14.4572C12.5472 15.3976 12.1734 16.2991 11.5086 16.9641C10.8438 17.6291 9.94231 18.0032 9.002 18.0042C8.06169 18.0032 7.16022 17.6291 6.49542 16.9641C5.83061 16.2991 5.45679 15.3976 5.456 14.4572V8.11624H7.092V14.4572C7.09253 14.9636 7.29393 15.4492 7.65201 15.8072C8.01009 16.1653 8.4956 16.3667 9.002 16.3672ZM13.571 5.45724H14.458C15.3981 5.4583 16.2995 5.83224 16.9642 6.49701C17.629 7.16179 18.0029 8.06311 18.004 9.00324C18.0029 9.94338 17.629 10.8447 16.9642 11.5095C16.2995 12.1743 15.3981 12.5482 14.458 12.5492H8.115V10.9132H14.458C15.51 10.9132 16.368 10.0562 16.368 9.00324C16.368 7.95024 15.51 7.09324 14.458 7.09324H13.571V5.45724ZM3.547 7.09324C2.494 7.09324 1.637 7.95024 1.637 9.00324L1.636 9.00224C1.63653 9.50865 1.83793 9.99415 2.19601 10.3522C2.55409 10.7103 3.0396 10.9117 3.546 10.9122H4.432V12.5492H3.546C2.60587 12.5482 1.70454 12.1743 1.03977 11.5095C0.374994 10.8447 0.00105871 9.94338 0 9.00324C0.00105916 8.06294 0.375132 7.16146 1.04012 6.49666C1.70511 5.83186 2.60669 5.45804 3.547 5.45724H9.889V7.09324H3.547Z"
                fillRule="evenodd"
              ></path>
            </svg>
            <span className="text-xs text-gray-600 mt-1">پلاس</span>
          </a>
          <a
            href="#"
            className="flex is-md is-raw is-block p-1 text-2 font-medium relative flex-col items-center justify-center min-h-[auto] text-grays-500"
          >
            <svg
              viewBox="0 0 24 24"
              width="24px"
              height="24px"
              fill="currentColor"
             className="text-gray-700"
            >
              <path
                d="M13.875 1.5a1.5 1.5 0 0 1 1.496 1.388l.004.112v1.5h1.875a2.25 2.25 0 0 1 2.246 2.118l.004.132V18a2.25 2.25 0 0 1-2.118 2.246l-.132.004h-.375V21a.75.75 0 0 1-1.495.087L15.375 21v-.75h-4.97a3.001 3.001 0 0 1-2.755 2.246l-.15.004a3 3 0 0 1-2.25-4.984V6.75a2.25 2.25 0 0 1 2.118-2.246L7.5 4.5h1.875V3a1.5 1.5 0 0 1 1.388-1.496l.112-.004h3ZM7.5 18a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Zm9.75-12H7.5a.75.75 0 0 0-.745.663l-.005.087v9.845a3.004 3.004 0 0 1 3.655 2.155h6.845a.75.75 0 0 0 .745-.663L18 18V6.75a.75.75 0 0 0-.663-.745L17.25 6Zm-3 2.25a.75.75 0 0 1 .745.663L15 9v6.75a.75.75 0 0 1-1.495.088l-.005-.088V9a.75.75 0 0 1 .75-.75Zm-3.75 0a.75.75 0 0 1 .745.663L11.25 9v6.75a.75.75 0 0 1-1.495.088l-.005-.088V9a.75.75 0 0 1 .75-.75ZM13.875 3h-3v1.5h3V3Z"
                fillRule="evenodd"
              ></path>
            </svg>
            <span className="text-xs text-gray-600 mt-1">سفرهای من</span>
          </a>
          <a
            href="#"
            className="flex is-md is-raw is-block p-1 text-2 font-medium relative flex-col items-center justify-center min-h-[auto] text-grays-500"
          >
            <svg
              viewBox="0 0 24 24"
              width="24px"
              height="24px"
              fill="currentColor"
             className="text-gray-700"
            >
              <path d="M15.502 3.75a2.25 2.25 0 0 1 2.073 1.384l-.029-.061 2.946 5.1c.297.507.47 1.077.502 1.66l.006.22V18a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 18v-5.945a3.697 3.697 0 0 1 .508-1.881L6.49 5.072 6.524 5a2.255 2.255 0 0 1 1.824-1.24l.15-.009h7.005ZM4.5 12.053V18c0 .414.336.75.75.75h13.5a.75.75 0 0 0 .75-.75v-6h-2.474a.753.753 0 0 0-.694.494l-.03.094A4.5 4.5 0 0 1 12 15.768a4.505 4.505 0 0 1-4.252-3.031l-.058-.178a.75.75 0 0 0-.619-.552L6.983 12H4.502l-.002.053ZM15.502 5.25H8.52a.75.75 0 0 0-.672.461l-.045.09L5.054 10.5l1.938.001a2.24 2.24 0 0 1 2.14 1.648A3 3 0 0 0 12 14.268c1.318 0 2.481-.86 2.86-2.092a2.251 2.251 0 0 1 2.02-1.67l.137-.006h1.931l-2.715-4.702-.082-.167a.75.75 0 0 0-.649-.381Z"></path>
            </svg>
            <span className="text-xs text-gray-600 mt-1">اعلان ها</span>
          </a>
          <a
            href="#"
            className="flex is-md is-raw is-block p-1 text-2 font-medium relative flex-col items-center justify-center min-h-[auto] text-grays-500"
          >
            <svg
              viewBox="0 0 24 24"
              width="24px"
              height="24px"
              fill="currentColor"
             className="text-gray-700"
            >
              <path
                d="M12 1.5c5.8 0 10.5 4.7 10.5 10.5S17.8 22.5 12 22.5 1.5 17.8 1.5 12 6.2 1.5 12 1.5Zm2.625 14.25h-5.25a2.25 2.25 0 0 0-2.246 2.118L7.125 18v1.567A8.959 8.959 0 0 0 12 21c1.797 0 3.47-.527 4.876-1.434L16.875 18a2.25 2.25 0 0 0-2.118-2.246l-.132-.004ZM12 3a9 9 0 0 0-9 9 8.972 8.972 0 0 0 2.625 6.353V18a3.75 3.75 0 0 1 3.587-3.747l.163-.003h5.25a3.75 3.75 0 0 1 3.747 3.587l.003.163v.352A8.971 8.971 0 0 0 21 12a9 9 0 0 0-9-9Zm0 3a3.75 3.75 0 1 1 0 7.5A3.75 3.75 0 0 1 12 6Zm0 1.5a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5Z"
                fillRule="evenodd"
              ></path>
            </svg>
            <span className="text-xs text-gray-600 mt-1">حساب کاربری</span>
          </a>
        </div>
      </div>

      <div className="block w-full lg:hidden bg-[#FDB713] py-1 px-0">
        <div className="flex justify-center items-center">
          <Link href="/">
            <Image
              src="/images/alibabaLogo2.svg"
              alt="alibaba-logo"
              width={105}
              height={20}
              className="h-7 w-auto"
            />
          </Link>
        </div>
      </div>

      <header className="hidden lg:flex bg-white border-b border-gray-100 text-[#4b5259] px-4 sm:px-8 md:px-14 py-2 items-center justify-between text-sm leading-[1.8]">
        <Link href="/">
          <Image
            src="/images/alibabaLogo.svg"
            alt="alibaba-logo"
            width={160}
            height={48}
            className="h-12 w-auto ml-5"
          />
        </Link>

        <div className="flex h-full py-1 px-4 items-center md:py-0 md:px-0">
          <nav className="text-[#4b5259]">
            <ul className="flex gap-2 items-center flex-wrap xl:flex-nowrap">
              <li className="relative flex items-center text-sm text-gray-700 border-b border-gray-100 hover:bg-gray-50 rounded-xl px-1">
                <div
                  className="relative"
                  onMouseEnter={() => setIsOpen(true)}
                  onMouseLeave={() => setIsOpen(false)}
                >
                  <button className="flex items-center whitespace-nowrap">
                    بلیط هواپیما
                    <svg
                      className="mr-1 w-5 h-5"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path
                        d="M21.266 7.302a.75.75 0 0 1 1.037 1.08l-.069.066-9.75 8.25a.75.75 0 0 1-.89.058l-.078-.058-9.75-8.25a.75.75 0 0 1 .893-1.202l.075.056L12 15.142l9.266-7.84Z"
                        fillRule="evenodd"
                      />
                    </svg>
                  </button>

                  {isOpen && (
                    <div className="absolute left-[-22] top-full pt-4 z-50">
                      <div className="bg-white rounded-lg shadow-lg border border-gray-100 min-w-[110px] overflow-hidden">
                        <div className="py-1">
                          <Link
                            href="/"
                            className="block mx-1 mt-0 my-1 px-3 py-2 text-sm text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                          >
                            پرواز داخلی
                          </Link>
                          <div className="border-t w-[85%] mx-auto border-gray-100 my-1"></div>
                          <Link
                            href="/"
                            className="block mx-1 mt-0 my-1 px-3 py-2 text-sm text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                          >
                            پرواز خارجی
                          </Link>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </li>
              <span
                className="w-px h-6 bg-gray-300 mx-0"
                aria-hidden="true"
              ></span>
              <li className="relative flex items-center text-sm text-gray-700 border-b border-gray-100 hover:bg-gray-50 rounded-xl px-1">
                <Link href="/" className="whitespace-nowrap">
                  بلیط قطار
                </Link>
              </li>

              <span
                className="w-px h-6 bg-gray-300 mx-0"
                aria-hidden="true"
              ></span>
              <li className="relative flex items-center text-sm text-gray-700 border-b border-gray-100 hover:bg-gray-50 rounded-xl px-1">
                <Link href="/" className="whitespace-nowrap">
                  بلیط اتوبوس
                </Link>
              </li>
              <span
                className="w-px h-6 bg-gray-300 mx-0"
                aria-hidden="true"
              ></span>
              <li className="relative flex items-center text-sm text-gray-700 border-b border-gray-100 hover:bg-gray-50 rounded-xl px-1">
                <div
                  className="relative"
                  onMouseEnter={() => setIsOpenEqamat(true)}
                  onMouseLeave={() => setIsOpenEqamat(false)}
                >
                  <button className="flex items-center whitespace-nowrap">
                    اقامت
                    <svg
                      className="mr-1"
                      viewBox="0 0 24 24"
                      width="1.5em"
                      fill="currentColor"
                    >
                      <path d="M21.266 7.302a.75.75 0 0 1 1.037 1.08l-.069.066-9.75 8.25a.75.75 0 0 1-.89.058l-.078-.058-9.75-8.25a.75.75 0 0 1 .893-1.202l.075.056L12 15.142l9.266-7.84Z"></path>
                    </svg>
                  </button>

                  {isOpenEqamat && (
                    <div className="absolute right-[-6] top-full pt-4 z-50">
                      <div className="bg-white rounded-lg shadow-lg border border-gray-100 min-w-[130px] overflow-hidden">
                        <div className="py-1">
                          <Link
                            href="/"
                            className="block mx-1 mt-0 my-1 px-3 py-2 text-sm text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                          >
                            هتل
                          </Link>
                          <div className="border-t w-[85%] mx-auto border-gray-100 my-1"></div>
                          <Link
                            href="/"
                            className="block mx-1 mt-0 my-1 px-3 py-2 text-sm text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                          >
                            ویلا و اقامتگاه
                          </Link>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </li>
              <span
                className="w-px h-6 bg-gray-300 mx-0"
                aria-hidden="true"
              ></span>
              <li className="relative flex items-center text-sm text-gray-700 border-b border-gray-100 hover:bg-gray-50 rounded-xl px-1">
                <Link href="/" className="whitespace-nowrap">
                  تور
                </Link>
              </li>
              <span
                className="w-px h-6 bg-gray-300 mx-0"
                aria-hidden="true"
              ></span>
              <li className="relative flex items-center text-sm text-gray-700 border-b border-gray-100 hover:bg-gray-50 rounded-xl px-1">
                <Link href="/" className="whitespace-nowrap">
                  ویزا
                </Link>
              </li>
              <span
                className="w-px h-6 bg-gray-300 mx-0"
                aria-hidden="true"
              ></span>
              <li className="relative flex items-center text-sm text-gray-700 border-b border-gray-100 hover:bg-gray-50 rounded-xl px-1">
                <Link href="/" className="whitespace-nowrap">
                  پنل آژانسی
                </Link>
              </li>
              <span
                className="w-px h-6 bg-gray-300 mx-0"
                aria-hidden="true"
              ></span>
              <li className="relative flex items-center text-sm text-gray-700 border-b border-gray-100 hover:bg-gray-50 rounded-xl px-1">
                <div
                  className="relative"
                  onMouseEnter={() => setIsOpenMore(true)}
                  onMouseLeave={() => setIsOpenMore(false)}
                >
                  <button className="flex items-center whitespace-nowrap">
                    بیشتر
                    <svg
                      className="mr-1"
                      viewBox="0 0 24 24"
                      width="1.5em"
                      fill="currentColor"
                    >
                      <path d="M21.266 7.302a.75.75 0 0 1 1.037 1.08l-.069.066-9.75 8.25a.75.75 0 0 1-.89.058l-.078-.058-9.75-8.25a.75.75 0 0 1 .893-1.202l.075.056L12 15.142l9.266-7.84Z"></path>
                    </svg>
                  </button>

                  {isOpenMore && (
                    <div className="absolute right-0 top-full pt-4 z-50">
                      <div className="bg-white rounded-lg shadow-lg border border-gray-100 min-w-[135px] overflow-hidden">
                        <div className="py-1">
                          <Link
                            href="/"
                            className="block mx-1 mt-0 my-1 px-3 py-2 text-sm text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                          >
                            علی بابا پلاس
                          </Link>
                          <div className="border-t w-[85%] mx-auto border-gray-100 my-1"></div>
                          <Link
                            href="/"
                            className="block mx-1 mt-0 my-1 px-3 py-2 text-sm text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                          >
                            مجله علی بابا
                          </Link>
                          <div className="border-t w-[85%] mx-auto border-gray-100 my-1"></div>
                          <Link
                            href="/"
                            className="block mx-1 mt-0 my-1 px-3 py-2 text-sm text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                          >
                            بیمه مسافرتی
                          </Link>
                          <div className="border-t w-[85%] mx-auto border-gray-100 my-1"></div>
                          <Link
                            href="/"
                            className="block mx-1 mt-0 my-1 px-3 py-2 text-sm text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                          >
                            سفر اقساطی
                          </Link>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </li>
            </ul>
          </nav>
        </div>

        <div className="flex gap-2 h-full mr-auto items-center text-[#4b5259]">
          <a
            className="btn is-md is-raw flex items-center gap-1 px-2 hover:bg-grays-100 whitespace-nowrap"
            href=""
          >
            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
              <path
                d="M12 1.5C6.2 1.5 1.5 6.2 1.5 12S6.2 22.5 12 22.5 22.5 17.8 22.5 12 17.8 1.5 12 1.5ZM12 3a9 9 0 0 1 9 9 9 9 0 0 1-9 9 9 9 0 0 1-9-9 9 9 0 0 1 9-9Zm.242 12.634a.72.72 0 0 0-.72.72v.36a.72.72 0 0 0 .636.715l.084.005a.72.72 0 0 0 .72-.72v-.36a.72.72 0 0 0-.72-.72Zm-.285-9.068c-.5 0-.943.07-1.33.208a2.664 2.664 0 0 0-.98.592c-.264.258-.467.57-.605.937a3.48 3.48 0 0 0-.206 1.229c0 .354.054.683.164.99.108.308.257.6.441.878.185.279.394.541.629.788.232.247.475.488.724.721.286.266.48.565.578.897.1.334.147.693.147 1.078h1.445a6.226 6.226 0 0 0-.079-.96 2.803 2.803 0 0 0-.226-.726 3.122 3.122 0 0 0-.41-.636 11.256 11.256 0 0 0-.627-.69 56.686 56.686 0 0 0-.511-.519 3.796 3.796 0 0 1-.43-.507 2.073 2.073 0 0 1-.403-1.268c0-.546.144-.973.43-1.283.287-.31.703-.464 1.25-.464.228 0 .448.03.659.09.21.059.396.153.56.28a1.4 1.4 0 0 1 .395.484c.1.195.148.428.148.698h1.444a2.797 2.797 0 0 0-.258-1.186 2.65 2.65 0 0 0-.678-.885 3.035 3.035 0 0 0-1.01-.555 4.033 4.033 0 0 0-1.26-.191Z"
                fillRule="evenodd"
              ></path>
            </svg>
            <span className="text-call">مرکز پشتیبانی آنلاین</span>
          </a>

          <a
            href="/profile/orders"
            className="btn is-md is-raw flex items-center gap-1 px-2 hover:bg-grays-100 whitespace-nowrap"
          >
            <svg viewBox="0 0 24 24" width="1.5em" fill="currentColor">
              <path
                d="M13.875 1.5a1.5 1.5 0 0 1 1.496 1.388l.004.112v1.5h1.875a2.25 2.25 0 0 1 2.246 2.118l.004.132V18a2.25 2.25 0 0 1-2.118 2.246l-.132.004h-.375V21a.75.75 0 0 1-1.495.087L15.375 21v-.75h-4.97a3.001 3.001 0 0 1-2.755 2.246l-.15.004a3 3 0 0 1-2.25-4.984V6.75a2.25 2.25 0 0 1 2.118-2.246L7.5 4.5h1.875V3a1.5 1.5 0 0 1 1.388-1.496l.112-.004h3ZM7.5 18a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Zm9.75-12H7.5a.75.75 0 0 0-.745.663l-.005.087v9.845a3.004 3.004 0 0 1 3.655 2.155h6.845a.75.75 0 0 0 .745-.663L18 18V6.75a.75.75 0 0 0-.663-.745L17.25 6Zm-3 2.25a.75.75 0 0 1 .745.663L15 9v6.75a.75.75 0 0 1-1.495.088l-.005-.088V9a.75.75 0 0 1 .75-.75Zm-3.75 0a.75.75 0 0 1 .745.663L11.25 9v6.75a.75.75 0 0 1-1.495.088l-.005-.088V9a.75.75 0 0 1 .75-.75ZM13.875 3h-3v1.5h3V3Z"
                fillRule="evenodd"
              ></path>
            </svg>
            <span>سفرهای من</span>
          </a>

          <div>
            <button
              type="button"
              className="btn is-md is-raw py-2 px-3 text-4 relative hover:bg-grays-100 flex items-center justify-between whitespace-nowrap"
              aria-label="ناحیه کاربری null"
            >
              <svg
                viewBox="0 0 24 24"
                width="20"
                height="20"
                fill="currentColor"
                className="ml-1 text-grays-500"
              >
                <path
                  d="M17.25 12.75A3.75 3.75 0 0 1 21 16.5v3.75a.75.75 0 0 1-.75.75H3.75a.75.75 0 0 1-.75-.75V16.5a3.75 3.75 0 0 1 3.75-3.75h10.5Zm0 1.5H6.75A2.25 2.25 0 0 0 4.5 16.5v3h15v-3a2.25 2.25 0 0 0-2.118-2.246l-.132-.004ZM12 3a4.5 4.5 0 1 1 0 9 4.5 4.5 0 1 1 0-9Zm0 1.5a3 3 0 1 0-.001 5.999A3 3 0 0 0 12 4.5Z"
                  fillRule="evenodd"
                ></path>
              </svg>
              <span className="text-grays-500" dir="rtl">
                ورود یا ثبت‌نام
              </span>
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
