/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { TreeView, TreeItem } from "@mui/lab";
import { ExpandMore, ChevronRight } from "@mui/icons-material";
import { Grid, Box } from "@mui/material";
import tree from "./assets/tree.png";
import treeitem from "./assets/treeitem.png";
import group from "./assets/group.png";

const blockquote = css`
    font-style: italic;
    font-size: 20px;
`;

const image = css`
    width: 100%;
`;

const RoleTreeTreeItemGroup = () => {
    return (
        <Box>
            <Box my={3}>
                According to{" "}
                <a
                    href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/tree_role"
                    target="_blank"
                    rel="noreferrer"
                >
                    MDN
                </a>
                ,
                <blockquote
                    cite="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/tree_role"
                    css={blockquote}
                >
                    A tree widget is a hierarchical list with parent and child
                    nodes that can expand and collapse. Any item in the
                    hierarchy may have child tree items, set with
                    role="treeitem". Tree items that have children can be
                    expanded or collapsed, showing and hiding their children.
                </blockquote>
            </Box>
            <p>
                This example below is taken from Material UI. Original example
                can be found{" "}
                <a
                    href="https://mui.com/material-ui/react-tree-view/#basic-tree-view"
                    target="_blank"
                    rel="noreferrer"
                >
                    here
                </a>
                .
            </p>
            <hr></hr>
            <TreeView
                aria-label="file system navigator"
                defaultCollapseIcon={<ExpandMore />}
                defaultExpandIcon={<ChevronRight />}
                sx={{
                    flexGrow: 1,
                    maxWidth: 400,
                    overflowY: "auto",
                }}
            >
                <TreeItem nodeId="1" label="Applications">
                    <TreeItem nodeId="2" label="Calendar" />
                </TreeItem>
                <TreeItem nodeId="3" label="Documents">
                    <TreeItem nodeId="4" label="OSS" />
                    <TreeItem nodeId="5" label="MUI">
                        <TreeItem nodeId="6" label="index.js" />
                    </TreeItem>
                </TreeItem>
            </TreeView>
            <hr></hr>
            <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                    <figure>
                        <img src={tree} alt="tree-role" css={image} />
                        <figcaption>Image 1: "tree" role</figcaption>
                    </figure>
                </Grid>
                <Grid item xs={12} md={6}>
                    <figure>
                        <img src={treeitem} alt="treeitem-role" css={image} />
                        <figcaption>Image 2: "treeitem" role</figcaption>
                    </figure>
                </Grid>
            </Grid>
            <p>
                Inspecting the elements, the <code>&lt;TreeView&gt;</code> and{" "}
                <code>&lt;TreeItem&gt;</code>
                components are assigned the roles <b>"tree"</b> and{" "}
                <b>"treeitem"</b> respectively. These components are made up of
                native elements such as <code>&lt;ul&gt;</code> and{" "}
                <code>&lt;li&gt;</code>
            </p>
            <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                    <figure>
                        <img src={group} alt="group-role" css={image} />
                        <figcaption>Image 3: "group" role</figcaption>
                    </figure>
                </Grid>
            </Grid>
            <p>
                And the nested <code>&lt;TreeItem&gt;</code> are grouped
                together using <b>"role"</b>.
            </p>
        </Box>
    );
};

export { RoleTreeTreeItemGroup };
