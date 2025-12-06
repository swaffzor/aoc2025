import { readInputForDay } from "../utils";
import { day6part1 } from "./solution";

describe("day6", () => {
  describe("part1", () => {
    it("solution", () => {
      expect(day6part1(readInputForDay(6, true))).toEqual(4277556);
      console.log("day6part1 ANSWER:", day6part1(readInputForDay(6)));
    });
  });

  // it("part2 solution", () => {
  //   expect(day6part2(readInputForDay(6, true))).toEqual(14);
  //   console.log("day6part2 ANSWER:", day6part2(readInputForDay(6)));
  // });
});
