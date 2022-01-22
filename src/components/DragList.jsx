import * as React from 'react';
import '../stylesheets/DragList.css';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

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
        <div id='button-container' {...provided.droppableProps} ref={provided.innerRef}>
          {tags}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
};

export default DragList;
