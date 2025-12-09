import { extractDataToWeightedGraph, readInputForDay } from "../utils";
import { calcDistance, day8part1, getDistances } from "./solution";

describe("day8", () => {
  describe("part1", () => {
    it.each([
      [[1, 1], [4, 4], 2, 4.24],
      [[7, 4, 3], [17, 6, 2], 3, 10.246951],
    ])(
      "calcDistance calculates the correct distance between 2 points",
      (p, q, d, answer) => {
        expect(calcDistance(p, q, d)).toBeCloseTo(answer);
      }
    );

    it.each([
      [0, "162,817,812-425,690,689"],
      [1, "162,817,812-431,825,988"],
      [2, "906,360,560-805,96,715"],
      [3, "431,825,988-425,690,689"],
    ])("getDistances %i to be %s", (index, expected) => {
      const graph = extractDataToWeightedGraph<string>(
        readInputForDay(8, true)
      );
      const connections = getDistances(graph, 10);
      // expect(connections).toHaveLength(10);
      expect(connections[index].id).toBe(expected);
    });

    it("solution", () => {
      expect(day8part1(readInputForDay(8, true), 10)).toEqual(40);
      console.log("day8part1 ANSWER:", day8part1(readInputForDay(8), 1000));
    });
  });

  // it("part2 solution", () => {
  //   expect(day8part2(readInputForDay(8, true))).toEqual(3263827);
  //   console.log("day8part2 ANSWER:", day8part2(readInputForDay(8)));
  // });
});
