import { Movie } from "../types/Movie"

export const Footer = () => {

    return (
        <>
            <footer className={"bg-gray-200 text-center lg:text-left w-screen"}>
                <div className={"text-gray-700 text-center p-4"} >
                    © 2022 Copyright:
                    <a className={"text-gray-800"} target="_blank" href="https://github.com/Leozouain">Leonardo Zouain</a>
                </div>
            </footer>

        </>
    )
}