import React, { useContext, useState } from "react";
import { DetailedCourseContext } from "../contexts/DetailedCourseContext";

class Course {
  constructor(name, credits, semester, classesPerWeek, section, professor, days, startTimes, endTimes) {
    this.name = name;
    this.credits = credits;
    this.semester = semester;
    this.classesPerWeek = classesPerWeek;
    this.section = section;
    this.professor = professor;
    this.days = days || [];
    this.startTimes = startTimes || [];
    this.endTimes = endTimes || [];
  }

  collides(other) {
    if (this.section === other.section) {
      return false;
    }

    for (let i = 0; i < this.startTimes.length; i++) {
      for (let j = 0; j < other.startTimes.length; j++) {
        if (daysOverlap(this.days[i], other.days[j])) {
          if (
            (this.startTimes[i] >= other.startTimes[j] && this.startTimes[i] <= other.endTimes[j]) ||
            (other.startTimes[j] >= this.startTimes[i] && other.startTimes[j] <= this.endTimes[i])
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
    return this.courses.map(course => course.name).join('-');
  }

  countCredits() {
    return this.courses.reduce((sum, course) => sum + parseInt(course.credits), 0);
  }

  formsValidSchedule(course) {
    return this.courses.every(existingCourse => !existingCourse.collides(course));
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
  for (let i = 0; i < days1.length; i++) {
    if (days2.toLowerCase().includes(days1.toLowerCase().charAt(i))) {
      return true;
    }
  }
  return false;
};

export const ScheduleComponent = () => {
  const { detailedCourses } = useContext(DetailedCourseContext);
  const [schedules, setSchedules] = useState([]);
  const [currentScheduleIndex, setCurrentScheduleIndex] = useState(0);

  const generateSchedules = () => {
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
        course.endTimes
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
    setCurrentScheduleIndex((currentScheduleIndex - 1 + schedules.length) % schedules.length);
  };

  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const timeSlots = [
    "7:00 AM", "8:00 AM", "9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM",
    "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM", "6:00 PM",
    "7:00 PM", "8:00 PM", "9:00 PM", "10:00 PM"
  ];

  const renderScheduleTable = (schedule) => {
    let table = [];
    console.log("Rendering schedule table...");

    for (let rowIndex = 0; rowIndex < timeSlots.length; rowIndex++) {
      let row = [];
      row.push(<td key={`time-${rowIndex}`} className="border w-32 h-16 text-center bg-gray-700 text-white">{timeSlots[rowIndex]}</td>);

      for (let colIndex = 0; colIndex < days.length; colIndex++) {
        let cellContent = "";
        let cellClass = "border w-32 h-16 text-center";

        for (let course of schedule.courses) {
          for (let i = 0; i < course.days.length; i++) {
            if (course.days[i].toLowerCase().includes(days[colIndex].toLowerCase().charAt(0))) {
              let startTime = parseTime(course.startTimes[i]);
              let endTime = parseTime(course.endTimes[i]);
              let slotTime = parseTime(timeSlots[rowIndex]);

              if (slotTime >= startTime && slotTime < endTime) {
                cellContent = (
                  <div className="bg-gray-800 text-white h-full flex flex-col justify-center">
                    <div>{course.name}</div>
                    <div>{course.startTimes[i]} - {course.endTimes[i]}</div>
                    <div>{course.section}</div>
                    <div>{course.professor}</div>
                  </div>
                );
                cellClass += " bg-gray-800 text-white";
              }
            }
          }
        }
        row.push(<td key={`${rowIndex}-${colIndex}`} className={cellClass}>{cellContent}</td>);
      }
      table.push(<tr key={rowIndex}>{row}</tr>);
    }
    return table;
  };

  const parseTime = (timeString) => {
    let [time, modifier] = timeString.split(" ");
    let [hours, minutes] = time.split(":").map(Number);

    if (modifier === "PM" && hours !== 12) {
      hours += 12;
    }

    return hours * 60 + minutes;
  };

  return (
    <div className="flex flex-col items-center my-5">
      {schedules.length > 0 && (
        <div className="w-full overflow-x-auto mb-4">
          <h2 className="text-white text-center mb-2">Schedule {currentScheduleIndex + 1}</h2>
          <table className="table-fixed border-collapse border mx-auto max-h-screen">
            <thead>
              <tr>
                <th className="border w-32 h-16 text-center bg-gray-900 text-white">Time</th>
                {days.map((day, colIndex) => (
                  <th key={day} className="border w-32 h-16 text-center bg-gray-900 text-white">{day}</th>
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
        <button onClick={showPrevSchedule} className="bg-blue-500 text-white px-4 py-2 rounded mx-2">
          Previous
        </button>
        <button onClick={generateSchedules} className="bg-blue-500 text-white px-4 py-2 rounded mx-2">
          Generate
        </button>
        <button onClick={showNextSchedule} className="bg-blue-500 text-white px-4 py-2 rounded mx-2">
          Next
        </button>
      </div>
    </div>
  );
};
