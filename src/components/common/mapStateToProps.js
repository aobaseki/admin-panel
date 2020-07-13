export default function mapStateToProps(state) {
    const {
        countries,
        regions,
        towns,
        communities,
        products,
        companies,
        users,
        stations,
        organizations,
    } = state;

    return {
        countries,
        regions,
        towns,
        communities,
        products,
        companies,
        users,
        stations,
        organizations
    };
}
