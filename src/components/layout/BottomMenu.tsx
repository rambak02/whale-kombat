import { Card, CardBody } from "@nextui-org/react"
import { FunctionComponent } from "react"

interface BottomMenuProps {
  
}
 
const BottomMenu: FunctionComponent<BottomMenuProps> = () => {
  return (
    <Card className="fixed flex w-auto left-4 right-4 bottom-2 z-30 bg-[#1E7395]">
      <CardBody className="grid grid-cols-5">
        
      </CardBody>
    </Card>
  );
}
 
export default BottomMenu;