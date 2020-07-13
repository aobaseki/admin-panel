import stations from "./stations";

export default {
    resource: "users",
    primaryKeyName: "userId",
    displayName: "Trips",
    displayColumns: ["firstName", "otherNames"],
    mainColumnName: "firstName",
    isReady: true,
    isGeneric: true,
    canEdit: true,
    showCreatedAt: true,
    showUpdatedAt: true,
    child: stations
};
