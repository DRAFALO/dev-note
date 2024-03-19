"use client";

import React from "react";

type ModalContactProps = {
  open: boolean;
  onClose: () => void;
};

function ModalContact(props: ModalContactProps) {
  const { open, onClose } = props;
  return (
    <div
      className={`fixed inset-0 flex items-center justify-center transition-colors ${
        open ? "visible bg-black/20" : "invisible"
      }`}
      onClick={onClose}
      onKeyDown={(e) => {
        if (e.key === "Enter") onClose();
      }}
      role="button"
      tabIndex={0}
    >
      <div
        className={`max-w-md rounded-lg bg-white p-6 shadow transition-all ${
          open ? "scale-100 opacity-100" : "scale-110 opacity-0"
        }`}
        role="button"
        tabIndex={0}
      >
        <button onClick={onClose} type="button">
          X
        </button>
        <div>test</div>
      </div>
    </div>
  );
}

export default React.memo(ModalContact);
