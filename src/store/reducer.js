import React, { useReducer } from "react";

//默认数据
const defaultState = {
  planList: [{
    id: 1, text: "起床", isChecked: true
  }, {
    id: 2, text: "洗漱", isChecked: false
  }, {
    id: 3, text: "吃早餐", isChecked: false
  }, {
    id: 4, text: "上班", isChecked: false
  }, {
    id: 5, text: "看书", isChecked: false
  }, {
    id: 6, text: "工作", isChecked: false
  }, {
    id: 7, text: "吃午餐", isChecked: false
  }],
  resultList: [1]
}

const myContext = React.createContext({});

//计划列表中checkbox点击处理
const checkboxChangeHangle = (state, itemId, index) => {
  state.planList[index].isChecked = !state.planList[index].isChecked;
  const resultList = [...state.resultList];
  if (!resultList.includes(itemId)) {
    resultList.push(itemId)
  } else {
    const index = resultList.indexOf(itemId)
    resultList.splice(index, 1)
  }
  return { ...state, resultList };
}

function reducer(state, action) {
  switch (action.type) {
    case "checkbox-change":
      return checkboxChangeHangle(state, action.itemId, action.index)
    default:
      return state;
  }
}

const ContextProvider = props => {
  const [state, dispatch] = useReducer(reducer, defaultState);

  return (
    <myContext.Provider value={{ state, dispatch }}>
      {props.children}
    </myContext.Provider>
  );
};

export { reducer, myContext, ContextProvider };