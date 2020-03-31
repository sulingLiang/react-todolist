import React, { useContext } from 'react';
import { myContext } from '../../store/reducer';
import { Link } from 'react-router-dom';
import { Button, Checkbox } from 'antd';
import TodoItem from './components/TodoItem';
import './todo.css';

const Todo = ()=> {
  const {state, dispatch} = useContext(myContext);

  return (
    <div className="wrapper">
      <h3 className="wrapperTitle">计划列表</h3>
      <ul>{
        state.planList.map((item, index) => {
          return  <li key={item.id} className="contentItem">
                    <TodoItem item={item} ></TodoItem>
                    <Checkbox 
                      disabled={false} 
                      checked={item.isChecked} 
                      onChange={() => dispatch({type: 'checkbox-change',itemId: item.id, index})} 
                      className="contentCheckbox"
                    />
                  </li>
        })
      }</ul>
      <div className="finish">{state.resultList.length}个计划已完成</div>
      <div className="unfinish">{state.planList.length-state.resultList.length}个计划未完成</div>
      <div className="complete">完成度：{state.resultList.length}/{state.planList.length}</div>
      <Button className="contentBtn" type="primary">
        <Link to="/result" >Result</Link>
      </Button>
    </div>
  )
}
export default Todo;