import React, { useContext, useState, useEffect } from "react";
import { ShiftsContext } from "../contexts/ShiftsContext";
import { useTranslation } from "react-i18next";
import { SemesterContext } from "../contexts/SemesterContext";
import { motion, AnimatePresence } from "framer-motion";
import html2canvas from "html2canvas"; // Import html2canvas
import { Search } from "@mui/icons-material";

class Course {
  constructor(
    name,
    credits,
    classesPerWeek,
    section,
    professor,
    days,
    startTimes,
    endTimes,
    color
  ) {
    this.name = name;
    this.credits = credits;
    this.classesPerWeek = classesPerWeek;
    this.section = section;
    this.professor = professor;
    this.days = days || [];
    this.startTimes = startTimes || [];
    this.endTimes = endTimes || [];
    this.color = color || "#ffffff";
  }

  collides(other) {
    for (let i = 0; i < this.startTimes.length; i++) {
      for (let j = 0; j < other.startTimes.length; j++) {
        if (daysOverlap(this.days[i], other.days[j])) {
          let thisStart = parseTime(this.startTimes[i]);
          let thisEnd = parseTime(this.endTimes[i]);
          let otherStart = parseTime(other.startTimes[j]);
          let otherEnd = parseTime(other.endTimes[j]);

          if (
            (thisStart < otherEnd && thisEnd > otherStart) ||
            (otherStart < thisEnd && otherEnd > thisStart)
          ) {
            return true;
          }
        }
      }
    }

    return false;
  }
}

class Schedule {
  constructor(courses) {
    this.courses = courses;
    this.count = courses.length;
    this.credits = this.countCredits();
    this.IDString = this.createIDString();
  }

  createIDString() {
    return this.courses.map((course) => course.name).join("-");
  }

  countCredits() {
    return this.courses.reduce(
      (sum, course) => sum + parseInt(course.credits),
      0
    );
  }

  formsValidSchedule(course) {
    return this.courses.every((existingCourse) => {
      const collides = existingCourse.collides(course);

      return !collides;
    });
  }

  addCourse(course) {
    if (this.formsValidSchedule(course)) {
      const newCourses = [...this.courses, course];
      return new Schedule(newCourses);
    }
    return null;
  }
}

const daysOverlap = (days1, days2) => {
  return days1.toLowerCase() === days2.toLowerCase();
};

const parseTime = (timeString) => {
  let [time, modifier] = timeString.split(" ");
  let [hours, minutes] = time.split(":").map(Number);

  if (modifier === "PM" && hours !== 12) {
    hours += 12;
  }

  if (modifier === "AM" && hours === 12) {
    hours = 0;
  }

  return hours * 60 + minutes;
};

export const ScheduleComponent = () => {
  const { t } = useTranslation();
  const { shifts } = useContext(ShiftsContext);
  const { minCredits, maxCredits, semester } = useContext(SemesterContext);
  const [schedules, setSchedules] = useState([]);
  const [showPrevNext, setShowPrevNext] = useState(false);
  const [currentScheduleIndex, setCurrentScheduleIndex] = useState(0);
  const [lastSemester, setLastSemester] = useState(semester);
  const [error, setError] = useState("");
  const [showError, setShowError] = useState(false);
  const [showInput, setShowInput] = useState(false);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    setLastSemester(semester);
  }, [semester]);

  const generateSchedules = () => {
    setLastSemester(semester);

    let creditsC = 0;
    let groupedCourses = {};

    for (let course of shifts) {
      if (
        course.name &&
        course.credits &&
        course.classesPerWeek &&
        course.section &&
        course.professor &&
        course.days &&
        course.startTimes &&
        course.endTimes &&
        course.color
      ) {
        if (!groupedCourses[course.name]) {
          groupedCourses[course.name] = [];
        }

        const newCourse = new Course(
          course.name,
          course.credits,
          course.classesPerWeek,
          course.section,
          course.professor,
          course.days,
          course.startTimes,
          course.endTimes,
          course.color
        );

        groupedCourses[course.name].push(newCourse);
        creditsC += parseInt(course.credits);
      }
    }

    let courseGroups = Object.values(groupedCourses);
    let allSchedules = [];

    const generateCombinations = (groupIndex, currentSchedule) => {
      if (groupIndex === courseGroups.length) {
        allSchedules.push(currentSchedule);

        return;
      }

      for (let course of courseGroups[groupIndex]) {
        if (currentSchedule.formsValidSchedule(course)) {
          let newSchedule = currentSchedule.addCourse(course);

          generateCombinations(groupIndex + 1, newSchedule);
        }
      }
    };

    let initialSchedule = new Schedule([]);
    generateCombinations(0, initialSchedule);

    setShowPrevNext(true);

    setSchedules(allSchedules);
    setCurrentScheduleIndex(0);
  };

  const showNextSchedule = () => {
    setCurrentScheduleIndex((currentScheduleIndex + 1) % schedules.length);
  };

  const showPrevSchedule = () => {
    setCurrentScheduleIndex(
      (currentScheduleIndex - 1 + schedules.length) % schedules.length
    );
  };

  const searchSchedule = (index) => {
    if (index >= 1 && index < schedules.length) {
      setCurrentScheduleIndex(index - 1);
      setShowError(false);
      setError("");
    } else {
      setShowError(true);
      setError("Not a valid index");
    }
  };

  const handleSearch = () => {
    const index = parseInt(inputValue, 10);
    searchSchedule(index);
  };

  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const timeSlots = [
    "07:00 AM",
    "08:00 AM",
    "09:00 AM",
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "01:00 PM",
    "02:00 PM",
    "03:00 PM",
    "04:00 PM",
    "05:00 PM",
    "06:00 PM",
    "07:00 PM",
    "08:00 PM",
    "09:00 PM",
    "10:00 PM",
  ];

  

  const isColorLight = (color) => {
    const hex = color.replace("#", "");
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);

    const luminance = 0.2126 * r + 0.7152 * g + 0.0722 * b;

    return luminance > 128;
  };

  const renderScheduleTable = (schedule) => {
    const WIDTH = 1000;
    const HEIGHT = 600;
    const TOP_MARGIN = 0.07;
    const SIDE_MARGIN = 0.1;
    const DAY_COUNT = 6;

    const dayWidth = (WIDTH * (1 - SIDE_MARGIN)) / DAY_COUNT;
    const hourCount = 16;
    const hourHeight = ((HEIGHT * (1 - TOP_MARGIN)) / hourCount) * 1.5;

    let table = [];
    let renderedCells = {};
    for (let rowIndex = 0; rowIndex < timeSlots.length; rowIndex++) {
      let row = [];
      row.push(
        <td
          key={`time-${rowIndex}`}
          className="border text-center bg-gray-700 text-white"
          style={{
            width: dayWidth,
            height: hourHeight,
            backgroundColor: "#22252a",
          }}
        >
          {timeSlots[rowIndex]}
        </td>
      );

      for (let colIndex = 0; colIndex < days.length; colIndex++) {
        if (renderedCells[`${rowIndex}-${colIndex}`]) {
          continue;
        }

        let cellContent = "";
        let cellClass = "border text-center";
        let cellStyle = {
          width: dayWidth / 2,
          height: hourHeight / 2,
          backgroundColor: "#22252a",
        };
        let rowSpan = 1;
        for (let course of schedule.courses) {
          for (let i = 0; i < course.days.length; i++) {
            if (course.days[i].toLowerCase() === days[colIndex].toLowerCase()) {
              let startTime = parseTime(course.startTimes[i]);
              let endTime = parseTime(course.endTimes[i]);
              let slotTime = parseTime(timeSlots[rowIndex]);
              if (slotTime >= startTime && slotTime < endTime) {
                rowSpan = (endTime - startTime) / 60;
                cellContent = (
                  <div
                    className="flex flex-col justify-center py-2"
                    style={{
                      backgroundColor: course.color,
                      height: hourHeight * rowSpan,
                    }}
                  >
                    <div>
                      {course.name} - {course.section}
                    </div>
                    <div>{course.professor}</div>
                  </div>
                );
                cellClass += " text-white";
                cellStyle.color = isColorLight(course.color)
                  ? "#000000"
                  : "#FFFFFF";
                cellStyle.backgroundColor = course.color;

                for (let span = 0; span < rowSpan; span++) {
                  renderedCells[`${rowIndex + span}-${colIndex}`] = true;
                }
                break;
              }
            }
          }
        }

        row.push(
          <td
            key={`cell-${rowIndex}-${colIndex}`}
            className={cellClass}
            style={cellStyle}
            rowSpan={rowSpan}
          >
            {cellContent}
          </td>
        );
      }
      table.push(<tr key={rowIndex}>{row}</tr>);
    }
    return table;
  };

  const downloadScheduleAsImage = () => {
    const tableElement = document.querySelector(".schedule-table");
    html2canvas(tableElement).then((canvas) => {
      const link = document.createElement("a");
      link.download = `schedule_${currentScheduleIndex + 1}.jpg`;
      link.href = canvas.toDataURL();
      link.click();
    });
  };

  return (
    <div className="flex flex-col items-center my-5">
      {schedules.length > 0 && (
        <motion.div
          className="w-full overflow-x-auto mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-white text-center mb-2">
            {t("schedule")} {currentScheduleIndex + 1}
          </h2>
          <table
            className="table-fixed border-collapse border mx-auto schedule-table"
            style={{ width: "1000px", height: "600px" }}
          >
            <thead>
              <tr>
                <th
                  className="border text-center bg-gray-900 text-white"
                  style={{ width: "100px", height: "37.5px" }}
                >
                  {lastSemester}
                </th>
                {days.map((day) => (
                  <th
                    key={day}
                    className="border text-center bg-gray-700 text-white"
                    style={{ width: "150px", height: "37.5px" }}
                  >
                    {day}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {renderScheduleTable(schedules[currentScheduleIndex])}
            </tbody>
          </table>
        </motion.div>
      )}
      <div className="flex justify-center mt-4">
        {showPrevNext && (
          <motion.button
            onClick={showPrevSchedule}
            className="bg-buttonCourseList hover:bg-buttonCourseListHover text-white px-4 py-2 rounded mx-2 w-24"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {t("prev")}
          </motion.button>
        )}
        <motion.button
          onClick={generateSchedules}
          className="bg-buttonCourseList hover:bg-buttonCourseListHover text-white px-4 py-2 rounded mx-2 w-24"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 1.7 }}
        >
          {t("gen")}
        </motion.button>
        {showPrevNext && (
          <motion.button
            onClick={showNextSchedule}
            className="bg-buttonCourseList hover:bg-buttonCourseListHover text-white px-4 py-2 rounded mx-2 w-24"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {t("next")}
          </motion.button>
        )}
        {schedules.length > 0 && (
          <motion.button
            onClick={downloadScheduleAsImage}
            className="bg-buttonCourseList hover:bg-buttonCourseListHover text-white px-4 py-2 rounded mx-2 w-24"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {t("down")}
          </motion.button>
        )}
      </div>
      <div className="flex justify-center mt-4 gap-4">
        {schedules.length > 0 && (
          <>
            <motion.button
              onClick={() => setShowInput(!showInput)}
              className="bg-buttonCourseList hover:bg-buttonCourseListHover text-white rounded mx-auto mb-auto p-1 mt-2"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Search />
            </motion.button>
            <AnimatePresence>
              {showInput && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="flex items-center mt-2"
                >
                  <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    className="border rounded px-2 py-1"
                    placeholder={t("enterIndex")}
                  />
                  <motion.button
                    onClick={handleSearch}
                    className="bg-buttonCourseList hover:bg-buttonCourseListHover text-white px-4 py-2 rounded mx-2 w-24"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    {t("srch")}
                  </motion.button>
                </motion.div>
              )}
            </AnimatePresence>
          </>
        )}
      </div>
      {showError && <div className="text-red-500 mt-2">{error}</div>}
    </div>
  );
};
