import type { Components, JSX } from "../types/components";

interface MarksSpinner extends Components.MarksSpinner, HTMLElement {}
export const MarksSpinner: {
    prototype: MarksSpinner;
    new (): MarksSpinner;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
