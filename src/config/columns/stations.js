import inputTypes from "../inputTypes";

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
    key: 'name',
    mainColumn: true,
    isTableColumn: true,
    required: true,
    dataType: {
      type: inputTypes.string,
    }
  },
  {
    title: 'Town',
    dataIndex: 'townId',
    isForeignEntity: true,
    resourceKey: 'town',
    resource: 'towns',
    required: false,
    isTableColumn: true,
    dataType: {
      type: inputTypes.multi,
    }
  },
  {
    title: 'GPS',
    dataIndex: 'stationGps',
    key: 'stationGps',
    isTableColumn: true,
    required: false,
    dataType: {
      type: inputTypes.gps,
    }
  },
];

export default columns;
