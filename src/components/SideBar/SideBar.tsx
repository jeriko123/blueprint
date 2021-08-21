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
}

export class SideBar extends React.PureComponent {
  public state: ICard = {
    elevation: 2,
    interactive: true,
    animate: true,
  };

  public render() {
    return (
      <Card
        {...this.state}
        style={{
          position: "absolute",
          width: 200,
          padding: 0,
          height: "calc(100vh - 50px)",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "baseline",
            padding: 10,
          }}
        >
          <H4>SIDEBAR</H4>

          <Button icon="menu-closed" className={Classes.MINIMAL} />
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
