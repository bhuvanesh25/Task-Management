import React, { useState, useEffect } from 'react';
import api from '../Api';
import ModalPopUp from './modalpopup'

const TaskList = (type, task) => {
    const [currentTask, setCurrentTask] = useState({});
    const [tasks, setTasks] = useState([]);
    const [show, setShow] = useState(false);

    useEffect(() => {
        getAllTasks();
    }, []);

    const handleClose = () => setShow(false);

    const addTask = () => {
        setCurrentTask({});
        setShow(true);
    }

    const editTask = (task) => {
        setCurrentTask(task);
        setShow(true);
    }

    const getAllTasks = async () => {
        setShow(false);
        const response = await api.get('/task');
        setTasks(response.data);
    }


    const deleteTask = async (id) => {
        const result = window.confirm("Are you sure, you want to delete this task?")
        if (result) {
            const response = await api.delete('/task/' + id);
            getAllTasks();
        }
    }

    return (
        <>
            <div className="container mx-auto max-w-[1366px] p-4">
                <div className="grid grid-cols-2 gap-4 items-center">

                    <div>
                        <p className="text-left text-2xl font-bold mb-4"><h1 className="">Task Management</h1></p>
                    </div>


                    <div class="text-right">
                        <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600" onClick={() => editTask(task)}>
                            Add
                        </button>
                    </div>
                </div>

                <div className="overflow-x-auto">
                    <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                        <thead>
                            <tr>
                                <th className="py-2 px-4 border-b border-gray-200 bg-gray-100">#</th>
                                <th className="py-2 px-4 border-b border-gray-200 bg-gray-100 text-left">Title</th>
                                <th className="py-2 px-4 border-b border-gray-200 bg-gray-100 text-left">Description</th>
                                <th className="py-2 px-4 border-b border-gray-200 bg-gray-100 text-left">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {tasks.map((task, index) => (
                                <tr key={task.id} classNames="bg-white dark:bg-gray-800">
                                    <td className="py-2 px-4 border-b border-gray-200 text-center">
                                        {++index}
                                    </td>
                                    <td className="py-2 px-4 border-b border-gray-200">
                                        {task.title}
                                    </td>
                                    <td className="py-2 px-4 border-b border-gray-200">
                                        {task.description}
                                    </td>
                                    <td className="py-2 px-4 border-b border-gray-200">
                                        <button style={{ border: "none" }} onClick={() => editTask(task)}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil" viewBox="0 0 16 16">
                                                <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325" />
                                            </svg>
                                        </button>
                                        {' '}
                                        <button style={{ border: "none" }} onClick={() => deleteTask(task.id)}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
                                                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z" />
                                                <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z" />
                                            </svg>
                                        </button>
                                    </td>
                                </tr>

                            ))}
                        </tbody>
                    </table>
                </div>
            </div>


            {show && <ModalPopUp open={true} close={handleClose} task={currentTask} refreshList={getAllTasks}/>
                 
            }

        </>

    );
};

export default TaskList;