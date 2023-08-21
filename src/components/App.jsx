// import React, { useState } from "react";
// import "./App.css"; // Import your CSS file

// function Tooltip({ text, imageUrl, textColor, imageWidth, imageHeight, width }) {
//   return (
//     <div className="tooltip" style={{ width: width }}>
//       <div className="tooltip-text" style={{ color: textColor }}>
//         <img
//           src={imageUrl}
//           alt="Tooltip Image"
//           style={{ width: imageWidth, height: imageHeight }}
//         />
//         {text}
//       </div>
//       <div className="tooltip-image">
//         {/* <img
//           src={imageUrl}
//           alt="Tooltip Image"
//           style={{ width: imageWidth, height: imageHeight }}
//         /> */}
//       </div>
//     </div>
//   );
// }

// function App() {
//   const [IsVisible1, SetVisible1] = useState(false);
//   const [tooltipButtonContainerColor, setTooltipButtonContainerColor] = useState("#f7f7f7");
//   const [cursorSize, setCursorSize] = useState("medium");
//   const [tooltipTextColor, setTooltipTextColor] = useState("#000000");
//   const [selectedButton, setSelectedButton] = useState(null);
//   const [selectedButtonData, setSelectedButtonData] = useState({
//     tooltip: "",
//     padding: "0",
//     width: "200px",
//   });
//   const initialButtonTooltips = {
//     button1: "Tooltip-1* This is Button 1",
//     button2: "Tooltip-2* This is Button 2",
//     button3: "Tooltip-3* This is Button 3",
//     button4: "Tooltip-4* This is Button 4",
//     button5: "Tooltip-5* This is Button 5",
//   };
//   const [buttonTooltips, setButtonTooltips] = useState(initialButtonTooltips);
//   const [buttonPaddings, setButtonPaddings] = useState({
//     button1: "0",
//     button2: "0",
//     button3: "0",
//     button4: "0",
//     button5: "0",
//   });
//   const [darkMode, setDarkMode] = useState(false);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [imageWidth, setImageWidth] = useState("25%");
//   const [imageHeight, setImageHeight] = useState("10%");
//   const [tooltipWidth, setTooltipWidth] = useState("200px");

//   function handleTooltipToggle(setVisibleFunction) {
//     return () => {
//       setVisibleFunction((state) => !state);
//     };
//   }

//   function handleContainerColorChange(event) {
//     setTooltipButtonContainerColor(event.target.value);
//   }

//   function handleCursorSizeChange(event) {
//     setCursorSize(event.target.value);
//   }

//   function handleDropdownSelect(event) {
//     const selectedButton = event.target.value;
//     setSelectedButton(selectedButton);
//     setSelectedButtonData({
//       tooltip: buttonTooltips[selectedButton],
//       padding: buttonPaddings[selectedButton],
//       width: selectedButtonData.width,
//     });
//   }

//   function handleDropdownTooltipChange(event) {
//     const tooltip = event.target.value;
//     setSelectedButtonData((prevData) => ({
//       ...prevData,
//       tooltip: tooltip,
//     }));
//     setButtonTooltips((prevTooltips) => ({
//       ...prevTooltips,
//       [selectedButton]: tooltip,
//     }));
//   }

//   function handleDropdownPaddingChange(event) {
//     const padding = event.target.value;
//     setSelectedButtonData((prevData) => ({
//       ...prevData,
//       padding: padding,
//     }));
//     setButtonPaddings((prevPaddings) => ({
//       ...prevPaddings,
//       [selectedButton]: padding,
//     }));
//   }

//   function handleTooltipWidthChange(event) {
//     const width = event.target.value;
//     setSelectedButtonData((prevData) => ({
//       ...prevData,
//       width: width,
//     }));
//   }

//   function handleTooltipTextColorChange(event) {
//     setTooltipTextColor(event.target.value);
//   }

//   function toggleDarkMode() {
//     setDarkMode((prevDarkMode) => !prevDarkMode);
//   }

//   return (
//     <div className={`App ${darkMode ? "dark-mode" : ""}`} style={{ cursor: cursorSize }}>
//       <div className="dark-mode-toggle">
//         <label>Dark Mode🌗:</label>
//         <input
//           type="checkbox"
//           checked={darkMode}
//           onChange={toggleDarkMode}
//         />
//       </div>
      
//       <div className={`App-container ${darkMode ? "dark-mode" : ""}`}>
//         <h1>React Tooltip</h1>
//         <div className="con">
//           <div className="form-co">

//              <div className="dropdown-form">
//               <label htmlFor="buttonDropdown"> Target Button:</label>
//               <select
//                 id="buttonDropdown"
//                 value={selectedButton || ""}
//                 onChange={handleDropdownSelect}
//               >
//                 <option value="" disabled>
//                  select a button
//                 </option>
//                 {Object.keys(initialButtonTooltips).map((buttonKey) => (
//                   <option key={buttonKey} value={buttonKey}>
//                     {buttonKey}
//                   </option>
//                 ))}
//               </select>
//             </div>

//              <div className="dropdown">
//             {selectedButton && (
//               <div className="dropdown-form">
//                 <label htmlFor="buttonDropdownTooltip">Tooltip Text:</label>
//                 <input
//                   type="text"
//                   id="buttonDropdownTooltip"
//                   value={selectedButtonData.tooltip}
//                   onChange={handleDropdownTooltipChange}
//                 />
//               </div>
//             )}
//             {selectedButton && (
//               <div className="dropdown-form">
//                 <label htmlFor="buttonDropdownPadding">Padding:</label>
//                 <input
//                   type="text"
//                   id="buttonDropdownPadding"
//                   value={selectedButtonData.padding}
//                   onChange={handleDropdownPaddingChange}
//                 />
//               </div>
//               )}
//               </div>

//             {/* <div className="color-form">
//               <label htmlFor="containerColorInput">Background Color:</label>
//               <input
//                 type="color"
//                 id="containerColorInput"
//                 value={tooltipButtonContainerColor}
//                 onChange={handleContainerColorChange}
//               />
//             </div> */}

//             <div className="color-form">
//   <label htmlFor="containerColorInput">Background Color:</label>
//   <div className="color-input-box">
//     <input
//       type="color"
//       id="containerColorInput"
//       value={tooltipButtonContainerColor}
//       onChange={handleContainerColorChange}
//     />
//   </div>
// </div>
//               <div className="tooltip-text-color-form">
//               <label htmlFor="tooltipTextColorInput">Change Tooltip Text Color:</label>
//               <div className="color-input-box">
//               <input
//                 type="color"
//                 id="tooltipTextColorInput"
//                 value={tooltipTextColor}
//                 onChange={handleTooltipTextColorChange}
//               />
//               </div>
//               </div>

//             <div className="dropdown">
//             <div className="cursor-form">
//               <label htmlFor="cursorSizeInput">Change Cursor Size:</label>
//               <select
//                 id="cursorSizeInput"
//                 value={cursorSize}
//                 onChange={handleCursorSizeChange}
//               >
//                 <option value="small">Small</option>
//                 <option value="medium">Medium</option>
//                 <option value="large">Large</option>
//               </select>
//             </div>
           
//             {selectedButton && (
//               <div className="dropdown-form">
//                 <label htmlFor="buttonDropdownWidth">Tooltip Width:</label>
//                 <input
//                   type="text"
//                   id="buttonDropdownWidth"
//                   value={selectedButtonData.width}
//                   onChange={handleTooltipWidthChange}
//                 />
//               </div>
//               )}
//             </div>
            
//             <div className="dropdown">
//               <div className="dropdown-form">
//               <label htmlFor="imageWidthInput">Image Width:</label>
//               <input
//                 type="text"
//                 id="imageWidthInput"
//                 value={imageWidth}
//                 onChange={(e) => setImageWidth(e.target.value)}
//                 /> </div>
//               <div className="dropdown-form">
//               <label htmlFor="imageHeightInput">Image Height:</label>
//               <input
//                 type="text"
//                 id="imageHeightInput"
//                 value={imageHeight}
//                 onChange={(e) => setImageHeight(e.target.value)}
//                 />
//                 </div>
//             </div>
//           </div>
//           <div className="tooltip-button-container" style={{ backgroundColor: tooltipButtonContainerColor, overflow: "hidden" }}>
//             {Object.keys(initialButtonTooltips).map((buttonKey) => (
//               <div key={buttonKey} className={`tooltip-button ${buttonKey}`} style={{ padding: buttonPaddings[buttonKey] }}>
//                 {IsVisible1 && (
//                   <Tooltip
//                     text={buttonTooltips[buttonKey]}
//                     imageUrl="../girl.png" // Provide the actual image path here
//                     textColor={tooltipTextColor} // Pass the tooltip text color value
//                     imageWidth={imageWidth}
//                     imageHeight={imageHeight}
//                     width={selectedButtonData.width}
//                   />
//                 )}
//                 <button onMouseOver={handleTooltipToggle(SetVisible1)}>{buttonKey}</button>
//               </div>
//             ))}
//           </div>
//         </div>
//         <h2>Hover over a button to see the tooltip</h2>
//       </div>
//       {/* Button to open the modal */}
//       {/* <button className="open-modal-button" onClick={() => setIsModalOpen(true)}>
//         Open Tooltip Image Styling
//       </button> */}

//       {/* Modal for tooltip image styling */}
//       {isModalOpen && (
//         <div className="modal-overlay">
//           <div className="modal">
//             {/* Your content for tooltip image styling */}
//             {/* ... (Input fields for image URL, styling options, etc.) */}
//             <button className="close-modal-button" onClick={() => setIsModalOpen(false)}>
//               Close
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default App;

// import React, { useState } from "react";
// import "./App.css"; // Import your CSS file

// function Tooltip({ text, imageUrl, textColor, imageWidth, imageHeight, width }) {
//   return (
//     <div className="tooltip" style={{ width: width }}>
//       <div className="tooltip-text" style={{ color: textColor }}>
//         <img
//           src={imageUrl}
//           alt="Tooltip Image"
//           style={{ width: imageWidth, height: imageHeight }}
//         />
//         {text}
//       </div>
//       <div className="tooltip-image">
//         {/* <img
//           src={imageUrl}
//           alt="Tooltip Image"
//           style={{ width: imageWidth, height: imageHeight }}
//         /> */}
//       </div>
//     </div>
//   );
// }

// function App() {
//   const [IsVisible1, SetVisible1] = useState(false);
//   const [tooltipButtonContainerColor, setTooltipButtonContainerColor] = useState("#f7f7f7");
//   const [cursorSize, setCursorSize] = useState("medium");
//   const [tooltipTextColor, setTooltipTextColor] = useState("#000000");
//   const [selectedButton, setSelectedButton] = useState(null);
//   const [selectedButtonData, setSelectedButtonData] = useState({
//     tooltip: "",
//     padding: "0",
//     width: "200px",
//   });
//   const initialButtonTooltips = {
//     button1: "Tooltip-1* This is Button 1",
//     button2: "Tooltip-2* This is Button 2",
//     button3: "Tooltip-3* This is Button 3",
//     button4: "Tooltip-4* This is Button 4",
//     button5: "Tooltip-5* This is Button 5",
//   };
//   const [buttonTooltips, setButtonTooltips] = useState(initialButtonTooltips);
//   const [buttonPaddings, setButtonPaddings] = useState({
//     button1: "0",
//     button2: "0",
//     button3: "0",
//     button4: "0",
//     button5: "0",
//   });
//   const [darkMode, setDarkMode] = useState(false);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [imageWidth, setImageWidth] = useState("25%");
//   const [imageHeight, setImageHeight] = useState("10%");
//   const [tooltipWidth, setTooltipWidth] = useState("200px");
//   const [cornerRadius, setCornerRadius] = useState("0"); // New state for corner radius

//   function handleTooltipToggle(setVisibleFunction) {
//     return () => {
//       setVisibleFunction((state) => !state);
//     };
//   }

//   function handleContainerColorChange(event) {
//     setTooltipButtonContainerColor(event.target.value);
//   }

//   function handleCursorSizeChange(event) {
//     setCursorSize(event.target.value);
//   }

//   function handleDropdownSelect(event) {
//     const selectedButton = event.target.value;
//     setSelectedButton(selectedButton);
//     setSelectedButtonData({
//       tooltip: buttonTooltips[selectedButton],
//       padding: buttonPaddings[selectedButton],
//       width: selectedButtonData.width,
//     });
//   }

//   function handleDropdownTooltipChange(event) {
//     const tooltip = event.target.value;
//     setSelectedButtonData((prevData) => ({
//       ...prevData,
//       tooltip: tooltip,
//     }));
//     setButtonTooltips((prevTooltips) => ({
//       ...prevTooltips,
//       [selectedButton]: tooltip,
//     }));
//   }

//   function handleDropdownPaddingChange(event) {
//     const padding = event.target.value;
//     setSelectedButtonData((prevData) => ({
//       ...prevData,
//       padding: padding,
//     }));
//     setButtonPaddings((prevPaddings) => ({
//       ...prevPaddings,
//       [selectedButton]: padding,
//     }));
//   }

//   function handleTooltipWidthChange(event) {
//     const width = event.target.value;
//     setSelectedButtonData((prevData) => ({
//       ...prevData,
//       width: width,
//     }));
//   }

//   function handleTooltipTextColorChange(event) {
//     setTooltipTextColor(event.target.value);
//   }

//   function toggleDarkMode() {
//     setDarkMode((prevDarkMode) => !prevDarkMode);
//   }

//   function handleCornerRadiusChange(event) {
//     setCornerRadius(event.target.value);
//   }

//   return (
//     <div className={`App ${darkMode ? "dark-mode" : ""}`} style={{ cursor: cursorSize }}>
//       <div className="dark-mode-toggle">
//         <label>Dark Mode🌗:</label>
//         <input
//           type="checkbox"
//           checked={darkMode}
//           onChange={toggleDarkMode}
//         />
//       </div>
      
//       <div className={`App-container ${darkMode ? "dark-mode" : ""}`}>
//         <h1>React Tooltip</h1>
//         <div className="con">
//           <div className="form-co">
//              <div className="dropdown-form">
//               <label htmlFor="buttonDropdown"> Target Button:</label>
//               <select
//                 id="buttonDropdown"
//                 value={selectedButton || ""}
//                 onChange={handleDropdownSelect}
//               >
//                 <option value="" disabled>
//                  select a button
//                 </option>
//                 {Object.keys(initialButtonTooltips).map((buttonKey) => (
//                   <option key={buttonKey} value={buttonKey}>
//                     {buttonKey}
//                   </option>
//                 ))}
//               </select>
//             </div>

//             <div className="dropdown">
//               {selectedButton && (
//                 <div className="dropdown-form">
//                   <label htmlFor="buttonDropdownTooltip">Tooltip Text:</label>
//                   <input
//                     type="text"
//                     id="buttonDropdownTooltip"
//                     value={selectedButtonData.tooltip}
//                     onChange={handleDropdownTooltipChange}
//                   />
//                 </div>
//               )}
//               {selectedButton && (
//                 <div className="dropdown-form">
//                   <label htmlFor="buttonDropdownPadding">Padding:</label>
//                   <input
//                     type="text"
//                     id="buttonDropdownPadding"
//                     value={selectedButtonData.padding}
//                     onChange={handleDropdownPaddingChange}
//                   />
//                 </div>
//               )}
//             </div>

//             <div className="color-form">
//               <label htmlFor="containerColorInput">Background Color:</label>
//               <div className="color-input-box">
//                 <input
//                   type="color"
//                   id="containerColorInput"
//                   value={tooltipButtonContainerColor}
//                   onChange={handleContainerColorChange}
//                 />
//               </div>
//             </div>

//             <div className="tooltip-text-color-form">
//               <label htmlFor="tooltipTextColorInput">Change Tooltip Text Color:</label>
//               <div className="color-input-box">
//                 <input
//                   type="color"
//                   id="tooltipTextColorInput"
//                   value={tooltipTextColor}
//                   onChange={handleTooltipTextColorChange}
//                 />
//               </div>
//             </div>

//             <div className="cursor-form">
//               <label htmlFor="cursorSizeInput">Change Cursor Size:</label>
//               <select
//                 id="cursorSizeInput"
//                 value={cursorSize}
//                 onChange={handleCursorSizeChange}
//               >
//                 <option value="small">Small</option>
//                 <option value="medium">Medium</option>
//                 <option value="large">Large</option>
//               </select>
//             </div>

//             {selectedButton && (
//               <div className="dropdown-form">
//                 <label htmlFor="buttonDropdownWidth">Tooltip Width:</label>
//                 <input
//                   type="text"
//                   id="buttonDropdownWidth"
//                   value={selectedButtonData.width}
//                   onChange={handleTooltipWidthChange}
//                 />
//               </div>
//             )}
            
//             <div className="dropdown">
//               <div className="dropdown-form">
//                 <label htmlFor="imageWidthInput">Image Width:</label>
//                 <input
//                   type="text"
//                   id="imageWidthInput"
//                   value={imageWidth}
//                   onChange={(e) => setImageWidth(e.target.value)}
//                 />
//               </div>
//               <div className="dropdown-form">
//                 <label htmlFor="imageHeightInput">Image Height:</label>
//                 <input
//                   type="text"
//                   id="imageHeightInput"
//                   value={imageHeight}
//                   onChange={(e) => setImageHeight(e.target.value)}
//                 />
//               </div>
//             </div>
            
//             <div className="cornerRadius-form">
//               <label htmlFor="cornerRadiusInput">Mobile Radius:</label>
//               <input
//                 type="text"
//                 id="cornerRadiusInput"
//                 value={cornerRadius}
//                 onChange={handleCornerRadiusChange}
//               />
//             </div>
//           </div>

//           <div className="tooltip-button-container" style={{ backgroundColor: tooltipButtonContainerColor, borderRadius: cornerRadius + "px", overflow: "hidden" }}>
//             {Object.keys(initialButtonTooltips).map((buttonKey) => (
//               <div key={buttonKey} className={`tooltip-button ${buttonKey}`} style={{ padding: buttonPaddings[buttonKey] }}>
//                 {IsVisible1 && (
//                   <Tooltip
//                     text={buttonTooltips[buttonKey]}
//                     imageUrl="../girl.png" // Provide the actual image path here
//                     textColor={tooltipTextColor} // Pass the tooltip text color value
//                     imageWidth={imageWidth}
//                     imageHeight={imageHeight}
//                     width={selectedButtonData.width}
//                   />
//                 )}
//                 <button onMouseOver={handleTooltipToggle(SetVisible1)}>{buttonKey}</button>
//               </div>
//             ))}
//           </div>
//         </div>
//         <h2>Hover over a button to see the tooltip</h2>
//       </div>

//       {/* Button to open the modal */}
//       {/* <button className="open-modal-button" onClick={() => setIsModalOpen(true)}>
//         Open Tooltip Image Styling
//       </button> */}

//       {/* Modal for tooltip image styling */}
//       {isModalOpen && (
//         <div className="modal-overlay">
//           <div className="modal">
//             {/* Your content for tooltip image styling */}
//             {/* ... (Input fields for image URL, styling options, etc.) */}
//             <button className="close-modal-button" onClick={() => setIsModalOpen(false)}>
//               Close
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default App;




import React, { useState } from "react";
import "./App.css"; // Import your CSS file

function Tooltip({ text, imageUrl, textColor, imageWidth, imageHeight, width, cornerRadius }) {
  return (
    <div className="tooltip" style={{ width: width, borderRadius: cornerRadius + "px" }}>
      <div className="tooltip-text" style={{ color: textColor }}>
        {text}
      </div>
      <div className="tooltip-image">
        <img
          src={imageUrl}
          alt="Tooltip Image"
          style={{ width: imageWidth, height: imageHeight }}
        />
      </div>
    </div>
  );
}

function App() {
  const [IsVisible1, SetVisible1] = useState(false);
  const [tooltipButtonContainerColor, setTooltipButtonContainerColor] = useState("#f7f7f7");
  const [cursorSize, setCursorSize] = useState("medium");
  const [tooltipTextColor, setTooltipTextColor] = useState("#000000");
  const [selectedButton, setSelectedButton] = useState(null);
  const [selectedButtonData, setSelectedButtonData] = useState({
    tooltip: "",
    padding: "0",
    width: "200px",
  });
  const initialButtonTooltips = {
    button1: "Tooltip-1* This is Button 1",
    button2: "Tooltip-2* This is Button 2",
    button3: "Tooltip-3* This is Button 3",
    button4: "Tooltip-4* This is Button 4",
    button5: "Tooltip-5* This is Button 5",
  };
  const [buttonTooltips, setButtonTooltips] = useState(initialButtonTooltips);
  const [buttonPaddings, setButtonPaddings] = useState({
    button1: "0",
    button2: "0",
    button3: "0",
    button4: "0",
    button5: "0",
  });
  const [darkMode, setDarkMode] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [imageWidth, setImageWidth] = useState("25%");
  const [imageHeight, setImageHeight] = useState("10%");
  const [tooltipWidth, setTooltipWidth] = useState("200px");
  const [cornerRadius, setCornerRadius] = useState("0");

  function handleTooltipToggle(setVisibleFunction) {
    return () => {
      setVisibleFunction((state) => !state);
    };
  }

  function handleContainerColorChange(event) {
    setTooltipButtonContainerColor(event.target.value);
  }

  function handleCursorSizeChange(event) {
    setCursorSize(event.target.value);
  }

  function handleDropdownSelect(event) {
    const selectedButton = event.target.value;
    setSelectedButton(selectedButton);
    setSelectedButtonData({
      tooltip: buttonTooltips[selectedButton],
      padding: buttonPaddings[selectedButton],
      width: selectedButtonData.width,
    });
  }

  function handleDropdownTooltipChange(event) {
    const tooltip = event.target.value;
    setSelectedButtonData((prevData) => ({
      ...prevData,
      tooltip: tooltip,
    }));
    setButtonTooltips((prevTooltips) => ({
      ...prevTooltips,
      [selectedButton]: tooltip,
    }));
  }

  function handleDropdownPaddingChange(event) {
    const padding = event.target.value;
    setSelectedButtonData((prevData) => ({
      ...prevData,
      padding: padding,
    }));
    setButtonPaddings((prevPaddings) => ({
      ...prevPaddings,
      [selectedButton]: padding,
    }));
  }

  function handleTooltipWidthChange(event) {
    const width = event.target.value;
    setSelectedButtonData((prevData) => ({
      ...prevData,
      width: width,
    }));
  }

  function handleTooltipTextColorChange(event) {
    setTooltipTextColor(event.target.value);
  }

  function toggleDarkMode() {
    setDarkMode((prevDarkMode) => !prevDarkMode);
  }

  function handleCornerRadiusChange(event) {
    setCornerRadius(event.target.value);
  }

  return (
    <div className={`App ${darkMode ? "dark-mode" : ""}`} style={{ cursor: cursorSize }}>
      <div className="dark-mode-toggle">
        <label>Dark Mode🌗:</label>
        <input
          type="checkbox"
          checked={darkMode}
          onChange={toggleDarkMode}
        />
      </div>
      
      <div className={`App-container ${darkMode ? "dark-mode" : ""}`}>
        <h1>React Tooltip</h1>
        <div className="con">
          <div className="form-co">

             <div className="dropdown-form">
              <label htmlFor="buttonDropdown"> Target Button</label>
              <div className="cursor">
              <select
                id="buttonDropdown"
                value={selectedButton || ""}
                onChange={handleDropdownSelect}
              >
                <option value="" disabled>
                 select a button
                </option>
                {Object.keys(initialButtonTooltips).map((buttonKey) => (
                  <option key={buttonKey} value={buttonKey}>
                    {buttonKey}
                  </option>
                ))}
                </select>
                </div>
            </div>
            
            <div className="dropdown">
            {selectedButton && (
              <div className="dropdown-form">
                <label htmlFor="buttonDropdownTooltip">Tooltip Text</label>
                <input
                  type="text"
                  id="buttonDropdownTooltip"
                  value={selectedButtonData.tooltip}
                  onChange={handleDropdownTooltipChange}
                />
              </div>
            )}
            {selectedButton && (
              <div className="dropdown-form">
                <label htmlFor="buttonDropdownPadding">Padding</label>
                <input
                  type="text"
                  id="buttonDropdownPadding"
                  value={selectedButtonData.padding}
                  onChange={handleDropdownPaddingChange}
                />
              </div>
              )}
              </div>

            <div className="color-form">
              <label htmlFor="containerColorInput">Background Color</label>
               <div className="color-input-box">
              <input
                type="color"
                id="containerColorInput"
                value={tooltipButtonContainerColor}
                onChange={handleContainerColorChange}
              />
              </div>
              </div>
            <div className="tooltip-text-color-form">
              <label htmlFor="tooltipTextColorInput">Change Tooltip Text Color</label>
              <div className="color-input-box">
              <input
                type="color"
                id="tooltipTextColorInput"
                value={tooltipTextColor}
                onChange={handleTooltipTextColorChange}
              />
              </div>
              </div>
            <div className="dropdown">
            {selectedButton && (
              <div className="dropdown-form">
                <label htmlFor="buttonDropdownWidth">Tooltip Width</label>
                <input
                  type="text"
                  id="buttonDropdownWidth"
                  value={selectedButtonData.width}
                  onChange={handleTooltipWidthChange}
                />
              </div>
            )}
            <div className="dropdown-form">
              <label htmlFor="cornerRadiusInput">Corner Radius</label>
              <input
                type="text"
                id="cornerRadiusInput"
                value={cornerRadius}
                onChange={handleCornerRadiusChange}
              />
              </div>
            </div>
            <div className="dropdown">
            <div className="dropdown-form">
              <label htmlFor="imageWidthInput">Image Width</label>
              <input
                type="text"
                id="imageWidthInput"
                value={imageWidth}
                onChange={(e) => setImageWidth(e.target.value)}
                /></div>
              <div className="dropdown-form">
              <label htmlFor="imageHeightInput">Image Height</label>
              <input
                type="text"
                id="imageHeightInput"
                value={imageHeight}
                onChange={(e) => setImageHeight(e.target.value)}
              /></div>
            
            </div>
          </div>
          
          <div className="tooltip-button-container" style={{ backgroundColor: tooltipButtonContainerColor, overflow: "hidden" }}>
            {Object.keys(initialButtonTooltips).map((buttonKey) => (
              <div key={buttonKey} className={`tooltip-button ${buttonKey}`} style={{ padding: buttonPaddings[buttonKey] }}>
                {IsVisible1 && (
                  <Tooltip
                    text={buttonTooltips[buttonKey]}
                    imageUrl="../girl.png"
                    textColor={tooltipTextColor}
                    imageWidth={imageWidth}
                    imageHeight={imageHeight}
                    width={selectedButtonData.width}
                    cornerRadius={cornerRadius}
                  />
                )}
                <button onMouseOver={handleTooltipToggle(SetVisible1)}>{buttonKey}</button>
              </div>
            ))}
          </div>
        </div>
        <h2>Hover over a button to see the tooltip</h2>
      </div>
      {/* Button to open the modal */}
      {/* <button className="open-modal-button" onClick={() => setIsModalOpen(true)}>
        Open Tooltip Image Styling
      </button> */}

      {/* Modal for tooltip image styling */}
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal">
            {/* Your content for tooltip image styling */}
            {/* ... (Input fields for image URL, styling options, etc.) */}
            <button className="close-modal-button" onClick={() => setIsModalOpen(false)}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;

