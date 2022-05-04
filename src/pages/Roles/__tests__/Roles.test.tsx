import {
    render,
    screen,
    waitForElementToBeRemoved,
    within,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";
import { Roles } from "../Roles";

describe("Roles", () => {
    describe("button", () => {
        it("should exist on load", () => {
            render(<Roles />, { wrapper: BrowserRouter });
            const button = screen.getByRole("button", {
                name: "Button",
            });
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
            const searchbox = screen.getByRole("searchbox", {
                name: "Search me",
            });
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
            const textbox = screen.getByRole("textbox", {
                name: "Name",
            });

            expect(textbox).toBeInTheDocument();
        });
    });

    // describe("textbox without declaration", () => {
    //     it("should exist on load", () => {
    //         render(<Roles />, { wrapper: BrowserRouter });
    //         const textbox = screen.getByRole("textbox");

    //         expect(textbox).toBeInTheDocument();
    //     });
    // });

    // describe("textbox", () => {
    //     it("should have value 'Hello World!'", () => {
    //         render(<Roles />, { wrapper: BrowserRouter });
    //         const textbox = screen.getByRole("textbox") as HTMLInputElement;

    //         expect(textbox.value).toBe("Hello world!");
    //     });
    // });

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

    describe("heading", () => {
        it("should exist on load", () => {
            render(<Roles />, { wrapper: BrowserRouter });
            const headingOne = screen.getByRole("heading", {
                name: "heading 1",
            });
            const headingTwo = screen.getByRole("heading", {
                name: "heading 2",
            });
            const headingThree = screen.getByRole("heading", {
                name: "heading 3",
            });
            const headingFour = screen.getByRole("heading", {
                name: "heading 4",
            });
            const headingFive = screen.getByRole("heading", {
                name: "heading 5",
            });
            const headingSix = screen.getByRole("heading", {
                name: "heading 6",
            });

            expect(headingOne).toBeInTheDocument();
            expect(headingTwo).toBeInTheDocument();
            expect(headingThree).toBeInTheDocument();
            expect(headingFour).toBeInTheDocument();
            expect(headingFive).toBeInTheDocument();
            expect(headingSix).toBeInTheDocument();
        });
    });

    describe("article", () => {
        it("should exist on load", () => {
            render(<Roles />, { wrapper: BrowserRouter });
            const article = screen.getByRole("article", {
                name: "Article Name",
            });

            expect(article).toBeInTheDocument();
        });
    });

    describe("tooltip", () => {
        it("should exist when hover over bin icon", async () => {
            render(<Roles />, { wrapper: BrowserRouter });
            const button = screen.getByRole("button", {
                name: "Delete",
            });

            userEvent.hover(button);
            const tooltip = await screen.findByRole("tooltip", {
                name: "Delete",
            });

            expect(tooltip).toBeInTheDocument();
        });
    });

    describe("alert", () => {
        it("should exist on load", () => {
            render(<Roles />, { wrapper: BrowserRouter });
            const alert = screen.getByRole("alert", {
                name: "alert-error",
            });

            expect(alert).toBeInTheDocument();
        });
    });

    describe("dialog", () => {
        it("should be open when open dialog button is clicked", async () => {
            render(<Roles />, { wrapper: BrowserRouter });
            const button = screen.getByRole("button", {
                name: "Click me to open dialog",
            });

            userEvent.click(button);
            const dialog = await screen.findByRole("dialog");

            expect(dialog).toBeInTheDocument();
        });

        it("should close dialog when close button is clicked", async () => {
            render(<Roles />, { wrapper: BrowserRouter });
            const openDialogButton = screen.getByRole("button", {
                name: "Click me to open dialog",
            });

            userEvent.click(openDialogButton);
            const closeDialogButton = await screen.findByRole("button", {
                name: "close",
            });
            userEvent.click(closeDialogButton);
            await waitForElementToBeRemoved(screen.queryByRole("dialog"));

            expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
        });
    });

    describe("navigation", () => {
        it("should exist on load", () => {
            render(<Roles />, { wrapper: BrowserRouter });
            const navigation = screen.getByRole("navigation");

            expect(navigation).toBeInTheDocument();
        });
    });

    describe("form", () => {
        it("should exist for 'login form' and 'search page form' on load", () => {
            render(<Roles />, { wrapper: BrowserRouter });
            const loginForm = screen.getByRole("form", {
                name: "Login form",
            });
            const searchPageForm = screen.getByRole("form", {
                name: "Search page form",
            });

            expect(loginForm).toBeInTheDocument();
            expect(searchPageForm).toBeInTheDocument();
        });
    });

    describe("term using <dfn> element", () => {
        it("should exist on load", () => {
            render(<Roles />, { wrapper: BrowserRouter });
            const htmlTerm = screen.getByRole("term", {
                name: "HTML",
            });

            expect(htmlTerm).toBeInTheDocument();
        });
    });

    describe("term using <dt> element", () => {
        it("should exist on load", () => {
            render(<Roles />, { wrapper: BrowserRouter });
            const coffeeTerm = screen.getByRole("term", {
                name: "Coffee",
            });
            const milkTerm = screen.getByRole("term", {
                name: "Milk",
            });

            expect(coffeeTerm).toBeInTheDocument();
            expect(milkTerm).toBeInTheDocument();
        });
    });

    describe("definition", () => {
        it("should exist on load", () => {
            render(<Roles />, { wrapper: BrowserRouter });
            const blackHotDrinkDefinition = screen.getByRole("definition", {
                name: "Black hot drink",
            });
            const whiteColdDrinkDefinition = screen.getByRole("definition", {
                name: "White cold drink",
            });

            expect(blackHotDrinkDefinition).toBeInTheDocument();
            expect(whiteColdDrinkDefinition).toBeInTheDocument();
        });
    });

    describe("list assigned to <dl> element", () => {
        it("should exist on load", () => {
            render(<Roles />, { wrapper: BrowserRouter });
            const drinksList = screen.getByRole("list", {
                name: "Drinks list",
            });

            expect(drinksList).toBeInTheDocument();
        });
    });

    describe("list", () => {
        it("should exist on load", () => {
            render(<Roles />, { wrapper: BrowserRouter });
            const superheroesList = screen.getByRole("list", {
                name: "Superheroes",
            });
            const fruitsList = screen.getByRole("list", {
                name: "Fruits",
            });

            expect(superheroesList).toBeInTheDocument();
            expect(fruitsList).toBeInTheDocument();
        });
    });

    describe("listitem", () => {
        it("should have 3 items in superheroes and fruits", () => {
            render(<Roles />, { wrapper: BrowserRouter });
            const superheroesList = screen.getByRole("list", {
                name: "Superheroes",
            });
            const fruitsList = screen.getByRole("list", {
                name: "Fruits",
            });

            const superheroes =
                within(superheroesList).getAllByRole("listitem");
            const fruits = within(fruitsList).getAllByRole("listitem");

            expect(superheroes.length).toBe(3);
            expect(fruits.length).toBe(3);
        });
    });

    describe("blockquote", () => {
        it("should exist on load", () => {
            render(<Roles />, { wrapper: BrowserRouter });
            const blockquote = screen.getByRole("blockquote");

            expect(blockquote).toBeInTheDocument();
        });
    });

    describe("caption", () => {
        it("should exist on load", () => {
            render(<Roles />, { wrapper: BrowserRouter });
            const caption = screen.getByRole("caption");

            expect(caption).toBeInTheDocument();
        });
    });

    describe("strong", () => {
        it("should exist on load", () => {
            render(<Roles />, { wrapper: BrowserRouter });
            const strongText = screen.getByRole("strong");

            expect(strongText).toBeInTheDocument();
        });
    });

    describe("emphasis", () => {
        it("should exist on load", () => {
            render(<Roles />, { wrapper: BrowserRouter });
            const emphasisText = screen.getByRole("emphasis");

            expect(emphasisText).toBeInTheDocument();
        });
    });

    describe("meter", () => {
        it("should exist on load", () => {
            render(<Roles />, { wrapper: BrowserRouter });
            const meter = screen.getByRole("meter", {
                name: "Fuel level",
            });

            expect(meter).toBeInTheDocument();
        });
    });
});
