import { shallowMount } from "@vue/test-utils";
import CardComponent from "@/components/CardComponent.vue";

describe("CardComponent", () => {
    it("renders correctly", () => {
        const seller = {
            id: 1,
            name: "John Doe",
            image: {
                src: {
                    original: "https://example.com/image.jpg",
                },
                alt: "user image",
            },
        };
        const wrapper = shallowMount(CardComponent, {
            propsData: {
                seller,
            },
        });
        expect(wrapper.exists()).toBe(true);
        expect(wrapper.find(".card__top h3").text()).toBe("John Doe");
        expect(wrapper.find(".image-container img").attributes("src")).toBe(
            "https://example.com/image.jpg"
        );
    });

    it("toggles like when clicked", async () => {
        const seller = {
            id: 1,
            name: "John Doe",
            image: {
                src: {
                    original: "https://example.com/image.jpg",
                },
                alt: "user image",
            },
        };
        const wrapper = shallowMount(CardComponent, {
            propsData: {
                seller,
            },
        });

        expect(wrapper.vm.liked).toBe(false);
        await wrapper.find(".heart-icon").trigger("click");
        expect(wrapper.vm.liked).toBe(true);
        await wrapper.find(".heart-icon").trigger("click");
        expect(wrapper.vm.liked).toBe(false);
    });

    it("updates score when card is liked", async () => {
        const seller = {
            id: 1,
            name: "John Doe",
            image: {
                src: {
                    original: "https://example.com/image.jpg",
                },
                alt: "user image",
            },
        };
        const wrapper = shallowMount(CardComponent, {
            propsData: {
                seller,
            },
        });

        expect(wrapper.vm.score).toBe(0);
        await wrapper.find(".heart-icon").trigger("click");
        expect(wrapper.vm.score).toBe(3);
        await wrapper.find(".heart-icon").trigger("click");
        expect(wrapper.vm.score).toBe(0);
    });
});
