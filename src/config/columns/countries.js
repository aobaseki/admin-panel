import inputTypes from "../inputTypes";

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    required: true,
    mainColumn: true,
    defaultSortOrder: 'descend',
    isTableColumn: true,
    isCardColumn: true,
    sortDirections: ['descend', 'ascend'],
    dataType: {
      type: inputTypes.string,
    }
  },
  {
    title: 'Code',
    dataIndex: 'code',
    required: true,
    isTableColumn: true,
    userBasedPrimaryKey: true,
    dataType: {
      type: inputTypes.string,
      primaryKey: true
    }
  },
];

export default columns;
