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
    const [node1, node2] = edge;
    adjacencyList[node1] = new Set();
    adjacencyList[node2] = new Set();
  });
  edges.forEach(edge => {
    const [node1, node2] = edge;
    adjacencyList[node1].add(node2);
    adjacencyList[node2].add(node1);
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
