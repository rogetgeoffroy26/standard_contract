import { Injectable } from '@angular/core';
import { QuoteData, CustomizeData, DisplayService } from './display.service';

@Injectable()
export class DataService implements DisplayService {
  getQuoteData(): QuoteData[] {
    const options: QuoteData[] = [
      { year: 2018, make: 'Honda', model: 'Civic' },
      { year: 2016, make: 'Honda', model: 'Accord' },
      { year: 2015, make: 'Lexus', model: 'LS-300' },
      { year: 1999, make: 'BMW', model: 'M3' }
    ];
    return options;
  }

  getCustomizeData(): CustomizeData[] {
    const features: CustomizeData[] = [
      { miles: '500 miles or less', deductible: '$0', term: '24 months', coverage: 'Regular' },
      { miles: 'Around 1,000 miles', deductible: '$50', term: '36 months', coverage: 'Premium' },
      { miles: '1,000 miles or more', deductible: '$100', term: '48 months', coverage: 'Supreme' }
    ];
    return features;
  }

}
