export const Header = () => {
    return(
        <div className="fixed w-full z-10 bg-[#1b2631] border-b-2 border-b-gray-700 p-4">
            <nav>
                <ul className="flex flex-col items-center sm:flex-row sm:items-start">
                    <li><a className="hover:text-white" href="../experiences">Expériences</a></li>
                    <li><a className="hover:text-white" href="../formations">Formations</a></li>
                    <li><a className="hover:text-white" href="../skills">Compétences</a></li>
                    <li><a className="capitalize hover:text-white" href="../about">à propos de moi</a></li>
                    <li><a className="hover:text-white" href="../works">Mes applications</a></li>
                </ul>
            </nav>
        </div>
    )
}