/*
--- Day 8: Playground ---

Equipped with a new understanding of teleporter maintenance, you confidently step onto the repaired teleporter pad.

You rematerialize on an unfamiliar teleporter pad and find yourself in a vast underground space which contains a giant playground!

Across the playground, a group of Elves are working on setting up an ambitious Christmas decoration project. Through careful rigging, they have suspended a large number of small electrical junction boxes.

Their plan is to connect the junction boxes with long strings of lights. Most of the junction boxes don't provide electricity; however, when two junction boxes are connected by a string of lights, electricity can pass between those two junction boxes.

The Elves are trying to figure out which junction boxes to connect so that electricity can reach every junction box. They even have a list of all of the junction boxes' positions in 3D space (your puzzle input).

For example:

162,817,812
57,618,57
906,360,560
592,479,940
352,342,300
466,668,158
542,29,236
431,825,988
739,650,466
52,470,668
216,146,977
819,987,18
117,168,530
805,96,715
346,949,466
970,615,88
941,993,340
862,61,35
984,92,344
425,690,689
This list describes the position of 20 junction boxes, one per line. Each position is given as X,Y,Z coordinates. So, the first junction box in the list is at X=162, Y=817, Z=812.

To save on string lights, the Elves would like to focus on connecting pairs of junction boxes that are as close together as possible according to straight-line distance. In this example, the two junction boxes which are closest together are 162,817,812 and 425,690,689.

By connecting these two junction boxes together, because electricity can flow between them, they become part of the same circuit. After connecting them, there is a single circuit which contains two junction boxes, and the remaining 18 junction boxes remain in their own individual circuits.

Now, the two junction boxes which are closest together but aren't already directly connected are 162,817,812 and 431,825,988. After connecting them, since 162,817,812 is already connected to another junction box, there is now a single circuit which contains three junction boxes and an additional 17 circuits which contain one junction box each.

The next two junction boxes to connect are 906,360,560 and 805,96,715. After connecting them, there is a circuit containing 3 junction boxes, a circuit containing 2 junction boxes, and 15 circuits which contain one junction box each.

The next two junction boxes are 431,825,988 and 425,690,689. Because these two junction boxes were already in the same circuit, nothing happens!

This process continues for a while, and the Elves are concerned that they don't have enough extension cables for all these circuits. They would like to know how big the circuits will be.

After making the ten shortest connections, there are 11 circuits: one circuit which contains 5 junction boxes, one circuit which contains 4 junction boxes, two circuits which contain 2 junction boxes each, and seven circuits which each contain a single junction box. Multiplying together the sizes of the three largest circuits (5, 4, and one of the circuits of size 2) produces 40.

Your list contains many junction boxes; connect together the 1000 pairs of junction boxes which are closest together. Afterward, what do you get if you multiply together the sizes of the three largest circuits?
*/

import { WeightedGrid } from "types";
import { extractDataToWeightedGraph, makeSquareGrid } from "../utils";

export const day8part1 = (raw: string, numConnections: number) => {
  const graph = extractDataToWeightedGraph<string>(raw);
  const distanceMap = getDistances(graph, numConnections);

  const connections: string[] = distanceMap.map((dm) => dm.id);
  const circuits: string[][] = [[connections[0]]];
  for (let i = 1; i < numConnections; i++) {
    const [left, right] = connections[i].split("-");

    const idk = [...circuits].map((circuit) => {
      const temp = [];
      return circuit.map((connection) => {
        const foundLeft = connection.includes(left);
        const foundRight = connection.includes(right);
        if (foundLeft && foundRight) {
          temp.push(connection);
        } else if (foundLeft || foundRight) {
          if (foundLeft) {
            temp.push(`${connection}-${left}`);
          }
          if (foundRight) {
            temp.push(`${connection}-${right}`);
          }
          // return temp
        } else {
          circuits.push([connections[i]]);
        }
      });
    });
  }

  return circuits.reduce((product, curr) => {
    return product * curr.length;
  }, 1);
};

// A) calculate the distance between each pair of nodes
//  - distance formula
//  - how to iterate through the list?
// B) sort by distance, slice off first 1000 pairs
// C) connect all of the closest nodes to each other, keep track of node size in each circuit
// D) multiply the top 3 node sizes

// 3D distance: d(p,q) = sqrt((p1-q1)^2 + (p2-q2)^2 + (p3-q3)^2)
export const calcDistance = (p: number[], q: number[], d: number = 3) => {
  if (p.length < d || q.length < d) return -1;

  const collection = [];
  for (let n = 0; n < d; n++) {
    const squaredDiff = Math.pow(p[n] - q[n], 2);
    collection.push(squaredDiff);
  }

  return Math.sqrt(collection.reduce((sum, curr) => sum + curr));
};

interface LocationMap {
  id: string;
  value: number;
}

interface Circuit {
  connections: string[];
}

export const getDistances = (
  graph: WeightedGrid<string>,
  numConnections: number
) => {
  const distances: LocationMap[] = [];
  const nodes = Object.keys(graph.nodes).map((n) => n.split(","));
  for (let i = 0; i < graph.height; i++) {
    for (let j = i + 1; j < graph.height; j++) {
      const node = nodes[i];
      const goal = nodes[j];
      const d = calcDistance(node.map(Number), goal.map(Number));
      const key = `${node.join()}-${goal.join()}`;
      distances.push({ id: key, value: d });
    }
  }
  return distances.sort((a, b) => a.value - b.value);
  // .slice(0, numConnections);
};

export const makeConnection = (
  map: LocationMap,
  circuits: Circuit[],
  ids: string[]
) => {
  const mapNodes = map.id.split("-");
  const temp1 = circuits.flatMap((c) => c.connections)[0];
  const tests = "162,817,812-425,690,689".includes(mapNodes[0]);
  if (temp1.includes(mapNodes[0]) || temp1.includes(mapNodes[1])) {
    console.log("make a connection");
  }
};
