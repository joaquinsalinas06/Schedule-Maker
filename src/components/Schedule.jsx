import React, { useContext, useState } from "react";
import { CourseContext } from "../contexts/CourseContext";

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
    console.log("Course created:", this);
  }

  collides(other) {
    console.log("Checking collision between", this, "and", other);
    if (this.name === other.name && this.section === other.section) {
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
    console.log("Schedule created:", this);
  }

  createIDString() {
    return this.courses.map(course => course.name).join('-');
  }

  countCredits() {
    return this.courses.reduce((sum, course) => sum + parseInt(course.credits), 0);
  }

  formsValidSchedule(course) {
    console.log("Checking if course can be added to schedule:", course, this);
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
  console.log("Checking days overlap between", days1, "and", days2);
  for (let i = 0; i < days1.length; i++) {
    if (days2.toLowerCase().includes(days1.toLowerCase().charAt(i))) {
      return true;
    }
  }
  return false;
};

export const ScheduleComponent = () => {
  const { courses } = useContext(CourseContext);
  const [schedules, setSchedules] = useState([]);
  const [currentScheduleIndex, setCurrentScheduleIndex] = useState(0);

  const generateSchedules = () => {
    console.log("Generating schedules...");
    console.log("Courses:", courses);

    let courseList = [];
    for (let course of courses) {
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
      courseList.push(newCourse);
    }

    console.log("Course List:", courseList);

    let layers = new Array(courseList.length).fill(null).map(() => []);
    console.log("Layers initialized:", layers);

    for (let i = 0; i < courseList.length; i++) {
      layers[0].push(new Schedule([courseList[i]]));
    }

    console.log("First layer populated:", layers[0]);

    for (let i = 1; i < courseList.length; i++) {
      let previousLayer = layers[i - 1];
      let currentLayer = layers[i];

      for (let schedule of previousLayer) {
        for (let course of courseList) {
          let newSchedule = schedule.addCourse(course);
          if (newSchedule && !currentLayer.some(sch => sch.IDString === newSchedule.IDString)) {
            currentLayer.push(newSchedule);
          }
        }
      }

      console.log(`Layer ${i} populated:`, currentLayer);
    }

    let validSchedules = [];
    for (let layer of layers) {
      for (let schedule of layer) {
        if (!validSchedules.some(sch => sch.IDString === schedule.IDString)) {
          validSchedules.push(schedule);
        }
      }
    }

    console.log("Valid Schedules:", validSchedules);

    setSchedules(validSchedules);
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
                <li key={index}>
                  {course.name} - {course.section} - {course.professor} - {course.days.join(', ')} - {course.startTimes.join(', ')} - {course.endTimes.join(', ')}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};
