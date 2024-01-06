import { newSpecPage } from "@stencil/core/testing";
import { MarksButton } from "../marks-button";
describe('marks-button', () => {
    it('renders', async () => {
        const page = await newSpecPage({
            components: [MarksButton],
            html: `<marks-button></marks-button>`,
        });
        expect(page.root).toEqualHtml(`
      <marks-button>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </marks-button>
    `);
    });
});
//# sourceMappingURL=marks-button.spec.js.map
