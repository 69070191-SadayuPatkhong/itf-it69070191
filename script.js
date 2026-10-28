const foods = [
  { name: "ข้าวมันไก่", description: "ไก่มันจะไปมันได้ยังไง", price: "50-67 บาท", image: "foods/food1.png" },
  { name: "ผัดกะเพราหมูสับ", description: "เผ็ดไฟลุก", price: "50-60 บาท", image: "foods/food2.png" },
  { name: "ส้มตำ", description: "tum tum sahur", price: "40-60 บาท", image: "foods/food3.png" },
  { name: "ก๋วยเตี๋ยวเรือ", description: "น้ำซุปเข้มข้น เส้นเหนียวนุ่ม", price: "15-60 บาท", image: "foods/food4.png" },
  { name: "ข้าวผัดกุ้ง", description: "นายกำลังบอกฉันว่ากุ้งผัดข้าวจานนี้หรอ", price: "60-80 บาท", image: "foods/food5.png" },
  { name: "หมูกรอบคั่วพริกเกลือ", description: "หมูกรอบนอกนุ่มใน เผ็ดเค็มกำลังดี", price: "70-90 บาท", image: "foods/food6.png" }
];

const foodImage = document.getElementById("foodImage");
const foodName = document.getElementById("foodName");
const foodDescription = document.getElementById("foodDescription");
const foodPrice = document.getElementById("foodPrice");
const randomButton = document.getElementById("randomButton");

let currentIndex = -1;

function showFood(food) {
  foodImage.src = food.image;
  foodName.textContent = food.name;
  foodDescription.textContent = food.description;
  foodPrice.textContent = "ราคา " + food.price;
}

function randomFood() {
  let index;
  do {
    index = Math.floor(Math.random() * foods.length);
  } while (index === currentIndex);
  currentIndex = index;
  showFood(foods[index]);
}

randomButton.addEventListener("click", randomFood);
randomFood();