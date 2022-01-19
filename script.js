/**montando um json de imagens */
const images = [
  {'id': '1', 'url':'./img/img1.jpg'},
  {'id': '2', 'url':'./img/img2.jpg'},
  {'id': '3', 'url':'./img/img3.jpg'},
  {'id': '4', 'url':'./img/img4.jpg'},
  {'id': '5', 'url':'./img/img5.jpg'},
  {'id': '6', 'url':'./img/img6.jpg'}
]

const containerItems = document.querySelector('#container-items');

/**ele vai fazer um forEach, então ele vai pegar cada item(url) e depois fazer um div=(item) e adicionar esses item(url) dentro dela */
const loadImages = (images, containerItems) => {
    images.forEach(image => {
      containerItems.innerHTML += `
      <div class='item'>
          <img src='${image.url}'
      </div>
      `
    });
}

loadImages ( images, containerItems)

let items = document.querySelectorAll('.item');

/**Quando clicar no botão previous, o primeiro item vai ser o ultimo, e o segunda vai para primeiro */
const previous = () => {
  containerItems.appendChild(items[0]);
  items = document.querySelectorAll('.item');

}

/**Quando clicar no botão next, o ultimo item vai ser o primeiro, e o primeiro vai para segundo */
const next = () => {
  const lastItem = items[items.length - 1];
  containerItems.insertBefore(lastItem, items[0]);
  items = document.querySelectorAll('.item');

}


document.querySelector('#previous').addEventListener('click', previous)
document.querySelector('#next').addEventListener('click', next)
