interface MyComponentProps extends React.HTMLAttributes<HTMLDivElement> {
    title: string;
    description: string;
  }

export const Lever: React.FC<MyComponentProps> = (props) => {
    return(
        <div className="rounded border-4 border-[#485460] border-solid h-400 flex flex-col justify-center items-center overflow-auto">
            <h2 className="text-center capitalize">{props.title}</h2>
            <p className="text-center">{props.description}</p>
        </div>
    )
}