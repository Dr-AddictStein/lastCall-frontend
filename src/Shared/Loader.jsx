import React from 'react'
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";

const Loader = () => {
    return (
        <>
            <div className="text-center text-white text-3xl">
                Saving Your Restaurant Info. Please Wait...
            </div>
            <div className='w-full h-[70vh] flex justify-center items-center'>
                <ClimbingBoxLoader
                    color='white'
                    size={70}
                />
            </div>
        </>
    )
}

export default Loader