import { newE2EPage } from "@stencil/core/testing";
describe('marks-button', () => {
    it('renders', async () => {
        const page = await newE2EPage();
        await page.setContent('<marks-button></marks-button>');
        const element = await page.find('marks-button');
        expect(element).toHaveClass('hydrated');
    });
});
//# sourceMappingURL=marks-button.e2e.js.map
