import React from 'react'


const Header = () => {
    
    return (
        <table>
            <tr>
                <th width={'30%'} style={{fontWeight:500,marginLeft:'90px'}}>Game</th>
                <th>Genre</th>
                <th>Delete</th>    
            </tr>
        </table>
    )
}

const Body = (props) => {
    const rows = props.linkData.map((row, index) => {
        return (
            <tr key={index}>
                <td>{row.gName}</td>
                <td>
                    <a href={row.Genre}>{row.Genre}</a>
                </td>
                <td>
                    <button onClick={() => props.removeGame(index)}>Delete</button>
                </td>

            </tr>

        )
    })
    return <tbody>{rows}</tbody>
}

const menu = (props) => {
    return <table>
        <Header />
        <Body linkData={props.linkData} removeGame={props.removeGame}/>
    </table>
}


export default menu