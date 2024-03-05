/* eslint-disable react/prop-types */
import { Draggable } from "react-beautiful-dnd";
import TaskCard from "./TaskCard";
import "../../../Styles/scrollbar.css";

const TaskColumn = ({ task, title, refetch, provided, icon }) => {
    return (
        <div
            {...provided.droppableProps}
            ref={provided.innerRef}
            className="w-[300px] lg:h-[629px] flex flex-col overflow-hidden" // Set overflow to hidden
        >
            <div className="text-start px-3 bg-second">
                <p className="text-base font-semibold flex gap-2 items-center">{icon}{title}</p>
            </div>
            <div className="px-2 flex flex-1 flex-col text-black overflow-y-auto custom-scrollbar"> {/* Add custom-scrollbar class here */}
                {task &&
                    task.map((item, index) => (
                        <Draggable key={item._id} draggableId={item._id} index={index}>
                            {(provided) => (
                                <TaskCard
                                    provided={provided}
                                    refetch={refetch}
                                    key={item._id}
                                    item={item}
                                />
                            )}
                        </Draggable>
                    ))}
            </div>
            {provided.placeholder}
        </div>
    );
};

export default TaskColumn;
