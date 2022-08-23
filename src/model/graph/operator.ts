import { NO_VERTEX, Vertex, VertexIndex } from "./vertex";

export interface Operator { 
    apply(vertex:Vertex):void;
}