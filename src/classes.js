class Course {
    constructor(name, credits, semester, classesPerWeek, section, professor, days, startTimes, endTimes) {
      this.name = name;
      this.credits = credits;
      this.semester = semester;
      this.classesPerWeek = classesPerWeek;
      this.section = section;
      this.professor = professor;
      this.days = days;
      this.startTimes = startTimes;
      this.endTimes = endTimes;
    }
  
    collides(other) {
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
    }
  
    createIDString() {
      return this.courses.map(course => course.name).join('-');
    }
  
    countCredits() {
      return this.courses.reduce((sum, course) => sum + course.credits, 0);
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
  
    createPossibilities(courses) {
      const possibilities = [];
      for (let course of courses) {
        if (this.formsValidSchedule(course)) {
          possibilities.push(this.addCourse(course));
        }
      }
      return possibilities;
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
  
  export { Course, Schedule, daysOverlap };
  