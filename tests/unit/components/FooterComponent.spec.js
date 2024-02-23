import { mount } from "@vue/test-utils";
import FooterComponent from "@/components/FooterComponent.vue";

describe("FooterComponent", () => {
    it("renders correctly", () => {
        const wrapper = mount(FooterComponent);

        expect(wrapper.exists()).toBe(true);

        expect(wrapper.classes("footer")).toBe(true);

        const sections = wrapper.findAll(".footer__section");
        expect(sections.length).toBe(2);

        const content = wrapper.find(".footer__content");
        expect(content.exists()).toBe(true);

        const copyright = wrapper.find(".footer__copyright");
        expect(copyright.exists()).toBe(true);

        expect(wrapper.find(".footer__text").text()).toBe(
            "© 2024 Mi Empresa. Todos los derechos reservados."
        );
    });
});
