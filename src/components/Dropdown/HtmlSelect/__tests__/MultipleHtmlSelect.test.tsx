import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MultipleHtmlSelect } from "../MultipleHtmlSelect";

describe("Multiple HTML <select> elements", () => {
    it("should render 3 dropdown elements on load", () => {
        render(<MultipleHtmlSelect />);
        const selectElements = screen.getAllByRole("combobox");

        expect(selectElements.length).toBe(3);
    });

    it("should render day, month and year dropdown elements on load", () => {
        render(<MultipleHtmlSelect />);
        const dayDropdown = screen.getByRole("combobox", {
            name: "Day", // needs to match label of select element
        });
        const monthDropdown = screen.getByRole("combobox", {
            name: "Month", // needs to match label of select element
        });
        const yearDropdown = screen.getByRole("combobox", {
            name: "Year", // needs to match label of select element
        });

        expect(dayDropdown).toBeInTheDocument();
        expect(monthDropdown).toBeInTheDocument();
        expect(yearDropdown).toBeInTheDocument();
    });

    it("should display 18 for day, 6 for month and 2018 for year", () => {
        render(<MultipleHtmlSelect />);
        const dayDropdown = screen.getByRole("combobox", {
            name: "Day",
        }) as HTMLSelectElement;
        const dayOption = "18";
        const monthDropdown = screen.getByRole("combobox", {
            name: "Month",
        }) as HTMLSelectElement;
        const monthOption = "6";
        const yearDropdown = screen.getByRole("combobox", {
            name: "Year",
        }) as HTMLSelectElement;
        const yearOption = "2018";

        userEvent.selectOptions(dayDropdown, dayOption);
        userEvent.selectOptions(monthDropdown, monthOption);
        userEvent.selectOptions(yearDropdown, yearOption);

        expect(dayDropdown.value).toBe("18");
        expect(monthDropdown.value).toBe("6");
        expect(yearDropdown.value).toBe("2018");
    });
});
