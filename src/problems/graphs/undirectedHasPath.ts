type AdjacencyList = {
  [key: string]: Set<string>;
};

export type Edge = [string, string];

const edges: Edge[] = [
  ["i", "j"],
  ["k", "i"],
  ["m", "k"],
  ["k", "l"],
  ["o", "n"],
];

export const convertToAdjacencyList = (edges: Edge[]) => {
  const adjacencyList: AdjacencyList = {};
  edges.forEach(edge => {
    const [startNode, endNode] = edge;
    adjacencyList[startNode] = adjacencyList[startNode]
      ? adjacencyList[startNode].add(endNode)
      : new Set(endNode);
    adjacencyList[endNode] = adjacencyList[endNode]
      ? adjacencyList[endNode].add(startNode)
      : new Set(startNode);
  });
  return adjacencyList;
};

const undirectedHasPath = (edges: Edge[], start: string, end: string) => {
  const visited = new Set<string>();
  const adjacencyList = convertToAdjacencyList(edges);
  const stack: string[] = [start];

  while (stack.length > 0) {
    const current = stack.pop()!;
    if (current === end) {
      return true;
    }
    for (let neighbor of adjacencyList[current]) {
      if (visited.has(neighbor)) {
        continue;
      }
      stack.push(neighbor);
      visited.add(current);
    }
  }
  return false;
};

export default undirectedHasPath;
