type AdjacencyList = {
  [node: string]: string[];
};

const graph = {
  f: ["g", "i"],
  g: ["h"],
  h: [],
  i: ["g", "k"],
  j: ["i"],
  k: [],
};

/** Input: Adjacency List of a directed, acyclic graph, start node, end node
 *  Output: boolean (whether or not a directed path exists between the two nodes)
 */
const hasPath = (graph: AdjacencyList, start: string, end: string) => {
  const stack: string[] = [start];

  while (stack.length > 0) {
    const current = stack.pop()!;
    if (current === end) {
      return true;
    }
    for (let neighbor of graph[current]) {
      stack.push(neighbor);
    }
  }
  return false;
};

export const hasPathBfs = (
  graph: AdjacencyList,
  start: string,
  end: string,
) => {
  const queue: string[] = [start];

  while (queue.length > 0) {
    const current = queue.shift()!;
    if (current === end) {
      return true;
    }
    for (let neighbor of graph[current]) {
      queue.push(neighbor);
    }
  }
  return false;
};

export const hasPathRecursive = (
  graph: AdjacencyList,
  start: string,
  end: string,
) => {
  if (start === end) {
    return true;
  }
  for (let neighbor of graph[start]) {
    if (hasPathRecursive(graph, neighbor, end) === true) {
      return true;
    }
  }
  return false;
};

export default hasPath;
