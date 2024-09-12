/*
Best Practices for Using IntrinsicAttributes in React
When working with React and TypeScript, following best practices to avoid common pitfalls and ensure your components are type-safe is essential.

Tips for Correctly Using react intrinsicattributes in Components
To use react intrinsicattributes correctly, always ensure that your custom components accept and pass along these attributes to the underlying HTML elements or custom components. This is particularly important for attributes like key and ref that React uses internally.

Ensuring Props are Assignable to Type IntrinsicAttributes
When defining the props for a component, make sure they are assigned to the type IntrinsicAttributes. This means that any additional props you define should not conflict with the properties of IntrinsicAttributes.
*/ 

interface MyComponentProps extends React.HTMLAttributes<HTMLDivElement> {
    title: string;
  }

export const Container: React.FC<MyComponentProps> = (props) => {
    return(
        <div className="border-b-2 border-b-gray-700 p-4">
            <header className="mt-48 sm:mt-24">
                <h1 className="text-center lg:text-left">{props.title}</h1>
            </header>
            <main className="main-container">
                {props.children}
            </main>
        </div>
    )
}