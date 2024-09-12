interface MyComponentProps extends React.HTMLAttributes<HTMLDivElement> {
    title: string;
    onSelect: any;
    selected: boolean;
  }

export const System: React.FC<MyComponentProps> = (props) => {
    return(
        <div className="p-[20px] rounded border-4 border-[#C8E6C9] hover:border-[#00E676] border-solid h-400 flex justify-center items-center cursor-pointer" style={props.selected ? {borderColor: "#00E676"} : {}} onClick={props.onSelect}>
            <h2 className="capitalize">{props.title}</h2>
        </div>
    )
}