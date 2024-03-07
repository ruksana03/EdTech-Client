/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { useSelector } from "react-redux";
import TaskColumn from "./TaskColumn";
import CreateTaskModal from "../Modal/CreateTaskModal";
import { LuListTodo } from "react-icons/lu";
import { GrCompliance } from "react-icons/gr";
import { ImSpinner6 } from "react-icons/im";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { FaPlus } from "react-icons/fa";


const ManageTask = () => {
    const [todo, setTodo] = useState([]);
    const [progress, setProgress] = useState([]);
    const [completed, setCompleted] = useState([]);
    const user = useSelector(state => state.data.user.user);
    const axiosPublic = useAxiosPublic();
    const { data, refetch } = useQuery({
        queryKey: ['all-task', user],
        queryFn: async () => {
            const res = await axiosPublic('/addtask');
            return res.data;
        },
    });

    useEffect(() => {
        if (data) {
            const filteredTodo = data.filter(item => item.status === 'todo');
            const currentUserTodo = filteredTodo.filter(item => item?.email === user?.email);

            const filteredProgress = data.filter(item => item.status === 'progress');
            const currentUserProgress = filteredProgress.filter(item => item?.email === user?.email);

            const filteredCompleted = data.filter(item => item.status === 'completed');
            const currentUserCompleted = filteredCompleted.filter(item => item?.email === user?.email);

            setTodo([...currentUserTodo]);
            setProgress([...currentUserProgress]);
            setCompleted([...currentUserCompleted]);
        }

    }, [data]);



    let [isOpen, setIsOpen] = useState(false);
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

        axiosPublic
            .patch(`/status?id=${draggableId}`, {
                status: destination.droppableId,
            })
            .then(() => {
                refetch();
            });
    };

    return (
        <div>
            <button className=" btn-style flex gap-2 justify-start items-center " onClick={() => setIsOpen(true)}><FaPlus />Create Task</button>

            <div className="flex flex-col min-h-screen w-full mx-auto text-white pb-5">
                <DragDropContext onDragEnd={onDragEnd}>
                    <div className="flex flex-wrap mx-auto justify-center gap-10 px-8 mt-4">
                        <Droppable droppableId="todo">
                            {provided => (
                                <TaskColumn
                                    provided={provided}
                                    title={'Todo'}
                                    task={todo}
                                    refetch={refetch}
                                    icon={<LuListTodo />}
                                />
                            )}
                        </Droppable>
                        <Droppable droppableId="progress">
                            {provided => (
                                <TaskColumn
                                    provided={provided}
                                    title={'In-Progress'}
                                    task={progress}
                                    refetch={refetch}
                                    icon={<ImSpinner6 />}
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
                                    icon={<GrCompliance />}
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