/* eslint-disable no-undef */
import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useCallback, useMemo, useState } from 'react';

type ModalProps = {
  isOpen: boolean;
  disableBackdropClick: boolean;
  close: () => void;
  children: () => JSX.Element;
};

function Modal({ children, isOpen, disableBackdropClick, close }: ModalProps) {
  const handleBackdropClick = useCallback(() => {
    if (disableBackdropClick) return;
    close();
  }, [close, disableBackdropClick]);

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={handleBackdropClick}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-auto transform shadow-xl transition-all">
                {children}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}

type UseModalProps = {
  component: () => JSX.Element;
  disableBackdropClick?: boolean;
};

/**
 * `useModal` is a custom hook to create a reusable modal.
 * It returns an object with the following properties:
 * - `renderModal`: A function that returns a Modal component with the provided data.
 * - `close`: A function to close the modal.
 * - `open`: A function to open the modal.
 * - `isOpen`: A boolean indicating whether the modal is open.
 *
 * @example
 * const { renderModal, open, close } = useModal({
 *   component: () => <div>Modal Content</div>,
 *   disableBackdropClick: false,
 * });
 *
 * const renderModalRef = renderModal();
 *
 * return (
 *   <section className="bg-base-100 px-8">
 *     {renderModalRef}
 *     <button onClick={open}>Open Modal</button>
 *     <button onClick={close}>Close Modal</button>
 *   </section>
 * );
 */
export function useModal({ component, disableBackdropClick }: UseModalProps) {
  const [isOpen, setIsOpen] = useState(false);

  const close = useCallback(() => setIsOpen(false), []);
  const open = useCallback(() => setIsOpen(true), []);

  const modalProps = useMemo<Omit<ModalProps, 'children'>>(
    () => ({
      isOpen,
      close,
      disableBackdropClick: !!disableBackdropClick,
    }),
    [isOpen, close, disableBackdropClick]
  );

  const renderModal = useMemo(
    () => <Modal {...modalProps}>{component}</Modal>,
    [modalProps, component]
  );

  return {
    renderModal,
    close,
    open,
    isOpen,
  };
}
