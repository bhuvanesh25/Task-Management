import React, { useState } from 'react';
import TaskForm from './taskform'

function ModalPopUp(props) {
    const [isModalOpen, setIsModalOpen] = useState(props.open);


    const closeForm = () => props.close();

    return (
        <>
            {isModalOpen && (
                <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center">
                    <div className="bg-white w-1/3 p-6 rounded-lg shadow-lg">
                        <div className="grid grid-cols-2 gap-4 items-center">
                            <div>
                                <p className="text-left text-2xl font-bold mb-4">{props.task?.id === undefined ? "Add" : "Edit"}  Task </p>
                            </div>
                            <div className="text-right">
                                <button onClick={closeForm} className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600">X</button>
                            </div>
                        </div>
                        <TaskForm {...props}/>

                    </div>
                </div>
            )}
        </>
    );
}

export default ModalPopUp;
