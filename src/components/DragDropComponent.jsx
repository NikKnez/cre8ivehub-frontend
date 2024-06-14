import React from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const items = ['Item 1', 'Item 2', 'Item 3'];

const DragDropComponent = () => {
    const onDragEnd = (result) => {
        // Logic to update items order
    };

    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <Droppable droppableId="droppable">
                {(provided) => (
                    <div {...provided.droppableProps} ref={provided.innerRef}>
                        {items.map((item, index) => (
                            <Draggable key={item} draggableId={item} index={index}>
                                {(provided) => (
                                    <div
                                        ref={provided.innerRef}
                                        {...provided.draggableProps}
                                        {...provided.dragHandleProps}
                                    >
                                        {item}
                                    </div>
                                )}
                            </Draggable>
                        ))}
                        {provided.placeholder}
                    </div>
                )}
            </Droppable>
        </DragDropContext>
    );
};

export default DragDropComponent;
