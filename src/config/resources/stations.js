
export default {
    resource: "stations",
    primaryKeyName: "id",
    displayName: "Stations",
    mainColumnName: "name",
    displayColumns: ["name"],
    useHashLink: true,
    isReady: true,
    isGeneric: true,
    canEdit: true,
    showCreatedAt: true,
    showUpdatedAt: true,
    parentResourceNames: [
        'companies'
    ]
};
