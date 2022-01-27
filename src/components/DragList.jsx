import * as React from 'react';
import '../stylesheets/DragList.css';
import { Droppable, Draggable } from 'react-beautiful-dnd';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import drag from '../img/drag.png';

const DragList = () => {
  const items = useSelector(state => state.tags.tagList);
  let count = 0;
  const tags = [];

  for (const id in items) {
    const label = items[id];
    tags.push(
      <Draggable key={count} draggableId={label} index={count++}>
        {(provided) => (
          <div className='dragItems' id={id} ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
            <p>{label}</p>
          </div>
        )}
      </Draggable>
    );
  }

  return (
    <Droppable droppableId='htmlTags'>
      {(provided) => (
        <div id='draggable-elements-container' {...provided.droppableProps} ref={provided.innerRef}>
          {tags}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
};

export default DragList;
