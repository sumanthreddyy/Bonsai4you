const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
  {
    id: 1,
    title: "Japanese Maple",
    price: 500,
    desc:'The Japanese Maple, otherwise known as Acer palmatum, is originally from Japan, China, and Korea. It owes its botanical name to the hand-shaped leaves with five pointed lobes. Palma is Latin for palm, as in the palm of your hand.',
    colors: [
      {
        code: "option1",
        img: "imgs/Maple01-acer-palmatum-fall.jpg",
      },
      {
        code: "Option2",
        img: "imgs/bonsai-species-maple-R2C-3424of.jpg",
      },
    ],
  },
  {
    id: 2,
    title: "Chinese Elm",
    desc: 'The Chinese Elm is indigenous to China and south-east Asia. In its native environment it can be a mighty tree reaching heights of up to 80 feet (25 meter). It develops a fine branch ramification with small leaves, which makes it a very suitable Bonsai plant.',
    price: 300,
    colors: [
      {
        code: "option1",
        img: "imgs/Ulmus01-chinese-elm-bonsai.jpg",
      },
      {
        code: "option2",
        img: "imgs/Ulmus01-chinese-elm-bonsai.jpg",
      },
    ],
  },
  {
    id: 3,
    title: "Fukien Tea",
    price: 500,
    desc: 'The Fukien Tea tree is native to parts of Japan, Indonesia, Taiwan, and Australia, but its name comes from its place of origin, Fukien or Fujian, China. In China, Fukien Tea bonsai trees are very popular for Penjing and in western countries, its often an indoor Bonsai tree.',
    colors: [
      {
        code: "option1",
        img: "imgs/bonsai-species-carmona.jpg",
      },
      {
        code: "option2",
        img: "imgs/Carmona01.jpg",
      },
    ],
  },
  {
    id: 4,
    title: "Cherry",
    price: 350,
    desc:'The cherry needs a sunny place which is protected from strong winds. During the hottest summer time it can be wise to provide some partial shade. A cool winter dormancy period of at least three months is required. Cherries are frost-hardy, but should be protected from extremely low temperatures, especially when they are planted in small bonsai pots.',
    colors: [
      {
        code: "Option1",
        img: "imgs/Cherry01-Sakura-Japan.jpg",
      },
      {
        code: "Option2",
        img: "imgs/Cherry03-cherry-blossom.jpg",
      },
    ],
  },
  {
    id: 5,
    title: "Pines",
    price: 750,
    desc:'For Bonsai, pines are especially popular and many people even regard them as the most typical Bonsai trees. Pine trees are evergreen, coniferous resinous trees with needles that appear in bundles of two to five.',
    colors: [
      {
        code: "Option1",
        img: "imgs/Pine03-taikan-ten.jpg",
      },
      {
        code: "Option2",
        img: "imgs/Pine01.jpg",
      },
    ],
  },
];

let choosenProduct = products[0];
const currentProductDesc = document.querySelector(".productDesc");
const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
//const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    //change the current slide
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    //change the choosen product
    choosenProduct = products[index];

    //change texts of currentProduct
    currentProductDesc.textContent = choosenProduct.desc;
    //currentProductTitle.textContent = choosenProduct.desc;
    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = "₹" + choosenProduct.price;
    currentProductImg.src = choosenProduct.colors[0].img;

    //assing new colors
    currentProductColors.forEach((color, index) => {
      color.style.backgroundColor = choosenProduct.colors[index].code;
    });
  });
});

currentProductColors.forEach((color, index) => {
  color.addEventListener("click", () => {
    currentProductImg.src = choosenProduct.colors[index].img;
  });
});

/*currentProductSizes.forEach((size, index) => {
  size.addEventListener("click", () => {
    currentProductSizes.forEach((size) => {
      size.style.backgroundColor = "white";
      size.style.color = "black";
    });
    size.style.backgroundColor = "black";
    size.style.color = "white";
  });
});*/

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});

close.addEventListener("click", () => {
  payment.style.display = "none";
});