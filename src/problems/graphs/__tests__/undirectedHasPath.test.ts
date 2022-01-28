import undirectedHasPath, {
  convertToAdjacencyList,
  Edge,
} from "../undirectedHasPath";

describe("convertToAdjacencyList", () => {
  it("returns the correct adjacency list", () => {
    const edges: Edge[] = [
      ["i", "j"],
      ["k", "i"],
      ["m", "k"],
      ["k", "l"],
      ["o", "n"],
    ];
    const adjacencyList = {
      i: new Set<string>(["j", "k"]),
      j: new Set<string>(["i"]),
      k: new Set<string>(["i", "m", "l"]),
      l: new Set<string>(["k"]),
      m: new Set<string>(["k"]),
      n: new Set<string>(["o"]),
      o: new Set<string>(["n"]),
    };
    expect(convertToAdjacencyList(edges)).toEqual(adjacencyList);
  });
});

describe("undirectedHasPath", () => {
  const edges: Edge[] = [
    ["i", "j"],
    ["k", "i"],
    ["m", "k"],
    ["k", "l"],
    ["o", "n"],
  ];
  it("returns true if there is a path between start and end", () => {
    expect(undirectedHasPath(edges, "i", "l")).toEqual(true);
  });
  it("returns false if there is no path between start and end", () => {
    expect(undirectedHasPath(edges, "i", "n")).toEqual(false);
  });
});
