import * as React from "react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { ScrollArea } from "@/components/ui/scroll-area"
import { LocaleKeys } from "@/types/locales";

interface Content {
  name: string;
  link: string;
}

interface Props {
  dictionary: LocaleKeys;
  className?: string;
  title: string;
  content: Content[];
}

export function Dropdown(props: Props) {
  const { dictionary, title, content } = props;
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger>{title}</AccordionTrigger>
        <AccordionContent>
          <ScrollArea className="h-72 w-48 rounded-md border">
            <div className="p-4">
              {content.map((item, index) => (
                <a key={`link-${index}`} href={item.link}>{item.name}</a>
              ))}
            </div>
          </ScrollArea>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}