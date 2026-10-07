// components/PersianCalendar.tsx
"use client";
import { useState, useRef, useEffect } from "react";

interface PersianCalendarProps {
  placeholder: string;
  onChange: (date: string) => void;
}

export default function PersianCalendar({ placeholder, onChange }: PersianCalendarProps) {
  const [value, setValue] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const [showCalendar, setShowCalendar] = useState(false);
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth());
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
  const containerRef = useRef<HTMLDivElement>(null);
  const calendarRef = useRef<HTMLDivElement>(null);

  const handleInputClick = () => {
    setShowCalendar(!showCalendar);
    setIsFocused(true);
  };

  const handleDateSelect = (day: number) => {
    const date = new Date(selectedYear, selectedMonth, day);
    const formattedDate = date.toISOString().split('T')[0];
    setValue(formattedDate);
    onChange(formattedDate);
    setShowCalendar(false);
    setIsFocused(false);
  };

  const handleClickOutside = (e: MouseEvent) => {
    if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
      setShowCalendar(false);
      setIsFocused(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const getDaysInMonth = (year: number, month: number) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (year: number, month: number) => {
    return new Date(year, month, 1).getDay();
  };

  const prevMonth = () => {
    if (selectedMonth === 0) {
      setSelectedMonth(11);
      setSelectedYear(selectedYear - 1);
    } else {
      setSelectedMonth(selectedMonth - 1);
    }
  };

  const nextMonth = () => {
    if (selectedMonth === 11) {
      setSelectedMonth(0);
      setSelectedYear(selectedYear + 1);
    } else {
      setSelectedMonth(selectedMonth + 1);
    }
  };

  const renderCalendar = () => {
    const daysInMonth = getDaysInMonth(selectedYear, selectedMonth);
    const firstDay = getFirstDayOfMonth(selectedYear, selectedMonth);
    const days = [];
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const weekDays = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

    for (let i = 0; i < firstDay; i++) {
      days.push(<div key={`empty-${i}`} className="h-8 w-8"></div>);
    }

    for (let day = 1; day <= daysInMonth; day++) {
      const isSelected = value === `${selectedYear}-${String(selectedMonth + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
      days.push(
        <button
          key={day}
          onClick={() => handleDateSelect(day)}
          className={`h-8 w-8 rounded-full text-sm hover:bg-blue-500 hover:text-white transition-colors ${
            isSelected ? "bg-blue-600 text-white" : ""
          }`}
        >
          {day}
        </button>
      );
    }

    return (
      <div ref={calendarRef} className="absolute top-full left-0 mt-2 z-50 bg-white rounded-lg shadow-xl  p-4 w-72">
        <div className="flex justify-between items-center mb-4">
          <button onClick={prevMonth} className="p-1 hover:bg-gray-100 rounded px-2">→</button>
          <span className="font-medium">
            {monthNames[selectedMonth]} {selectedYear}
          </span>
          <button onClick={nextMonth} className="p-1 hover:bg-gray-100 rounded px-2">←</button>
        </div>
        <div className="grid grid-cols-7 gap-1 mb-2">
          {weekDays.map(day => (
            <div key={day} className="h-8 w-8 flex items-center justify-center text-xs font-medium text-gray-500">
              {day}
            </div>
          ))}
        </div>
        <div className="grid grid-cols-7 gap-1">
          {days}
        </div>
      </div>
    );
  };

  const hasValue = value.length > 0;

  return (
    <div className="relative w-full h-full" ref={containerRef}>
      
      <input
        type="text"
        value={value}
        onClick={handleInputClick}
        onFocus={() => setIsFocused(true)}
        readOnly
        className="w-full pt-6 pb-2 px-3 cursor-pointer rounded-lg focus:outline-none focus:border-black transition-all duration-200  border-gray-300"
      />
      
      <span 
        className={`absolute right-3 transition-all duration-200 pointer-events-none bg-[#f9fbfc] px-1 ${
          (hasValue || isFocused) 
            ? '-top-2 text-xs text-black' 
            : 'top-3 text-sm text-gray-400'
        }`}
      >
        {placeholder}
      </span>
      
      {showCalendar && renderCalendar()}
      
    </div>
  );
}