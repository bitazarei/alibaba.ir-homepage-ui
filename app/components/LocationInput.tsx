// components/LocationInput.tsx
"use client";
import { useEffect, useRef, useState } from "react";
import { citiesData } from "./Datass";

interface LocationInputProps {
  placeholder: string;
  activeTab: string;
}

export default function LocationInput({
  placeholder,
  activeTab,
}: LocationInputProps) {
  const [show, setShow] = useState(false);
  const [value, setValue] = useState("");
  const [isFocused, setIsFocused] = useState(false);

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

  const filteredCities = citiesData.filter((city) => city.name.includes(value));

  return (
    <div className="relative flex-1 w-full h-[47px]" ref={dropDown}>
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onFocus={() => {
          setShow(true);
          setIsFocused(true);
        }}
        onBlur={() => !show && setIsFocused(false)}
        placeholder={placeholder}
        className={`w-full h-full px-3 py-2 rounded-lg outline-none transition-all duration-200 text-sm ${
          isFocused
            ? "border border-black bg-white"
            : "border border-transparent bg-transparent"
        }`}
      />
      {show && (
        <div className="absolute top-full left-0 right-0 sm:left-auto sm:right-0 mt-2 bg-white border border-gray-100 rounded-xl shadow-lg z-50 w-full sm:w-80 max-h-60 overflow-auto">
          {filteredCities.map((city) => (
            <div
              key={city.id}
              className="flex items-center gap-3 p-3 cursor-pointer transition-colors"
              onClick={() => {
                setValue(city.name);
                setShow(false);
                setIsFocused(false);
              }}
            >
              <div className="flex-shrink-0">{city.icon}</div>

              <div className="min-w-0 flex-1">
                <div className="font-medium text-sm text-gray-800">{city.name}</div>
                <div className="text-xs text-gray-400 truncate">{city.sub}</div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}