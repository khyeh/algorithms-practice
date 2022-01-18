type Vertices = string[];

type Visited = {
    [key: string]: boolean
}

type AdjacencyList = {
    [key: string]: string[]
}

interface Graph {
    adjacencyList: AdjacencyList
}

/** Unweighted and Undirected Graph */
class Graph {
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(vertexName: string) {
        return (!this.adjacencyList[vertexName]) ?
            this.adjacencyList[vertexName] = [] : null
    }

    addEdge(vertex1: string, vertex2: string) {
        if (!this.adjacencyList[vertex1] || !this.adjacencyList[vertex2]) {
            return false;
        }
        this.adjacencyList[vertex1].push(vertex2);
        this.adjacencyList[vertex2].push(vertex1);
        return true;
    }

    removeEdge(vertex1: string, vertex2: string) {
        this.adjacencyList[vertex1] =
            this.adjacencyList[vertex1]?.filter(vertex => vertex !== vertex2);
        this.adjacencyList[vertex2] =
            this.adjacencyList[vertex2]?.filter(vertex => vertex !== vertex1);
    }

    removeVertex(vertexName: string) {
        for (const [key, value] of Object.entries(this.adjacencyList)) {
            this.removeEdge(key, vertexName);
        }
        delete this.adjacencyList[vertexName];
    }

    dfsRecursive(startNode: string) {
        const traversalOrder: string[] = [];
        const visited: Visited = {};
        const adjacencyList = this.adjacencyList;
        const dfs = (vertex: string): void => {
            if (!vertex) {
                return;
            }
            visited[vertex] = true;
            traversalOrder.push(vertex);
            adjacencyList[vertex].forEach((neighbor: string) => {
                if (!visited[neighbor]) {
                    return dfs(neighbor)
                }
            });
        }
        dfs(startNode);
        return traversalOrder;
    }

    dfsIterative(startNode: string) {
        const stack = [];
        const result = [];
        const visited: Visited = {};

        stack.push(startNode);
        while (stack.length) {
            const vertex: string = stack.pop()!;
            if (!visited[vertex]) {
                visited[vertex] = true;
                result.push(vertex);
                this.adjacencyList[vertex].forEach((neighbor: string) => {
                    stack.push(neighbor);
                })
            }
        }
        return result;
    }

    bfs(startNode: string) {
        const queue = [];
        const result = [];
        const visited: Visited = {};

        queue.push(startNode);
        while (queue.length) {
            const vertex: string = queue.shift()!;
            if (!visited[vertex]) {
                visited[vertex] = true;
                result.push(vertex);
                this.adjacencyList[vertex].forEach((neighbor: string) => {
                    queue.push(neighbor);
                })
            }
        }
        return result;
    }
}

const graph = new Graph();
// graph.addVertex("Dallas");
// graph.addVertex("Tokyo");
// graph.addVertex("Aspen");
// graph.addVertex("Los Angeles");
// graph.addVertex("Hong Kong");
// graph.addEdge("Dallas", "Tokyo");
// graph.addEdge("Dallas", "Aspen");
// graph.addEdge("Dallas", "Hong Kong");
// graph.addEdge("Dallas", "Los Angeles");
// graph.addEdge("Tokyo", "Hong Kong");
// graph.addEdge("Hong Kong", "Los Angeles");
// console.log('graph', graph.adjacencyList);
// graph.removeVertex("Hong Kong");
// console.log('graph', graph.adjacencyList);

graph.addVertex("a");
graph.addVertex("b");
graph.addVertex("c");
graph.addVertex("d");
graph.addVertex("e");
graph.addVertex("f");
graph.addEdge("a", "b");
graph.addEdge("a", "c");
graph.addEdge("b", "d");
graph.addEdge("c", "e");
graph.addEdge("d", "e");
graph.addEdge("d", "f");
graph.addEdge("e", "f");
console.log(graph.dfsRecursive("a"));
console.log(graph.dfsIterative("a"));
console.log(graph.bfs("a"));
