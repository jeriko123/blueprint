import * as React from "react";
import {
  Button,
  Card,
  Classes,
  Elevation,
  H5,
  H4,
  Tabs,
  Tab,
  InputGroup,
  Label,
  Slider,
  Switch,
  Tree,
  Intent,
  Icon,
  TreeNodeInfo,
} from "@blueprintjs/core";
import { SideBarPanel1 } from "./SideBarPanel1";
import { SideBarPanel2 } from "./SideBarPanel2";
import {
  Classes as Popover2Classes,
  ContextMenu2,
  Tooltip2,
} from "@blueprintjs/popover2";
import { TreeComponent } from "./TreeComponent";

type NodePath = number[];

export interface ICard {
  elevation: Elevation;
  interactive: boolean;
  animate: boolean;
  width: number;
}

interface iSideBarProps {
  isSideBar: boolean;
  sideBarClick: any;
}

export class SideBar extends React.PureComponent<iSideBarProps> {
  public state: ICard = {
    elevation: 2,
    interactive: true,
    animate: true,
    width: this.props.isSideBar ? 200 : 32,
  };

  componentDidUpdate(prevProps: iSideBarProps) {
    if (this.props.isSideBar !== prevProps.isSideBar) {
      this.setState({ width: this.props.isSideBar ? 200 : 32 });
    }
  }

  public render() {
    return (
      <Card
        {...this.state}
        style={{
          position: "absolute",
          width: this.state.width,
          padding: 0,
          height: "calc(100vh - 50px)",
        }}
      >
        {this.props.isSideBar && (
          <React.Fragment>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "baseline",
                padding: 10,
              }}
            >
              <H4>SIDEBAR</H4>

              <Button
                icon="menu-closed"
                className={Classes.MINIMAL}
                onClick={() => this.props.sideBarClick(false)}
              />
            </div>
            <div style={{ padding: "0px 15px 0px 15px" }}>
              <InputGroup
                className={Classes.ROUND}
                leftIcon="search"
                placeholder="Search..."
              />
            </div>
            <div style={{ padding: "10px 15px 0px 15px" }}>
              <H5>Tree</H5>
            </div>
            <TreeComponent />
          </React.Fragment>
        )}

        {!this.props.isSideBar && (
          <div style={{ paddingTop: 10 }}>
            <Button
              icon="menu-open"
              className={Classes.MINIMAL}
              onClick={this.props.sideBarClick}
            />
          </div>
        )}
      </Card>
    );
  }

  private handleElevationChange = (elevation: Elevation) =>
    this.setState({ elevation });

  private handleInteractiveChange = () =>
    this.setState({ interactive: !this.state.interactive });
}

const contentSizing = {
  popoverProps: { popoverClassName: Popover2Classes.POPOVER2_CONTENT_SIZING },
};
