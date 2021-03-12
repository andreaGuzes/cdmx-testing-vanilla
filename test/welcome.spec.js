/* eslint-disable quotes */
import { bienvenida } from '../src/components/welcome.js';

describe('new suite', () => {
  beforeEach(() => {
    document.body.innerHTML = '<div id="app"></div>';
  });

  test('deberia renderizar', async () => {
    const target = document.getElementById('app');
    const posts = [
      {
        message: 'test',
      },
    ];
    const getPosts = jest.fn().mockImplementation(() => Promise.resolve(posts));
    const firebase = { getPosts };

    await bienvenida(target, firebase);

    expect(target.innerHTML).toMatchSnapshot();
  });

  test('boton cambia texto', async () => {
    const target = document.getElementById('app');
    const getPosts = jest.fn().mockImplementation(() => Promise.resolve([]));
    const firebase = { getPosts };

    await bienvenida(target, firebase);

    const botoncito = document.getElementById('botoncito');
    botoncito.click();

    expect(target.innerHTML).toMatchSnapshot();
  });
});
