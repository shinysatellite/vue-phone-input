import { mount } from "@vue/test-utils";
import PhoneInput from "@/components/PhoneInput.vue";

describe("PhoneInput.vue", () => {
  const wrapper = mount(PhoneInput, {
    props: {
      modelValue: "",
    },
  });
  it("renders with correct US placeholder", async () => {
    Object.defineProperty(navigator, "language", {
      value: "en-US",
      configurable: true,
    });

    expect(wrapper.attributes("placeholder")).toBe("+1 (123) 456-7890");
  });

  it("renders with generic placeholder for non-US locales", () => {
    Object.defineProperty(navigator, "language", {
      value: "fr-CA",
      configurable: true,
    });
    const wrapper = mount(PhoneInput, {
      props: {
        modelValue: "",
      },
    });
    expect(wrapper.attributes("placeholder")).toBe("Phone number");
  });

  it("formats input correctly removing disallowed characters", async () => {
    const input = wrapper.find("input");
    await input.setValue("+abc1234567-( )!");

    const emitted = wrapper.emitted("update:modelValue");
    expect(emitted).toBeTruthy();
    expect(emitted && emitted[0]).toBeTruthy();

    expect(emitted && emitted[0][0]).toBe("+1234567-( )");
  });
});
