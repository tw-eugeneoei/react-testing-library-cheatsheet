import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MultipleMaterialUiSelect } from "../MultipleMaterialUiSelect";

describe("Multiple Material UI <Select>", () => {
    it("should render day, month and year dropdown components on load", () => {
        render(<MultipleMaterialUiSelect />);
        // Material UI default Select component
        const dayDropdown = screen.getByLabelText("Day");
        // Material UI Select component with native prop
        const monthDropdown = screen.getByRole("combobox", {
            name: "Month",
        });
        // Material UI NativeSelect component
        const yearDropdown = screen.getByRole("combobox", {
            name: "Year",
        });

        expect(dayDropdown).toBeInTheDocument();
        expect(monthDropdown).toBeInTheDocument();
        expect(yearDropdown).toBeInTheDocument();
    });

    it("should display 18 for day, 6 for month and 2018 for year", () => {
        render(<MultipleMaterialUiSelect />);
        const dayDropdown = screen.getByLabelText("Day");
        const dayOption = "18";
        const monthDropdown = screen.getByRole("combobox", {
            name: "Month",
        }) as HTMLSelectElement;
        const monthOption = "6";
        const yearDropdown = screen.getByRole("combobox", {
            name: "Year",
        }) as HTMLSelectElement;
        const yearOption = "2018";

        userEvent.click(dayDropdown);
        userEvent.click(
            screen.getByRole("option", {
                name: dayOption,
            })
        );
        userEvent.selectOptions(monthDropdown, monthOption);
        userEvent.selectOptions(yearDropdown, yearOption);

        expect(dayDropdown.textContent).toBe("18");
        expect(monthDropdown.value).toBe("6");
        expect(yearDropdown.value).toBe("2018");
    });
});
