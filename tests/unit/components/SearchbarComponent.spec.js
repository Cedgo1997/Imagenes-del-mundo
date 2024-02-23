import { shallowMount } from "@vue/test-utils";
import SearchBarComponent from "@/components/SearchbarComponent.vue";

describe("SearchBarComponent", () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallowMount(SearchBarComponent);
    });

    it("renders input field correctly", () => {
        const inputField = wrapper.find(".searchbar__field");
        expect(inputField.exists()).toBe(true);
    });

    it("emits queryText event when enter key is pressed", async () => {
        const inputField = wrapper.find(".searchbar__field");
        await inputField.setValue("test search term");
        await inputField.trigger("keypress.enter");
        await wrapper.vm.$nextTick();
        expect(wrapper.emitted().queryText[0]).toEqual(["test search term"]);
    });

    it("clears searchTerm when X icon is clicked", async () => {
        wrapper.setData({ searchTerm: "test search term" });

        const xIcon = wrapper.find(".btn-right");
        await xIcon.trigger("click");

        expect(wrapper.vm.searchTerm).toBe("");
    });

    it("does not emit queryText event when enter key is pressed and searchTerm is empty", async () => {
        const inputField = wrapper.find(".searchbar__field");
        await inputField.setValue("");
        await inputField.trigger("keypress.enter");
        await wrapper.vm.$nextTick();

        expect(wrapper.emitted().queryText).toBeFalsy();
    });
});
