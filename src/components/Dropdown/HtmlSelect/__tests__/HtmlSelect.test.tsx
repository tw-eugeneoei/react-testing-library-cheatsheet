import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { HtmlSelect } from "../HtmlSelect";

describe("HTML <select> element", () => {
    it("should render select element on load", () => {
        render(<HtmlSelect />);
        const dropdown = screen.getByRole("combobox") as HTMLSelectElement;

        expect(dropdown).toBeInTheDocument();
    });

    it("should have value 'apple' on load", () => {
        render(<HtmlSelect />);
        const dropdown = screen.getByRole("combobox") as HTMLSelectElement;

        expect(dropdown.value).toBe("Apple");
    });

    it("should contain 3 options - 'Apple', 'Orange', 'Pear'.", () => {
        render(<HtmlSelect />);
        const dropdown = screen.getByRole("combobox") as HTMLSelectElement;
        const dropdownOptions = dropdown.options;

        expect(dropdownOptions.length).toBe(3);
        expect(dropdownOptions[0].value).toBe("Apple");
        expect(dropdownOptions[1].value).toBe("Orange");
        expect(dropdownOptions[2].value).toBe("Pear");
    });

    it("should have value 'Pear' when 'Pear' option is selected", () => {
        render(<HtmlSelect />);
        const dropdown = screen.getByRole("combobox") as HTMLSelectElement;
        const pearOption = screen.getByRole("option", {
            name: "Pear",
        }) as HTMLOptionElement;

        userEvent.selectOptions(dropdown, pearOption);

        expect(dropdown.value).toBe("Pear");
        expect(pearOption.selected).toBe(true);
    });
});
