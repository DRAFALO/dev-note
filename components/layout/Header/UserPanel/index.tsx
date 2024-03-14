"use client";

import React from "react";
import { useBoolean } from "usehooks-ts";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogOverlay,
  DialogTitle,
} from "@/components/ui/dialog";

import { ROUTES } from "@/constants/routes";
import useOnClickOutside from "@/hooks/useOnClickOutside";
import { LocaleKeys } from "@/types/locales";

import MenuItem from "../MenuItem";

interface Props {
  isSignedIn: boolean;
  dictionary: LocaleKeys;
}

const listItemUserMenu = [
  {
    title: "Profile",
    link: ROUTES.PROFILE.LINK,
    icon: "/svg/profile-icon.svg#id",
    onClick: () => {},
  },
  {
    title: "Settings",
    link: "#",
    icon: "/svg/setting-icon.svg#id",
    onClick: () => {},
  },
  {
    title: "Sign Out",
    link: "#",
    icon: "/svg/signout-icon.svg#id",
    onClick: (signOut: () => void) => {
      signOut();
    },
  },
];

function UserPanel(props: Props) {
  const { isSignedIn, dictionary } = props;
  const ref = React.useRef<HTMLDivElement | null>(null);

  const {
    value: isOpenUserMenu,
    setFalse: closeUserMenu,

    toggle: toggleUserMenu,
  } = useBoolean(false);

  const {
    value: isOpenSignInModal,
    setFalse: closeSignInModal,
    setTrue: openSignInModal,
  } = useBoolean(false);
  useOnClickOutside(ref, closeUserMenu);

  return (
    <div>
      {isSignedIn ? (
        <div>
          <Avatar
            ref={ref}
            className="hidden hover:cursor-pointer md:flex"
            onClick={toggleUserMenu}
          >
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />

            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          {isOpenUserMenu && (
            <MenuItem
              listItems={listItemUserMenu}
              // onClick={closeUserMenu}
              dictionary={dictionary}
            />
          )}
        </div>
      ) : (
        <div className="hidden gap-2 md:flex">
          <Button onClick={openSignInModal} className=" min-w-28">
            {dictionary["Sign In"]}
          </Button>

          <Button onClick={openSignInModal} className=" min-w-28">
            {dictionary["Sign Up"]}
          </Button>
        </div>
      )}
      {isOpenSignInModal && (
        <div className="">
          {/* Modal Sign In or Sign Up here */}
          <Dialog open onOpenChange={closeSignInModal}>
            <DialogOverlay />
            <DialogContent className="z-modal ">
              <DialogHeader>
                <DialogTitle>Are you absolutely sure?</DialogTitle>
                <DialogDescription>
                  This action cannot be undone. This will permanently delete
                  your account and remove your data from our servers.
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        </div>
      )}
    </div>
  );
}
export default React.memo(UserPanel);
