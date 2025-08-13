export function part1() {
  // 1. What is the name of the recipe?
  const recipeName = document.querySelector<HTMLHeadingElement>("#recipe-name");
  if (recipeName) {
    console.log(`1. Answer: ${recipeName.innerHTML}`);
  }
  // 1. Answer: Frozen Cheescake
  // ------------------------------------------------------------------------------------
  //2. What HTML tag is used to display the Recipe name?
  if (recipeName) {
    console.log(`2. Answer: ${recipeName.tagName}`);
  }
  // 2. Answer: H1
  // ------------------------------------------------------------------------------------
  // 3. What is the font size of the paragraph tag with the class "description".
  const descriptionEl =
    document.querySelector<HTMLParagraphElement>(".description");
  if (descriptionEl) {
    const fontSize = window.getComputedStyle(descriptionEl).fontSize;
    console.log(`3. Answer: ${fontSize}`);
  }
  // 3. Answer: 16px
  // ------------------------------------------------------------------------------------
  // 4. What is the value of the alt atrribute on the image?
  const imgEl = document.querySelector<HTMLImageElement>(
    'img[src="/src/assets/frozen-cheesecake-slice.jpg"]'
  );
  if (imgEl) {
    console.log(`3. Answer: ${imgEl.alt}`);
  }
  // Answer: Slice of Frozen Cheescake
  // ------------------------------------------------------------------------------------
  // 5. What is the dimensions and the url of the image? Create an object that looks like this, and log it to the console:
  if (imgEl) {
    const imgInfo = {
      url: imgEl.src,
      height: imgEl.naturalHeight,
      width: imgEl.naturalWidth,
    };
    console.log(`3. Answer: ${imgInfo}`);
  }

  // ------------------------------------------------------------------------------------
  // 6. How many ingredients has the paste?

  // ------------------------------------------------------------------------------------
  // 7. Which is the forth element in the list containing the ingredients for the paste?

  // ------------------------------------------------------------------------------------
  // 8. Create an an array of objects from the instructions. Each element in the array should be an object that looks like this:

  // ------------------------------------------------------------------------------------
}
