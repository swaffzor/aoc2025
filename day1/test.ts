import { readInputForDay } from "../utils";
import { day1part1 } from "./solution";

describe("day1", () => {
  it("part 1 solution", () => {
    expect(day1part1(readInputForDay(1, true))).toEqual(3);
    console.log("day1part1:", day1part1(readInputForDay(1)));
  });
  // it("part2 solution", () => {
  //   expect(day1part2(readInput(5, true))).toEqual(123);
  //   console.log("day1part2:", day1part2(readInput(5)));
  // });
});
