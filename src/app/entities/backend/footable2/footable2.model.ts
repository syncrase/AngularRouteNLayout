
export interface IFootable2 {

  id?: number;
  bar?: string;

}

export class Footable2 implements IFootable2 {
  constructor(
    public id?: number,
    bar?: string
  ) { }

}
