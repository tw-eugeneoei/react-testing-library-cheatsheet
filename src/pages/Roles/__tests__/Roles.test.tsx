import { render, screen, cleanup } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Roles } from "../Roles";

describe("Roles", () => {
    afterEach(cleanup);

    describe("button", () => {
        it("should exist on load", () => {
            render(<Roles />, { wrapper: BrowserRouter });
            const button = screen.getByRole("button");
            expect(button).toBeInTheDocument();
        });
    });

    describe("checkbox", () => {
        it("should exist on load", () => {
            render(<Roles />, { wrapper: BrowserRouter });
            const checkbox = screen.getByRole("checkbox", {
                name: "Checkbox",
            });
            expect(checkbox).toBeInTheDocument();
        });
    });

    describe("gridcell", () => {
        it("TODO", () => {
            render(<Roles />, { wrapper: BrowserRouter });
            expect(1).toBe(1);
        });
    });

    describe("link", () => {
        it("should exist on load", () => {
            render(<Roles />, { wrapper: BrowserRouter });
            // using name here since there are other links in Roles component
            const link = screen.getByRole("link", {
                name: "This is a link",
            });
            expect(link).toBeInTheDocument();
        });
    });

    describe("menuitem", () => {
        it("TODO", () => {
            render(<Roles />, { wrapper: BrowserRouter });
            expect(1).toBe(1);
        });
    });

    describe("menuitemcheckbox", () => {
        it("TODO", () => {
            render(<Roles />, { wrapper: BrowserRouter });
            expect(1).toBe(1);
        });
    });

    describe("menuitemradio", () => {
        it("TODO", () => {
            render(<Roles />, { wrapper: BrowserRouter });
            expect(1).toBe(1);
        });
    });

    describe("combobox", () => {
        it("should exist on load", () => {
            render(<Roles />, { wrapper: BrowserRouter });
            const combobox = screen.getByRole("combobox");
            expect(combobox).toBeInTheDocument();
        });
    });

    describe("option", () => {
        it("should exist on load", () => {
            render(<Roles />, { wrapper: BrowserRouter });
            const options = screen.getAllByRole("option");
            const firstOption = options[0] as HTMLOptionElement;
            const secondOption = options[1] as HTMLOptionElement;
            const thirdOption = options[2] as HTMLOptionElement;

            expect(options.length).toBe(3);
            expect(firstOption.value).toBe("Apple");
            expect(secondOption.value).toBe("Orange");
            expect(thirdOption.value).toBe("Pear");
        });
    });

    describe("progressbar", () => {
        it("should exist on load", () => {
            render(<Roles />, { wrapper: BrowserRouter });
            const progress = screen.getByRole("progressbar");
            expect(progress).toBeInTheDocument();
        });
    });

    describe("radio", () => {
        it("should exist on load", () => {
            render(<Roles />, { wrapper: BrowserRouter });
            const radio = screen.getByRole("radio");
            expect(radio).toBeInTheDocument();
        });
    });

    describe("scrollbar", () => {
        it("No native element", () => {
            render(<Roles />, { wrapper: BrowserRouter });
            expect("No native element").toBe("No native element");
        });
    });

    describe("searchbox", () => {
        it("should exist on load", () => {
            render(<Roles />, { wrapper: BrowserRouter });
            const searchbox = screen.getByRole("searchbox");
            expect(searchbox).toBeInTheDocument();
        });
    });

    describe("separator", () => {
        it("should exist on load", () => {
            render(<Roles />, { wrapper: BrowserRouter });
            const separator = screen.getByRole("separator");
            expect(separator).toBeInTheDocument();
        });
    });

    describe("slider", () => {
        it("should exist on load", () => {
            render(<Roles />, { wrapper: BrowserRouter });
            const slider = screen.getByRole("slider");
            expect(slider).toBeInTheDocument();
        });
    });

    describe("spinbutton", () => {
        it("should exist on load", () => {
            render(<Roles />, { wrapper: BrowserRouter });
            const spinbutton = screen.getByRole("spinbutton");
            expect(spinbutton).toBeInTheDocument();
        });
    });

    describe("switch", () => {
        it("should exist on load", () => {
            render(<Roles />, { wrapper: BrowserRouter });
            const switchElement = screen.getByRole("switch");
            expect(switchElement).toBeInTheDocument();
        });
    });

    describe("textbox", () => {
        it("should exist on load", () => {
            render(<Roles />, { wrapper: BrowserRouter });
            const textbox = screen.getByRole("textbox");
            expect(textbox).toBeInTheDocument();
        });
    });

    describe("figure", () => {
        it("should exist on load", () => {
            render(<Roles />, { wrapper: BrowserRouter });
            const figure = screen.getByRole("figure", {
                name: "Programmer",
            });
            expect(figure).toBeInTheDocument();
        });
    });

    describe("img", () => {
        it("should exist on load", () => {
            render(<Roles />, { wrapper: BrowserRouter });
            // * if there are multiple images in UI, access by name which corresponds to the "alt" value
            const img = screen.getByRole("img", {
                name: "oh that is why",
            });
            expect(img).toBeInTheDocument();
        });
    });
});
