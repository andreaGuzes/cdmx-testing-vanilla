/* eslint-disable quotes */
import { bienvenida } from '../src/components/welcome.js';

const Dom = document.createElement('div');
describe('new suite', () => {
  test('dom', () => {
    const element = bienvenida(Dom);
    expect(element).toEqual(`<h1>Bienvenida a mi Red social</h1>`);
  });
});
