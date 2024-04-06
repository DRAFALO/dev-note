"use client";

import React from "react";
import isEqual from "react-fast-compare";

import AppLink from "@/components/common/app-link";
import { Button } from "@/components/ui/button";
import {
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
} from "@/components/ui/dialog";

import { LocaleKeys } from "@/types/locales";

interface Props {
  dictionary: LocaleKeys;
}
function ModalSeeMore(props: Props) {
  const { dictionary } = props;
  return (
    <DialogContent>
      <DialogHeader>
        <section>
          <div className="p-1 hover:bg-blue-100 hover:text-blue-500">
            <AppLink aria-label={dictionary["Report abuse"]} href="/Copylink">
              {dictionary["Copy link"]}
            </AppLink>
          </div>
          <div className="p-1 hover:bg-blue-100 hover:text-blue-500">
            <AppLink aria-label={dictionary["Report abuse"]} href="/Report">
              {dictionary["Report abuse"]}
            </AppLink>
          </div>
        </section>
      </DialogHeader>

      <DialogFooter>
        <DialogClose asChild>
          <Button type="button" variant="secondary">
            {dictionary.Close}
          </Button>
        </DialogClose>
      </DialogFooter>
    </DialogContent>
  );
}
export default React.memo(ModalSeeMore, isEqual);
