import React, {
  useState,
  ReactEventHandler,
  ReactNode,
  useCallback,
  useEffect,
} from "react";
import { Dialog } from "@headlessui/react";
import classNames from "classnames";
interface ModalProps {
  isOpen?: boolean | null;
  children?: ReactNode;
  onClose?: ReactEventHandler;
  isFullscreen?: boolean;
}
export const Modal = ({
  isOpen,
  children,
  onClose,
  isFullscreen = false,
}: ModalProps) => {
  const [open, setOpen] = useState(isOpen);
  const KEY_NAME_ESC = "Escape";
  const KEY_EVENT_TYPE = "keyup";

  useEscapeKey(onClose);
  
  function useEscapeKey(handleClose) {
    const handleEscKey = useCallback(
      (event) => {
        if (event.key === KEY_NAME_ESC) {
          handleClose();
        }
      },
      [handleClose]
    );

    useEffect(() => {
      document.addEventListener(KEY_EVENT_TYPE, handleEscKey, false);

      return () => {
        document.removeEventListener(KEY_EVENT_TYPE, handleEscKey, false);
      };
    }, [handleEscKey]);
  }
  return (
    <Dialog
      open={open}
      onClose={() => setOpen(false)}
      className="relative z-50"
    >
      <div
        className="fixed inset-0 bg-black/30"
        aria-hidden="true"
        onClick={() => {
          onClose;
        }}
      />
      <div className="fixed inset-0 flex items-center justify-center">
        <Dialog.Panel
          className={classNames("bg-white", {
            "h-screen w-full": isFullscreen,
            "rounded max-w-sm": !isFullscreen,
          })}
        >
          {children}
        </Dialog.Panel>
      </div>
    </Dialog>
  );
};
