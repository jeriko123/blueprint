import * as React from "react";
import { Intent } from "@blueprintjs/core";
import {
  Cell,
  Column,
  Table2,
  EditableCell2,
  ColumnHeaderCell,
  EditableName,
} from "@blueprintjs/table";

interface iTableState {
  columnNames: string[];
  sparseCellData: { [key: string]: string };
  sparseCellIntent: { [key: string]: Intent };
  sparseColumnIntents?: Intent[];
}

export class TableDollarExample extends React.PureComponent {
  public static dataKey = (rowIndex: number, columnIndex: number) => {
    return `${rowIndex}-${columnIndex}`;
  };

  public state: iTableState = {
    columnNames: ["Column1", "Column2", "Column2", "Column3", "Column4", "Column5"],
    sparseCellData: {
      "1-1": "editable",
      "3-1": "validation 123",
    },
    sparseCellIntent: {
      "3-1": Intent.DANGER,
    },
    sparseColumnIntents: [],
  };

  public render() {
    const columns = this.state.columnNames.map((_: string, index: number) => {
      return (
        <Column
          key={index}
          cellRenderer={this.renderCell}
          columnHeaderCellRenderer={this.renderColumnHeader}
        />
      );
    });

    return <Table2 numRows={10}>{columns}</Table2>;
  }

  public renderCell = (rowIndex: number, columnIndex: number) => {
    // <Cell>{`$${(rowIndex * 10).toFixed(2)}`}</Cell>
    const dataKey = TableDollarExample.dataKey(rowIndex, columnIndex);
    const value = this.state.sparseCellData[dataKey];
    return (
      <EditableCell2
        value={value == null ? "" : value}
        intent={this.state.sparseCellIntent[dataKey]}
        onCancel={this.cellValidator(rowIndex, columnIndex)}
        onChange={this.cellValidator(rowIndex, columnIndex)}
        onConfirm={this.cellSetter(rowIndex, columnIndex)}
      />
    );
  };

  public renderColumnHeader = (columnIndex: number) => {
    return <ColumnHeaderCell name={this.state.columnNames[columnIndex]} />;
  };

  private isValidValue(value: string) {
    return /^[a-zA-Z]*$/.test(value);
  }

  private cellValidator = (rowIndex: number, columnIndex: number) => {
    const dataKey = TableDollarExample.dataKey(rowIndex, columnIndex);
    return (value: string) => {
      const intent = this.isValidValue(value) ? null : Intent.DANGER;
      this.setSparseState("sparseCellIntent", dataKey, intent);
      this.setSparseState("sparseCellData", dataKey, value);
    };
  };

  private cellSetter = (rowIndex: number, columnIndex: number) => {
    const dataKey = TableDollarExample.dataKey(rowIndex, columnIndex);
    return (value: string) => {
      const intent = this.isValidValue(value) ? null : Intent.DANGER;
      this.setSparseState("sparseCellData", dataKey, value);
      this.setSparseState("sparseCellIntent", dataKey, intent);
    };
  };

  private setSparseState<T>(stateKey: string, dataKey: string, value: T) {
    const stateData = (this.state as any)[stateKey] as { [key: string]: T };
    const values = { ...stateData, [dataKey]: value };
    this.setState({ [stateKey]: values });
  }
}
