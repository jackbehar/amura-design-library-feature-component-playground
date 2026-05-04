import { useState } from "react";
import { ThemeProvider } from "@mui/material/styles";
import { RadioGroup, FormControlLabel, Box } from "@mui/material";

import CreateCustomTheme from "./theme";
import {
  MUIButton,
  MUICheckbox,
  MUIRadio,
  MUISwitch,
  MUISkeleton,
  MUITooltip,
  MUISlider,
  MUIToken,
  PageHeader,
  ModalBox,
  MUIDrawer,
  Accordian,
  DotStatus,
  ReadMoreReadLess,
  TopSheet,
  ConfigurationCard,
  KnowledgeBaseCard,
  InputField,
  SearchField,
  MUITabs,
  SuggestiveInput,
  MUIAutoSelect,
  ProgressBar,
  PropertyCard,
  RecipeCard,
  MealCard,
  EventCard,
} from "./components";
import { barColors } from "./components/ProgressBar/ProgressBar.types";
import "./App.css";

const theme = CreateCustomTheme({});

const longText =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

function App() {
  const [checkboxChecked, setCheckboxChecked] = useState(false);
  const [radioValue, setRadioValue] = useState("option1");
  const [switchChecked, setSwitchChecked] = useState(false);
  const [sliderValue, setSliderValue] = useState<number>(30);
  const [modalOpen, setModalOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [topSheetOpen, setTopSheetOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const [activeTab, setActiveTab] = useState("Tab 1");
  const [autoSelectValue, setAutoSelectValue] = useState<{
    label: string;
    value: string;
  } | null>(null);

  return (
    <ThemeProvider theme={theme}>
      <div className="app-container">
        <h1 className="main-title">Amura Design Library</h1>
        <p className="subtitle">Component Showcase</p>

        {/* MUIButton Section */}
        <section className="component-section">
          <h2 className="section-title">MUIButton</h2>
          <p className="section-description">
            Styled button component with multiple variants
          </p>
          <div className="component-demo">
            <div className="demo-row">
              <MUIButton variant="contained">Contained</MUIButton>
              <MUIButton variant="outlined">Outlined</MUIButton>
              <MUIButton variant="text">Text</MUIButton>
            </div>
            <div className="demo-row">
              <MUIButton variant="contained" size="small">
                Small
              </MUIButton>
              <MUIButton variant="contained">Medium</MUIButton>
              <MUIButton variant="contained" size="large">
                Large
              </MUIButton>
            </div>
            <div className="demo-row">
              <MUIButton variant="contained" disabled>
                Disabled
              </MUIButton>
            </div>
          </div>
        </section>

        {/* MUICheckbox Section */}
        <section className="component-section">
          <h2 className="section-title">MUICheckbox</h2>
          <p className="section-description">Custom checkbox with SVG icons</p>
          <div className="component-demo">
            <div className="demo-row">
              <label className="demo-label">
                <MUICheckbox
                  checked={checkboxChecked}
                  onChange={(e) => setCheckboxChecked(e.target.checked)}
                />
                <span>Interactive Checkbox</span>
              </label>
            </div>
            <div className="demo-row">
              <label className="demo-label">
                <MUICheckbox checked={true} />
                <span>Checked</span>
              </label>
              <label className="demo-label">
                <MUICheckbox checked={false} />
                <span>Unchecked</span>
              </label>
              <label className="demo-label">
                <MUICheckbox disabled />
                <span>Disabled</span>
              </label>
            </div>
          </div>
        </section>

        {/* MUIRadio Section */}
        <section className="component-section">
          <h2 className="section-title">MUIRadio</h2>
          <p className="section-description">Styled radio button component</p>
          <div className="component-demo">
            <RadioGroup
              value={radioValue}
              onChange={(e) => setRadioValue(e.target.value)}
            >
              <FormControlLabel
                value="option1"
                control={<MUIRadio />}
                label="Option 1"
              />
              <FormControlLabel
                value="option2"
                control={<MUIRadio />}
                label="Option 2"
              />
              <FormControlLabel
                value="option3"
                control={<MUIRadio />}
                label="Option 3"
              />
            </RadioGroup>
          </div>
        </section>

        {/* MUISwitch Section */}
        <section className="component-section">
          <h2 className="section-title">MUISwitch</h2>
          <p className="section-description">
            Toggle switch with custom styling
          </p>
          <div className="component-demo">
            <div className="demo-row">
              <label className="demo-label">
                <MUISwitch
                  checked={switchChecked}
                  onChange={(e) => setSwitchChecked(e.target.checked)}
                />
                <span>Interactive Switch: {switchChecked ? "ON" : "OFF"}</span>
              </label>
            </div>
            <div className="demo-row">
              <label className="demo-label">
                <MUISwitch checked={true} />
                <span>On</span>
              </label>
              <label className="demo-label">
                <MUISwitch checked={false} />
                <span>Off</span>
              </label>
              <label className="demo-label">
                <MUISwitch disabled isGrayWhenDisabled />
                <span>Disabled (Gray)</span>
              </label>
            </div>
          </div>
        </section>

        {/* MUISkeleton Section */}
        <section className="component-section">
          <h2 className="section-title">MUISkeleton</h2>
          <p className="section-description">
            Loading placeholder with custom gradient
          </p>
          <div className="component-demo">
            <div className="demo-row skeleton-demos">
              <div className="skeleton-item">
                <span className="skeleton-label">Text</span>
                <MUISkeleton variant="text" width={200} height={20} />
              </div>
              <div className="skeleton-item">
                <span className="skeleton-label">Rectangular</span>
                <MUISkeleton variant="rectangular" width={200} height={100} />
              </div>
              <div className="skeleton-item">
                <span className="skeleton-label">Circular</span>
                <MUISkeleton variant="circular" width={50} height={50} />
              </div>
            </div>
            <div className="demo-row">
              <div className="skeleton-card">
                <MUISkeleton variant="circular" width={40} height={40} />
                <div className="skeleton-card-content">
                  <MUISkeleton variant="text" width={150} height={16} />
                  <MUISkeleton variant="text" width={100} height={14} />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* MUITooltip Section */}
        <section className="component-section">
          <h2 className="section-title">MUITooltip</h2>
          <p className="section-description">
            Styled tooltip component for hover information
          </p>
          <div className="component-demo">
            <div className="demo-row">
              <MUITooltip title="This is a tooltip!" arrow>
                <span
                  style={{ cursor: "pointer", textDecoration: "underline" }}
                >
                  Hover over me
                </span>
              </MUITooltip>
            </div>
            <div className="demo-row">
              <MUITooltip title="Tooltip on button" arrow placement="top">
                <span>
                  <MUIButton variant="outlined">Button with Tooltip</MUIButton>
                </span>
              </MUITooltip>
              <MUITooltip title="Right placement" arrow placement="right">
                <span
                  style={{ cursor: "pointer", textDecoration: "underline" }}
                >
                  Right tooltip
                </span>
              </MUITooltip>
            </div>
          </div>
        </section>

        {/* MUISlider Section */}
        <section className="component-section">
          <h2 className="section-title">MUISlider</h2>
          <p className="section-description">
            Range slider with custom styling
          </p>
          <div className="component-demo">
            <div
              className="demo-row"
              style={{ flexDirection: "column", gap: "24px" }}
            >
              <div style={{ width: "100%" }}>
                <span className="skeleton-label">
                  Interactive Slider: {sliderValue}
                </span>
                <Box sx={{ padding: "0 16px", marginTop: "16px" }}>
                  <MUISlider
                    value={sliderValue}
                    onChange={(_, value) => setSliderValue(value as number)}
                    min={0}
                    max={100}
                  />
                </Box>
              </div>
              <div style={{ width: "100%" }}>
                <span className="skeleton-label">Slider with Marks</span>
                <Box sx={{ padding: "0 16px", marginTop: "16px" }}>
                  <MUISlider
                    defaultValue={50}
                    marks={[
                      { value: 0, label: "0" },
                      { value: 25, label: "25" },
                      { value: 50, label: "50" },
                      { value: 75, label: "75" },
                      { value: 100, label: "100" },
                    ]}
                    min={0}
                    max={100}
                  />
                </Box>
              </div>
            </div>
          </div>
        </section>

        {/* MUIToken Section */}
        <section className="component-section">
          <h2 className="section-title">MUIToken</h2>
          <p className="section-description">
            Tag/chip component with active and inactive states
          </p>
          <div className="component-demo">
            <div className="demo-row">
              <MUIToken label="Active Token" active />
              <MUIToken label="Inactive Token" active={false} />
              <MUIToken
                label="With Delete"
                active
                onDelete={() => alert("Delete clicked!")}
              />
            </div>
            <div className="demo-row">
              <MUIToken label="Tag 1" active />
              <MUIToken label="Tag 2" active />
              <MUIToken label="Tag 3" active={false} />
              <MUIToken label="Tag 4" active={false} />
            </div>
          </div>
        </section>

        {/* PageHeader Section */}
        <section className="component-section">
          <h2 className="section-title">PageHeader</h2>
          <p className="section-description">
            Header component with back button and actions
          </p>
          <div
            className="component-demo"
            style={{ background: "#f5f5f5", padding: "0" }}
          >
            <PageHeader
              headerContent="Page Title"
              subtitle="Subtitle text"
              handleBack={() => alert("Back clicked!")}
            />
            <PageHeader
              headerContent="With Clear All"
              isClearAll
              clearAllText="Reset"
              handleClearAll={() => alert("Clear all clicked!")}
            />
            <PageHeader headerContent="Simple Header" />
          </div>
        </section>

        {/* ModalBox Section */}
        <section className="component-section">
          <h2 className="section-title">ModalBox</h2>
          <p className="section-description">
            Dialog modal component with customizable buttons
          </p>
          <div className="component-demo">
            <div className="demo-row">
              <MUIButton variant="contained" onClick={() => setModalOpen(true)}>
                Open Modal
              </MUIButton>
            </div>
            <ModalBox
              open={modalOpen}
              modalTitle="Confirmation"
              handleClose={() => setModalOpen(false)}
              buttonConfig={[
                {
                  text: "Cancel",
                  variant: "text",
                  onClick: () => setModalOpen(false),
                },
                {
                  text: "Confirm",
                  variant: "contained",
                  onClick: () => setModalOpen(false),
                },
              ]}
            >
              Are you sure you want to proceed with this action?
            </ModalBox>
          </div>
        </section>

        {/* MUIDrawer Section */}
        <section className="component-section">
          <h2 className="section-title">MUIDrawer</h2>
          <p className="section-description">Bottom sheet drawer component</p>
          <div className="component-demo">
            <div className="demo-row">
              <MUIButton
                variant="contained"
                onClick={() => setDrawerOpen(true)}
              >
                Open Drawer
              </MUIButton>
            </div>
            <div
              style={{
                position: "relative",
                height: "200px",
                overflow: "hidden",
              }}
            >
              <MUIDrawer
                open={drawerOpen}
                anchor="bottom"
                headerTitle="Drawer Title"
                handleClose={() => setDrawerOpen(false)}
              >
                <div style={{ padding: "20px 0" }}>
                  <p>This is the drawer content.</p>
                  <p>You can put any content here.</p>
                </div>
              </MUIDrawer>
            </div>
          </div>
        </section>

        {/* Accordian Section */}
        <section className="component-section">
          <h2 className="section-title">Accordian</h2>
          <p className="section-description">Expandable accordion component</p>
          <div className="component-demo">
            <Accordian accordianTitle="Click to expand">
              <p>
                This is the accordion content that gets revealed when expanded.
              </p>
            </Accordian>
            <Accordian accordianTitle="With Subtitle" subTitle="Extra info">
              <p>Accordion with a subtitle shown on the right side.</p>
            </Accordian>
            <Accordian accordianTitle="Another Section" removeShadow>
              <p>
                This accordion has removeShadow prop enabled for a flat look.
              </p>
            </Accordian>
          </div>
        </section>

        {/* DotStatus Section */}
        <section className="component-section">
          <h2 className="section-title">DotStatus</h2>
          <p className="section-description">
            Notification badge/dot component
          </p>
          <div className="component-demo">
            <div className="demo-row" style={{ gap: "20px" }}>
              <div style={{ textAlign: "center" }}>
                <DotStatus count={3} color="#FF5252" />
                <span
                  style={{
                    display: "block",
                    marginTop: "8px",
                    fontSize: "12px",
                  }}
                >
                  Count: 3
                </span>
              </div>
              <div style={{ textAlign: "center" }}>
                <DotStatus count={15} color="#4CAF50" />
                <span
                  style={{
                    display: "block",
                    marginTop: "8px",
                    fontSize: "12px",
                  }}
                >
                  Count: 15 (shows 9+)
                </span>
              </div>
              <div style={{ textAlign: "center" }}>
                <DotStatus count={5} color="#2196F3" clickable />
                <span
                  style={{
                    display: "block",
                    marginTop: "8px",
                    fontSize: "12px",
                  }}
                >
                  Clickable
                </span>
              </div>
              <div style={{ textAlign: "center" }}>
                <DotStatus markAsUnread color="#FF9800" />
                <span
                  style={{
                    display: "block",
                    marginTop: "8px",
                    fontSize: "12px",
                  }}
                >
                  Unread (no count)
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* ReadMoreReadLess Section */}
        <section className="component-section">
          <h2 className="section-title">ReadMoreReadLess</h2>
          <p className="section-description">
            Expandable text component with character limit
          </p>
          <div className="component-demo">
            <div style={{ maxWidth: "400px" }}>
              <ReadMoreReadLess charLimit={100}>{longText}</ReadMoreReadLess>
            </div>
            <div style={{ maxWidth: "400px", marginTop: "16px" }}>
              <ReadMoreReadLess
                charLimit={50}
                readMoreText="Show more"
                readLessText="Show less"
                ellipsis="..."
              >
                {longText}
              </ReadMoreReadLess>
            </div>
          </div>
        </section>

        {/* TopSheet Section */}
        <section className="component-section">
          <h2 className="section-title">TopSheet</h2>
          <p className="section-description">
            Dropdown sheet from top of container
          </p>
          <div className="component-demo">
            <div className="demo-row">
              <MUIButton
                variant="contained"
                onClick={() => setTopSheetOpen(!topSheetOpen)}
              >
                Toggle TopSheet
              </MUIButton>
            </div>
            <div
              style={{
                position: "relative",
                height: "150px",
                background: "#f5f5f5",
                marginTop: "16px",
              }}
            >
              <TopSheet
                isOpen={topSheetOpen}
                handleClose={() => setTopSheetOpen(false)}
                variant="top"
              >
                <div style={{ padding: "16px" }}>
                  <p style={{ margin: 0 }}>This is a TopSheet content</p>
                  <MUIButton
                    variant="text"
                    onClick={() => setTopSheetOpen(false)}
                  >
                    Close
                  </MUIButton>
                </div>
              </TopSheet>
            </div>
          </div>
        </section>

        {/* ConfigurationCard Section */}
        <section className="component-section">
          <h2 className="section-title">ConfigurationCard</h2>
          <p className="section-description">
            Card component for configuration items
          </p>
          <div
            className="component-demo"
            style={{ background: "#f5f5f5", padding: "0" }}
          >
            <ConfigurationCard
              cardTitle="Dr. John Smith"
              cardCaption="Cardiologist"
              recordTitle="Last updated"
              time="2 hours ago"
              acronym="JS"
            />
            <ConfigurationCard
              cardTitle="Jane Doe"
              cardCaption="Health Coach"
              recordTitle="Active"
              acronym="JD"
              selected
            />
          </div>
        </section>

        {/* KnowledgeBaseCard Section */}
        <section className="component-section">
          <h2 className="section-title">KnowledgeBaseCard</h2>
          <p className="section-description">
            Knowledge base article card with send action
          </p>
          <div
            className="component-demo"
            style={{ background: "#fff", padding: "16px" }}
          >
            <KnowledgeBaseCard
              heading={{ snippet: "How to manage your health goals" }}
              description={{
                snippet:
                  "Learn about setting and tracking your health goals effectively with our comprehensive guide.",
              }}
              tenant={{ snippet: "health" }}
              postId="post-123"
              onSubmit={(tenant: string, postId: string) =>
                alert(`Sending: ${tenant}/${postId}`)
              }
            />
            <KnowledgeBaseCard
              heading={{ snippet: "Nutrition Tips for Better Health" }}
              description={{
                snippet:
                  "Discover the best nutrition practices to improve your overall wellbeing and energy levels throughout the day.",
              }}
              tenant={{ snippet: "nutrition" }}
              postId="post-456"
              onSubmit={(tenant: string, postId: string) =>
                alert(`Sending: ${tenant}/${postId}`)
              }
            />
          </div>
        </section>

        {/* InputField Section */}
        <section className="component-section">
          <h2 className="section-title">InputField</h2>
          <p className="section-description">
            Styled text input with various configurations
          </p>
          <div className="component-demo">
            <div
              className="demo-row"
              style={{
                flexDirection: "column",
                gap: "16px",
                maxWidth: "400px",
              }}
            >
              <InputField
                label="Basic Input"
                placeholder="Enter text..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
              />
              <InputField
                label="With Character Limit"
                placeholder="Max 50 characters"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                characterLimit={50}
              />
              <InputField
                label="Multiline Input"
                placeholder="Enter multiple lines..."
                multiline
                maxRows={4}
              />
              <InputField
                label="Solid Variant"
                placeholder="With solid background"
                solidVariant
              />
            </div>
          </div>
        </section>

        {/* SearchField Section */}
        <section className="component-section">
          <h2 className="section-title">SearchField</h2>
          <p className="section-description">
            Search input with clear button and icons
          </p>
          <div className="component-demo">
            <div
              className="demo-row"
              style={{
                flexDirection: "column",
                gap: "16px",
                maxWidth: "400px",
              }}
            >
              <SearchField
                placeholder="Search..."
                value={searchValue}
                handleSearch={(val) => setSearchValue(val)}
              />
              <SearchField
                placeholder="Input variant"
                isInputVariant
                handleSearch={(val) => console.log("Searching:", val)}
              />
            </div>
          </div>
        </section>

        {/* MUITabs Section */}
        <section className="component-section">
          <h2 className="section-title">MUITabs</h2>
          <p className="section-description">Tab navigation component</p>
          <div className="component-demo">
            <div style={{ maxWidth: "500px" }}>
              <MUITabs
                tabOptions={["Tab 1", "Tab 2", "Tab 3"]}
                activeTab={activeTab}
                onTabChange={(tab) => setActiveTab(tab)}
              />
              <div
                style={{
                  padding: "20px",
                  background: "#f5f5f5",
                  marginTop: "8px",
                }}
              >
                Content for: {activeTab}
              </div>
            </div>
          </div>
        </section>

        {/* SuggestiveInput Section */}
        <section className="component-section">
          <h2 className="section-title">SuggestiveInput</h2>
          <p className="section-description">
            Search input with dropdown suggestions
          </p>
          <div className="component-demo">
            <div style={{ maxWidth: "400px" }}>
              <SuggestiveInput
                label="Search with suggestions"
                placeholder="Type to search..."
                onInputChange={(e, val) => console.log("Input:", val)}
                onSearchAPICall={async (searchValue) => {
                  // Simulated API response
                  return [
                    { label: `Result for "${searchValue}" - 1`, value: "1" },
                    { label: `Result for "${searchValue}" - 2`, value: "2" },
                    { label: `Result for "${searchValue}" - 3`, value: "3" },
                  ];
                }}
                onDropDownOptionClick={(e, data) =>
                  console.log("Selected:", data)
                }
                listRenderer={(data) => <span>{data.label}</span>}
              />
            </div>
          </div>
        </section>

        {/* MUIAutoSelect Section */}
        <section className="component-section">
          <h2 className="section-title">MUIAutoSelect</h2>
          <p className="section-description">
            Autocomplete dropdown with various options
          </p>
          <div className="component-demo">
            <div style={{ maxWidth: "400px" }}>
              <MUIAutoSelect
                options={[
                  { label: "Option 1", value: "1", subLabel: "Description 1" },
                  { label: "Option 2", value: "2", subLabel: "Description 2" },
                  { label: "Option 3", value: "3" },
                  { label: "Option 4", value: "4" },
                ]}
                value={autoSelectValue}
                onChange={(_, newValue) =>
                  setAutoSelectValue(
                    newValue as { label: string; value: string } | null,
                  )
                }
                InputProps={{
                  label: "Select an option",
                  placeholder: "Choose...",
                }}
              />
            </div>
            <div style={{ maxWidth: "400px", marginTop: "16px" }}>
              <MUIAutoSelect
                multiple
                options={[
                  { label: "Tag 1", value: "1" },
                  { label: "Tag 2", value: "2" },
                  { label: "Tag 3", value: "3" },
                ]}
                InputProps={{
                  label: "Multiple Select",
                  placeholder: "Choose tags...",
                }}
                OptionMenuProps={{ variant: "checkbox" }}
              />
            </div>
          </div>
        </section>

        {/* ProgressBar Section */}
        <section className="component-section">
          <h2 className="section-title">ProgressBar</h2>
          <p className="section-description">Simple progress bar component</p>
          <div className="component-demo">
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "12px",
                maxWidth: "300px",
              }}
            >
              <div>
                <span className="skeleton-label">25% Progress</span>
                <ProgressBar progressValue={25} progreesColor={barColors[0]} />
              </div>
              <div>
                <span className="skeleton-label">50% Progress</span>
                <ProgressBar progressValue={50} progreesColor={barColors[1]} />
              </div>
              <div>
                <span className="skeleton-label">75% Progress</span>
                <ProgressBar progressValue={75} progreesColor={barColors[2]} />
              </div>
              <div>
                <span className="skeleton-label">100% Progress</span>
                <ProgressBar progressValue={100} progreesColor={barColors[3]} />
              </div>
            </div>
          </div>
        </section>

        {/* PropertyCard Section */}
        <section className="component-section">
          <h2 className="section-title">PropertyCard</h2>
          <p className="section-description">
            Property filter card with slider and progress
          </p>
          <div className="component-demo">
            <div style={{ maxWidth: "400px" }}>
              <PropertyCard
                id="quality"
                headerTitle="Quality Score"
                tooltipText="Rate the quality of the item"
                rangeHeader="Good to Excellent"
                defaultRangeValue={5}
                onRangeChange={(val) => console.log("Range changed:", val)}
                profileProgress={[
                  { quality: 0.3, progreesColor: barColors[0] },
                  { quality: 0.6, progreesColor: barColors[1] },
                  { quality: 0.8, progreesColor: barColors[3] },
                ]}
              />
            </div>
          </div>
        </section>

        {/* RecipeCard Section */}
        <section className="component-section">
          <h2 className="section-title">RecipeCard</h2>
          <p className="section-description">
            Recipe display card with diet type, calories, and cooking time
          </p>
          <div className="component-demo">
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                gap: "20px",
              }}
            >
              <RecipeCard
                imageUrl="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=300"
                recipeName="Vegetable Stir Fry"
                calories="250"
                dietType="Vegetarian"
                cookingTime="1800"
                easyToCook={true}
                onClick={() => console.log("Recipe clicked")}
              />
              <RecipeCard
                imageUrl="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=300"
                recipeName="Fresh Garden Salad"
                calories="120"
                dietType="Vegan"
                cookingTime="600"
                easyToCook={true}
                onClick={() => console.log("Recipe clicked")}
              />
              <RecipeCard
                imageUrl="https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=300"
                recipeName="Grilled Salmon"
                calories="380"
                dietType="Pescatarian"
                cookingTime="2400"
                onClick={() => console.log("Recipe clicked")}
              />
            </div>
            <div style={{ marginTop: "20px" }}>
              <h4 style={{ marginBottom: "12px" }}>Inline Display Mode:</h4>
              <RecipeCard
                imageUrl="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=300"
                recipeName="Margherita Pizza"
                calories="280"
                dietType="Vegetarian"
                cookingTime="2700"
                easyToCook={false}
                isDisplayInLine={true}
                isButton={true}
                buttonText="Add to Plan"
                handleButton={(e) => {
                  e.stopPropagation();
                  console.log("Add to plan clicked");
                }}
                onClick={() => console.log("Recipe clicked")}
              />
            </div>
          </div>
        </section>

        {/* MealCard Section */}
        <section className="component-section">
          <h2 className="section-title">MealCard</h2>
          <p className="section-description">
            Timeline meal card with status and actions
          </p>
          <div className="component-demo">
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "8px",
                maxWidth: "500px",
              }}
            >
              <MealCard
                time="8:00 AM"
                title="Oatmeal with Berries"
                kcal={320}
                mins={15}
                imageUrl="https://images.unsplash.com/photo-1517673400267-0251440c45dc?w=100"
                showDoneButton={true}
                mealState="active"
                progress={50}
                isLastMealOfDay={false}
                onDoneClick={() => console.log("Done clicked")}
              />
              <MealCard
                time="12:30 PM"
                title="Grilled Chicken Salad"
                kcal={450}
                mins={20}
                imageUrl="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=100"
                mealState="logged"
                loggedAt={new Date().toISOString()}
                showRedoIcon={true}
                redoIcon={<span>↺</span>}
                isLastMealOfDay={false}
                onRedoClick={() => console.log("Redo clicked")}
              />
              <MealCard
                time="7:00 PM"
                title="Pasta Primavera"
                kcal={520}
                mins={30}
                imageUrl="https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=100"
                showDoneButton={true}
                mealState="before_slot"
                progress={0}
                isLastMealOfDay={true}
              />
            </div>
          </div>
        </section>

        {/* EventCard Section */}
        <section className="component-section">
          <h2 className="section-title">EventCard</h2>
          <p className="section-description">
            Calendar event card with countdown and status
          </p>
          <div className="component-demo">
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "16px",
                maxWidth: "500px",
              }}
            >
              <EventCard
                title="Health Consultation"
                callType="Video"
                fromTime={new Date(Date.now() + 30 * 60000).toISOString()}
                toTime={new Date(Date.now() + 60 * 60000).toISOString()}
                countdownDisplay="30 min"
                progress={25}
                onClick={() => console.log("Event clicked")}
              />
              <EventCard
                title="Nutrition Review"
                callType="Audio"
                fromTime={new Date(Date.now() - 10 * 60000).toISOString()}
                toTime={new Date(Date.now() + 20 * 60000).toISOString()}
                showBlackDot={true}
                countdownDisplay="In progress"
                progress={60}
                isSelected={true}
                onClick={() => console.log("Event clicked")}
              />
              <EventCard
                title="Team Meeting"
                callType="In-Person"
                fromTime={new Date(Date.now() + 120 * 60000).toISOString()}
                toTime={new Date(Date.now() + 180 * 60000).toISOString()}
                countdownDisplay="2 hrs"
                onClick={() => console.log("Event clicked")}
              />
            </div>
          </div>
        </section>
      </div>
    </ThemeProvider>
  );
}

export default App;
