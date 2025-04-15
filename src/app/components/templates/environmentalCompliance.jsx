"use client"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Textarea } from "@/components/ui/textarea";
import EnvironmentalCompliance2016 from "../../../../data/EnvironmentalCompliance2016";
import { Button } from "@/components/ui/button";

export default function EnvironmentalCompliance() {

    return (
        <Accordion type="multiple" className="w-full">
        {EnvironmentalCompliance2016.map((section) => (
            <AccordionItem key={section.id} value={section.id}>
                <AccordionTrigger>
                    {section.id}: {section.title}
                </AccordionTrigger>
                <AccordionContent>
                <ul className="pl-4 space-y-4">
          {section.disclosures.map((disclosure, index) => (
            <li key={index} className="space-y-2">
              <p className="font-medium">{disclosure}</p>
              <Textarea placeholder={`Write your notes for ${disclosure}`} />
              <Button>Submit</Button>
              <Textarea placeholder={`Write a comment for improvement`} />
              <Button>Submit</Button>
            </li>
          ))}
        </ul>
                </AccordionContent>
            </AccordionItem>
        ))}
    </Accordion>
    )
}