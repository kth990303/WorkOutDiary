import React, {useState} from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
/* npm install react-datepicker --save
   터미널에서 위 명령어 실행해야 사용 가능합니다.
*/

function AddTodayExercise() {
    const [currentDate, setCurrentDate] = useState(new Date());

    const [inputs, setInputs] = useState({
        date: currentDate,
        exercise:'',
        sets:'',
        reps:''
    });

    const handleOnChange = (e) => {
        setInputs({
        ...inputs, 
        [e.target.name]: e.target.value
        });
    }

    const [workouts, setWorkouts] = useState([]);

    const handleSave = () => {
        const { date, exercise, sets, reps } = inputs;
        const workout = {
            date,
            exercise,
            sets,
            reps
        }
        setWorkouts([
            ...workouts,
            workout
        ])
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
            <h2>날짜를 선택하세요</h2>
            <DatePicker className="inputDatePicker" dateFormat="yyyy-MM-dd" selected={currentDate} onChange={handleOnChange, date => setCurrentDate(date)} />
            <input name="exercise" type="text" onChange={handleOnChange} placeholder="이 날 한 운동 입력"/>
            <input name="sets" type="text" onChange={handleOnChange} placeholder="세트 수 입력"/> 
            <input name="reps" type="text" onChange={handleOnChange} placeholder="세트 당 횟수 입력"/>
            <button name="submit" onClick={handleSave}>저장</button>
        </div>
    );
};

export default AddTodayExercise;