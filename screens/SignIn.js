import {
	View,
	Text,
	SafeAreaView,
	ImageBackground,
	Image,
	StyleSheet,
	Pressable,
} from "react-native";
import React from "react";

export default function SignIn() {
	return (
		<SafeAreaView style={{ backgroundColor: "black", flex: 1 }}>
			<ImageBackground
				source={require("../assets/Images/SignInbg.png")}
				style={{
					width: "100%",
					height: "100%",
				}}
			>
				<Image
					style={{ alignSelf: "center", marginTop: "60%" }}
					source={require("../assets/Images/Logo.png")}
				/>
				<Text
					style={{
						marginTop: "3%",
						alignSelf: "center",
						fontSize: 28,
						color: "white",
						fontWeight: "bold",
					}}
				>
					Welcome Back
				</Text>
				<Text
					style={{
						marginTop: "1%",
						color: "white",
						alignSelf: "center",
					}}
				>
					Sign in to continue
				</Text>
				<View style={{ marginTop: "5%" }}>
					<Pressable
						style={styles.fb_button}
						onPress={() => {
							alert("You tapped the button!");
						}}
					>
						<Text style={styles.fb_text}>SIGN IN WITH FACEBOOK</Text>
					</Pressable>
				</View>
				<View style={{ marginTop: "3%" }}>
					<Pressable
						style={styles.button}
						onPress={() => {
							alert("You tapped the button!");
						}}
					>
						<Text style={styles.text}>SIGN IN WITH GOOGLE</Text>
					</Pressable>
				</View>
				<Text style={{ marginTop: "2%", color: "white", alignSelf: "center" }}>
					Or
				</Text>

				<View style={{ marginTop: "3%" }}>
					<Pressable
						style={styles.guest_button}
						onPress={() => {
							alert("You tapped the button!");
						}}
					>
						<Text style={styles.guest_text}>SIGN IN AS GUEST</Text>
					</Pressable>
				</View>
				<View
					style={{
						alignSelf: "flex-end",
						marginTop: "15%",
						alignSelf: "center",

						width: "80%",
					}}
				>
					<Text style={styles.baseText}>
						By logging in you agree to sushime
						<Text style={styles.innerText}>
							{" "}
							Terms and services, Privecy policy and Content policy
						</Text>
					</Text>
				</View>
			</ImageBackground>
		</SafeAreaView>
	);
}

// styleSheet
const styles = StyleSheet.create({
	button: {
		alignItems: "center",
		justifyContent: "center",
		display: "flex",
		alignSelf: "center",
		width: "80%",
		paddingVertical: 12,
		paddingHorizontal: 32,
		borderRadius: 4,
		backgroundColor: "white",
	},

	text: {
		fontSize: 14,
		lineHeight: 21,
		fontWeight: "bold",
		letterSpacing: 0.25,
		color: "black",
	},

	fb_button: {
		alignItems: "center",
		justifyContent: "center",
		display: "flex",
		alignSelf: "center",
		width: "80%",
		paddingVertical: 12,
		paddingHorizontal: 32,
		borderRadius: 4,
		backgroundColor: "#2660DA",
	},
	fb_text: {
		fontSize: 14,
		lineHeight: 21,
		fontWeight: "bold",
		letterSpacing: 0.25,
		color: "white",
	},
	guest_button: {
		alignItems: "center",
		justifyContent: "center",
		display: "flex",
		alignSelf: "center",
		width: "80%",
		paddingVertical: 12,
		paddingHorizontal: 32,
		borderRadius: 4,
		backgroundColor: "#545B60",
	},

	guest_text: {
		fontSize: 14,
		lineHeight: 21,
		fontWeight: "bold",
		letterSpacing: 0.25,
		color: "white",
	},
	baseText: {
		color: "white",
	},
	innerText: {
		color: "red",
	},
});
