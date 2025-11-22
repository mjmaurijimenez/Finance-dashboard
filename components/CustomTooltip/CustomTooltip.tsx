import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { CustomTooltipProps } from './CustomTooltip.type'
import { Info } from "lucide-react"

export  function CustomTooltip(prosp: CustomTooltipProps) {
    const {content} = prosp
    return (
<Tooltip>
    <TooltipTrigger>
        <Info strokeWidth={1} className="h-5 w-5"/>
    </TooltipTrigger>
    <TooltipContent>
    <p>{ content}</p>
    </TooltipContent>
</Tooltip>
    )
}
