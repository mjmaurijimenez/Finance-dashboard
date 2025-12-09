"use client"

import {  useState } from "react"

import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { CirclePlus } from "lucide-react"
import  { FormCreateCustomer } from "../FormCreateCustomer/FormCreateCustomer"

export function HeaderCompanies() {
    const [openModalCreate, setOpenModalCreate] = useState(false)

    return (
    <div className="flex items-center justify-between">
        <h2 className="text-2xl">List of Companies</h2>

        <Dialog open={openModalCreate} onOpenChange={setOpenModalCreate}>
            <DialogTrigger asChild>
                <Button>Create Company</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[625px]">
                <DialogHeader>
                    <DialogTitle>Create Customer</DialogTitle>
                    <DialogDescription>
                        Create and configure your customers.
                    </DialogDescription>
                        
                </DialogHeader>

                <FormCreateCustomer setOpenModalCreate={setOpenModalCreate}/>
                
            </DialogContent>
        </Dialog>
    </div>
    )
}
