import {
	View,
	Text,
	SafeAreaView,
	Image,
	Button,
	StyleSheet,
	Pressable,
} from "react-native";
import React from "react";

export default function GetStarted(props) {
	const { onPress, title = "Save" } = props;
	return (
		<SafeAreaView style={{ backgroundColor: "black", flex: 1 }}>
			<Image
				style={{
					alignSelf: "center",
					position: "absolute",
					width: "100%",
					height: "100%",
				}}
				source={require("../assets/Images/bg1.png")}
			/>
			<Image
				style={{ alignSelf: "center", marginTop: "10%" }}
				source={require("../assets/Images/Logo.png")}
			/>
			<View style={{ marginTop: "70%" }}>
				<Image
					style={{ alignSelf: "center", marginTop: "10%" }}
					source={require("../assets/Images/onboard_text.png")}
				/>

				<Text
					style={{
						color: "#fff",
						alignSelf: "center",
						width: "70%",
						fontSize: 16,
						textAlignVertical: "center",
						textAlign: "center",
						marginTop: "10%",
					}}
				>
					The best sushi restaurant right in front of your doorsteps
				</Text>
				<View style={{ marginTop: "10%" }}>
					<Pressable
						style={styles.button}
						onPress={() => {
							alert("You tapped the button!");
						}}
					>
						<Text style={styles.text}>Get Started</Text>
					</Pressable>
				</View>
			</View>
		</SafeAreaView>
	);
}
// stable
const styles = StyleSheet.create({
	button: {
		alignItems: "center",
		justifyContent: "center",
		display: "flex",
		alignSelf: "center",
		width: "70%",
		paddingVertical: 12,
		paddingHorizontal: 32,
		borderRadius: 4,
		backgroundColor: "white",
	},
	text: {
		fontSize: 16,
		lineHeight: 21,
		fontWeight: "bold",
		letterSpacing: 0.25,
		color: "black",
	},
});
