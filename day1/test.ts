import { readInputForDay } from "../utils";
import { day1part1, day1part2, turnDial2 } from "./solution";

describe("day1", () => {
  it("part1 solution", () => {
    expect(day1part1(readInputForDay(1, true))).toEqual(3);
    console.log("day1part1:", day1part1(readInputForDay(1)));
  });

  it.each([
    [50, "L", 1068, { count: 11, value: 82 }],
    [50, "L", 168, { count: 2, value: 82 }],
    [50, "L", 68, { count: 1, value: 82 }],
    [82, "L", 30, { count: 0, value: 52 }],
    [52, "R", 48, { count: 1, value: 0 }],
    [0, "L", 5, { count: 0, value: 95 }],
    [95, "R", 60, { count: 1, value: 55 }],
    [55, "L", 55, { count: 1, value: 0 }],
    [0, "L", 1, { count: 0, value: 99 }],
    [99, "L", 99, { count: 1, value: 0 }],
    [0, "R", 14, { count: 0, value: 14 }],
    [14, "L", 82, { count: 1, value: 32 }],
  ])(
    "turnDial2 starts at %i, %s%i to %s",
    (position, direction, offset, dial) => {
      expect(turnDial2(position, direction, offset)).toEqual(dial);
    }
  );

  it("part2 solution", () => {
    expect(day1part2(readInputForDay(1, true))).toEqual(6);
    console.log("ANSWER:", day1part2(readInputForDay(1)));
  });
});
