import type { Components, JSX } from "../types/components";

interface MarksButton extends Components.MarksButton, HTMLElement {}
export const MarksButton: {
    prototype: MarksButton;
    new (): MarksButton;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
