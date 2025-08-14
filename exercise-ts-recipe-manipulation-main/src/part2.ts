export function part2() {
  // ------------------------------------------------------------------------------------
  // 1. The logo text of the site has the wrong color. Change it to the correct one.
  const logoTextEl = document.querySelector<HTMLParagraphElement>(".logo-text");
  if (logoTextEl) {
    logoTextEl.style.color = "black";
  }
  // ------------------------------------------------------------------------------------
  // 2. The alignment of the elements inside the header element are wrong. Change it to the correct one. Hint, check the flex properties for the correct alignment. Here is a link that might help: https://css-tricks.com/snippets/css/a-guide-to-flexbox/
  const headerEl = document.querySelector<HTMLHeadElement>("header");
  if (headerEl) {
    headerEl.style.justifyContent = "start";
  }
  // ------------------------------------------------------------------------------------
  // 3. The header has a border at the bottom, but it has the wrong color. Change it do the correct one.
  if (headerEl) {
    headerEl.style.borderBottomColor = "lightgray";
  }
  // ------------------------------------------------------------------------------------
  // 4. The recipe name is wrong, change it to the correct one.
  const recipeName = document.querySelector<HTMLHeadingElement>("#recipe-name");
  if (recipeName) {
    recipeName.innerHTML = "Frozen Cheescake";
  }
  // ------------------------------------------------------------------------------------
  // 5. The clock icon beneath the recipe name has disappeared and been replaced by a text instead. This can be fixed by adding a class to that element.
  const timerIconEl = document.querySelector<HTMLSpanElement>(
    ".time-container span"
  );
  if (timerIconEl) {
    timerIconEl.classList.add("material-symbols-outlined");
  }
  // ------------------------------------------------------------------------------------
  // 6. The estimated time of the recipe is also incorrect. Change it to the correct time estimation.
  const timeEl = document.querySelector<HTMLSpanElement>(".time");
  if (timeEl) {
    timeEl.innerHTML = "60+ min";
  }
  // ------------------------------------------------------------------------------------
  // 7. The src path to the image is wrong, or atleast it's showing the wrong image. Change it to the correct one. The available images can be found in the assets folder.
  const imgEl = document.querySelector<HTMLImageElement>(
    'img[src="/src/assets/apple-pie.jpg"]'
  );
  if (imgEl) {
    imgEl.src = "/src/assets/frozen-cheesecake-slice.jpg";
  }
  // ------------------------------------------------------------------------------------
  // 8. The background color of the ingredients list container is wrong. Fix it.
  const ingredientsEl = document.querySelector<HTMLElement>(
    ".ingredients-container"
  );
  if (ingredientsEl) {
    ingredientsEl.style.backgroundColor = "#f9f9f9";
  }
  // ------------------------------------------------------------------------------------
  // 9. The ingredients are divided in to two parts, one for the bottom and one for the paste. In the list of the ingredients to the bottom, there is a text instead of two list items. Remove the text and add those two list items.
  const ingredientsBottomEl = document.querySelector<HTMLParagraphElement>(
    ".ingredients-list-bottom p"
  );
  const ingredientsListBottomEl = document.querySelector<HTMLUListElement>(
    ".ingredients-list-bottom"
  );
  const bottomIngredients = ["15st digestivekex", "Lite smör"];
  if (ingredientsBottomEl) {
    ingredientsBottomEl.remove();
    bottomIngredients.forEach((ingredient) => {
      const li = document.createElement("li");
      li.innerHTML = ingredient;
      if (ingredientsListBottomEl) {
        ingredientsListBottomEl.appendChild(li);
      }
    });
  }
  // ------------------------------------------------------------------------------------
  // 10. The third ingredient in the list of ingredients to the paste is wrong. Change that specific ingredient to the correct one.
  const ingredientsPasteLiEl = document.querySelectorAll<HTMLLIElement>(
    ".ingredients-list-paste li"
  );
  if (ingredientsPasteLiEl) {
    ingredientsPasteLiEl[2].innerHTML = "3tsk vaniljsocker";
  }
  // ------------------------------------------------------------------------------------
  // 11. There is also a missing ingredient in the list of ingredients to the paste. Look and see what it is and add that one the the end of the list.
  // ------------------------------------------------------------------------------------
  // 12. The text "Instructions" to the left, beneath the image, has some shadow styling applied to it. Remove that styling.
  // ------------------------------------------------------------------------------------
  // 13. Two list elements of the list of instructions are incorrect. Find them and change them to the correct ones.
  // ------------------------------------------------------------------------------------
}
