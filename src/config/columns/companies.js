import inputTypes from "../inputTypes";
import relationTypes from "../relationTypes";

const columns = [
  {
    title: 'ID',
    dataIndex: 'id',
    required: true,
    dataType: {
      type: inputTypes.string,
      primaryKey: true
    }
  },
  {
    title: 'Name',
    dataIndex: 'name',
    required: true,
    mainColumn: true,
    isTableColumn: true,
    dataType: {
      type: inputTypes.string,
    }
  },
  {
    title: 'Stations',
    dataIndex: 'stationIds',
    resource: 'stations',
    resourceKey: 'stations',
    required: false,
    showCountInstead: true,
    dataType: {
      type: inputTypes.multiValues,
      relationType: relationTypes.manyToMany
    }
  },
];

export default columns;
