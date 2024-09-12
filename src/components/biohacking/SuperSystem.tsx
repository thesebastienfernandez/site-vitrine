

interface MyComponentProps extends React.HTMLAttributes<HTMLDivElement> {
    title: string;
    isActive: boolean;
    onShow: any;
  }

export const SuperSystem: React.FC<MyComponentProps> = (props) => {
    return(
        <main>
            <div className="p-[20px] mt-[20px] rounded border-4 border-solid h-30 flex justify-center items-center cursor-pointer" style={!props.isActive ? {borderColor: "#485460"} : {borderColor: "#d2dae2"}} onClick={props.onShow}>
                <h1 className="text-center">{props.title}</h1>
            </div>
            {
                props.isActive ? (
                    props.children
                ) : null
            }
        </main>
    )
}