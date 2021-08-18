import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { NavBar } from "./components/Navbar/Navbar";
import classNames from "classnames";
import { Classes, Drawer } from "@blueprintjs/core";
import { FocusStyleManager } from "@blueprintjs/core";
import { DatePicker, TimePrecision } from "@blueprintjs/datetime";
import { TableDollarExample } from "./components/Table/Table";
FocusStyleManager.onlyShowFocusOnTabs();

function App() {
  const [isDark, setIsDark] = React.useState(false);
  const [isTable, setIsTable] = React.useState(false);
  const [showTimeArrowButtons, setShowTimeArrowButtons] = React.useState(false);
  const [date, setDate] = React.useState(new Date());

  const handleDateChange = (date: Date) => {
    setDate(date);
  };

  document.body.className = isDark ? "bp3-dark" : "bp3-body";
  return (
    <div>
      <NavBar
        alignRight
        isDark={isDark}
        onDarkClick={() => setIsDark(!isDark)}
        onTableClick={() => setIsTable(!isTable)}
        onHomeClick={() => setIsTable(false)}
      />
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        {!isTable && (
          <div
            className={classNames(Classes.TEXT_LARGE, Classes.MONOSPACE_TEXT)}
            style={{
              display: "flex",
              width: "60%",
              flexDirection: "column",
              padding: 25,
            }}
          >
            <p>
              We build products that make people better at their most important
              work — the kind of work you read about on the front page of the
              newspaper, not just the technology section.
            </p>
            <ul>
              <li>
                Item the <code>first</code>.
              </li>
              <li>Item the .</li>
              <li>
                Item the <a href="#core/typography.running-text">third</a>.
              </li>
            </ul>
            <h3>Scale, Speed, Agility</h3>
            <p>
              A successful data transformation requires the whole organization —
              users, the IT shop, and leadership — to operate in lockstep. With
              Foundry, the enterprise comes together to transform the
              organization and turn data into a competitive advantage.
            </p>
          </div>
        )}

        {isTable && (
          <div style={{ padding: 25 }}>
            <TableDollarExample />
          </div>
        )}
      </div>
      <div style={{ position: "fixed", right: 10, top: 65 }}>
        <DatePicker
          className={Classes.ELEVATION_1}
          onChange={handleDateChange}
          // timePickerProps={{ showArrowButtons: showTimeArrowButtons }}
          value={date}
        />
      </div>
    </div>
  );
}

export default App;
