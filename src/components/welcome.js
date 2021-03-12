/* eslint-disable quotes */
/* eslint-disable no-param-reassign */

export async function bienvenida(target, firebase) {
  const html = `
    <h1>Bienvenida a mi Red social</h1>
    <button id="botoncito">Soy un boton</button>
    <div id="postContainer"></div>
  `;

  target.innerHTML = html;
  const posts = await firebase.getPosts();
  const container = document.getElementById('postContainer');
  const templates = posts.map((post) => `<p>${post.message}</p>`);
  container.innerHTML = templates.join('');
  const boton = document.getElementById('botoncito');
  boton.addEventListener('click', () => {
    const imprimir = document.createElement('p');
    imprimir.textContent = 'Ya llegue';
    container.appendChild(imprimir);
  });
}
