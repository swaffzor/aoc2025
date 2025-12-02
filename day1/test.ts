import { readInputForDay } from "../utils";
import { day1part1, day1part2 } from "./solution";

describe("day1", () => {
  it.skip("part 1 solution", () => {
    expect(day1part1(readInputForDay(1, true))).toEqual(3);
    console.log("day1part1:", day1part1(readInputForDay(1)));
  });

  it("part2 left over 100 clicks", () => {
    const input = `L168
L30
R48
L5
R60
L55
L1
L99
R14
L82`;
    expect(day1part2(input)).toEqual(7);
  });

  it.only("part2 right over 100 clicks", () => {
    const input = `L68
L30
R148
L5
R60
L55
L1
L99
R14
L82`;
    expect(day1part2(input)).toEqual(7);
  });

  it("part2 solution", () => {
    // expect(day1part2(readInputForDay(1, true))).toEqual(6);
    console.log("ANSWER:", day1part2(readInputForDay(1)));
  });
});
