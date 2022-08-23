

import {Vertex, VertexIndex} from "../../../model/graph/vertex";
import {Edge, EdgeIndex} from "../../../model/graph/edge";
import {Queue} from "../../../model/graph/queue";
import {GraphTools, MemoryOperator} from "../../../model/graph/graph.tools";
import { Graph } from "../../../model/graph/graph";



describe("testing graph file", () => {
  test("new graph have no edge or vertex", () => {
    let graph: Graph = new Graph();
    expect(graph.getEdgeCont()).toBe(0);
    expect(graph.getVertexCont()).toBe(0);
  });


  test("adding a node", () => {
    let graph: Graph = new Graph();
    let vertex: Vertex = new Vertex();
    graph.addVertex(vertex);
    expect(graph.getVertexCont()).toBe(1);
    expect(vertex.getIndex()).toBe(0);
    expect(graph.getEdgeCont()).toBe(0);
  });


  test("building a graph", () => {
    let graph: Graph = GraphTools.buildTreeGraph();

    let vertices0:Array<VertexIndex>= graph.getVertices(0);
    expect(vertices0.length).toBe(2);
    expect(vertices0.indexOf(1)).toBeGreaterThanOrEqual(0);
    expect(vertices0.indexOf(4)).toBeGreaterThanOrEqual(0);
    let vertices1:Array<VertexIndex>= graph.getVertices(1);
    expect(vertices1.length).toBe(2);
    expect(vertices1.indexOf(2)).toBeGreaterThanOrEqual(0);
    expect(vertices1.indexOf(3)).toBeGreaterThanOrEqual(0);
    let vertices2:Array<VertexIndex>= graph.getVertices(2);
    expect(vertices2.length).toBe(0);
    let vertices3:Array<VertexIndex>= graph.getVertices(3);
    expect(vertices3.length).toBe(0);
    let vertices4:Array<VertexIndex>= graph.getVertices(4);
    expect(vertices4.length).toBe(0);

    let edges0:Array<EdgeIndex>= graph.getEdges(0);
    expect(edges0.length).toBe(2);
    expect(edges0.indexOf(0)).toBeGreaterThanOrEqual(0);
    expect(edges0.indexOf(1)).toBeGreaterThanOrEqual(0);
    let edges1:Array<EdgeIndex>= graph.getEdges(1);
    expect(edges1.length).toBe(2);
    expect(edges1.indexOf(2)).toBeGreaterThanOrEqual(0);
    expect(edges1.indexOf(3)).toBeGreaterThanOrEqual(0);
    let edges2:Array<EdgeIndex>= graph.getEdges(2);
    expect(edges2.length).toBe(0);
    let edges3:Array<EdgeIndex>= graph.getEdges(3);
    expect(edges3.length).toBe(0);
    let edges4:Array<EdgeIndex>= graph.getEdges(4);
    expect(edges4.length).toBe(0);
  });

  test("visiting a tree graph in DFS", () => {
    let graph: Graph = GraphTools.buildTreeGraph();
    let operator:MemoryOperator = new MemoryOperator();
    graph.visitDFS(operator);
    expect(operator.getVertices().length).toBe(5);
    expect(operator.getVertices().indexOf(0)).toBeGreaterThanOrEqual(0);
    expect(operator.getVertices().indexOf(1)).toBeGreaterThanOrEqual(0);
    expect(operator.getVertices().indexOf(2)).toBeGreaterThanOrEqual(0);
    expect(operator.getVertices().indexOf(3)).toBeGreaterThanOrEqual(0);
    expect(operator.getVertices().indexOf(4)).toBeGreaterThanOrEqual(0);
  });

  test("visiting a tree graph in BFS", () => {
    let graph: Graph = GraphTools.buildTreeGraph();
    let operator:MemoryOperator = new MemoryOperator();
    graph.visitBFS(operator);
    expect(operator.getVertices().length).toBe(5);
    expect(operator.getVertices().indexOf(0)).toBeGreaterThanOrEqual(0);
    expect(operator.getVertices().indexOf(1)).toBeGreaterThanOrEqual(0);
    expect(operator.getVertices().indexOf(2)).toBeGreaterThanOrEqual(0);
    expect(operator.getVertices().indexOf(3)).toBeGreaterThanOrEqual(0);
    expect(operator.getVertices().indexOf(4)).toBeGreaterThanOrEqual(0);
  });

  test("visiting a cyclic graph in DFS", () => {
    let graph: Graph = GraphTools.buildCyclicGraph();
    let operator:MemoryOperator = new MemoryOperator();
    graph.visitDFS(operator);
    expect(operator.getVertices().length).toBe(5);
    expect(operator.getVertices().indexOf(0)).toBeGreaterThanOrEqual(0);
    expect(operator.getVertices().indexOf(1)).toBeGreaterThanOrEqual(0);
    expect(operator.getVertices().indexOf(2)).toBeGreaterThanOrEqual(0);
    expect(operator.getVertices().indexOf(3)).toBeGreaterThanOrEqual(0);
    expect(operator.getVertices().indexOf(4)).toBeGreaterThanOrEqual(0);
  });

  test("visiting a cyclic graph in BFS", () => {
    let graph: Graph = GraphTools.buildCyclicGraph();
    let operator:MemoryOperator = new MemoryOperator();
    graph.visitBFS(operator);
    expect(operator.getVertices().length).toBe(5);
    expect(operator.getVertices().indexOf(0)).toBeGreaterThanOrEqual(0);
    expect(operator.getVertices().indexOf(1)).toBeGreaterThanOrEqual(0);
    expect(operator.getVertices().indexOf(2)).toBeGreaterThanOrEqual(0);
    expect(operator.getVertices().indexOf(3)).toBeGreaterThanOrEqual(0);
    expect(operator.getVertices().indexOf(4)).toBeGreaterThanOrEqual(0);
  });


  test("visiting a desconnected graph in DFS", () => {
    let graph: Graph = GraphTools.buildDisconnectedGraph();
    let operator:MemoryOperator = new MemoryOperator();
    graph.visitDFS(operator);
    expect(operator.getVertices().length).toBe(6);
    expect(operator.getVertices().indexOf(0)).toBeGreaterThanOrEqual(0);
    expect(operator.getVertices().indexOf(1)).toBeGreaterThanOrEqual(0);
    expect(operator.getVertices().indexOf(2)).toBeGreaterThanOrEqual(0);
    expect(operator.getVertices().indexOf(3)).toBeGreaterThanOrEqual(0);
    expect(operator.getVertices().indexOf(4)).toBeGreaterThanOrEqual(0);
    expect(operator.getVertices().indexOf(5)).toBeGreaterThanOrEqual(0);
  });

  test("visiting a desconnected graph in BFS", () => {
    let graph: Graph = GraphTools.buildDisconnectedGraph();
    let operator:MemoryOperator = new MemoryOperator();
    graph.visitDFS(operator);
    expect(operator.getVertices().length).toBe(6);
    expect(operator.getVertices().indexOf(0)).toBeGreaterThanOrEqual(0);
    expect(operator.getVertices().indexOf(1)).toBeGreaterThanOrEqual(0);
    expect(operator.getVertices().indexOf(2)).toBeGreaterThanOrEqual(0);
    expect(operator.getVertices().indexOf(3)).toBeGreaterThanOrEqual(0);
    expect(operator.getVertices().indexOf(4)).toBeGreaterThanOrEqual(0);
    expect(operator.getVertices().indexOf(5)).toBeGreaterThanOrEqual(0);
  });

  test("visiting a complex graph in DFS", () => {
    let graph: Graph = GraphTools.buildComplexGraph();
    let operator:MemoryOperator = new MemoryOperator();
    graph.visitDFS(operator);
    expect(operator.getVertices().length).toBe(6);
    expect(operator.getVertices().indexOf(0)).toBeGreaterThanOrEqual(0);
    expect(operator.getVertices().indexOf(1)).toBeGreaterThanOrEqual(0);
    expect(operator.getVertices().indexOf(2)).toBeGreaterThanOrEqual(0);
    expect(operator.getVertices().indexOf(3)).toBeGreaterThanOrEqual(0);
    expect(operator.getVertices().indexOf(4)).toBeGreaterThanOrEqual(0);
    expect(operator.getVertices().indexOf(5)).toBeGreaterThanOrEqual(0);
  });


  test("visiting a complex graph in BFS", () => {
    let graph: Graph = GraphTools.buildComplexGraph();
    let operator:MemoryOperator = new MemoryOperator();
    graph.visitBFS(operator);
    expect(operator.getVertices().length).toBe(6);
    expect(operator.getVertices().indexOf(0)).toBeGreaterThanOrEqual(0);
    expect(operator.getVertices().indexOf(1)).toBeGreaterThanOrEqual(0);
    expect(operator.getVertices().indexOf(2)).toBeGreaterThanOrEqual(0);
    expect(operator.getVertices().indexOf(3)).toBeGreaterThanOrEqual(0);
    expect(operator.getVertices().indexOf(4)).toBeGreaterThanOrEqual(0);
    expect(operator.getVertices().indexOf(5)).toBeGreaterThanOrEqual(0);
  });
  

  test("queue basic operations", () => {
    let queue: Queue = new Queue();
    queue.enqueue(10);
    expect(queue.getSize()).toBe(1);
    expect(queue.getHead()).toBe(10);
    queue.enqueue(21);
    expect(queue.getSize()).toBe(2);
    expect(queue.getHead()).toBe(10);
    expect(queue.getTail()).toBe(21);
    let value:number = queue.dequeue();
    expect(queue.getSize()).toBe(1);
    expect(queue.getHead()).toBe(21);
    expect(queue.getTail()).toBe(21);
    expect(value).toBe(10);
    value = queue.dequeue();
    expect(queue.getSize()).toBe(0);
    expect(queue.getHead()).toBe(undefined);
    expect(queue.getTail()).toBe(undefined);
    expect(value).toBe(21);
    value = queue.dequeue();
    expect(queue.getSize()).toBe(0);
    expect(queue.getHead()).toBe(undefined);
    expect(queue.getTail()).toBe(undefined);
    expect(value).toBe(undefined);
    queue.enqueue(10);
    expect(queue.getSize()).toBe(1);
    expect(queue.getHead()).toBe(10);
  });

});
