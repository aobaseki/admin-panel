import townStation from "./townStations";

export default {
    resource: "towns",
    primaryKeyName: "id",
    displayName: "Towns",
    mainColumnName: "name",
    displayColumns: ["name"],
    useHashLink: true,
    isReady: true,
    isGeneric: true,
    canEdit: true,
    canDelete: true,
    showCreatedAt: true,
    showUpdatedAt: true,
    child: townStation,
    parentResources: [
        'countries',
        'regions'
    ]
};
