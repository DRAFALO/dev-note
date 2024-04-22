import React from "react";
import isEqual from "react-fast-compare";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export interface DropdownData {
  name?: string;
  link?: string;
}

interface Props {
  title?: string;
  dropdownData: DropdownData[];
}

function Dropdown(props: Props) {
  const { title, dropdownData } = props;
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value={`item-${title}`}>
        <AccordionTrigger className="py-2">{title}</AccordionTrigger>
        <AccordionContent className="max-h-100 w-full rounded-md">
          <div
            className="scroll-area"
            style={{ maxHeight: "50px", overflowY: "auto" }}
          >
            {dropdownData.map((realItem) => (
              <div
                key={`link-${realItem.name}`}
                className="hover:border-l-3 w-full border-l-2 py-1 pl-0.5 hover:border-red-500 hover:bg-red-100 hover:text-red-500"
              >
                <a href={realItem.link}>{realItem.name}</a>
              </div>
            ))}
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
export default React.memo(Dropdown, isEqual);
