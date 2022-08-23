import { Item } from "./item";

export type EdgeIndex = number;
export const NO_EDGE: EdgeIndex = -1;

export class Edge extends Item {
  private index: EdgeIndex;

  constructor();
  constructor(index: EdgeIndex);
  constructor(index?: EdgeIndex) {
    super();
    if (typeof index === "number") {
      this.index = index;
    } else {
      this.index = NO_EDGE;
    }
  }

  public setIndex(index: EdgeIndex): void {
    this.index = index;
  }

  public getIndex(): EdgeIndex {
    return this.index;
  }
}
