import React, {useState} from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
/* npm install react-datepicker --save
   터미널에서 위 명령어 실행해야 사용 가능합니다.
*/

const AddTodayExercise=()=>{
    const [currentDate, setCurrentDate] = useState(new Date());
    const [inputs, setInputs] = useState({
        date: currentDate,
        exercise:'',
        sets:'',
        reps:''
    });
    const [workouts, setWorkouts] = useState([]);

    const handleOnChange = (e) => {
        setInputs({
        ...inputs, 
        [e.target.name]: e.target.value
        });
    }
    const handleSave = (e) => {
        e.preventDefault();
        const { date, exercise, sets, reps } = inputs;
        const workout = {
            date,
            exercise,
            sets,
            reps
        }
        setWorkouts((prevWorkouts)=>
        [...prevWorkouts, workout]
        )
        setInputs({
            date: currentDate,
            exercise:'',
            sets:'',
            reps:''
        })
        console.log(workouts);
    }

    return (
        <div className="submitBox">
            <div>
                <ul>
                    {workouts.map((v, idx)=>{
                        return(
                            `${v.date}날에 ${v.exercise}운동을 진행했어요!`
                        )
                    })}
                </ul>
            </div>
            <form>
                <fieldset>
                    <legend><h3>운동을 열심히 하셨군요?</h3></legend>
                    운동 진행날짜
                    <DatePicker className="inputDatePicker" dateFormat="yyyy-MM-dd" selected={currentDate} onChange={handleOnChange, date => setCurrentDate(date)} />
                    <input name="exercise" type="text" onChange={handleOnChange} placeholder="이 날 한 운동 입력"/>
                    <input name="sets" type="text" onChange={handleOnChange} placeholder="세트 수 입력"/> 
                    <input name="reps" type="text" onChange={handleOnChange} placeholder="세트 당 횟수 입력"/>
                    <button name="submit" onClick={handleSave}>저장</button>
                </fieldset>
            </form>
        </div>
    );
};

export default AddTodayExercise;