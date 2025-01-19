import Button from "../Button/Button";
import "./styles.css";
//именнованый импорт, требует соблюдения имени с которым происходил экспорт
//имя экспортируемых данныъх берется в фигурные скобки
import { lessonData } from "./data";


function LessonCard() {
  //до return прописываем логику
  console.log(lessonData);
  return (
    <div className="lesson-card-wrapper">
      <img src={lessonData.lesson_img} />
      <h3>Lesson {lessonData.lesson_number}</h3>
      <div>Topic: {lessonData.topic}</div>
      <div>Teacher: {lessonData.teacher_name}</div>
      <Button />
    </div>
  );
}

export default LessonCard;