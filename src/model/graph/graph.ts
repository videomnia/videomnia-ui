import { Edge, EdgeIndex, NO_EDGE } from "./edge";
import { NO_VERTEX, Vertex, VertexIndex } from "./vertex";
import { Operator } from "./operator";
import { Queue } from "./queue";

export class Graph {
  protected vertices: Array<Vertex>;
  protected edges: Array<Edge>;
  protected next: Array<EdgeIndex>;
  protected to: Array<VertexIndex>;
  protected from: Array<EdgeIndex>;

  constructor() {
    this.vertices = new Array<Vertex>();
    this.edges = new Array<Edge>();
    this.next = new Array<EdgeIndex>();
    this.to = new Array<VertexIndex>();
    this.from = new Array<EdgeIndex>();
  }

  public getEdgeCont(): number {
    return this.edges.length;
  }

  public getVertexCont(): number {
    return this.vertices.length;
  }

  public addVertex(vertex: Vertex): void {
    if (vertex == null) {
      throw new Error("A null vertex cannot be added");
    }
    let vertexIndex: VertexIndex = this.vertices.length;
    vertex.setIndex(vertexIndex);
    this.vertices.push(vertex);
  }

  public addEdge(edge: Edge, from: VertexIndex, to: VertexIndex): void {
    if (edge == null) {
      throw new Error("A null edge cannot be added");
    }
    if (from >= this.vertices.length) {
      throw new Error("This vertex ${from} is not defined");
    }
    if (to >= this.vertices.length) {
      throw new Error("This vertex ${to} is not defined");
    }
    let edgeIndex: EdgeIndex = this.edges.length;
    edge.setIndex(edgeIndex);
    this.edges.push(edge);
    this.next.push(this.getFrom(from));
    this.to.push(to);
    this.from[from] = edgeIndex;
  }

  public getVertices(vertexIndex: VertexIndex): Array<VertexIndex> {
    if (vertexIndex >= this.vertices.length) {
      throw new Error("This vertex ${vertexIndex} is not defined");
    }
    let vertices: Array<VertexIndex> = new Array<VertexIndex>();

    let edge: EdgeIndex = this.getFrom(vertexIndex);

    while (edge !== NO_EDGE) {
      let vertex: VertexIndex = this.getTo(edge);
      vertices.push(vertex);
      edge = this.getNext(edge);
    }

    return vertices;
  }

  public getEdges(vertexIndex: VertexIndex): Array<EdgeIndex> {
    if (vertexIndex >= this.vertices.length) {
      throw new Error("This vertex ${vertexIndex} is not defined");
    }

    let edges: Array<VertexIndex> = new Array<VertexIndex>();
    let edge: EdgeIndex = this.getFrom(vertexIndex);

    while (edge !== NO_EDGE) {
      edges.push(edge);
      edge = this.getNext(edge);
    }

    return edges;
  }

  public visitDFS(operator: Operator): void {
    let visited: Array<boolean> = new Array<boolean>(this.vertices.length);
    visited.fill(false);
    for (let vertex: VertexIndex = 0; vertex < this.vertices.length; vertex++) {
      let toVisit: Array<VertexIndex> = new Array<VertexIndex>();
      if (!visited[vertex]) {
        toVisit.push(vertex);
        while (toVisit.length > 0) {
          let nextVertex: VertexIndex = toVisit.pop();
          if (!visited[nextVertex]) {
            visited[nextVertex] = true;
            if (operator !== null) {
              operator.apply(this.vertices[nextVertex]);
            }
            this.getVertices(nextVertex).forEach((v) => {
              toVisit.push(v);
            });
          }
        }
      }
    }
  }

  public visitBFS(operator: Operator): void {
    let visited: Array<boolean> = new Array<boolean>(this.vertices.length);
    visited.fill(false);
    for (let vertex: VertexIndex = 0; vertex < this.vertices.length; vertex++) {
      let toVisit: Queue = new Queue();
      if (!visited[vertex]) {
        toVisit.enqueue(vertex);
        while (!toVisit.isEmpty()) {
          let nextVertex: VertexIndex = toVisit.dequeue();
          if (!visited[nextVertex]) {
            visited[nextVertex] = true;
            if (operator !== null) {
              operator.apply(this.vertices[nextVertex]);
            }
            this.getVertices(nextVertex).forEach((v) => {
              toVisit.enqueue(v);
            });
          }
        }
      }
    }
  }

  private getFrom(vertexIndex: VertexIndex): EdgeIndex {
    if (this.from.length == 0) {
      return NO_EDGE;
    } else {
      if (this.from[vertexIndex] === undefined) {
        return NO_EDGE;
      } else {
        return this.from[vertexIndex];
      }
    }
  }

  private getTo(edgeIndex: EdgeIndex): VertexIndex {
    if (this.to.length == 0) {
      return NO_VERTEX;
    } else {
      return this.to[edgeIndex];
    }
  }

  private getNext(edgeIndex: EdgeIndex): EdgeIndex {
    if (this.next.length == 0) {
      return NO_EDGE;
    } else {
      if (this.next[edgeIndex] === undefined) {
        return NO_EDGE;
      } else {
        return this.next[edgeIndex];
      }
    }
  }
}
