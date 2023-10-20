"use client"
import { Chessboard } from "react-chessboard";
const page = () => {
    return (
        <div className="flex justify-center items-start">
            <div className="w-fit">
                <div className="mt-5 ml-5 border-2 border-amber-400 p-1 rounded-md ">
                    <Chessboard boardWidth={500} id="BasicBoard" />
                </div>
            </div>

            <div className="w-full h-[95vh] m-4 flex flex-col gap-16">
                {/* Video Streaming */}
                <div className="border border-white rounded-xl h-[30vh] flex justify-center items-center">
                    Video Chat will appear here.
                </div>
                {/* Chatting */}
                <div className="border border-white rounded-xl h-[70vh] flex justify-center items-center">
                    Text Chat will appear here.
                </div>
            </div>
        </div>
    )
}

export default page
