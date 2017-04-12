import 'reflect-metadata';
import 'babel-polyfill';
import 'zone.js/dist/zone';
import 'zone.js/dist/long-stack-trace-zone';
import 'zone.js/dist/sync-test';
import 'zone.js/dist/proxy';
import 'zone.js/dist/jasmine-patch';
import 'zone.js/dist/async-test';
import 'zone.js/dist/fake-async-test';
import 'ts-helpers';
import { getTestBed } from '@angular/core/testing';
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting,
} from '@angular/platform-browser-dynamic/testing';

declare var __karma__: any;
declare var require: any;

// const mock = () => {
//   let storage = {};
//   return {
//     getItem: key => key in storage ? storage[key] : null,
//     setItem: (key, value) => storage[key] = value || '',
//     removeItem: key => delete storage[key],
//     clear: () => storage = {},
//   };
// };

// Object.defineProperty(window, 'localStorage', {
//   value: mock(),
// });
// Object.defineProperty(window, 'sessionStorage', {
//   value: mock(),
// });
// Object.defineProperty(window, 'getComputedStyle', {
//   value: () => ['-webkit-appearance'],
// });

__karma__.loaded = function () {};

getTestBed().initTestEnvironment(
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting(),
);

const context = require.context('.', true, /\.test\.ts$/);

context.keys().map(context);

__karma__.start();