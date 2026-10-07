"use client";
import { useState, useEffect } from "react";
import { citiesData, tabsArray, tabConfigArray } from "./Datass";
import LocationInput from "./LocationInput";
import PassengerInput from "./PassengerInput";
import PersianCalendar from "./PersianCalendar";

export default function EventTrip() {
  const [activeTab, setActiveTab] = useState("domestic");
  const [configTab, setConfigTab] = useState<
    (typeof tabConfigArray)[0] | undefined
  >(tabConfigArray[0]);
  const [tabs] = useState(tabsArray);

  const [tripType, setTripType] = useState("یک طرفه");
  const [cabinClass, setCabinClass] = useState("اکونومی");
  const [privateWagon, setPrivateWagon] = useState("دربست نمیخواهم");
  const [passengerType, setPassengerType] = useState("مسافرین عادی");
  const [carTransport, setCarTransport] = useState("حمل خودرو نمیخواهم");

  const [showTripMenu, setShowTripMenu] = useState(false);
  const [showCabinMenu, setShowCabinMenu] = useState(false);
  const [showPrivateMenu, setShowPrivateMenu] = useState(false);
  const [showPassengerTypeMenu, setShowPassengerTypeMenu] = useState(false);
  const [showCarMenu, setShowCarMenu] = useState(false);

  const currentConfig = tabConfigArray.find((t) => t.id === activeTab);

  //const [showMenuText, setShowMenuText] = useState(true);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest(".dropdown-button")) {
        setShowTripMenu(false);
        setShowCabinMenu(false);
        setShowPrivateMenu(false);
        setShowPassengerTypeMenu(false);
        setShowCarMenu(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  const svgMeno = (
    <svg
      viewBox="0 0 24 24"
      width="1em"
      height="1em"
      fill="currentColor"
      className="a-pill-dropdown__caret mr-1 rotate-90"
    >
      <path
        d="M6.957 22.678c.627.53 1.55.51 2.153-.045l.052-.051.1-.108 7.972-9.423c.462-.546.513-1.33.127-1.93l-.092-.128-.046-.058L9.25 1.514a1.627 1.627 0 0 0-2.605 1.938l.086.12.046.056L13.86 12l-7.095 8.385a1.627 1.627 0 0 0 .097 2.208l.094.086Z"
        fillRule="evenodd"
      ></path>
    </svg>
  );

  const originField = configTab?.fields.find((f) => f.name === "origin");
  const destinationField = configTab?.fields.find(
    (f) => f.name === "destination",
  );
  const dateFields = configTab?.fields.filter((f) => f.type === "date");
  const otherFields = configTab?.fields.filter(
    (f) => f.name !== "origin" && f.name !== "destination" && f.type !== "date",
  );

  const swapLocations = () => {
    const originInput = document.querySelector(
      'input[placeholder*="مبدا"]',
    ) as HTMLInputElement;
    const destInput = document.querySelector(
      'input[placeholder*="مقصد"]',
    ) as HTMLInputElement;
    if (originInput && destInput) {
      const temp = originInput.value;
      originInput.value = destInput.value;
      destInput.value = temp;
    }
  };

  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (typeof window !== "undefined") {
        if (window.scrollY > 200) {
          setIsScrolled(true);
        } else {
          setIsScrolled(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  // تب‌های موبایل
  const mobileTabs = [
    {
      id: "domestic",
      name: "پرواز",
      svg: (
        <svg
          viewBox="0 0 24 24"
          width="28px"
          height="28px"
          fill="currentColor"
          className="block mx-auto"
        >
          <path
            d="M5.557 5.565c.45-.45.713-.435 1.163-.06l.105.09a.75.75 0 0 1 .112.105l.255.255 3 3.293a.667.667 0 0 0 .675.195l1.988-.555a.682.682 0 0 0 .48-.75l-.045-.165a.376.376 0 0 1 0-.09l.075-.105c.067-.075.135-.158.21-.233l.113-.105c.12-.12.247-.127.33-.052l.682.682a.667.667 0 0 0 .66.173l2.37-.675a1.013 1.013 0 0 1 .982.217l.06.06h-.052l-6.105 2.82a.676.676 0 0 0-.217 1.065l3.217 3.525a.667.667 0 0 0 .75.158l1.5-.698a.188.188 0 0 1 .248.038.173.173 0 0 1 0 .217L15 18.098l-.082.097a.165.165 0 0 1-.233.045.172.172 0 0 1-.068-.195l.075-.135.69-1.5a.668.668 0 0 0-.157-.75l-3.518-3.217a.674.674 0 0 0-1.072.217l-2.85 6.09-.045-.052h-.038a1.012 1.012 0 0 1-.202-.96l.682-2.385a.667.667 0 0 0-.172-.66l-.698-.705a.187.187 0 0 1 0-.263l.12-.127a2.36 2.36 0 0 1 .24-.218l.105-.075h.18a.674.674 0 0 0 .863-.45l.57-2.01a.683.683 0 0 0-.195-.682l-3.293-3-.187-.18a1.92 1.92 0 0 1-.465-.63c-.09-.24 0-.45.3-.788h.007Zm10.373 13.5 3.082-3.075a1.5 1.5 0 0 0 .24-1.965l-.06-.09a1.5 1.5 0 0 0-1.875-.435l-1.035.473-2.25-2.475 5.25-2.438h.06a1.328 1.328 0 0 0 .33-2.205l-.044-.105-.128-.09a2.318 2.318 0 0 0-2.198-.45l-1.95.54-.42-.427a1.56 1.56 0 0 0-2.182.082 3.761 3.761 0 0 0-.75.863v.075a.668.668 0 0 0-.06.24v.165l-1.012.277-2.806-3.052-.18-.188a4.337 4.337 0 0 0-.36-.285 2.002 2.002 0 0 0-3 .15 1.995 1.995 0 0 0-.6 2.25l.045.105c.23.474.563.889.975 1.215l3 2.753-.3 1.035h-.165a.646.646 0 0 0-.307.097 3.54 3.54 0 0 0-.75.585l-.24.248a1.553 1.553 0 0 0 .06 2.047l.435.443-.563 1.987a2.325 2.325 0 0 0 .533 2.25l.052.053A1.327 1.327 0 0 0 9 19.365v-.067l2.43-5.25 2.475 2.25-.473 1.035.068-.083a1.516 1.516 0 1 0 2.453 1.778"
            fillRule="evenodd"
          ></path>
        </svg>
      ),
    },
    {
      id: "train",
      name: "قطار",
      svg: (
        <svg
          viewBox="0 0 24 24"
          width="28px"
          height="28px"
          fill="currentColor"
          className="block mx-auto"
        >
          <path
            d="m16.655 16.073.045.06 2.573 3.855a.645.645 0 0 1-1.028.75l-.045-.06-2.572-3.855a.645.645 0 0 1 1.027-.75Zm-7.852-.12a.637.637 0 0 1 .217.825l-.037.067L6.41 20.7a.645.645 0 0 1-.877.18.638.638 0 0 1-.21-.825v-.067l2.572-3.855a.63.63 0 0 1 .908-.18Zm6.397 2.46a.645.645 0 0 1 .075 1.282H9.41a.645.645 0 0 1-.075-1.282H15.2ZM13.91 16.5a.645.645 0 0 1 .075 1.282H10.7a.645.645 0 0 1-.075-1.282h3.285ZM15.523 3a3.217 3.217 0 0 1 3.21 3.202v7.073a1.93 1.93 0 0 1-1.95 1.928h-9a1.928 1.928 0 0 1-1.905-1.928V6.202A3.218 3.218 0 0 1 9.095 3h6.428Zm1.927 6.832-.832.413a4.575 4.575 0 0 1-1.8.465h-4.785a4.613 4.613 0 0 1-1.823-.383l-.195-.09-.825-.412v3.45a.645.645 0 0 0 .57.637h9.023a.645.645 0 0 0 .645-.637l.022-3.443Zm-8.55 1.5a.969.969 0 0 1 .536 1.706.967.967 0 1 1-.536-1.706Zm6.81 0a.967.967 0 1 1-.96.96.959.959 0 0 1 .96-.944v-.016Zm-.187-7.057H9.095A1.935 1.935 0 0 0 7.16 6.202v2.175l1.373.698c.39.194.817.309 1.252.338h4.823a3.39 3.39 0 0 0 1.275-.255l.165-.075 1.402-.706V6.202a1.928 1.928 0 0 0-1.815-1.927h-.112Zm-1.29.637a.645.645 0 0 1 .075 1.283h-3.93a.652.652 0 0 1-.645-.645.645.645 0 0 1 .57-.638h3.93Z"
            fillRule="evenodd"
          ></path>
        </svg>
      ),
    },
    {
      id: "bus",
      name: "اتوبوس",
      svg: (
        <svg
          viewBox="0 0 24 24"
          width="28px"
          height="28px"
          fill="currentColor"
          className="block mx-auto"
        >
          <path
            d="M15.48 3a3.33 3.33 0 0 1 3.33 3.33h.668a1.335 1.335 0 0 1 1.327 1.23v2.1a.667.667 0 0 1-1.328.083V7.65h-.667v8.662a2.01 2.01 0 0 1-1.342 1.89v1.11a1.665 1.665 0 1 1-3.33 0v-.997h-3.75v.997a1.665 1.665 0 1 1-3.33 0v-1.11a2.01 2.01 0 0 1-1.335-1.89V7.65h-.646v1.995a.667.667 0 0 1-1.327.105v-2.1a1.343 1.343 0 0 1 1.23-1.335h.75A3.33 3.33 0 0 1 9.075 3h6.405ZM9.075 18.315h-.667v.997a.338.338 0 0 0 .667.06v-1.057Zm7.065 0h-.66v.997a.33.33 0 0 0 .545.259.337.337 0 0 0 .115-.199v-1.057Zm-9.06-5.648v3.646a.675.675 0 0 0 .585.667h9.143a.667.667 0 0 0 .667-.585v-3.75a14.287 14.287 0 0 1-10.395.023Zm1.732 1.178a.668.668 0 0 1 .668.667v1.073a.667.667 0 1 1-1.335 0v-1.073a.668.668 0 0 1 .668-.667Zm6.93 0a.668.668 0 0 1 .668.667v1.073a.667.667 0 1 1-1.335 0v-1.073a.668.668 0 0 1 .668-.667Zm-.262-9.532H9.075A1.995 1.995 0 0 0 7.08 6.195v5.055a12.982 12.982 0 0 0 10.388 0V6.315a2.003 2.003 0 0 0-1.988-2.002Zm-.645 1.335a.66.66 0 0 1 .645.667.653.653 0 0 1-.57.66H9.72a.668.668 0 0 1-.075-1.327h5.19Z"
            fillRule="evenodd"
          ></path>
        </svg>
      ),
    },
    {
      id: "hotel",
      name: "اقامت",
      svg: (
        <svg
          viewBox="0 0 24 24"
          width="28px"
          height="28px"
          fill="currentColor"
          className="block mx-auto"
        >
          <path
            d="M14.655 3.75a.675.675 0 0 1 .67.59l.005.085h2.595A2.175 2.175 0 0 1 20.1 6.6v12.067a1.425 1.425 0 0 1-1.425 1.425H5.107c-.75 0-1.357-.607-1.357-1.357v-7.966a2.228 2.228 0 0 1 2.047-2.242v-.015a.675.675 0 0 1 1.345-.085l.005.085v.007h2.738v-1.92a2.175 2.175 0 0 1 2.047-2.17v-.004a.675.675 0 0 1 1.345-.085l.006.085h.697a.674.674 0 0 1 .675-.675Zm-4.77 6.12H5.97a.877.877 0 0 0-.545.196l-.073.067a.879.879 0 0 0-.251.63v7.972c0 .003.003.007.007.007h4.778V9.87h-.001Zm2.712-4.096h-.537a.825.825 0 0 0-.825.826v12.142h2.063v-1.305a1.425 1.425 0 0 1 1.313-1.42l.111-.005h.548c.788 0 1.425.638 1.425 1.425v1.304l1.98.001a.07.07 0 0 0 .052-.022l.017-.023.006-.03V6.6a.825.825 0 0 0-.825-.825h-3.27l-.01-.001h-2.048Zm2.673 11.588h-.547a.075.075 0 0 0-.075.075v1.304h.697v-1.304a.075.075 0 0 0-.023-.052l-.023-.017-.029-.006Zm-6.758-.99a.675.675 0 0 1 .085 1.345l-.085.005h-2.04a.676.676 0 0 1-.084-1.345l.084-.005h2.04Zm0-2.76a.675.675 0 0 1 .085 1.345l-.085.005h-2.04a.676.676 0 0 1-.084-1.345l.084-.005h2.04Zm5.46-.322a.675.675 0 0 1 .085 1.345l-.085.005h-1.364a.676.676 0 0 1-.085-1.345l.085-.005h1.364Zm3.406 0a.675.675 0 0 1 .084 1.345l-.084.005h-1.366a.676.676 0 0 1-.084-1.345l.084-.005h1.366Zm-8.866-2.438a.675.675 0 0 1 .085 1.345l-.085.005h-2.04a.676.676 0 0 1-.084-1.345l.084-.005h2.04Zm5.46-.292a.675.675 0 0 1 .085 1.345l-.085.005h-1.364a.676.676 0 0 1-.085-1.345l.085-.005h1.364Zm3.406 0a.675.675 0 0 1 .084 1.345l-.084.005h-1.366a.676.676 0 0 1-.084-1.345l.084-.005h1.366Zm-3.405-2.723a.675.675 0 0 1 .084 1.345l-.085.005h-1.364a.675.675 0 0 1-.085-1.344l.085-.006h1.364Zm3.405 0a.675.675 0 0 1 .084 1.345l-.084.005h-1.366a.675.675 0 0 1-.084-1.344l.084-.006h1.366Z"
            fillRule="evenodd"
          ></path>
        </svg>
      ),
    },
    {
      id: "tour",
      name: "تور",
      svg: (
        <svg
          viewBox="0 0 24 24"
          width="28px"
          height="28px"
          fill="currentColor"
          className="block mx-auto"
        >
          <path d="M12 3a3.376 3.376 0 0 1 3.351 3H16.5a2.25 2.25 0 0 1 2.25 2.25v3.095A3.001 3.001 0 0 1 21 14.25v2.25a1.5 1.5 0 0 1-1.5 1.5h-.75a3 3 0 0 1-3 3h-7.5a3 3 0 0 1-3-3H4.5a1.5 1.5 0 0 1-1.496-1.388L3 16.5v-2.25a3 3 0 0 1 2.25-2.902V8.25A2.25 2.25 0 0 1 7.5 6h1.146A3.375 3.375 0 0 1 12 3Zm5.25 9-.997.75a3.75 3.75 0 0 1-2.002.742l-.001.758a.75.75 0 0 1-1.495.088l-.005-.088v-.75h-1.5v.75a.75.75 0 0 1-1.495.088l-.005-.088v-.758a3.75 3.75 0 0 1-1.838-.625l-.165-.117L6.75 12v6a1.5 1.5 0 0 0 1.388 1.496l.112.004h7.5a1.5 1.5 0 0 0 1.5-1.5v-6Zm-3 4.5a.75.75 0 0 1 .088 1.495L14.25 18h-4.5a.75.75 0 0 1-.087-1.495l.087-.005h4.5Zm4.5-3.548V16.5h.75v-2.25a1.5 1.5 0 0 0-.683-1.258l-.066-.04Zm-13.5-.001-.056.033a1.5 1.5 0 0 0-.69 1.153l-.004.113v2.25h.75v-3.549ZM16.5 7.5h-9a.75.75 0 0 0-.75.75v1.875l1.898 1.425a2.25 2.25 0 0 0 1.102.436v-.736a.75.75 0 0 1 1.495-.088l.005.088V12h1.5v-.75a.75.75 0 0 1 1.495-.088l.005.088v.736a2.25 2.25 0 0 0 .97-.344l.132-.092 1.898-1.425V8.25a.75.75 0 0 0-.663-.745L16.5 7.5Zm-4.5-3c-.911 0-1.67.65-1.84 1.493L10.158 6h3.68l-.025-.104a1.876 1.876 0 0 0-1.69-1.392L12 4.5Z"></path>
        </svg>
      ),
    },
    {
      id: "villa",
      name: "ویلا",
      svg: (
        <svg
          viewBox="0 0 24 24"
          width="28px"
          height="28px"
          fill="currentColor"
          className="block mx-auto"
        >
          <path d="M12.7477 9.91098C12.7477 9.49677 12.4119 9.16098 11.9977 9.16098C11.5835 9.16098 11.2477 9.49677 11.2477 9.91098V10.9195C11.2477 11.3337 11.5835 11.6695 11.9977 11.6695C12.4119 11.6695 12.7477 11.3337 12.7477 10.9195V9.91098Z"></path>
          <path
            d="M10.6445 4.6719C11.2046 3.5992 12.7391 3.59723 13.302 4.6685L15.7477 9.32318V6.74985C15.7477 5.92142 16.4193 5.24985 17.2477 5.24985H17.9977C18.8261 5.24985 19.4977 5.92142 19.4977 6.74985V16.4601L20.9116 19.151C21.1043 19.5177 20.9632 19.9711 20.5966 20.1638C20.2299 20.3564 19.7765 20.2154 19.5838 19.8487L19.4005 19.4998H4.59381L4.41253 19.847C4.2208 20.2142 3.76773 20.3564 3.40056 20.1647C3.03339 19.9729 2.89117 19.5199 3.08289 19.1527L10.6445 4.6719ZM11.9741 5.36621L18.6123 17.9998H14.2477V14.9998C14.2477 13.7572 13.2403 12.7498 11.9977 12.7498C10.7551 12.7498 9.74771 13.7572 9.74771 14.9998V17.9998H5.37708L11.9741 5.36621ZM12.7477 14.9998V17.9998H11.2477V14.9998C11.2477 14.5856 11.5835 14.2498 11.9977 14.2498C12.4119 14.2498 12.7477 14.5856 12.7477 14.9998ZM17.9977 13.6053L17.2477 12.1779V6.74985H17.9977V13.6053Z"
            fillRule="evenodd"
          ></path>
        </svg>
      ),
    },
  ];

  return (
    <div className="flex items-center w-full overflow-x-visible">
      {/* تصویر پس زمینه */}
      <div
        className="absolute top-17 left-0 w-full min-h-[320px] rounded-bl-[80px] rounded-t-[40px] max-lg:!bg-none lg:bg-cover lg:bg-center lg:bg-no-repeat"
        style={{
          backgroundImage: `url(${tabs.find((tab) => tab.id === activeTab)?.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* <div className="absolute inset-0 top-[-10px] bg-[#FDB713] h-[150px] lg:bg-transparent"></div> */}
      </div>

      <div
        className={`lg:hidden fixed left-0 right-0 z-50 bg-[#fdb713] transition-all duration-300 ${
          isScrolled ? "top-0 h-[100px]" : "top-8 h-[110px]"
        }`}
      ></div>
      {/* منوی موبایل و تبلت */}
      <div className="lg:hidden fixed top-17 ml-5 mr-5 p-0 left-0 right-0 z-50 bg-white w-auto rounded-xl overflow-hidden border border-[#0000001f] mx-0 my-0 transition-all duration-300">
        {isScrolled ? (
          <div className="">
            <div className="grid grid-cols-6 w-full top-10">
              {mobileTabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => {
                    setActiveTab(tab.id);
                    const foundConfig = tabConfigArray.find(
                      (t) => t.id === tab.id,
                    );
                    setConfigTab(foundConfig);
                  }}
                  className="py-3 px-2 text-center text-sm font-medium transition-all flex flex-col items-center justify-center"
                >
                  <div className="flex-shrink-0">{tab.svg}</div>
                </button>
              ))}
            </div>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-3 w-full divide-x divide-[#0000001f]">
              {mobileTabs.slice(0, 3).map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => {
                    setActiveTab(tab.id);
                    const foundConfig = tabConfigArray.find(
                      (t) => t.id === tab.id,
                    );
                    setConfigTab(foundConfig);
                  }}
                  className="py-3 px-2 text-center text-sm font-medium transition-all flex flex-col items-center"
                >
                  {tab.svg}
                  <span className="mt-1 text-xs">{tab.name}</span>
                </button>
              ))}
            </div>

            <div className="border-t border-[#0000001f]"></div>

            <div className="grid grid-cols-3 divide-x divide-[#0000001f]">
              {mobileTabs.slice(3, 6).map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => {
                    setActiveTab(tab.id);
                    const foundConfig = tabConfigArray.find(
                      (t) => t.id === tab.id,
                    );
                    setConfigTab(foundConfig);
                  }}
                  className="py-3 px-2 text-center text-sm font-medium transition-all flex flex-col items-center"
                >
                  {tab.svg}
                  <span className="mt-1 text-xs">{tab.name}</span>
                </button>
              ))}
            </div>
          </>
        )}
      </div>

      {/* بخش اصلی محتوا */}
      <div className="relative w-full pt-32 lg:pt-40 m-20">
        <div className="hidden lg:block flex-col items-center w-full max-w-[1200px] h-auto mx-auto bg-white rounded-[8px] sticky top-0 z-40 overflow-visible">
          {/* منوی دسکتاپ */}
          <div className="overflow-visible">
            <div
              style={{ borderBottom: "1px solid #0000001f" }}
              className="flex items-center rounded-lg p-10 h-[80.8px] mb-[10px] justify-around bg-white"
            >
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => {
                    setActiveTab(tab.id);
                    const foundConfig = tabConfigArray.find(
                      (t) => t.id === tab.id,
                    );
                    setConfigTab(foundConfig);
                    if (foundConfig?.option1)
                      setTripType(foundConfig.option1.default);
                    if (foundConfig?.option2)
                      setCabinClass(foundConfig.option2.default);
                    if (foundConfig?.option3)
                      setPassengerType(foundConfig.option3.default);
                    if (foundConfig?.option4)
                      setCarTransport(foundConfig.option4.default);
                    if (foundConfig?.optionPlus)
                      setCabinClass(foundConfig.optionPlus.default);
                  }}
                  className={`flex flex-col items-center w-[144px] h-[80px] transition-all duration-200 group ${
                    activeTab === tab.id ? "text-blue-600" : "text-gray-600"
                  }`}
                >
                  <div className="relative w-[40px] lg:bg-auto flex items-center justify-center">
                    {tab.badge && (
                      <span className="absolute p-[6px] h-fit -top-[-7px] right-5 -translate-x-1/2 text-[13px] bg-[#84e199] text-black px-2 rounded-full z-10">
                        {tab.badge}
                      </span>
                    )}
                  </div>
                  {tab.svg}
                  <span className="text-sm !text-[1rem] font-medium mt-1">
                    {tab.name}
                  </span>
                  {activeTab === tab.id && (
                    <div className="w-full h-[4px] bg-blue-600 mt-[9px] p-[2px] rounded-t"></div>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* دکمه‌های dropdown */}
          <div className="hidden lg:flex flex-wrap items-center gap-2 mb-4 px-4 overflow-visible">
            {currentConfig?.option1 && (
              <div className="relative inline-block z-[100]">
                <button
                  onClick={() => setShowTripMenu(!showTripMenu)}
                  className="dropdown-button border border-[#0000001f] text-[14px] h-fit w-fit px-4 py-2 rounded-3xl text-[#4b5259] flex items-center gap-2"
                >
                  {tripType} {svgMeno}
                </button>
                {showTripMenu && (
                  <div className="absolute text-[14px] top-full mt-1 bg-white border border-[#0000001f] rounded-lg shadow-lg z-50">
                    {currentConfig.option1.tripTypes.map((option) => (
                      <div
                        key={option}
                        onClick={() => {
                          setTripType(option);
                          setShowTripMenu(false);
                        }}
                        className="px-4 py-2 hover:bg-[#f2f9ff] cursor-pointer whitespace-nowrap"
                      >
                        {option}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {currentConfig?.option2 && (
              <div className="relative inline-block z-[100]">
                <button
                  onClick={() => setShowPrivateMenu(!showPrivateMenu)}
                  className="dropdown-button border border-[#0000001f] text-[14px] h-fit w-fit px-4 py-2 rounded-3xl text-[#4b5259] flex items-center gap-2"
                >
                  {privateWagon} {svgMeno}
                </button>
                {showPrivateMenu && (
                  <div className="absolute text-[14px] top-full mt-1 bg-white border border-[#0000001f] rounded-lg shadow-lg z-50">
                    {currentConfig.option2.tripTypes.map((option) => (
                      <div
                        key={option}
                        onClick={() => {
                          setPrivateWagon(option);
                          setShowPrivateMenu(false);
                        }}
                        className="px-4 py-2 hover:bg-[#f2f9ff] cursor-pointer whitespace-nowrap"
                      >
                        {option}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {currentConfig?.option3 && (
              <div className="relative inline-block z-[100]">
                <button
                  onClick={() =>
                    setShowPassengerTypeMenu(!showPassengerTypeMenu)
                  }
                  className="dropdown-button border border-[#0000001f] text-[14px] h-fit w-fit px-4 py-2 rounded-3xl text-[#4b5259] flex items-center gap-2"
                >
                  {passengerType} {svgMeno}
                </button>
                {showPassengerTypeMenu && (
                  <div className="absolute text-[14px] top-full mt-1 bg-white border border-[#0000001f] rounded-lg shadow-lg z-50">
                    {currentConfig.option3.tripTypes.map((option) => (
                      <div
                        key={option}
                        onClick={() => {
                          setPassengerType(option);
                          setShowPassengerTypeMenu(false);
                        }}
                        className="px-4 py-2 hover:bg-[#f2f9ff] cursor-pointer whitespace-nowrap"
                      >
                        {option}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {currentConfig?.option4 && (
              <div className="relative inline-block z-[100]">
                <button
                  onClick={() => setShowCarMenu(!showCarMenu)}
                  className="dropdown-button border border-[#0000001f] text-[14px] h-fit w-fit px-4 py-2 rounded-3xl text-[#4b5259] flex items-center gap-2"
                >
                  {carTransport} {svgMeno}
                </button>
                {showCarMenu && (
                  <div className="absolute text-[14px] top-full mt-1 bg-white border border-[#0000001f] rounded-lg shadow-lg z-50">
                    {currentConfig.option4.tripTypes.map((option) => (
                      <div
                        key={option}
                        onClick={() => {
                          setCarTransport(option);
                          setShowCarMenu(false);
                        }}
                        className="px-4 py-2 hover:bg-[#f2f9ff] cursor-pointer whitespace-nowrap"
                      >
                        {option}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {currentConfig?.optionPlus && (
              <div className="relative inline-block z-[100]">
                <button
                  onClick={() => setShowCabinMenu(!showCabinMenu)}
                  className="dropdown-button border border-[#0000001f] text-[14px] h-fit w-fit px-4 py-2 rounded-3xl text-[#4b5259] flex items-center gap-2"
                >
                  {cabinClass} {svgMeno}
                </button>
                {showCabinMenu && (
                  <div className="absolute text-[14px] top-full mt-1 bg-white border border-[#0000001f] rounded-lg shadow-lg z-50">
                    {currentConfig.optionPlus.tripTypes.map((option) => (
                      <div
                        key={option}
                        onClick={() => {
                          setCabinClass(option);
                          setShowCabinMenu(false);
                        }}
                        className="px-4 py-2 hover:bg-[#f2f9ff] cursor-pointer whitespace-nowrap"
                      >
                        {option}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>

          {/* فیلدها */}
          <div className="hidden lg:flex relative items-center flex-wrap p-4 gap-2">
            {(originField || destinationField) && (
              <div className="relative flex items-center gap-0 border border-[#0000001f] rounded-lg flex-1 min-w-[250px]">
                {originField && (
                  <LocationInput
                    key={originField.name}
                    placeholder={originField.placeholder}
                    activeTab={activeTab}
                  />
                )}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-px h-12 bg-gray-300 -z-0"></div>
                {originField && destinationField && (
                  <button
                    onClick={swapLocations}
                    className="relative bg-white border border-[#0000001f] p-2 rounded-full w-10 h-10 flex items-center justify-center hover:cursor-pointer"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      width="1.5em"
                      fill="currentColor"
                      className="bg-white rounded-full"
                    >
                      <path d="m16.96 12.157.07.063 3.75 3.75a.757.757 0 0 1 .06.067l-.06-.067a.748.748 0 0 1 .22.53v.025a.728.728 0 0 1-.003.039L21 16.5a.747.747 0 0 1-.147.446l-.01.014-.008.01-.055.06-3.75 3.75a.75.75 0 0 1-1.123-.99l.063-.07 2.469-2.47H8.25a.75.75 0 0 1-.087-1.495l.087-.005h10.189l-2.47-2.47a.75.75 0 0 1-.062-.99l.063-.07a.75.75 0 0 1 .99-.063ZM8.03 3.22a.75.75 0 0 1 .063.99l-.063.07-2.47 2.47h10.19a.75.75 0 0 1 .088 1.495l-.088.005H5.56l2.47 2.47a.75.75 0 0 1 .063.99l-.063.07a.75.75 0 0 1-.99.063l-.07-.063-3.75-3.75-.055-.06a.644.644 0 0 1-.005-.007l.06.067A.756.756 0 0 1 3 7.5v-.014a.47.47 0 0 1 .003-.053L3 7.5a.756.756 0 0 1 .22-.53l3.75-3.75a.75.75 0 0 1 1.06 0Z"></path>
                    </svg>
                  </button>
                )}
                {destinationField && (
                  <LocationInput
                    key={destinationField.name}
                    placeholder={destinationField.placeholder}
                    activeTab={activeTab}
                  />
                )}
              </div>
            )}
            {dateFields && dateFields[0] && dateFields[1] && (
              <div className="flex border border-[#0000001f] rounded-lg flex-1 min-w-[250px]">
                <div className="flex-1 text-[#2b2f33] font-bold">
                  <PersianCalendar
                    placeholder={dateFields[0].placeholder}
                    onChange={(date) => console.log(dateFields[0].name, date)}
                  />
                </div>
                <span className="border-r border-[#0000001f]"></span>
                <div className="bg-[#f9fbfc] rounded-lg flex pl-2">
                  <PersianCalendar
                    placeholder={dateFields[1].placeholder}
                    onChange={(date) => console.log(dateFields[1].name, date)}
                  />
                  <svg
                    viewBox="0 0 24 24"
                    width="18px"
                    height="18px"
                    fill="currentColor"
                    className="mt-[17px] mr-[0px]"
                  >
                    <path d="M12 3a.75.75 0 0 1 .745.663l.005.087v7.5h7.5a.75.75 0 0 1 .087 1.495l-.087.005h-7.5v7.5a.75.75 0 0 1-1.495.087l-.005-.087v-7.5h-7.5a.75.75 0 0 1-.087-1.495l.087-.005h7.5v-7.5A.75.75 0 0 1 12 3Z"></path>
                  </svg>
                </div>
              </div>
            )}
            {otherFields?.map((field) => {
              if (field.type === "passenger") {
                return (
                  <PassengerInput
                    key={field.name}
                    placeholder={field.placeholder}
                  />
                );
              }
              return (
                <input
                  key={field.name}
                  placeholder={field.placeholder}
                  className="border border-[#0000001f] p-3 rounded-lg flex-1"
                />
              );
            })}
            <div className="bg-[#E3A107] rounded-2xl flex items-center shadow-lg">
              <button className="bg-[#E3A107] h-[46px] px-8 py-2 rounded-lg text-black font-medium">
                جستجو
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
