import './Button.css'

interface ButtonProps {
    callApi: () => void;
}
const Button: React.FC<ButtonProps> = (props: ButtonProps) => {
    return(
        <button onClick={props.callApi}>
            Click to generate a joke
        </button>
    )
}

export default Button;