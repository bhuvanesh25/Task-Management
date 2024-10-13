import React, { useState } from 'react';
import api from '../Api';

const TaskForm = (props) => {

    const [currentTask, setCurrentTask] = useState(props.task);

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
            if (currentTask.id) {
                const response = await api.put('/task/' + currentTask.id, currentTask);
            } else {
                const response = await api.post('/task', currentTask);
            }
            props.refreshList();
        } catch (error) {

        }
    };



    return (
        <div>
            
            <form class="space-y-4" onSubmit={handleSubmit}>
                 
                <div>
                    <label for="title" class="block text-sm font-medium text-gray-700">Title</label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        class="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Enter the title"
                        value={currentTask?.title}
                        onChange={changeControlValue}
                        required
                    />
                </div>

                
                <div>
                    <label for="description" class="block text-sm font-medium text-gray-700">Description</label>
                    <textarea
                        id="description"
                        name="description"
                        rows="4"
                        class="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Enter the description"
                        value={currentTask?.description}
                        onChange={changeControlValue}
                        required
                    ></textarea>
                </div>

                
                <div class="text-right">
                    <button
                        type="submit"
                        class="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default TaskForm;
