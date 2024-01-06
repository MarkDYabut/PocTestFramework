import { newE2EPage } from "@stencil/core/testing";
describe('marks-integration', () => {
    it('renders', async () => {
        const page = await newE2EPage();
        await page.setContent('<marks-integration></marks-integration>');
        const element = await page.find('marks-integration');
        expect(element).toHaveClass('hydrated');
    });
});
// http://localhost:8080/Rest/driver/new
//# sourceMappingURL=marks-integration.e2e.js.map
