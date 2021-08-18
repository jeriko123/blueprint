import * as React from "react";
import classNames from "classnames";
import {
  Alignment,
  Button,
  Classes,
  H5,
  Navbar,
  NavbarDivider,
  NavbarGroup,
  NavbarHeading,
  Switch,
  Divider,
  Menu,
  MenuDivider,
  MenuItem,
  Popover,
} from "@blueprintjs/core";

export interface INavbarExampleState {
  alignRight: boolean;
  isDark: boolean;
  onTableClick: any;
  onDarkClick: any;
  onHomeClick: any;
}

export class NavBar extends React.PureComponent<INavbarExampleState> {
  public state = {
    alignRight: false,
  };

  //   public handleDarkTheme() {
  //     this.setState({ isDark: !this.state.isDark });
  //   }

  public handleDarkTheme = () => this.props.onDarkClick();

  public render() {
    const { alignRight } = this.state;
    const exampleMenu = (
      <Menu>
        <MenuItem icon="graph" text="Graph" />
        <MenuItem icon="map" text="Map" />
        <MenuItem
          icon="th"
          text="Table"
          shouldDismissPopover={true}
          onClick={this.props.onTableClick}
        />
        <MenuItem icon="zoom-to-fit" text="Nucleus" disabled={true} />
        <MenuDivider />
        <MenuItem icon="cog" text="Settings...">
          <MenuItem icon="add" text="Add new application" disabled={true} />
          <MenuItem icon="remove" text="Remove application" />
        </MenuItem>
      </Menu>
    );
    return (
      <Navbar className={classNames(Classes.NAVBAR)}>
        <NavbarGroup align={Alignment.LEFT}>
          <NavbarHeading>Blueprint</NavbarHeading>
          <NavbarDivider />
          <Button
            className={Classes.MINIMAL}
            icon="home"
            text="Home"
            onClick={this.props.onHomeClick}
          />

          <Popover
            content={exampleMenu}
            interactionKind="hover"
            popoverClassName={Classes.POPOVER_CONTENT_SIZING}
            placement="bottom"
          >
            <Button className={Classes.MINIMAL} icon="document" text="Files" />
          </Popover>
          <Button
            className={Classes.MINIMAL}
            icon={this.props.isDark ? "flash" : "moon"}
            text={this.props.isDark ? "light theme" : "dark theme"}
            onClick={this.handleDarkTheme}
          />
        </NavbarGroup>
        <NavbarGroup align={Alignment.RIGHT}>
          <NavbarDivider className={Classes.ALIGN_RIGHT} />
          <Button
            className={classNames(Classes.MINIMAL, Classes.ALIGN_RIGHT)}
            icon="user"
          />
          <Button
            className={classNames(Classes.MINIMAL, Classes.ALIGN_RIGHT)}
            icon="notifications"
          />
          <Button
            className={classNames(Classes.MINIMAL, Classes.ALIGN_RIGHT)}
            icon="cog"
          />
        </NavbarGroup>
      </Navbar>
    );
  }
}
