import region from './regions';

export default {
    resource: "countries",
    displayName: "Countries",
    primaryKeyName: "code",
    foreignKeyName: "countryCode",
    mainColumnName: "name",
    displayColumns: ["name"],
    isReady: true,
    isGeneric: true,
    canEdit: true,
    showCreatedAt: true,
    showUpdatedAt: true,
    child: region
};
