import React, {useState, useEffect} from 'react';
import {Link, Route, Switch, BrowserRouter} from 'react-router-dom'
import AddTodayExercise from './addTodayExercise';
import './workListCalendar.css'

function Work({work}){
    return(
        <div>
            <h3>{work.date} 운동일지</h3>
            
            <li>{work.workName[0]}</li>
            <li>{work.workName[1]}</li>
            <li>{work.workName[2]}</li>
        </div>
    )
}

function WorkListCalender(props){    
    const works=[
        {
            id:1,
            date:new Date('2021-09-24').toLocaleDateString(),
            workName:["pushup", "pull-up", "wide push up"]
        },
        {
            id:2,
            date:new Date('2021-09-25').toLocaleDateString(),
            workName:["pull up", "bench press"]
        }
    ];
    return(
        <div className="WorkListCalendar">
        <BrowserRouter>
            <div>
            <h1>운동일지 다이어리</h1>
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

export default WorkListCalender;