
export default {
    resource: "stations",
    primaryKeyName: "id",
    otherResourceName: "townStations",
    displayName: "Stations",
    mainColumnName: "name",
    displayColumns: ["name"],
    useHashLink: true,
    isReady: true,
    isGeneric: true,
    canEdit: true,
    showCreatedAt: true,
    showUpdatedAt: true,
    parentResources: [
        'countries',
        'regions',
        'towns'
    ]
};
