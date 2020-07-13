import stations from "./stations";


export default {
    resource: "companies",
    displayName: "Companies",
    primaryKeyName: "id",
    foreignKeyName: "companyId",
    mainColumnName: "name",
    displayColumns: ["name"],
    isReady: true,
    isGeneric: true,
    canEdit: true,
    showCreatedAt: true,
    showUpdatedAt: true,
    child: stations
};

