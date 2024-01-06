import type { Components, JSX } from "../types/components";

interface MarksModal extends Components.MarksModal, HTMLElement {}
export const MarksModal: {
    prototype: MarksModal;
    new (): MarksModal;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
