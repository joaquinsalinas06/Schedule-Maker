import React from "react";
import { Information } from "../components/Information";
import { ScheduleComponent } from "../components/Schedule";
import { ShiftOptions } from "../components/Shifts/ShiftOptions";

export const MainPage = () => {
  return (
    <div className="w-4/5 mx-auto">
      <Information />
      <ShiftOptions />
      <ScheduleComponent />
    </div>
  );
};
