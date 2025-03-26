export class Pipe<I> {
  constructor(
    public readonly value: I,
  ) {}

  public then<O>(fn: (v: I) => O){
    return new Pipe<O>(fn(this.value));
  } 
}