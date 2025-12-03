import { readInputForDay } from "../utils";
import { day3part1, processBank } from "./solution";

describe("day3", () => {
  describe.skip("part1", () => {
    it.each([
      ["987654321111111", 98],
      ["811111111111119", 89],
      ["234234234234278", 78],
      ["818181911112111", 92],
    ])("processBank with %s yields %i", (bank, expected) => {
      expect(processBank(bank)).toEqual(expected);
    });

    it("solution", () => {
      expect(day3part1(readInputForDay(3, true))).toEqual(357);
      console.log("day3part1 ANSWER:", day3part1(readInputForDay(3)));
    });
  });

  // it("part2 solution", () => {
  //   expect(day3part2(readInputForDay(3, true))).toEqual(6);
  //   console.log("day3part2 ANSWER:", day3part2(readInputForDay(3)));
  // });
});
