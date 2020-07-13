import towns from './towns';

export default {
    resource: "regions",
    primaryKeyName: "id",
    displayName: "Regions",
    mainColumnName: "name",
    displayColumns: ["name"],
    useHashLink: true,
    isReady: true,
    isGeneric: true,
    canEdit: true,
    showCreatedAt: true,
    showUpdatedAt: true,
    child: towns,
    parentResourceNames: [
        'countries'
    ]
};
