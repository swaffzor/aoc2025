import { readInputForDay } from "../utils";
import {
  day2part1,
  day2part2,
  getInvalidIDSum,
  getInvalidIDSumPart2,
  validateID,
} from "./solution";

describe("day2", () => {
  describe("part 1", () => {
    describe("validateID works against given test cases", () => {
      it.each([
        [11, false],
        [12, true],
        [13, true],
        [14, true],
        [15, true],
        [16, true],
        [17, true],
        [18, true],
        [19, true],
        [20, true],
        [21, true],
        [22, false],
        [99, false],
        [1010, false],
        [1188511885, false],
        [222222, false],
        [446446, false],
        [38593859, false],
      ])("%i to be %s", (id, expectedValue) => {
        expect(validateID(id)).toEqual(expectedValue);
      });
    });

    describe("getInvalidIDSum", () => {
      it.each([
        ["11-22", 33],
        ["95-115", 99],
        ["998-1012", 1010],
        ["1188511880-1188511890", 1188511885],
        ["222220-222224", 222222],
        ["1698522-1698528", 0],
        ["446443-446449", 446446],
        ["38593856-38593862", 38593859],
      ])("range %s has sum of %i", (input, expectedValue) => {
        expect(getInvalidIDSum(input)).toEqual(expectedValue);
      });
    });

    it("solution", () => {
      expect(day2part1(readInputForDay(2, true))).toEqual(1227775554);
      console.log("day2part1 ANSWER:", day2part1(readInputForDay(2)));
    });
  });

  describe("part2", () => {
    describe("getInvalidIDSumPart2", () => {
      it.each([
        ["11-22", 33],
        ["95-115", 210],
        ["998-1012", 2009],
        ["1188511880-1188511890", 1188511885],
        ["222220-222224", 222222],
        ["1698522-1698528", 0],
        ["446443-446449", 446446],
        ["38593856-38593862", 38593859],
        ["565653-565659", 565656],
        ["824824821-824824827", 824824824],
        ["2121212118-2121212124", 2121212121],
      ])("range %s has sum of %i", (input, expectedValue) => {
        expect(getInvalidIDSumPart2(input)).toEqual(expectedValue);
      });
    });

    it("solution", () => {
      expect(day2part2(readInputForDay(2, true))).toEqual(4174379265);
      console.log("day2part2 ANSWER:", day2part2(readInputForDay(2)));
    });
  });
});
