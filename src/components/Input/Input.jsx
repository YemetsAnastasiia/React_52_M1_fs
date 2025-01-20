import './styles.css';

function Input(props) {
    return (
        <div className="input-wrapper">
            <label className='input-label'>{props.label}</label>
            <input className='input-field'
             type={props.type}
                name={props.name}
                placeholder={props.placeholder}
            />
        </div>
    );
}

export default Input;