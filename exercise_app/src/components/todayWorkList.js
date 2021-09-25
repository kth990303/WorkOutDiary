import React, {useState, useEffect} from 'react';
import {Link, Route, Switch, BrowserRouter} from 'react-router-dom'
import AddTodayExercise from './addTodayExercise';
import './todayWorkList.css'


function Work({work}){
    return(
        <div>
            {<li>{work.exercise.workName}: {work.exercise.sets}sets {work.exercise.reps}reps</li>}
        </div>
    )
}

function TodayWorkList(props){    
    const works=[
        {
            id:1,
            date:new Date('2021-09-24').toLocaleDateString(),
            exercise:{
                workName: "push up",
                sets: 3,
                reps: 5
            }
        },
        {
            id:2,
            date:new Date('2021-09-24').toLocaleDateString(),
            exercise:{
                workName: "pull up",
                sets: 3,
                reps: 10
            }
        }
    ];
    return(
        <div className="WorkListCalendar">
        <BrowserRouter>
            <div>
            <h1>2021. 9. 25.</h1>
            <h2>운동일지 다이어리</h2>
            </div>
            <div className="AddWork">
                <Link to="/add" className="add">추가</Link>
                <Switch>
                    <Route path="/add" component={AddTodayExercise} />
                </Switch>
            </div>
        </BrowserRouter>
        <hr></hr>
            <div className="Calendar">
                {
                    works.map(work=>(
                        <Work work={work}></Work>
                    ))
                }
            </div>
        </div>
    )
}

export default TodayWorkList;