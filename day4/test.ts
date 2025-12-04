import { readInputForDay } from "../utils";
import { day4part1 } from "./solution";

describe("day4", () => {
  describe("part1", () => {
    it("solution", () => {
      expect(day4part1(readInputForDay(4, true))).toEqual(13);
      console.log("day4part1 ANSWER:", day4part1(readInputForDay(4)));
    });
  });

  // it("part2 solution", () => {
  //   expect(day4part2(readInputForDay(4, true))).toEqual(6);
  //   console.log("day4part2 ANSWER:", day4part2(readInputForDay(4)));
  // });
});
