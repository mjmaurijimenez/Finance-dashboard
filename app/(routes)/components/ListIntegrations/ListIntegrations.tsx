import { CustomIcon } from "@/components/CustomIcon"
import { List } from "lucide-react"
import TableIntegration from "../TableIntegration/TableIntegration"

export default function ListIntegrations() {
    return (
    <div className="shadon-sm bg-background rounded-lg p-5 flex-1">
        <div className="flex gap-x-2 items-center">
            <CustomIcon icon={List}/>
            <p className="text-xl">List of intedration</p>
        </div>
        <TableIntegration/>
    </div>
    )
}
