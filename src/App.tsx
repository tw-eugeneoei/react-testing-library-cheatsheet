/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Routes, Route, Navigate, Link } from "react-router-dom";

// import { PATHS } from "./constants/paths";
// import { Home } from "./pages/Home/Home";
// import { MultipleMaterialUiSelect } from "./components/Dropdown/MaterialUiSelect/MultipleMaterialUiSelect";
// import { MaterialUiSelect } from "./components/Dropdown/MaterialUiSelect/MaterialUiSelect";
// import { HtmlSelect } from "./components/Dropdown/HtmlSelect/HtmlSelect";
// import { MultipleHtmlSelect } from "./components/Dropdown/HtmlSelect/MultipleHtmlSelect";
// import { CheckboxInput } from "./components/Input/CheckboxInput/CheckboxInput";
// import { MultipleCheckboxInputs } from "./components/Input/CheckboxInput/MultipleCheckboxInputs";
// import { ControlledCheckboxInput } from "./components/Input/CheckboxInput/ControlledCheckboxInput";
// import { NumberInput } from "./components/Input/NumberInput/NumberInput";
// import { MultipleNumberInputs } from "./components/Input/NumberInput/MultipleNumberInputs";
// import { RadioInput } from "./components/Input/RadioInput/RadioInput";
// import { MultipleRadioInputs } from "./components/Input/RadioInput/MultipleRadioInputs";
// import { MultipleRadioGroups } from "./components/Input/RadioInput/MultipleRadioGroups";
// import { MultipleControlledRadioInputs } from "./components/Input/RadioInput/MultipleControlledRadioInputs";
// import { TextInput } from "./components/Input/TextInput/TextInput";
// import { MultipleTextInputs } from "./components/Input/TextInput/MultipleTextInputs";
// import { ControlledTextInput } from "./components/Input/TextInput/ControlledTextInput";
// import { RangeInput } from "./components/Input/RangeInput/RangeInput";
// import { MultipleRangeInput } from "./components/Input/RangeInput/MultipleRangeInput";
import { Roles } from "./pages/Roles/Roles";
import { RoleTablistTabTabPanel } from "./pages/Roles/RoleTablistTabTabPanel";
import { RoleTreeTreeItemGroup } from "./pages/Roles/RoleTreeTreeItemGroup";
import { RoleRadioGroup } from "./pages/Roles/RoleRadioGroup";
import { RoleTable } from "./pages/Roles/RoleTable";

const link = css`
    color: black;
`;

const App = () => {
    return (
        <div>
            <Link to="/" css={link}>
                <h1>Testing Library ??Cheatsheet??</h1>
            </Link>
            <Routes>
                {/* <Route
                    path={PATHS.input.checkbox.single}
                    element={<CheckboxInput />}
                />
                <Route
                    path={PATHS.input.checkbox.multiple}
                    element={<MultipleCheckboxInputs />}
                />
                <Route
                    path={PATHS.input.checkbox.controlled}
                    element={<ControlledCheckboxInput />}
                />
                <Route
                    path={PATHS.input.number.single}
                    element={<NumberInput />}
                />
                <Route
                    path={PATHS.input.number.multiple}
                    element={<MultipleNumberInputs />}
                />
                <Route
                    path={PATHS.input.radio.single}
                    element={<RadioInput />}
                />
                <Route
                    path={PATHS.input.radio.multiple}
                    element={<MultipleRadioInputs />}
                />
                <Route
                    path={PATHS.input.radio.multipleGroups}
                    element={<MultipleRadioGroups />}
                />
                <Route
                    path={PATHS.input.radio.multipleControlled}
                    element={<MultipleControlledRadioInputs />}
                />
                <Route path={PATHS.input.text.single} element={<TextInput />} />
                <Route
                    path={PATHS.input.text.multiple}
                    element={<MultipleTextInputs />}
                />
                <Route
                    path={PATHS.input.text.controlled}
                    element={<ControlledTextInput />}
                />
                <Route
                    path={PATHS.input.range.single}
                    element={<RangeInput />}
                />
                <Route
                    path={PATHS.input.range.multiple}
                    element={<MultipleRangeInput />}
                />
                <Route
                    path={PATHS.dropdown.native.single}
                    element={<HtmlSelect />}
                />
                <Route
                    path={PATHS.dropdown.native.multiple}
                    element={<MultipleHtmlSelect />}
                />
                <Route
                    path={PATHS.dropdown.materialUi.single}
                    element={<MaterialUiSelect />}
                />
                <Route
                    path={PATHS.dropdown.materialUi.multiple}
                    element={<MultipleMaterialUiSelect />}
                />
                <Route path="/" element={<Home />} />*/}
                <Route
                    path="/roles/tablist-tab-tabpanel"
                    element={<RoleTablistTabTabPanel />}
                />
                <Route
                    path="/roles/tree-treeitem-group"
                    element={<RoleTreeTreeItemGroup />}
                />
                <Route path="/roles/radiogroup" element={<RoleRadioGroup />} />
                <Route path="/roles/table" element={<RoleTable />} />
                <Route path="/" element={<Roles />} />
                <Route path="*" element={<Navigate to="/" replace />}></Route>
            </Routes>
        </div>
    );
};

export default App;
