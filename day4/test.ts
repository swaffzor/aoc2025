import { Point } from "types";
import { extractDataToPointGrid, readInputForDay } from "../utils";
import { day4part1, day4part2, removeRolls, resultString } from "./solution";

const grids = [
  // Initial state:
  `..@@.@@@@.
@@@.@.@.@@
@@@@@.@.@@
@.@@@@..@.
@@.@@@@.@@
.@@@@@@@.@
.@.@.@.@@@
@.@@@.@@@@
.@@@@@@@@.
@.@.@@@.@.
`,
  // Remove 13 rolls of paper:
  `.......@..
.@@.@.@.@@
@@@@@...@@
@.@@@@..@.
.@.@@@@.@.
.@@@@@@@.@
.@.@.@.@@@
..@@@.@@@@
.@@@@@@@@.
....@@@...
`,
  // Remove 12 rolls of paper:
  `..........
.@@.....@.
.@@@@...@@
..@@@@....
.@.@@@@...
..@@@@@@..
...@.@.@@@
..@@@.@@@@
..@@@@@@@.
....@@@...
`,
  // Remove 7 rolls of paper:
  `..........
..@.......
.@@@@.....
..@@@@....
...@@@@...
..@@@@@@..
...@.@.@@.
..@@@.@@@@
...@@@@@@.
....@@@...
`,
  // Remove 5 rolls of paper:
  `..........
..........
..@@@.....
..@@@@....
...@@@@...
...@@@@@..
...@.@.@@.
...@@.@@@.
...@@@@@@.
....@@@...
`,
  // Remove 2 rolls of paper:
  `..........
..........
...@@.....
..@@@@....
...@@@@...
...@@@@@..
...@.@.@@.
...@@.@@@.
...@@@@@..
....@@@...
`,
  // Remove 1 roll of paper:
  `..........
..........
...@@.....
...@@@....
...@@@@...
...@@@@@..
...@.@.@@.
...@@.@@@.
...@@@@@..
....@@@...
`,
  // Remove 1 roll of paper:
  `..........
..........
....@.....
...@@@....
...@@@@...
...@@@@@..
...@.@.@@.
...@@.@@@.
...@@@@@..
....@@@...
`,
  // Remove 1 roll of paper:
  `..........
..........
..........
...@@@....
...@@@@...
...@@@@@..
...@.@.@@.
...@@.@@@.
...@@@@@..
....@@@...
`,
  // Remove 1 roll of paper:
  `..........
..........
..........
....@@....
...@@@@...
...@@@@@..
...@.@.@@.
...@@.@@@.
...@@@@@..
....@@@...
`,
];
describe("day4", () => {
  describe.skip("part1", () => {
    it("solution", () => {
      expect(day4part1(readInputForDay(4, true))).toEqual(13);
      console.log("day4part1 ANSWER:", day4part1(readInputForDay(4)));
    });
  });

  it.skip.each([
    [0, grids[0], grids[1]],
    [1, grids[1], grids[2]],
    [2, grids[2], grids[3]],
    [3, grids[3], grids[4]],
    [4, grids[4], grids[5]],
    [5, grids[5], grids[6]],
    [6, grids[6], grids[7]],
    [7, grids[7], grids[8]],
    [8, grids[8], grids[9]],
  ])("removeRolls %i", (_index, input, expected) => {
    const pointGrid = extractDataToPointGrid<string>(input);
    const result = removeRolls(pointGrid);

    const temp = resultString(result.newGrid);
    console.log(temp);
    expect(temp).toEqual(expected);
  });

  it("part2 solution", () => {
    expect(day4part2(readInputForDay(4, true))).toEqual(43);
    console.log("day4part2 ANSWER:", day4part2(readInputForDay(4)));
  });
});
