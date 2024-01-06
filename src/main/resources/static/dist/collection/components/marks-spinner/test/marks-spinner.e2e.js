import { newE2EPage } from "@stencil/core/testing";
describe('marks-spinner', () => {
    it('renders', async () => {
        const page = await newE2EPage();
        await page.setContent('<marks-spinner></marks-spinner>');
        const element = await page.find('marks-spinner');
        expect(element).toHaveClass('hydrated');
    });
});
//# sourceMappingURL=marks-spinner.e2e.js.map
