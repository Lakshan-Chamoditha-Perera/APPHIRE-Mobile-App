import {StyleSheet} from "react-native";
import {COLORS, SIZES} from "../../../constants";

const styles = StyleSheet.create({
    container: {
        width: "100%",
    }, userName: {
        fontSize: SIZES.large, color: COLORS.secondary,
    }, welcomeMessage: {
        fontSize: SIZES.xLarge, color: COLORS.primary, marginTop: 2,
    }, searchContainer: {
        justifyContent: "center", alignItems: "center", flexDirection: "row", marginTop: SIZES.large, height: 50,
    }, searchWrapper: {
        flex: 1,
        backgroundColor: COLORS.white,
        marginRight: SIZES.small,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: SIZES.medium,
        height: "100%",
    }, searchInput: {
        width: "100%", height: "100%", paddingHorizontal: SIZES.medium,
    }, searchBtn: {
        width: 50,
        height: "100%",
        backgroundColor: COLORS.tertiary,
        borderRadius: SIZES.medium,
        justifyContent: "center",
        alignItems: "center",
    }, searchBtnImage: {
        width: "50%", height: "50%", tintColor: COLORS.white,
    }, tabsContainer: {
        width: "100%", marginTop: SIZES.medium,
    }, tab: (isActive) => ({
        padding: 15,
        borderBottomWidth: isActive ? 2 : 0,
        borderBottomColor: isActive ? 'blue' : 'transparent',
        marginRight: 10, // Add space between tabs
    }), activeText: {
        fontWeight: 'bold',
    }, tabText: (activeJobType, item) => ({
        color: activeJobType === item ? COLORS.secondary : COLORS.gray2,
    }), titleBar: {
        marginTop: SIZES.large, marginBottom: SIZES.small
    }

});

export default styles;
