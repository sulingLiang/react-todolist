import React from 'react';
import { Link } from 'react-router-dom';
import { Button, List } from 'antd';
import { connectHoc } from '../../lib/connect'
import './result.css';

const Result = (props) => {
  const data = props.planList.filter(item => item.isChecked === true)
  return (
    <div className="wrapper">
      <h3 className="wrapperTitle">完成的计划数：{props.resultList.length}</h3>
      <List className="wrapperList"
        bordered
        dataSource={data}
        renderItem={item => (<List.Item key={item.id}>{item.text}</List.Item>)}
      />
      <Button><Link to="/">Todo</Link></Button>
    </div>
  )
}
const mapStateToProps = (state) => {
  return {
    resultList: state.resultList,
    planList: state.planList
  }
}

const mapDispatchToProps = (dispatch) => {
  return {

  }
}

export default connectHoc(mapStateToProps, mapDispatchToProps)(Result)
