import { useState } from "react";
import "./App.css";
import { Recipe } from "./Consultas";
import { BsGithub, BsTwitter,TbLoader } from "./Icons";
import DarkMode from "./DarkMode/DarkMode";

function App() {
  const [data, setData] = useState({
    instructions: "",
    ingredients: "",
  });
  const [recipe, setRecipe] = useState("");
  const apiKey = import.meta.env.VITE_APP_OPENAI_API_KEY;
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };
  const consulta = (e) => {
    e.preventDefault();
    setLoading(true);
    Recipe(data, apiKey).then((res) => {
      setRecipe(res);
      setLoading(false);
    });
  };

  return (
    <>
      <div className="App">
        <div className="DivContentInformation">
          <DarkMode />
          <div className="DivContentInstru">
            <label className="Textos">Instructions :</label>
            <textarea
              type="text"
              placeholder="I don't want to use the oven"
              className="InputInstru"
              name="instructions"
              onChange={(e) => {
                handleInputChange(e);
              }}
            />
          </div>
          <div className="DivContentIngre">
            <label className="Textos">Ingredients :</label>
            <textarea
              type="text"
              placeholder="Cucumber, Tomato, Salt and Lettuce"
              className="InputIngre"
              name="ingredients"
              onChange={(e) => {
                handleInputChange(e);
              }}
            />
          </div>
          <button
            {...(loading
              ? { disabled: true, className: "ButtonLoad" }
              : { className: "ButtonGenerate" })}
            onClick={(e) => {
              consulta(e);
            }}
          >
            {loading ? <TbLoader className="Load" /> : "Generate"}
          </button>
          <div className="DivContentCon">
            {/* <div className="DivContentDescri"> */}
            {/* <label className="LabelTitle">Recipe AI</label>
              <label className="LabelDescrip">
                It is an open source random recipe generator that uses AI
              </label> */}
            {/* </div> */}
            <div className="DivContentBut">
              <button
                className="BTNGit"
                onClick={() => {
                  window.open(
                    "https://github.com/josue674/RandomRecipe.git",
                    "_blank"
                  );
                }}
              >
                <BsGithub className="Github" />
              </button>
              <button
                className="BTNTwi"
                onClick={() => {
                  window.open("https://twitter.com/Feedbacks_dev", "_blank");
                }}
              >
                <BsTwitter className="Twitter" />
              </button>
            </div>
          </div>
        </div>
        <div className="DivContentRecipe">
          <label className="Textos">Recipe</label>
          <textarea className="TextRecipe" readOnly value={recipe} />
        </div>
      </div>
    </>
  );
}

export default App;
