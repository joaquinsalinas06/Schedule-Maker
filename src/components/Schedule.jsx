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

  return (
    <div className="flex justify-center my-5">
      <button onClick={generateSchedules} className="text-white">
        Generate Schedules
      </button>
      {schedules.length > 0 && (
        <div>
          <button onClick={showPrevSchedule} className="text-white mx-2">
            Previous
          </button>
          <button onClick={showNextSchedule} className="text-white mx-2">
            Next
          </button>
          <div className="mt-4">
            <h2 className="text-white">Schedule {currentScheduleIndex + 1}</h2>
            <ul className="text-white">
              {schedules[currentScheduleIndex].courses.map((course, index) => (
                <li key={index} className="mb-2">
                  <strong>{course.name}</strong> - {course.section} - {course.professor}
                  <ul className="pl-4">
                    {course.days.map((day, idx) => (
                      <li key={idx}>
                        {day}: {course.startTimes[idx]} - {course.endTimes[idx]}
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};
