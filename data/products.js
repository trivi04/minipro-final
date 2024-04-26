export function getProduct(productId){
  let matchingProduct;

  products.forEach((product) => {
    if (product.id === productId) {
      matchingProduct = product;
    }
  });

  products1.forEach((product) => {
    if (product.id === productId) {
      matchingProduct = product;
    }
  });
  

  return matchingProduct;
}


export const products = [
  {
    id: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
    image: "images/delicacies/lemon tea.jpg",
    name: "lemon tea",
    priceCents: 6000,
  },
  {
    id: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
    image: "images/delicacies/herbal tea.jpg",
    name: "herbal tea",
    priceCents: 5000,
  },
  {
    id: "83d4ca15-0f35-48f5-b7a3-1ea210004f2e",
    image: "images/delicacies/capuccino.jpg",
    name: "capuccino",
    priceCents: 8500,

  },
  {
    id: "54e0eccd-8f36-462b-b68a-8182611d9add",
    image: "images/delicacies/latte.jpg",
    name: "Latte",
    priceCents: 9000,
  },
  
  {
    id: "b0f17cc5-8b40-4ca5-9142-b61fe3d98c85",
    image: "images/delicacies/dalgona cofee.jpg",
    name: "dalgona Coffee",
    priceCents: 8000,

  },
  {
    id: "a93a101d-79ef-4cf3-a6cf-6dbe532a1b4a",
    image: "images/delicacies/iced tea.avif",
    name: "Iced Tea",
    priceCents: 6000,
  },
  {
    id: "4f4fbcc2-4e72-45cc-935c-9e13d79cc57f",
    image: "images/delicacies/tea.jpg",
    name: "Tea",
    priceCents: 4000,

  },
  {
    id: "8b5a2ee1-6055-422a-a666-b34ba28b76d4",
    image: "images/delicacies/mocha coffee.jpg",
    name: "Mocha Coffee",
    priceCents: 8000,
  },
];

export const products1 = [
  {
    id: "e43638ce-6aa0-4b85-b27f-e1d07eb678c5",
    image: "images/delicacies/choco cake with rasberries.jpg",
    name: "choco cake with rasberries",
    priceCents: 8000,
  },
  {
    id: "15b6fc6f-327a-4ec4-896f-486349e85a3e",
    image: "images/delicacies/chocochip cookies.jpg",
    name: "choco chip cookies(5)",
    priceCents: 5000,
    
  },
  {
    id: "83d4ca15-0f35-48f5-b7a3-1ea210004f2f",
    image: "images/delicacies/croissant.jpg",
    name: "Croissant",
    priceCents: 6000,
   
  },
  {
    id: "54e0eccd-8f36-462b-b68a-8182611d9ade",
    image: "images/delicacies/redvelvet cake.jpg",
    name: "redvelvet cake",
    priceCents: 11999,
  },
  {
    id: "3ebe75dc-64d2-4137-8860-1f5a963e534bc",
    image: "images/delicacies/vanilla blueberry cupcake.jpg",
    name: "vanilla blueberry cupcake",
    
    priceCents: 10999,
  },
  {
    id: "8c9c52b5-5a19-4bcb-a5d1-158a74287c43",
    image: "images/delicacies/pista Cupcake.jpg",
    name: "pista cupcake",
    priceCents: 8000,
    
  },
  {
    id: "dd82ca78-a18b-4e2a-9250-31e67412f983",
    image: "images/delicacies/crepe.jpg",
    name: "Crepe",
    priceCents: 9000,
  },
  {
    id: "77919bbe-0e56-475b-adde-4f24dfed3a02",
    image: "images/delicacies/baguette.jpg",
    name: "Baguette",
    priceCents: 7000,
  
  },
  {
    id: "3fdfe8d6-9a15-4979-b459-585b0d0545b4",
    image: "images/delicacies/strawberry short cake.jpg",
    name: "stawberry ShortCake",
    priceCents: 13999,
  },
];
