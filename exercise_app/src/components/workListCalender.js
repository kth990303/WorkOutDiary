import React, {useState, useEffect} from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import moment from 'moment';
import TodayWorkList from './todayWorkList';
import './workListCalendar.css'

const WorkListCalendar=(props)=>{
  const [getMoment, setMoment]=useState(moment());
  const today=getMoment;
  const todayApi=today.format('YYYYMMDD');

  const firstWeek = today.clone().startOf('month').week();
  const lastWeek = today.clone().endOf('month').week() === 1 ? 53 : today.clone().endOf('month').week();

  const goThisDayWorkList=(days)=>()=>{
    const selectApi=days.format('YYYYMMDD');
    if(selectApi<=todayApi){
      console.log(selectApi);
      return(
        <TodayWorkList key={selectApi} year={days.format('YYYY')} 
              month={days.format('MM')} date={days.format('DD')} />
      )
    }
    else 
      alert('미래의 날짜는 선택할 수 없습니다.');
  }

  const calendarArr=()=>{
    let result=[];
    let week=firstWeek;
    for(let i=week;i<=lastWeek;i++){
      result=result.concat(
        <tr key={i}>
          {
            Array(7).fill(0).map((data, idx)=>{
              let days=
              today.clone().startOf('year').week(i).startOf('week').add(idx, 'day');
              if(moment().format('YYYYMMDD')===days.format('YYYYMMDD')){
                return(
                    <td key={idx} style={{background:'red', fontSize:'larger', textDecoration:'underline'}}
                    onClick={goThisDayWorkList(days)}
                    >
                        <span>{days.format('D')}</span>
                    </td>
                )
              }
              if(days.format('MM')===today.format('MM')){
                return(
                    <td key={idx} style={{textDecoration:'underline'}} onClick={goThisDayWorkList(days)}>
                        <span>{days.format('D')}</span>
                    </td>
                )
              }
              else{
                return(
                    <td key={idx}>
                        <span>{days.format(' ')}</span>
                    </td>
                )
              }
            })
          }
        </tr>
      );
    }
    return result;
  }

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
                    render={() => <TodayWorkList key={todayApi} year={today.format('YYYY')} 
                    month={today.format('MM')} date={today.format('DD')} />}
                />
            </Switch>
        </div>
      </BrowserRouter>
      <table>
        <caption>
          <button style={{padding:'0.3rem'}} onClick={()=>{ setMoment(getMoment.clone().subtract(1, 'month')) }}>&lt;</button>
          {today.format('YYYY년 MM월')}
          <button style={{padding:'0.3rem'}} onClick={()=>{ setMoment(getMoment.clone().add(1, 'month')) }}>&gt;</button>
        </caption>
        <tbody>
          <th style={{color: 'red'}}>SUN</th>
          <th>MON</th>
          <th>TUE</th>
          <th>WED</th>
          <th>THU</th>
          <th>FRI</th>
          <th style={{color:'blue'}}>SAT</th>
          {calendarArr()}
        </tbody>
      </table>
    </div>
  )
}

export default WorkListCalendar;