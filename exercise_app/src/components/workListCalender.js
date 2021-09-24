import React, {useState, useEffect} from 'react';
import {Link, Route, Switch, BrowserRouter} from 'react-router-dom'
import AddTodayExercise from './addTodayExercise';
import './workListCalendar.css'


function WorkListCalender(){    
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
    </div>
    )
}

export default WorkListCalender;