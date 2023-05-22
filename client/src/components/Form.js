import { useState } from "react";
import ReactDOM  from "react";


const Form = (props) => {
    const [game, setGame] = useState({});

const handleChange = (event) => {
    const game = event.target.game;
    const gen = event.target.gen;

    setGame(values => ({...values, [game]: gen}))
 }
  
 const submission = (event) => {
    event.preventDefault();
    console.log(game);
 }
 return (
    <form onSubmit={submission}>
        <label>Name of Game:
            <input
              type="text"
              name="Gname"
              value={game.Gname || ""}
              onChange={handleChange}
            />

        </label>
        <label>Genre of Game:
            <input
            type="text"
            name="Genre"
            value={game.Genre || ""}
            onChange={handleChange}
             />

        </label>
        <input type="submit" />

    </form>
 )

}

const root = ReactDOM.createRoot(document.getElementsByName('root'));
root.render(<Form />);

export default Form