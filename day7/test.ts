import { readInputForDay } from "../utils";
import { day7part1 } from "./solution";

describe("day7", () => {
  describe("part1", () => {
    it("solution", () => {
      expect(day7part1(readInputForDay(7, true))).toEqual(21);
      console.log("day7part1 ANSWER:", day7part1(readInputForDay(7)));
    });
  });

  // it("part2 solution", () => {
  //   expect(day7part2(readInputForDay(7, true))).toEqual(3263827);
  //   console.log("day7part2 ANSWER:", day7part2(readInputForDay(7)));
  // });
});
