import React, { useContext, useState } from "react";
import { DetailedCourseContext } from "../contexts/DetailedCourseContext";
import { useTranslation } from "react-i18next";

class Course {
  constructor(
    name,
    credits,
    semester,
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
    this.semester = semester;
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
  const { detailedCourses } = useContext(DetailedCourseContext);
  const [schedules, setSchedules] = useState([]);
  const [showPrevNext, setShowPrevNext] = useState(false);
  const [currentScheduleIndex, setCurrentScheduleIndex] = useState(0);

  const generateSchedules = () => {
    setShowPrevNext(true);
    let groupedCourses = {};

    for (let course of detailedCourses) {
      if (!groupedCourses[course.name]) {
        groupedCourses[course.name] = [];
      }
      const newCourse = new Course(
        course.name,
        course.credits,
        course.semester,
        course.classesPerWeek,
        course.section,
        course.professor,
        course.days,
        course.startTimes,
        course.endTimes,
        course.color
      );
      groupedCourses[course.name].push(newCourse);
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

  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
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

  const renderScheduleTable = (schedule) => {
    const WIDTH = 1000;
    const HEIGHT = 600;
    const TOP_MARGIN = 0.07;
    const SIDE_MARGIN = 0.1;
    const DAY_COUNT = 6;

    const dayWidth = (WIDTH * (1 - SIDE_MARGIN)) / DAY_COUNT;
    const hourCount = 16;
    const hourHeight = (HEIGHT * (1 - TOP_MARGIN)) / hourCount;

    let table = [];

    for (let rowIndex = 0; rowIndex < timeSlots.length; rowIndex++) {
      let row = [];
      row.push(
        <td
          key={`time-${rowIndex}`}
          className="border text-center bg-gray-700 text-white"
          style={{ width: dayWidth / 2, height: hourHeight / 2 }}
        >
          {timeSlots[rowIndex]}
        </td>
      );

      for (let colIndex = 0; colIndex < days.length; colIndex++) {
        let cellContent = "";
        let cellClass = "border text-center";

        for (let course of schedule.courses) {
          for (let i = 0; i < course.days.length; i++) {
            if (course.days[i].toLowerCase() === days[colIndex].toLowerCase()) {
              let startTime = parseTime(course.startTimes[i]);
              let endTime = parseTime(course.endTimes[i]);
              let slotTime = parseTime(timeSlots[rowIndex]);

              if (slotTime >= startTime && slotTime < endTime) {
                cellContent = (
                  <div
                    className="h-full flex flex-col justify-center py-2"
                    style={{ backgroundColor: course.color }}
                  >
                    <div>
                      {course.name} - {course.section}
                    </div>
                    <div>{course.professor}</div>
                  </div>
                );
                cellClass += " text-white";
              }
            }
          }
        }
        row.push(
          <td
            key={`${rowIndex}-${colIndex}`}
            className={cellClass}
            style={{ width: dayWidth / 2, height: hourHeight / 2 }}
          >
            {cellContent}
          </td>
        );
      }
      table.push(<tr key={rowIndex}>{row}</tr>);
    }
    return table;
  };

  return (
    <div className="flex flex-col items-center my-5">
      {schedules.length > 0 && (
        <div className="w-full overflow-x-auto mb-4">
          <h2 className="text-white text-center mb-2">
            {t("schedule")} {currentScheduleIndex + 1}
          </h2>
          <table
            className="table-fixed border-collapse border mx-auto"
            style={{ width: "1000px", height: "600px" }}
          >
            <thead>
              <tr>
                <th
                  className="border text-center bg-gray-900 text-white"
                  style={{ width: "100px", height: "37.5px" }}
                >
                  {t("time")}
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
        </div>
      )}
      <div className="flex justify-center mt-4">
        {showPrevNext && (
          <button
            onClick={showPrevSchedule}
            className="bg-buttonCourseList hover:bg-buttonCourseListHover text-white px-4 py-2 rounded mx-2 w-24"
          >
            {t("prev")}
          </button>
        )}
        <button
          onClick={generateSchedules}
          className="bg-buttonCourseList hover:bg-buttonCourseListHover text-white px-4 py-2 rounded mx-2 w-24"
        >
          {t("gen")}
        </button>
        {showPrevNext && (
          <button
            onClick={showNextSchedule}
            className="bg-buttonCourseList hover:bg-buttonCourseListHover text-white px-4 py-2 rounded mx-2 w-24"
          >
            {t("next")}
          </button>
        )}
      </div>
    </div>
  );
};
