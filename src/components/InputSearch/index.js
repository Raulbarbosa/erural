import "./styles.css";

export default function InputSearch({ name, value, placeholder, handler }) {
    return (
        <input
            required="required"
            name={name}
            value={value}
            placeholder={placeholder}
            onChange={handler}
        />
    );
}
