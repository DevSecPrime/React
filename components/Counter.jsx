import React, { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0);

    function incrementHandler() {
        setCount(count + 1)
    }

    function decrementHandler() {
        setCount(count - 1)
        if (count === 0) {
            setCount(0)
        }
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white rounded-lg shadow-lg p-8 flex flex-col items-center space-y-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Counter App</h2>
                
                <div 
                    onClick={incrementHandler}
                    className="w-16 h-16 bg-green-500 hover:bg-green-600 text-white text-3xl font-bold rounded-full flex items-center justify-center cursor-pointer transition-colors duration-200 select-none shadow-md hover:shadow-lg transform hover:scale-105"
                >
                    +
                </div>
                
                <div className="text-6xl font-bold text-gray-800 py-4 min-w-[120px] text-center">
                    {count}
                </div>
                
                <div 
                    onClick={decrementHandler}
                    className="w-16 h-16 bg-red-500 hover:bg-red-600 text-white text-3xl font-bold rounded-full flex items-center justify-center cursor-pointer transition-colors duration-200 select-none shadow-md hover:shadow-lg transform hover:scale-105"
                >
                    −
                </div>
            </div>
        </div>
    )
}

export default Counter