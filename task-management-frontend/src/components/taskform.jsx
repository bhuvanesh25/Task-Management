import React, { useState } from 'react';
import api from '../Api';
import { errorMsg,successMsg,updateMsg } from '../Utils/notifications';
const TaskForm = (props) => {

    const [currentTask, setCurrentTask] = useState(props.task);
    const [message, setMessage] = useState('');

    const changeControlValue = (event) => {
        event.preventDefault();
        setCurrentTask(prevState => ({
            ...currentTask,
            [event.target.name]: event.target.type == 'checkbox' ? event.target.checked : event.target.value
        }));
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            let response;
            let actionMsg = successMsg;
            if (currentTask.id) {
                actionMsg = updateMsg;
                response = await api.put('/task/' + currentTask.id, currentTask);

            } else {
                response = await api.post('/task', currentTask);

            }

            if (!response) {
                setMessage(errorMsg);
            } else {
                props.refreshList(actionMsg);
            }

        } catch (error) {
            setMessage(errorMsg);
        }
    };



    return (
        <div>

            <form className="space-y-4" onSubmit={handleSubmit}>
                {
                    message && <div className={message.css} role="alert">
                        <span class="font-medium">{message.msg}</span>
                    </div>
                }

                <div>
                    <label className="block text-sm font-medium text-gray-700">Title</label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Enter the title"
                        value={currentTask?.title}
                        onChange={changeControlValue}
                        required
                    />
                </div>


                <div>
                    <label className="block text-sm font-medium text-gray-700">Description</label>
                    <textarea
                        id="description"
                        name="description"
                        rows="4"
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Enter the description"
                        value={currentTask?.description}
                        onChange={changeControlValue}
                        required
                    ></textarea>
                </div>


                <div className="text-right">
                    <button
                        type="submit"
                        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default TaskForm;
