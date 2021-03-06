// #docplaster

// #docregion
import { Component }         from '@angular/core';
import { HTTP_PROVIDERS }    from '@angular/http';

import { HeroListComponent } from './hero-list.component';
import { HeroService }       from './hero.service';
// #enddocregion

// #docregion in-mem-web-api-imports
import { provide }           from '@angular/core';
import { XHRBackend }        from '@angular/http';

// in-memory web api imports
import { InMemoryBackendService,
        SEED_DATA }          from 'angular2-in-memory-web-api/core';
import { HeroData }          from '../hero-data';
// #enddocregion in-mem-web-api-imports
// #docregion

@Component({
  selector: 'my-toh',
// #docregion template
  template: `
  <h1>Tour of Heroes</h1>
  <hero-list></hero-list>
  `,
  // #enddocregion template
  directives: [HeroListComponent],
  providers:  [
    HTTP_PROVIDERS,
    HeroService,
// #enddocregion
// #docregion in-mem-web-api-providers
    // in-memory web api providers
    provide(XHRBackend, { useClass: InMemoryBackendService }), // in-mem server
    provide(SEED_DATA,  { useClass: HeroData }) // in-mem server data
// #enddocregion in-mem-web-api-providers
// #docregion
  ]
})
export class TohComponent { }
// #enddocregion
