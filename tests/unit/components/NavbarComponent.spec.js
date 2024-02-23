import { mount } from "@vue/test-utils";
import NavbarComponent from "@/components/NavbarComponent.vue";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: "/", name: "Home" },
        { path: "/search", name: "Search" },
    ],
});

describe("NavbarComponent", () => {
    it("renders correctly", () => {
        const wrapper = mount(NavbarComponent, {
            global: {
                plugins: [router],
            },
        });

        expect(wrapper.exists()).toBe(true);

        expect(wrapper.classes("navbar")).toBe(true);

        expect(wrapper.find(".navbar__logo").exists()).toBe(true);
        expect(wrapper.find(".navbar__nav").exists()).toBe(true);

        const logo = wrapper.find(".navbar__logo");
        expect(logo.exists()).toBe(true);
        expect(logo.attributes("href")).toBe("/");

        const navLinks = wrapper.findAll(".navbar__link");
        expect(navLinks.length).toBe(2);

        const searchLink = navLinks[0];
        expect(searchLink.text()).toBe("Buscar Imágenes");
        expect(searchLink.attributes("href")).toBe("/search");

        const homeLink = navLinks[1];
        expect(homeLink.text()).toBe("Inicio");
        expect(homeLink.attributes("href")).toBe("/");
    });
});
