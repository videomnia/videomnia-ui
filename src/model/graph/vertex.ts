import { Item } from "./item";

export type VertexIndex = number;
export const NO_VERTEX: VertexIndex = -1;

export class Vertex extends Item {
  private index: VertexIndex;

  constructor();
  constructor(index: VertexIndex);
  constructor(index?: VertexIndex) {
    super();
    if (typeof index === "number") {
      this.index = index;
    } else {
      this.index = NO_VERTEX;
    }
  }

  public setIndex(index: VertexIndex): void {
    this.index = index;
  }

  public getIndex(): VertexIndex {
    return this.index;
  }
}
