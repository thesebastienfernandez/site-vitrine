import { useState } from 'react';

interface MyComponentProps extends React.HTMLAttributes<HTMLDivElement> {
    title: string;
    haveContent: boolean;
  }

export const SuperLever: React.FC<MyComponentProps> = (props) => {
    const [isActive, setIsActive] = useState(false);
    return(
        <main>
            <div className="p-[20px] mt-[20px] relative rounded border-4 border-solid h-30 flex justify-center items-center" style={props.haveContent ? {borderColor: "#00E5FF", cursor: 'pointer'} : {borderColor: "#42A5F5"}} onClick={() => {setIsActive(!isActive)}}>
                <h1 className='text-center'>{props.title}</h1>
                {
                    props.haveContent ? <span className='absolute top-[-10px] right-[-10px] p-2 w-3 h-3 bg-[#EF5350] rounded-full'></span> : null
                }
            </div>
            {isActive ? (
                    props.children
                ) : null}
        </main>
    )
}