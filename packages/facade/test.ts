
type ExtractFacadeState<T> = T extends RestoreCommerceFeature<infer X, infer Y> ? X : never
type ExtractFacadeContext<T> = T extends RestoreCommerceFeature<infer X, infer Y> ? Y : never

export type RestoreCommerceFeature<TState = {}, TContent = {}> = {
  (facade: Facade<MergeFeatures<RestoreCommerceFeature<TState, TContent>>>): void;
};

type MergeFeatures<
  TFeature1 extends RestoreCommerceFeature,
  TFeature2 extends RestoreCommerceFeature = any,
  TFeature3 extends RestoreCommerceFeature = any,
  TFeature4 extends RestoreCommerceFeature = any,
  TFeature5 extends RestoreCommerceFeature = any,
  TFeature6 extends RestoreCommerceFeature = any,
  TFeature7 extends RestoreCommerceFeature = any,
  TFeature8 extends RestoreCommerceFeature = any,
  TFeature9 extends RestoreCommerceFeature = any,
  TFeature10 extends RestoreCommerceFeature = any,
> =
  RestoreCommerceFeature<
    ExtractFacadeState<TFeature1> & ExtractFacadeState<TFeature2> & ExtractFacadeState<TFeature3> & ExtractFacadeState<TFeature4> & ExtractFacadeState<TFeature5> & ExtractFacadeState<TFeature6> & ExtractFacadeState<TFeature7> & ExtractFacadeState<TFeature8> & ExtractFacadeState<TFeature9> & ExtractFacadeState<TFeature10>,
    ExtractFacadeContext<TFeature1> & ExtractFacadeContext<TFeature2> & ExtractFacadeContext<TFeature3> & ExtractFacadeContext<TFeature4> & ExtractFacadeContext<TFeature5> & ExtractFacadeContext<TFeature6> & ExtractFacadeContext<TFeature7> & ExtractFacadeContext<TFeature8> & ExtractFacadeContext<TFeature9> & ExtractFacadeContext<TFeature10>
  >;

export interface Facade<TFeature extends RestoreCommerceFeature = any> {
  state: ExtractFacadeState<TFeature>;
  context: ExtractFacadeContext<TFeature>;
  feature<TNewFeature extends RestoreCommerceFeature<ExtractFacadeState<TFeature>, ExtractFacadeContext<TFeature>>>(feature: TNewFeature): Facade<MergeFeatures<TFeature, TNewFeature>>;
}

/// foo

export interface FooState {
  cfoo: string;
}

export interface FooContext {
  foo: string;
}

export type FooFeature = RestoreCommerceFeature<FooState, FooContext>;


export const foo: FooFeature = (f) => {
  f.context.foo = 'foo_';
};

// --- bar

export interface BarState {
  bar: string;
}

export interface BarContext {
  bar: string;
}

export type BarFeature = RestoreCommerceFeature<BarState, BarContext>;

export const bar: BarFeature = (f) => {
  f.context.bar = 'bar_';
};


// type MyFeatureSet = MergeFeatures<FooFeature, BarFeature>;
// type MyContext = ExtractFacadeContext<MyFeatureSet>;


const x: Facade = {
 context: {},
 state: {},
 feature(arg) {
  return this;
 }
};

const y = x.feature(foo);
const z = y.feature(bar);
z.context.foo;
z.context.bar;
