import {useState} from 'react'
import Menu from './Menu';
import Form from './Form';



const Display = (props) => {
    const [recGames, setRecGames] = useState([]);

    const removeGame = (index) => {
        setRecGames(
            recGames.filter((value, i) => i !== index)
        )
    }

return (
    <div className="container" style={{display:'block'}}>
        <h1 style={{marginCenter: '240px', color: "purple"}}>Recommended Games</h1>
        
    </div>
)
}

export default Display