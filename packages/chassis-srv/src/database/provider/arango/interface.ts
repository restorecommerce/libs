import { ArrayCursor } from 'arangojs/cursor';
import { CreateArangoSearchViewOptions } from 'arangojs/view';
import { CreateAnalyzerOptions } from 'arangojs/analyzer';

export interface TraversalResponse {
  rootCursor?: ArrayCursor;
  associationCursor?: ArrayCursor;
}

export interface AnalyzerOptions {
  [key: string]: CreateAnalyzerOptions;
}

export interface ViewAnalyzerOptions {
  view: {
    collectionName: string;
    viewName: string;
    similarityThreshold: number;
    options: CreateArangoSearchViewOptions;
  };
  analyzers: string[];
  analyzerOptions: AnalyzerOptions[];
}

export interface ViewMap {
  fields: string[]; // list of indexed fields of entity
  viewName: string;
  similarityThreshold: number;
  analyzerOptions: AnalyzerOptions[];
}
