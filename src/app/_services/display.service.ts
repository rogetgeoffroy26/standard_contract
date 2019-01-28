import { Injectable } from '@angular/core';

export interface QuoteData {
  make: string;
  year: number;
  model: string;
}

export interface CustomizeData {
  miles: string;
  deductible: string;
  term: string;
  coverage: string;
}

@Injectable()
export abstract class DisplayService {
  abstract getQuoteData(): QuoteData[];
  abstract getCustomizeData(): CustomizeData[];
}
