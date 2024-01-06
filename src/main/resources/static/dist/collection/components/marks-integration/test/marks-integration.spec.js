import { newSpecPage } from "@stencil/core/testing";
import { MarksIntegration } from "../marks-integration";
describe('marks-integration', () => {
    it('renders', async () => {
        const page = await newSpecPage({
            components: [MarksIntegration],
            html: `<marks-integration></marks-integration>`,
        });
        expect(page.root).toEqualHtml(`
      <marks-integration>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </marks-integration>
    `);
    });
});
//# sourceMappingURL=marks-integration.spec.js.map
