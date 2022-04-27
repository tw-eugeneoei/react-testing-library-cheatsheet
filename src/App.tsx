import { Routes, Route } from "react-router-dom";
import { PATHS } from "./constants/paths";
import { Home } from "./pages/Home/Home";
import { MultipleMaterialUiSelect } from "./components/Dropdown/MaterialUiSelect/MultipleMaterialUiSelect";
import { MaterialUiSelect } from "./components/Dropdown/MaterialUiSelect/MaterialUiSelect";
import { HtmlSelect } from "./components/Dropdown/HtmlSelect/HtmlSelect";
import { MultipleHtmlSelect } from "./components/Dropdown/HtmlSelect/MultipleHtmlSelect";
import { CheckboxInput } from "./components/Input/CheckboxInput/CheckboxInput";
import { MultipleCheckboxInputs } from "./components/Input/CheckboxInput/MultipleCheckboxInputs";
import { ControlledCheckboxInput } from "./components/Input/CheckboxInput/ControlledCheckboxInput";
import { NumberInput } from "./components/Input/NumberInput/NumberInput";
import { MultipleNumberInputs } from "./components/Input/NumberInput/MultipleNumberInputs";
import { RadioInput } from "./components/Input/RadioInput/RadioInput";
import { MultipleRadioInputs } from "./components/Input/RadioInput/MultipleRadioInputs";
import { MultipleRadioGroups } from "./components/Input/RadioInput/MultipleRadioGroups";
import { MultipleControlledRadioInputs } from "./components/Input/RadioInput/MultipleControlledRadioInputs";
import { TextInput } from "./components/Input/TextInput/TextInput";
import { MultipleTextInputs } from "./components/Input/TextInput/MultipleTextInputs";
import { ControlledTextInput } from "./components/Input/TextInput/ControlledTextInput";
import { RangeInput } from "./components/Input/RangeInput/RangeInput";

const App = () => {
    return (
        <div>
            <h1>React Testing Library Cheatsheet</h1>
            <Routes>
                <Route
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
                <Route path="/" element={<Home />} />
            </Routes>
        </div>
    );
};

export default App;
