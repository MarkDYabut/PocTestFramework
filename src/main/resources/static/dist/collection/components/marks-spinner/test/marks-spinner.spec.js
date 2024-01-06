import { newSpecPage } from "@stencil/core/testing";
import { MarksSpinner } from "../marks-spinner";
describe('marks-spinner', () => {
    it('renders', async () => {
        const page = await newSpecPage({
            components: [MarksSpinner],
            html: `<marks-spinner></marks-spinner>`,
        });
        expect(page.root).toEqualHtml(`
      <marks-spinner>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </marks-spinner>
    `);
    });
});
//# sourceMappingURL=marks-spinner.spec.js.map
