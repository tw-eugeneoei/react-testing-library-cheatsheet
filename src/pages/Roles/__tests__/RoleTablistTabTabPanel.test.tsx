import { render, screen, cleanup } from "@testing-library/react";
import { RoleTablistTabTabPanel } from "../RoleTablistTabTabPanel";

describe("Roles", () => {
    afterEach(cleanup);

    describe("tablist, tab and tabPanel", () => {
        it("should exist on load", () => {
            render(<RoleTablistTabTabPanel />);
            const tablist = screen.getByRole("tablist");
            const tabs = screen.getAllByRole("tab");
            const tabPanelOne = screen.getByRole("tabpanel", {
                name: "Tabpanel One",
            });

            expect(tablist).toBeInTheDocument();
            expect(tabs.length).toBe(3);
            expect(tabPanelOne).toBeInTheDocument();
        });
    });
});
