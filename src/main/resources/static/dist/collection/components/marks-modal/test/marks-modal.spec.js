import { newSpecPage } from "@stencil/core/testing";
import { MarksModal } from "../marks-modal";
describe('marks-modal', () => {
    it('renders', async () => {
        const page = await newSpecPage({
            components: [MarksModal],
            html: `<marks-modal></marks-modal>`,
        });
        expect(page.root).toEqualHtml(`
      <marks-modal>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </marks-modal>
    `);
    });
});
//# sourceMappingURL=marks-modal.spec.js.map
