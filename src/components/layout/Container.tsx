import { FunctionComponent } from "react"

interface ContainerProps {
  children: React.ReactNode
}
 
const Container: FunctionComponent<ContainerProps> = ({ children }) => {
  return (
    <div className="flex flex-col justify-end w-screen h-screen bg-gradient-to-t from-[#7AD4DF] from-0% via-[#03577F] via-75% to-[#1C1C1D] to-100%">
      {children}
    </div>
  );
}
 
export default Container;