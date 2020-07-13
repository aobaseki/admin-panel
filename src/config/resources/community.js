import countries from './country';
import regions from "./regions";
import districts from "./towns";

export default {
    resource: "communities",
    primaryKeyName: "id",
    displayName: "Communities",
    mainColumnName: "name",
    displayColumns: ["name"],
    useHashLink: true,
    isReady: true,
    isGeneric: true,
    canEdit: true,
    canDelete: true,
    showCreatedAt: true,
    showUpdatedAt: true,
    parentResources: [
        countries,
        regions,
        districts
    ]
};
