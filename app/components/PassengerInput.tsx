// components/PassengerInput.jsx
"use client";
import { useEffect, useRef, useState } from "react";

export default function PassengerInput({ placeholder }) {
  const [show, setShow] = useState(false);
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [infants, setInfants] = useState(0);
  const [isFocused, setIsFocused] = useState(false);
  const total = adults + children + infants;
  const hasValue = total > 0;
  const dropDown = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropDown.current &&
        !dropDown.current.contains(event.target as Node)
      ) {
        setShow(false);
        setIsFocused(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleButtonClick = () => {
    setShow(!show);
    setIsFocused(true);
  };

  return (
    <div className="relative flex-1 w-full h-full" ref={dropDown}>
      <div className="relative h-full">
        <button
          onClick={handleButtonClick}
          onBlur={() => !show && setIsFocused(false)}
          className={`rounded-lg text-right w-full h-full pt-5 pb-1 px-3 transition-all duration-200 ${
            isFocused || show
              ? "bg-white border border-[black]"
              : "bg-white border border-gray-200"
          }`}
        >
          <span className="text-sm">{total}</span>
        </button>

        <span
          className={`absolute right-3 transition-all duration-200 pointer-events-none bg-white px-1 ${
            hasValue || isFocused
              ? "-top-2.5 text-xs text-black"
              : "top-3.5 text-sm text-gray-400"
          }`}
        >
          {placeholder}
        </span>
      </div>

      {show && (
        <div className="absolute top-full left-0 right-0 sm:left-auto sm:right-0 mt-2 bg-white border border-gray-100 rounded-xl shadow-lg z-50 w-full sm:w-72 p-4">
          {/* بزرگسال */}
          <div className="flex justify-between items-center py-3">
            <div className="text-sm font-medium text-gray-700">بزرگسال</div>
            <div className="flex gap-4 items-center">
              <button
                onClick={() => setAdults(Math.max(0, adults - 1))}
                className="w-7 h-7 bg-[#51a2e7] text-white rounded-lg flex items-center justify-center text-gray-500 text-lg"
              >
                -
              </button>
              <span className="text-sm w-5 text-center">{adults}</span>
              <button
                onClick={() => setAdults(adults + 1)}
                className="w-7 h-7 bg-[#007aff]  text-white rounded-lg flex items-center justify-center text-gray-500 text-lg"
              >
                +
              </button>
            </div>
          </div>

          {/* کودک */}
          <div className="flex justify-between items-center py-3 border-t border-gray-100">
            <div className="text-sm font-medium text-gray-700">
              کودک (2-12 سال)
            </div>
            <div className="flex gap-4 items-center">
              <button
                onClick={() => setChildren(Math.max(0, children - 1))}
                className="w-7 h-7  bg-[#51a2e7] text-white rounded-lg flex items-center justify-center text-gray-500 text-lg"
              >
                -
              </button>
              <span className="text-sm w-5 text-center">{children}</span>
              <button
                onClick={() => setChildren(children + 1)}
                className="w-7 h-7 rounded-lg flex bg-[#007aff] text-white items-center justify-center text-gray-500 text-lg"
              >
                {" "}
                +
              </button>
            </div>
          </div>

          {/* نوزاد */}
          <div className="flex justify-between items-center py-3 border-t border-gray-100">
            <div className="text-sm font-medium text-gray-700">
              نوزاد (زیر 2 سال)
            </div>
            <div className="flex gap-4 items-center">
              <button
                onClick={() => setInfants(Math.max(0, infants - 1))}
                className="w-7 h-7 bg-[#51a2e7] text-white rounded-lg flex items-center justify-center text-gray-500 text-lg"
              >
                -
              </button>
              <span className="text-sm w-5 text-center">{infants}</span>
              <button
                onClick={() => setInfants(infants + 1)}
                className="w-7 h-7  bg-[#007aff] text-white rounded-lg flex items-center justify-center text-gray-500 text-lg"
              >
                +
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
