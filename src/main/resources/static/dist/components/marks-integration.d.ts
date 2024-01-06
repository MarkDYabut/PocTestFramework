import type { Components, JSX } from "../types/components";

interface MarksIntegration extends Components.MarksIntegration, HTMLElement {}
export const MarksIntegration: {
    prototype: MarksIntegration;
    new (): MarksIntegration;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
