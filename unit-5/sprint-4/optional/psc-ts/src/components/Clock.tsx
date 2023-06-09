import React from "react";

type Props = {
  //  TODO
  hours: number;
  minutes: number;
  seconds: number;
};

const Clock = (props: Props) => {
  return (
    <div data-testid="clock">
      <h4 data-testid="clock-label">24 hours live custom component clock</h4>
      <span data-testid="clock-hours">{props.hours}</span>:
      <span data-testid="clock-minutes">{props.minutes}</span>:
      <span data-testid="clock-seconds">{props.seconds}</span>
    </div>
  );
};

export default Clock;
