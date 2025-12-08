import { readInputForDay } from "../utils";
import { day8part1 } from "./solution";

describe("day8", () => {
  describe("part1", () => {
    it("solution", () => {
      expect(day8part1(readInputForDay(8, true))).toEqual(21);
      console.log("day8part1 ANSWER:", day8part1(readInputForDay(8)));
    });
  });

  // it("part2 solution", () => {
  //   expect(day8part2(readInputForDay(8, true))).toEqual(3263827);
  //   console.log("day8part2 ANSWER:", day8part2(readInputForDay(8)));
  // });
});
