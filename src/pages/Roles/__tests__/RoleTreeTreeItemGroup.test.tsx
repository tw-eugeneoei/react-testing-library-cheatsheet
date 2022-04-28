import { render, screen, cleanup, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { RoleTreeTreeItemGroup } from "../RoleTreeTreeItemGroup";

describe("tree, treeitem and group", () => {
    afterEach(cleanup);

    describe("tree and treeitem", () => {
        it("should exist on load", () => {
            render(<RoleTreeTreeItemGroup />);
            const tree = screen.getByRole("tree");
            const treeitems = screen.getAllByRole("treeitem");

            expect(tree).toBeInTheDocument();
            expect(treeitems.length).toBe(2);
        });
    });

    describe("nested treeitems", () => {
        it("should display 1 treeitem within a group when 'Applications' is clicked", async () => {
            render(<RoleTreeTreeItemGroup />);

            const applicationsTreeitem = screen.getByRole("treeitem", {
                name: "Applications",
            });

            const applicationText = screen.getByText("Applications");
            userEvent.click(applicationText);

            const applicationsGroup = await within(
                applicationsTreeitem
            ).findByRole("group");
            const applicationsGroupTreeItems =
                within(applicationsGroup).getAllByRole("treeitem");

            expect(applicationsGroupTreeItems.length).toBe(1);
        });
    });

    describe("double nested treeitems", () => {
        it("should display 1 nested treeitem within group when 'Documents' and 'MUI' are clicked sequentially", async () => {
            render(<RoleTreeTreeItemGroup />);

            const documentsTreeitem = screen.getByRole("treeitem", {
                name: "Documents",
            });

            const documentsText = screen.getByText("Documents");
            userEvent.click(documentsText);

            const documentsGroup = await within(documentsTreeitem).findByRole(
                "group"
            );
            const muiTreeitem = within(documentsGroup).getByRole("treeitem", {
                name: "MUI",
            });
            const muiText = within(documentsGroup).getByText("MUI");
            userEvent.click(muiText);

            const muiGroup = await within(muiTreeitem).findByRole("group");
            const muiGroupTreeitems = within(muiGroup).getAllByRole("treeitem");

            expect(muiGroupTreeitems.length).toBe(1);
        });
    });
});
