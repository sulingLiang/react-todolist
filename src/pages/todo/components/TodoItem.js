import React, { useState } from 'react';

const TodoItem = (props) => {
  const [item] = useState(props.item);
  return (
    <div>
        {item.text}
    </div>
  )
}

export default TodoItem;