function Button(props) {
    const handleClick = () => {
       // alert("it has been clicked")
       props.onButtonClick(props.text)
    }

    return <button onClick={handleClick}>{props.text}</button>
    
    
    
}

export default Button