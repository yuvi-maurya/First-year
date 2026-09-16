const products = [
  {
    name: "Tibra Attire Women Kurti Pant Dupatta Set",
    image:
      "https://rukminim2.flixcart.com/image/224/224/xif0q/ethnic-set/w/c/1/xl-embro001-tibra-attire-original-imah7hyp4k8hh4ka.jpeg?q=90",
    price: 435,
  },
  {
    name: "Bata Lace Up For Men",
    image:
      "https://rukminim2.flixcart.com/image/224/224/xif0q/shoe/j/w/a/7-8216226-7-bata-black-original-imah2ann3mu3ddge.jpeg?q=90",
    price: 672,
  },
  {
    name: "VeBNoR Men Solid Casual Black Shirt",
    image:
      "https://rukminim2.flixcart.com/image/224/224/xif0q/shirt/l/5/j/l-st1-vebnor-original-imahdfp8ntyqnmqz.jpeg?q=90",
    price: 179,
  },
  {
    name: "Andres Lace Up For Men",
    image:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/shoe/v/f/t/-original-imagy96cqqjgm2mv.jpeg?q=70",
    price: 538,
  },
];

const productsE1 = document.getElementById("prodect")
for( let i = 0; i <= products.length - 1; i = i + 1){

const figureE1 = document.createElement("figure");

const imgE1 = document.createElement("img");
imgE1.src = products[i].image
imgE1.alt = products[i].name
figureE1.appendChild(imgE1)
const h1E1 = document.createElement("h1")
h1E1.innerText = products[i].name
figureE1.appendChild(h1E1)
const pE1 = document.createElement("p")
pE1.innerText = products[i].price
figureE1.appendChild(pE1)
productsE1.appendChild(figureE1)

console.log(productsE1)
}

prodect.appendChild(productsE1)