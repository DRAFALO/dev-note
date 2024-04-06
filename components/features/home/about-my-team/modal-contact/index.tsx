"use client";

import React from "react";
import isEqual from "react-fast-compare";

import { Button } from "@/components/ui/button";
import {
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

function ModalContact() {
  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Tell us about you</DialogTitle>

        <section>
          <div>name</div>
          <div>email</div>
          <div>title</div>
          <div>msg</div>
        </section>
      </DialogHeader>

      <DialogFooter>
        <DialogClose asChild>
          <Button type="button" variant="secondary">
            Close
          </Button>
        </DialogClose>
      </DialogFooter>
    </DialogContent>
  );
}

export default React.memo(ModalContact, isEqual);
