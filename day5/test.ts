import { day5part1 } from "./solution";
import { readInputForDay } from "../utils";

describe("day5", () => {
  describe("part1", () => {
    it("solution", () => {
      expect(day5part1(readInputForDay(5, true))).toEqual(3);
      console.log("day5part1 ANSWER:", day5part1(readInputForDay(5)));
    });
  });

  // it("part2 solution", () => {
  //   expect(day5part2(readInputForDay(5, true))).toEqual(43);
  //   console.log("day5part2 ANSWER:", day5part2(readInputForDay(5)));
  // });
});
