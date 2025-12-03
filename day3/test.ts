import { readInputForDay } from "../utils";
import { day3part1 } from "./solution";

describe("day3", () => {
  it("part1 solution", () => {
    expect(day3part1(readInputForDay(3, true))).toEqual(357);
    console.log("day3part1:", day3part1(readInputForDay(3)));
  });

  // it("part2 solution", () => {
  //   expect(day3part2(readInputForDay(3, true))).toEqual(6);
  //   console.log("ANSWER:", day3part2(readInputForDay(3)));
  // });
});
