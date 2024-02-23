import { shallowMount } from "@vue/test-utils";
import CardComponent from "@/components/CardComponent.vue";

const seller = {
    id: 1,
    name: "Peter Parker",
    image: {
        src: {
            original: "https://example.com/image.jpg",
        },
        alt: "Image Alt Text",
    },
};

let wrapper;

describe("CardComponent", () => {
    beforeEach(() => {
        wrapper = shallowMount(CardComponent, {
            propsData: {
                seller,
            },
        });
    });

    it("renders correctly", () => {
        expect(wrapper.exists()).toBe(true);
        expect(wrapper.find(".card__top h3").text()).toBe("Peter Parker");
        expect(wrapper.find(".image-container img").attributes("src")).toBe(
            "https://example.com/image.jpg"
        );
    });

    it("toggles like when clicked", async () => {
        expect(wrapper.vm.liked).toBe(false);
        await wrapper.find(".heart-icon").trigger("click");
        expect(wrapper.vm.liked).toBe(true);
        await wrapper.find(".heart-icon").trigger("click");
        expect(wrapper.vm.liked).toBe(false);
    });

    it("updates score when card is liked", async () => {
        expect(wrapper.vm.score).toBe(0);
        await wrapper.find(".heart-icon").trigger("click");
        expect(wrapper.vm.score).toBe(3);
        await wrapper.find(".heart-icon").trigger("click");
        expect(wrapper.vm.score).toBe(0);
    });

    it("Download link has the right href value", () => {
        const wrapper = shallowMount(CardComponent, {
            props: {
                seller,
            },
        });
        const downloadButton = wrapper.find(".download-button");
        const expectedLink = seller.image.src.original;
        expect(downloadButton.attributes("href")).toBe(expectedLink);
    });
});
