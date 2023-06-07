import {Circle, Rectangle, Square} from "@harrisontaee/react-native";
import {StyleSheet, Text, View} from "react-native";
import {registerRootComponent} from "expo";

const App = () => (
	<View style={Styles.Container}>
		<Circle style={Styles.Shape} />
		<Square style={Styles.Shape} />
		<Rectangle style={Styles.Shape} />
	</View>
);

const Styles = StyleSheet.create({
	Container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
	Shape: {
		marginVertical: 5,
	},
});

registerRootComponent(App);
