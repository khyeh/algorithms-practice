import { Visited } from "./unweightedGraph";

type WeightedVertex = {
    node: string;
    weight: number;
}

type WeightedAdjacencyList = {
    [key: string]: WeightedVertex[]
}

interface WeightedGraph {
    adjacencyList: WeightedAdjacencyList
}

/** Unweighted and Undirected Graph */
class WeightedGraph {
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(vertexName: string) {
        return (!this.adjacencyList[vertexName]) ?
            this.adjacencyList[vertexName] = [] : null
    }

    addEdge(vertex1: string, vertex2: string, weight: number) {
        if (!this.adjacencyList[vertex1] || !this.adjacencyList[vertex2]) {
            return false;
        }
        this.adjacencyList[vertex1].push({ node: vertex2, weight });
        this.adjacencyList[vertex2].push({ node: vertex1, weight });
        return true;
    }

    removeEdge(vertex1: string, vertex2: string) {
        this.adjacencyList[vertex1] =
            this.adjacencyList[vertex1]?.filter(vertex => vertex.node !== vertex2);
        this.adjacencyList[vertex2] =
            this.adjacencyList[vertex2]?.filter(vertex => vertex.node !== vertex1);
    }

    removeVertex(vertexName: string) {
        for (const [key, value] of Object.entries(this.adjacencyList)) {
            this.removeEdge(key, vertexName);
        }
        delete this.adjacencyList[vertexName];
    }
}

const graph = new WeightedGraph();
