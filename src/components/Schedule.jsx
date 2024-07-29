import React, { useContext } from "react";
import { CourseContext } from "../contexts/CourseContext";

export const Schedule = () => {
  const { schedule } = useContext(CourseContext);

  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const timeSlots = [
    "7:00 AM", "8:00 AM", "9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM",
    "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM", "6:00 PM",
    "7:00 PM", "8:00 PM", "9:00 PM", "10:00 PM"
  ];

  const handleClick = (row, col) => {
    console.log(`Row: ${row}, Col: ${col}`);
  };

  return (
    <div className="flex justify-center my-5">
      <table className="table-auto border-collapse w-4/5">
        <thead>
          <tr>
            <th className="border px-4 py-2 w-1/7">Time</th>
            {days.map((day, colIndex) => (
              <th key={day} className="border px-4 py-2 w-1/7">{day}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {timeSlots.map((time, rowIndex) => (
            <tr key={time}>
              <td className="border px-4 py-2 w-1/7">{time}</td>
              {days.map((day, colIndex) => (
                <td
                  key={day}
                  className="border px-4 py-2 bg-white w-1/7 cursor-pointer"
                  data-row={rowIndex}
                  data-col={colIndex}
                  onClick={() => handleClick(rowIndex, colIndex)}
                >
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};