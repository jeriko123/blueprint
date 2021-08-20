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
} from "@blueprintjs/core";
import { SideBarPanel1 } from "./SideBarPanel1";
import { SideBarPanel2 } from "./SideBarPanel2";
import {
  Classes as Popover2Classes,
  ContextMenu2,
  Tooltip2,
} from "@blueprintjs/popover2";

export interface ICard {
  elevation: Elevation;
  interactive: boolean;
  animate: boolean;
  nodes: any;
}

export class SideBar extends React.PureComponent {
  public state: ICard = {
    elevation: 2,
    interactive: true,
    animate: true,
    nodes: INITIAL_STATE,
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
        <Tree
          contents={this.state.nodes}
          // onNodeClick={handleNodeClick}
          // onNodeCollapse={handleNodeCollapse}
          // onNodeExpand={handleNodeExpand}
          className={Classes.ELEVATION_0}
        />
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

const INITIAL_STATE = [
  {
    id: 0,
    hasCaret: true,
    icon: "folder-close",
    label: (
      <ContextMenu2 {...contentSizing} content={<div>Hello there!</div>}>
        Folder 0
      </ContextMenu2>
    ),
  },
  {
    id: 1,
    icon: "folder-close",
    isExpanded: true,
    label: (
      <ContextMenu2 {...contentSizing} content={<div>Hello there!</div>}>
        <Tooltip2 content="I'm a folder <3" placement="right">
          Folder 1
        </Tooltip2>
      </ContextMenu2>
    ),
    childNodes: [
      {
        id: 2,
        icon: "document",
        label: "Item 0",
        secondaryLabel: (
          <Tooltip2 content="An eye!">
            <Icon icon="eye-open" />
          </Tooltip2>
        ),
      },
      {
        id: 3,
        icon: (
          <Icon
            icon="tag"
            intent={Intent.PRIMARY}
            className={Classes.TREE_NODE_ICON}
          />
        ),
        label:
          "Organic meditation gluten-free, sriracha VHS drinking vinegar beard man.",
      },
      {
        id: 4,
        hasCaret: true,
        icon: "folder-close",
        label: (
          <ContextMenu2 {...contentSizing} content={<div>Hello there!</div>}>
            <Tooltip2 content="foo" placement="right">
              Folder 2
            </Tooltip2>
          </ContextMenu2>
        ),
        childNodes: [
          { id: 5, label: "No-Icon Item" },
          { id: 6, icon: "tag", label: "Item 1" },
          {
            id: 7,
            hasCaret: true,
            icon: "folder-close",
            label: (
              <ContextMenu2
                {...contentSizing}
                content={<div>Hello there!</div>}
              >
                Folder 3
              </ContextMenu2>
            ),
            childNodes: [
              { id: 8, icon: "document", label: "Item 0" },
              { id: 9, icon: "tag", label: "Item 1" },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 2,
    hasCaret: true,
    icon: "folder-close",
    label: "Super secret files",
    disabled: true,
  },
];
