import { readInputForDay } from "../utils";
import { day9part1 } from "./solution";

describe("day9", () => {
  describe("part1", () => {
    it("solution", () => {
      expect(day9part1(readInputForDay(9, true))).toEqual(50);
      console.log("day9part1 ANSWER:", day9part1(readInputForDay(9)));
    });
  });

  // it("part2 solution", () => {
  //   expect(day9part2(readInputForDay(9, true))).toEqual(3263827);
  //   console.log("day9part2 ANSWER:", day9part2(readInputForDay(9)));
  // });
});
