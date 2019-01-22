
export interface IFootable1 {

  id?: number;
  bar?: string;

}

export class Footable1 implements IFootable1 {
  constructor(
    public id?: number,
    bar?: string
  ) { }

}
