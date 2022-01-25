import hasPath, { hasPathRecursive, hasPathBfs } from "../hasPath";

const graph = {
  f: ["g", "i"],
  g: ["h"],
  h: [],
  i: ["g", "k"],
  j: ["i"],
  k: [],
};

describe("hasPath", () => {
  it("returns true when there is a valid path", () => {
    expect(hasPath(graph, "f", "h")).toEqual(true);
  });
  it("returns false when there are no valid paths", () => {
    expect(hasPath(graph, "f", "j")).toEqual(false);
  });
});

describe("hasPathRecursive", () => {
  it("returns true when there is a valid path", () => {
    expect(hasPathRecursive(graph, "f", "h")).toEqual(true);
  });
  it("returns false when there are no valid paths", () => {
    expect(hasPathRecursive(graph, "f", "j")).toEqual(false);
  });
});

describe("hasPathBfs", () => {
  it("returns true when there is a valid path", () => {
    expect(hasPathBfs(graph, "f", "h")).toEqual(true);
  });
  it("returns false when there are no valid paths", () => {
    expect(hasPathBfs(graph, "f", "j")).toEqual(false);
  });
});
