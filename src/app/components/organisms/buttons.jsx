"use client";

import { Button } from "@/components/ui/button";

export default function Buttons(){
    const handleClick = () => {
        window.open('/survey',);
    };

    return (
        <div className="flex flex-col items-center">
            <div className="flex flex-row gap-1.5">
            <Button
            onClick={handleClick}
            className="bg-blue-500 text-white px-4 py-2 rounded"
            >
            Sustainability Reporting
            </Button>
            <Button
            onClick={handleClick}
            className="bg-blue-500 text-white px-4 py-2 rounded"
            >
            GRI
            </Button>
            <Button
            onClick={handleClick}
            className="bg-blue-500 text-white px-4 py-2 rounded"
            >
            BRSR
            </Button>
            </div>
            
            <div className="flex flex-row m-4 gap-1.5">
            <Button
            onClick={handleClick}
            className="bg-blue-500 text-white px-4 py-2 rounded"
            >
            CSRD
            </Button>
            <Button
            onClick={handleClick}
            className="bg-blue-500 text-white px-4 py-2 rounded"
            >
            TCFD
            </Button>
            <Button
            onClick={handleClick}
            className="bg-blue-500 text-white px-4 py-2 rounded"
            >
            Green Audit
            </Button>
            </div>
        </div>
        
       
    )
}