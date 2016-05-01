import {describe, it, expect, beforeEachProviders, inject} from 'angular2/testing';
import {Angular2demoApp} from '../app/angular2demo.component';

beforeEachProviders(() => [Angular2demoApp]);

describe('App: Angular2demo', () => {
  it('should have the `defaultMeaning` as 42', inject([Angular2demoApp], (app: Angular2demoApp) => {
    expect(app.defaultMeaning).toBe(42);
  }));

  describe('#meaningOfLife', () => {
    it('should get the meaning of life', inject([Angular2demoApp], (app: Angular2demoApp) => {
      expect(app.meaningOfLife()).toBe('The meaning of life is 42');
      expect(app.meaningOfLife(22)).toBe('The meaning of life is 22');
    }));
  });
});

