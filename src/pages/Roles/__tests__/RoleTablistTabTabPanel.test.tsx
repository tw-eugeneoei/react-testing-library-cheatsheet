import { render, screen, cleanup } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { RoleTablistTabTabPanel } from "../RoleTablistTabTabPanel";

describe("tablist, tab and tabPanel", () => {
    afterEach(cleanup);

    it("should exist on load", () => {
        render(<RoleTablistTabTabPanel />);
        const tablist = screen.getByRole("tablist");
        const tabs = screen.getAllByRole("tab");
        const tabPanelOne = screen.getByRole("tabpanel", {
            name: "Tab One",
        });

        expect(tablist).toBeInTheDocument();
        expect(tabs.length).toBe(3);
        expect(tabPanelOne.textContent).toBe("Hello world");
    });

    it("should display 'Avengersssss....assemble' when 'Tab Two' tab is clicked", () => {
        render(<RoleTablistTabTabPanel />);
        const tabTwo = screen.getByRole("tab", {
            name: "Tab Three",
        });

        userEvent.click(tabTwo);
        const tabPanelTwo = screen.getByRole("tabpanel", {
            name: "Tab Three",
        });

        expect(tabPanelTwo.textContent).toBe("Avengersssss....assemble");
    });
});
