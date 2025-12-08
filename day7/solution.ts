/*
--- Day 7: Laboratories ---

You thank the cephalopods for the help and exit the trash compactor, finding yourself in the familiar halls of a North Pole research wing.

Based on the large sign that says "teleporter hub", they seem to be researching teleportation; you can't help but try it for yourself and step onto the large yellow teleporter pad.

Suddenly, you find yourself in an unfamiliar room! The room has no doors; the only way out is the teleporter. Unfortunately, the teleporter seems to be leaking magic smoke.

Since this is a teleporter lab, there are lots of spare parts, manuals, and diagnostic equipment lying around. After connecting one of the diagnostic tools, it helpfully displays error code 0H-N0, which apparently means that there's an issue with one of the tachyon manifolds.

You quickly locate a diagram of the tachyon manifold (your puzzle input). A tachyon beam enters the manifold at the location marked S; tachyon beams always move downward. Tachyon beams pass freely through empty space (.). However, if a tachyon beam encounters a splitter (^), the beam is stopped; instead, a new tachyon beam continues from the immediate left and from the immediate right of the splitter.

For example:

.......S.......
...............
.......^.......
...............
......^.^......
...............
.....^.^.^.....
...............
....^.^...^....
...............
...^.^...^.^...
...............
..^...^.....^..
...............
.^.^.^.^.^...^.
...............
In this example, the incoming tachyon beam (|) extends downward from S until it reaches the first splitter:

.......S.......
.......|.......
.......^.......
...............
......^.^......
...............
.....^.^.^.....
...............
....^.^...^....
...............
...^.^...^.^...
...............
..^...^.....^..
...............
.^.^.^.^.^...^.
...............
At that point, the original beam stops, and two new beams are emitted from the splitter:

.......S.......
.......|.......
......|^|......
...............
......^.^......
...............
.....^.^.^.....
...............
....^.^...^....
...............
...^.^...^.^...
...............
..^...^.....^..
...............
.^.^.^.^.^...^.
...............
Those beams continue downward until they reach more splitters:

.......S.......
.......|.......
......|^|......
......|.|......
......^.^......
...............
.....^.^.^.....
...............
....^.^...^....
...............
...^.^...^.^...
...............
..^...^.....^..
...............
.^.^.^.^.^...^.
...............
At this point, the two splitters create a total of only three tachyon beams, since they are both dumping tachyons into the same place between them:

.......S.......
.......|.......
......|^|......
......|.|......
.....|^|^|.....
...............
.....^.^.^.....
...............
....^.^...^....
...............
...^.^...^.^...
...............
..^...^.....^..
...............
.^.^.^.^.^...^.
...............
This process continues until all of the tachyon beams reach a splitter or exit the manifold:
---------------i c
.......S.......0 0
.......|.......1 0
......|^|......2 2
......|.|......3 0
.....|^|^|.....4 3
.....|.|.|.....5 0
....|^|^|^|....6 4
....|.|.|.|....7 0
...|^|^|||^|...8 5
...|.|.|||.|...9 0
..|^|^|||^|^|..a 6
..|.|.|||.|.|..b 0
.|^|||^||.||^|.c 6
.|.|||.||.||.|.d 0
|^|^|^|^|^|||^|e 8
|.|.|.|.|.|||.|f 0
To repair the teleporter, you first need to understand the beam-splitting properties of the tachyon manifold. In this example, a tachyon beam is split a total of 21 times.

Analyze your manifold diagram. How many times will the beam be split?
 */

import { Location, SquareGrid } from "types";
import { drawGrid, extractDataToGraph } from "../utils";

let SUM = 0;
export const day7part1 = (raw: string) => {
  const graph = extractDataToGraph<string>(raw);
  for (let i = 0; i < graph.height; i++) {
    // bug when i = 10, count should be 6 but is 5
    const { count } = countSplits({ graph, rowIndex: i });
    SUM += count;
  }

  return SUM;
};
// 2151 is too high

// manifold has a pattern of having a row of potential splitters
// and a row of empty space
const processRow = ({
  graph,
  rowIndex,
}: {
  graph: SquareGrid<string>;
  rowIndex: number;
}) => {
  let count = 0;
  // start case
  if (rowIndex === 0) {
    for (let i = 0; i < graph.width; i++) {
      let start = `${i},0`;
      if (graph.nodes[start].value === "S") {
        graph.nodes[`${i},1`].value = "|";
        return 0;
      }
    }
  }

  for (let i = 0; i < graph.width; i++) {
    const node = graph.nodes[`${i},${rowIndex}`];
    // optimistic case
    if (node.value === "^") {
      const xNeighbors = [
        graph.nodes[`${i - 1},${rowIndex}`],
        graph.nodes[`${i + 1},${rowIndex}`],
      ];

      if (xNeighbors.every((n) => n.value === "^")) {
        count += 1;
      } else {
        count += xNeighbors.reduce((sum, n) => {
          if (n.value !== "|") {
            return (sum += 1);
          }
          return sum;
        }, 0);
      }

      [
        graph.nodes[`${i - 1},${rowIndex}`],
        graph.nodes[`${i + 1},${rowIndex}`],
      ] = xNeighbors.map((n) => {
        if (n.value !== "|") {
          return { ...n, value: "|" };
        } else {
          return n;
        }
      });

      xNeighbors.forEach((n) => {
        extendBeam(graph, n);
      });
    }
    // extend beams "|"
    else if (
      node.value === "." &&
      graph.nodes[`${node.col},${node.row - 1}`].value === "|"
    ) {
      // extendBeam(graph, node);
      node.value = "|";
    }
  }

  return count;
};

export const countSplits = ({
  graph,
  rowIndex,
}: {
  graph: SquareGrid<string>;
  rowIndex: number;
}) => {
  const count = processRow({ graph, rowIndex });
  // const diagram = gridToString(graph, rowIndex, count);
  return { count, diagram: "" };
};

const extendBeam = (graph: SquareGrid<string>, node: Location<string>) => {
  // loop until we hit a splitter
  for (let i = node.row + 1; i < graph.height; i++) {
    const nextNode = graph.nodes[`${node.col},${i}`];
    if (nextNode.value === "^") {
      return graph;
    } else {
      nextNode.value = "|";
    }
    break;
  }

  gridToString(graph, node.row);
  return graph;
};

const gridToString = (
  graph: SquareGrid<string>,
  rowIndex: number,
  count?: number
) =>
  drawGrid(graph, { labels: rowIndex, goal: ((count ?? 0) + SUM)?.toString() })
    .map((r) => r.join(""))
    .join("\n");
