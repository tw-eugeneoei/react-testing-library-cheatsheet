import { render, screen, cleanup } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MaterialUiSelect } from "../MaterialUiSelect";

describe("Material UI <Select>", () => {
    afterEach(cleanup);

    it("should render select component on load", () => {
        render(<MaterialUiSelect />);
        const dropdown = screen.getByRole("button");

        expect(dropdown).toBeInTheDocument();
    });

    it("should have 3 options - 'Apple', 'Orange', 'Pear' on load", () => {
        render(<MaterialUiSelect />);
        const dropdown = screen.getByRole("button");

        userEvent.click(dropdown);

        const options = screen.getAllByRole("option");
        const firstOption = options[0] as HTMLOptionElement;
        const secondOption = options[1] as HTMLOptionElement;
        const thirdOption = options[2] as HTMLOptionElement;

        expect(options.length).toBe(3);
        expect(firstOption.getAttribute("data-value")).toBe("Apple");
        expect(secondOption.getAttribute("data-value")).toBe("Orange");
        expect(thirdOption.getAttribute("data-value")).toBe("Pear");

        // or
        expect(firstOption.textContent).toBe("Apple");
        expect(secondOption.textContent).toBe("Orange");
        expect(thirdOption.textContent).toBe("Pear");
    });

    it("should have value 'Orange' when 'Orange' option is selected", () => {
        render(<MaterialUiSelect />);
        const dropdown = screen.getByRole("button");

        userEvent.click(dropdown);
        userEvent.click(
            screen.getByRole("option", {
                name: "Orange",
            })
        );

        expect(dropdown.textContent).toBe("Orange");
    });
});
