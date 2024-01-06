import { newE2EPage } from "@stencil/core/testing";
describe('marks-modal', () => {
    it('renders', async () => {
        const page = await newE2EPage();
        await page.setContent('<marks-modal></marks-modal>');
        const element = await page.find('marks-modal');
        expect(element).toHaveClass('hydrated');
    });
});
//# sourceMappingURL=marks-modal.e2e.js.map
