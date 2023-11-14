document.addEventListener("DOMContentLoaded", function () {
  const btnMagic = document.querySelector(".btn-magic");
  const resultDiv = document.querySelector(".result"); // Отримуємо елемент для відображення результатів

  let randomGarnishes = [
    "гречка",
    "рис",
    "жарена картопля",
    "пюре",
    "голубці",
    "омлет",
    "паста карбонара",
    "макарони",
    "булгур",
    "яишница",
    "піцца",
    "горячі бутерброди",
  ];
  let randomMeatDishes = [
    "сосіски",
    "сардельки",
    "курочку кубиком",
    "свинячі відбивні",
    "шашлик",
    "м'ясо по-французьки",
    "тушковану телятину",
    "лосось в духовке",
    "мідії",
    "красная рибка",
    "отварная  курочка",
    "дорадо",
    "скубрія в духовці",
    "куриця + гриби",
    "котлети",
    "рублені котлети",
    "курині котлети",
    "фрикодельки",
    "фарширований перець",
  ];
  let randomSalads = [
    "пекінка+морква+кукурудза",
    "олівьє",
    "грецький салат",
    "авакадо з творогом",
    "салат з тунцем",
    "тушенна капуста",
    "запечений кабачок",
    "помідор+огурчик+цибуля",
    "селедка под шубой",
    "рагу",
    "салат з морквою",
    "салат з рукколою",
    "капрєзє",
  ];

  btnMagic.addEventListener("click", () => {
    let randomGarnish =
      randomGarnishes[Math.floor(Math.random() * randomGarnishes.length)];
    let randomMeatDish =
      randomMeatDishes[Math.floor(Math.random() * randomMeatDishes.length)];
    let randomSalad =
      randomSalads[Math.floor(Math.random() * randomSalads.length)];

    let ideaNaPoistu =
      "1. Як тобі на гарнір " +
      randomGarnish.toUpperCase() +
      "? 2. Добавимо до цього " +
      randomMeatDish.toUpperCase() +
      " 3. Та забажанням " +
      randomSalad.toUpperCase() +
      "!!!";

    // Замість виведення у консоль, виведемо результат на екран
    resultDiv.innerText = ideaNaPoistu;
  });
});
