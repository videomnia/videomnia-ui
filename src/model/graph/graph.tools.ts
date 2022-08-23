
import { Edge, EdgeIndex } from "./edge";
import { Operator } from "./operator";
import { Graph } from "./graph";
import { Vertex, VertexIndex } from "./vertex";

export class GraphTools {
  public static buildTreeGraph(): Graph {
    let graph: Graph = new Graph();
    let vertex0: Vertex = new Vertex();
    graph.addVertex(vertex0);
    let vertex1: Vertex = new Vertex();
    graph.addVertex(vertex1);
    let vertex2: Vertex = new Vertex();
    graph.addVertex(vertex2);
    let vertex3: Vertex = new Vertex();
    graph.addVertex(vertex3);
    let vertex4: Vertex = new Vertex();
    graph.addVertex(vertex4);
    graph.addEdge(new Edge(), 0, 1);
    graph.addEdge(new Edge(), 0, 4);
    graph.addEdge(new Edge(), 1, 2);
    graph.addEdge(new Edge(), 1, 3);
    return graph;
  }

  public static buildCyclicGraph(): Graph {
    let graph: Graph = new Graph();
    let vertex0: Vertex = new Vertex();
    graph.addVertex(vertex0);
    let vertex1: Vertex = new Vertex();
    graph.addVertex(vertex1);
    let vertex2: Vertex = new Vertex();
    graph.addVertex(vertex2);
    let vertex3: Vertex = new Vertex();
    graph.addVertex(vertex3);
    let vertex4: Vertex = new Vertex();
    graph.addVertex(vertex4);
    graph.addEdge(new Edge(), 0, 1);
    graph.addEdge(new Edge(), 0, 4);
    graph.addEdge(new Edge(), 1, 2);
    graph.addEdge(new Edge(), 1, 3);
    graph.addEdge(new Edge(), 4, 3);
    graph.addEdge(new Edge(), 4, 3);
    graph.addEdge(new Edge(), 2, 0);
    return graph;
  }

  public static buildDisconnectedGraph(): Graph {
    let graph: Graph = new Graph();
    let vertex0: Vertex = new Vertex();
    graph.addVertex(vertex0);
    let vertex1: Vertex = new Vertex();
    graph.addVertex(vertex1);
    let vertex2: Vertex = new Vertex();
    graph.addVertex(vertex2);
    let vertex3: Vertex = new Vertex();
    graph.addVertex(vertex3);
    let vertex4: Vertex = new Vertex();
    graph.addVertex(vertex4);
    let vertex5: Vertex = new Vertex();
    graph.addVertex(vertex5);
    graph.addEdge(new Edge(), 0, 1);
    graph.addEdge(new Edge(), 1, 2);
    graph.addEdge(new Edge(), 2, 0);
    graph.addEdge(new Edge(), 3, 4);
    graph.addEdge(new Edge(), 4, 5);
    graph.addEdge(new Edge(), 5, 3);
    return graph;

  }

  public static buildComplexGraph(): Graph {
    let graph: Graph = new Graph();
    let vertex0: Vertex = new Vertex();
    graph.addVertex(vertex0);
    let vertex1: Vertex = new Vertex();
    graph.addVertex(vertex1);
    let vertex2: Vertex = new Vertex();
    graph.addVertex(vertex2);
    let vertex3: Vertex = new Vertex();
    graph.addVertex(vertex3);
    let vertex4: Vertex = new Vertex();
    graph.addVertex(vertex4);
    let vertex5: Vertex = new Vertex();
    graph.addVertex(vertex5);
    graph.addEdge(new Edge(), 0, 0);
    graph.addEdge(new Edge(), 0, 1);
    graph.addEdge(new Edge(), 1, 2);
    graph.addEdge(new Edge(), 2, 0);
    graph.addEdge(new Edge(), 3, 4);
    graph.addEdge(new Edge(), 4, 5);
    graph.addEdge(new Edge(), 5, 5);
    graph.addEdge(new Edge(), 5, 3);
    graph.addEdge(new Edge(), 3, 2);
    graph.addEdge(new Edge(), 3, 2);
    return graph;

  }
}

export class MemoryOperator implements Operator {
  private vertices: Array<VertexIndex>;

  constructor() {
    this.vertices = new Array<VertexIndex>();
  }

  apply(vertex: Vertex): void {
    this.vertices.push(vertex.getIndex());
  }

  public getVertices(): Array<VertexIndex> {
    return this.vertices;
  }
}

