import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  
  export function AccordionDemo() {
    return (
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>Getting Started?</AccordionTrigger>
          <AccordionContent>
            Hatchtra welcomes you! One and only place for all your training requirements.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Is this only for Corporate training?</AccordionTrigger>
          <AccordionContent>
            It completely depends on the clients&apos; requirements, we also help them source candidates as well.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Any further Queries?</AccordionTrigger>
          <AccordionContent>
            Contact us at info@hatchtra.com, we are happy to help.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    )
  }
  