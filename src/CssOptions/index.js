import React from "react";

/*
  TODO: import and render the presentational components
  needed to finish decomposing our app into small react components,
  each of which is responsible for a small, simple part of the UI
*/

import CssOptionsList from "./CssOptionsList";
import SelectedCssOption from "./SelectedCssOption";

const CssOptions = (props) => (
  <div>
    <h2>CSS Color Options</h2>
    <div className="color-options-row"></div>
    <CssOptionsList selectColor={props.selectColor} />
    <SelectedCssOption
      palette={props.palette}
      selectedColor={props.selectedColor}
      addToPalette={props.addToPalette}
    />
  </div>
);

export default CssOptions;
