import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import TodayWorkList from './todayWorkList';
import './workListCalendar.css'

function WorkListCalendar(props){
    let today=new Date();

    // 오늘의 연도,월,일을 구합니다.
    let fullYear=today.getFullYear().toString();
    let month=(today.getMonth()+1).toString();
    if(month.length===1)
        month='0'+month;
    let date=(today.getDate()).toString();
    if(date.length===1)
        date='0'+date;
    // 오늘 날짜의 API 주소 예시: /210930
    let todayApi=fullYear+month+date;
    return(
        <div className="calendar">
            <BrowserRouter>
                {/* history 사용법을 몰라 우선 browserrouter link로 대체합니다. */}
                <div>
                    <Link to={`/${todayApi}`}>
                        <button>오늘의 운동</button> 
                    </Link>
                    <Switch>
                        <Route 
                            path={`/${todayApi}`}
                            render={() => <TodayWorkList year={fullYear} month={month} date={date} />}
                        />
                    </Switch>
                </div>
            </BrowserRouter>
            <table>
                <caption>{fullYear}년 {month}월</caption>
                <th style={{color: 'red'}}>SUN</th>
                <th>MON</th>
                <th>TUE</th>
                <th>WED</th>
                <th>THU</th>
                <th>FRI</th>
                <th style={{color:'blue'}}>SAT</th>
                <tr>
                    <td style={{color: 'red'}}>1</td><td>2</td><td>3</td><td>4</td>
                    <td>5</td><td>6</td><td style={{color:'blue'}}>7</td>
                </tr>
                <tr>
                    <td style={{color: 'red'}}>8</td><td>9</td><td>10</td><td>11</td>
                    <td>12</td><td>13</td><td style={{color:'blue'}}>14</td>
                </tr>
                <tr>
                    <td style={{color: 'red'}}>15</td><td>16</td><td>17</td><td>18</td>
                    <td>19</td><td>20</td><td style={{color:'blue'}}>21</td>
                </tr>
                <tr>
                    <td style={{color: 'red'}}>22</td><td>23</td><td>24</td><td>25</td>
                    <td>26</td><td>27</td><td style={{color:'blue'}}>28</td>
                </tr>
                <tr>
                    <td style={{color: 'red'}}>29</td><td>30</td><td>31</td><td></td><td>
                        </td><td></td><td></td>
                </tr>
                <tr>
                    <td style={{color: 'red'}}></td><td></td><td></td><td></td><td></td>
                    <td></td><td style={{color:'blue'}}></td>
                </tr>
            </table>
        </div>
    )
}

export default WorkListCalendar;