import {useState} from "../react.js";
import Br from "./core/Br.js";
import Label from "./core/Label.js";
import RadioInput from "./core/RadioInput.js";

export default function InputDemo(isVisible) {
  const [username, setUsername] = useState("");
  const [monster, setMonster] = useState("");

  const handleInputChange = (event) => {
    console.log(event.target.value);
    setMonster(event.target.value);
  };

  return {
    ele: "form",
    style: `padding:10px; ${!isVisible && "display:None;"}`,
    childs: [
      {
        ele: "fieldset",
        childs: [
          {
            ele: "legend",
            textContent: "Choose your favorite monster",
            style: "background-color: #000;color:#fff;padding:3px 6px;",
            childs: [],
          },
          RadioInput(
            "kraken",
            "monster",
            "K",
            handleInputChange,
            "margin:0.4rem;"
          ),
          Label("kraken", "Kraken"),
          Br(),
          RadioInput(
            "sasquatch",
            "monster",
            "S",
            handleInputChange,
            "margin:0.4rem;"
          ),
          Label("sasquatch", "Sasquatch"),
        ],
      },
      {
        ele: "fieldset",
        childs: [
          {
            ele: "legend",
            textContent: "Result",
            style: "background-color: #000;color:#fff;padding:3px 6px;",
            childs: [],
          },
          {
            ele: "div",
            textContent: monster,
            childs: [],
          },
        ],
      },
      {
        ele: "fieldset",
        childs: [
          {
            ele: "legend",
            textContent: "What is your name?",
            style: "background-color: #000;color:#fff;padding:3px 6px;",
            childs: [],
          },
          {
            ele: "input",
            value: username,
            oninput: (e) => setUsername(e.target.value),
            childs: [],
          },
          {
            ele: "div",
            textContent: `Preview: ${username}`,
            childs: [],
          },
        ],
      },
    ],
  };
}
