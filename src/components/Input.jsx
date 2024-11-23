const Input = ({value="", onChange, type="text", placeholder=""}) => {
    return <input value={value} onChange={onChange} type={type} placeholder={placeholder} aria-label={placeholder}/>
}

export default Input;