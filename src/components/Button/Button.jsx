import './styles.css';


// объект props передается как параметр в круглые скобки, при создании компонента
//деструктуризация 2 вариант  function Button({name})
function Button({name = "SEND", type = "button"} ) {
 /*  const buttonType = "submit"; */

/*   // деструктуризация 1 вариант ИСП РЕДКО
  const {name} = props; */

  return (
    <button className="main-button" type={type}>
     {name}
    </button>
  );
}

// экспорт по умолчанию  (он может быть только один в файле)
export default Button;








/* 
// не гибкий вариант
// импорт стилей
import "./styles.css";

function Button() {
  const isGetButton = true;
  const buttonType = "submit";

  return (
    <button className="main-button" type={buttonType}>
      {isGetButton ? "GET" : "SENT"}
    </button>
  );
}

// экспорт по умолчанию  (он может быть только один в файле)
export default Button;
 */