/* eslint-disable react/prop-types */
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { useSelector } from "react-redux";
import TaskColumn from "./TaskColumn";
import CreateTaskModal from "../Modal/CreateTaskModal";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { FaPlus } from "react-icons/fa";


const ManageTask = () => {
    const [todo, setTodo] = useState([]);
    const [progress, setProgress] = useState([]);
    const [completed, setCompleted] = useState([]);
    let [isOpen, setIsOpen] = useState(false);
    console.log(isOpen);

    const user = useSelector(state => state.data.user.user);
    const axiosSecure = useAxiosSecure();
    // const queryClient = new QueryClient(); 
    const { data, refetch } = useQuery({
        queryKey: ['all-task', user],
        queryFn: async () => {
            // const res = await axiosSecure(/addtask?email=${user?.email});
            const res = await axiosSecure('/addtask');
            return res.data;
        },
    });
    useEffect(() => {
        console.log('User:', user);
        if (data) {
            console.log('Fetched Data:', data);
            const filteredTodo = data.filter(item => item.status === 'todo');
            const filteredProgress = data.filter(item => item.status === 'progress');
            const filteredCompleted = data.filter(
                item => item.status === 'completed'
            );
            setTodo([...filteredTodo]);
            setProgress([...filteredProgress]);
            setCompleted([...filteredCompleted]);
        }
    }, [data]);

    function closeModal() {
        setIsOpen(false);
    }
    function openModal() {
        setIsOpen(true);
    }

    const onDragEnd = result => {
        const { destination, source, draggableId } = result;

        if (
            !destination ||
            (destination.droppableId === source.droppableId &&
                destination.index === source.index)
        ) {
            return;
        }

        const updatedTasks = Array.from(data);
        const [movedTask] = updatedTasks.splice(source.index, 1);
        updatedTasks.splice(destination.index, 0, movedTask);

        axiosSecure
            .patch(`/status?id=${draggableId}`, {
                status: destination.droppableId,
            })
            .then(() => {
                refetch();
            });
    };

    return (
        <div>
            <button className="btn btn-secondary " onClick={() => setIsOpen(true)}><FaPlus />CreateTask</button>
            <div className="flex flex-col min-h-screen w-full mx-auto text-white pb-5">
                <DragDropContext onDragEnd={onDragEnd}>
                    <div className="flex flex-wrap mx-auto justify-center gap-10 px-8 mt-20">
                        
                        <Droppable droppableId="todo">
                            {provided => (
                                <TaskColumn
                                    provided={provided}
                                    title={'Todo'}
                                    task={todo}
                                    refetch={refetch}
                                />
                            )}
                            
                        </Droppable>
                       
                        <Droppable droppableId="progress">
                            {provided => (
                                <TaskColumn
                                    provided={provided}
                                    title={'IN-PROGRESS'}
                                    task={progress}
                                    refetch={refetch}
                                />
                            )}
                        </Droppable>
                        <Droppable droppableId="completed">
                            {provided => (
                                <TaskColumn
                                    provided={provided}
                                    title={'Completed'}
                                    task={completed}
                                    refetch={refetch}
                                />
                            )}
                        </Droppable>
                    </div>
                   
                </DragDropContext>

                <CreateTaskModal
                    isOpen={isOpen}
                    closeModal={closeModal}
                    refetch={refetch}
                />
                
            </div>

        </div>
    );
};

export default ManageTask;