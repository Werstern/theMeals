class Meal {
  constructor(
    id, 
    categoryId, 
    title, 
    affordability, 
    complexity, 
    imageUrl, 
    duration, 
    ingredients, 
    steps, 
    isGletenFree, 
    isVegan, 
    isVegeterian, 
    isLactoseFree
    ) {
      this.id = id;
      this.categoryId = categoryId;
      this.title = title;
      this.affordability = affordability;
      this.complexity = complexity;
      this.imageUrl = imageUrl;
      this.duration = duration;
      this.ingredients = ingredients;
      this.steps = steps;
      this.isGletenFree = isGletenFree;
      this.isVegan = isVegan;
      this.isVegeterian = isVegeterian;
      this.isLactoseFree = isLactoseFree;
    }
}

export default Meal;