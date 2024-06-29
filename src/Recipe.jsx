import { useSearchParams } from "react-router-dom";

const Recipe = () => {
  const [searchQuery, setSearchQuery] = useSearchParams({
    ingredient: "",
    cuisine: "",
    diet: "",
  });

  const recipes = [
    {
      name: "Pasta Carbonara",
      ingredient: "pasta",
      cuisine: "Italian",
      diet: "none",
    },
    {
      name: "Chicken Tacos",
      ingredient: "chicken",
      cuisine: "Mexican",
      diet: "none",
    },
    {
      name: "Vegan Salad",
      ingredient: "vegetables",
      cuisine: "Global",
      diet: "vegan",
    },
  ];

  const ingredient = searchQuery.get("ingredient");
  const cuisine = searchQuery.get("cuisine");
  const diet = searchQuery.get("diet");

  const filteredData = recipes.filter(
    (recipe) =>
      (ingredient
        ? recipe.ingredient.toLowerCase().includes(ingredient.toLowerCase())
        : true) &&
      (cuisine
        ? recipe.cuisine.toLowerCase().includes(cuisine.toLowerCase())
        : true) &&
      (diet ? recipe.diet.toLowerCase().includes(diet.toLowerCase()) : true),
  );

  return (
    <div>
      <h1>Recipe Finder</h1>
      <ul>
        {filteredData.map((recipe, index) => (
          <li key={index}>
            {recipe.name} - Ingredient: {recipe.ingredient} - Cuisines:{" "}
            {recipe.cuisine} - Diet: {recipe.diet}
          </li>
        ))}
      </ul>
      <label>Ingredient: </label>
      <br />
      <input
        type="text"
        value={ingredient}
        onChange={(e) =>
          setSearchQuery((prev) => {
            prev.set("ingredient", e.target.value);
            return prev;
          })
        }
      />
      <br />
      <br />
      <label>Cuisine: </label>
      <br />
      <input
        type="text"
        value={cuisine}
        onChange={(e) =>
          setSearchQuery((prev) => {
            prev.set("cuisine", e.target.value);
            return prev;
          })
        }
      />
      <br />
      <br />
      <label>Diet: </label>
      <br />
      <input
        type="text"
        value={diet}
        onChange={(e) =>
          setSearchQuery((prev) => {
            prev.set("diet", e.target.value);
            return prev;
          })
        }
      />
      <br />
      <br />
    </div>
  );
};

export default Recipe;
