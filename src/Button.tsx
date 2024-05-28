import './Button.css'

interface ButtonProps {
    callApi: () => void;
}
const Button: React.FC<ButtonProps> = (props: ButtonProps) => {
    return(
        <button onClick={props.callApi}>
            Want to laugh?
        </button>
    )
}

export default Button;