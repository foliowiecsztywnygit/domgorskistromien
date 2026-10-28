import React, { useState } from 'react';
import { 
  format, 
  addMonths, 
  subMonths, 
  startOfMonth, 
  endOfMonth, 
  startOfWeek, 
  endOfWeek, 
  isSameMonth, 
  isSameDay, 
  addDays, 
  isBefore,
  startOfDay
} from 'date-fns';
import { pl } from 'date-fns/locale';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Calendar = ({ 
  selectedDates = [], 
  onChange, 
  blockedDates = [], 
  readOnly = false, 
  allowAdminBlocks = false, 
  publicStyles = false, 
  monthsCount = 1, 
  className = '' 
}) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  
  const nextMonth = () => setCurrentDate(addMonths(currentDate, 1));
  const prevMonth = () => setCurrentDate(subMonths(currentDate, 1));

  const onDateClick = (day) => {
    if (readOnly) return;
    
    if (!allowAdminBlocks && blockedDates.some(blockedDate => isSameDay(new Date(blockedDate), day))) {
      return; 
    }
    
    if (onChange) {
      onChange(day);
    }
  };

  const renderMonth = (monthOffset) => {
    const monthDate = addMonths(currentDate, monthOffset);
    const monthStart = startOfMonth(monthDate);
    const monthEnd = endOfMonth(monthStart);
    const startDate = startOfWeek(monthStart, { weekStartsOn: 1 });
    const endDate = endOfWeek(monthEnd, { weekStartsOn: 1 });
    const today = startOfDay(new Date());

    const days = ['Pn', 'Wt', 'Śr', 'Cz', 'Pt', 'So', 'Nd'];

    const rows = [];
    let dayElements = [];
    let day = startDate;

    while (day <= endDate) {
      for (let i = 0; i < 7; i++) {
        const formattedDate = format(day, 'd');
        const cloneDay = day;
        
        const isBlocked = blockedDates.some(blocked => isSameDay(new Date(blocked), cloneDay));
        const isSelected = selectedDates?.some(sel => isSameDay(sel, cloneDay));
        const isCurrentMonth = isSameMonth(day, monthStart);
        const isPast = isBefore(day, today);

        let cellClasses = "h-10 w-10 sm:h-11 sm:w-11 flex items-center justify-center rounded-xl text-sm font-medium transition-all duration-150 mx-auto ";

        if (!isCurrentMonth) {
          cellClasses += "text-gray-300 opacity-40 ";
        } else if (isPast) {
          cellClasses += "text-gray-300 cursor-not-allowed line-through ";
        } else if (isBlocked) {
          if (allowAdminBlocks) {
            cellClasses += "bg-red-50 text-red-600 font-bold border border-red-200 cursor-pointer hover:bg-red-100 ";
          } else if (publicStyles) {
            cellClasses += "bg-red-50 text-red-400 border border-red-100 cursor-not-allowed line-through ";
          } else {
            cellClasses += "bg-gray-100 text-gray-400 line-through cursor-not-allowed ";
          }
        } else if (isSelected) {
          cellClasses += "bg-[#8BC030] text-white font-bold shadow-md shadow-[#8BC030]/30 scale-105 ";
        } else {
          cellClasses += "text-gray-700 hover:bg-[#F4F9EB] hover:text-[#53721D] cursor-pointer ";
        }
        
        let isClickable = isCurrentMonth && !isPast;
        if (!allowAdminBlocks) {
           isClickable = isClickable && !isBlocked && !readOnly;
        }

        dayElements.push(
          <div 
            key={day.toISOString()} 
            className="py-1 flex justify-center"
            onClick={() => {
              if (isClickable) {
                onDateClick(cloneDay);
              }
            }}
          >
            <div className={cellClasses}>
              {formattedDate}
            </div>
          </div>
        );
        day = addDays(day, 1);
      }
      rows.push(
        <div className="grid grid-cols-7" key={day.toISOString()}>
          {dayElements}
        </div>
      );
      dayElements = [];
    }

    return (
      <div key={monthOffset} className={monthOffset > 0 ? "mt-8 pt-6 border-t border-gray-100" : ""}>
        <div className="flex justify-between items-center mb-4 px-2">
          {monthOffset === 0 ? (
            <button 
              type="button"
              onClick={prevMonth} 
              className="p-2 rounded-lg hover:bg-gray-100 text-gray-600 transition-colors"
              aria-label="Poprzedni miesiąc"
            >
              <ChevronLeft size={20} />
            </button>
          ) : <div className="w-9"></div>}
          
          <h3 className="text-gray-900 font-serif font-bold text-base sm:text-lg capitalize">
            {format(monthDate, 'LLLL yyyy', { locale: pl })}
          </h3>
          
          {monthOffset === monthsCount - 1 ? (
            <button 
              type="button"
              onClick={nextMonth} 
              className="p-2 rounded-lg hover:bg-gray-100 text-gray-600 transition-colors"
              aria-label="Następny miesiąc"
            >
              <ChevronRight size={20} />
            </button>
          ) : <div className="w-9"></div>}
        </div>
        
        <div className="grid grid-cols-7 mb-2">
          {days.map((d, idx) => (
            <div key={idx} className="text-center text-xs font-semibold text-[#53721D] tracking-wider py-1">
              {d}
            </div>
          ))}
        </div>
        
        <div>{rows}</div>
      </div>
    );
  };

  return (
    <div className={`bg-white rounded-2xl p-4 sm:p-6 select-none ${className}`}>
      {Array.from({ length: monthsCount }).map((_, idx) => renderMonth(idx))}
    </div>
  );
};

export default Calendar;
