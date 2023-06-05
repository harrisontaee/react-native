import {Pressable, PressableProps} from "react-native";

type Props = PressableProps & {
	colour?: string,
	children?: JSX.Element | JSX.Element[],
	style?: object
};





export const Button = ({
	height = 40,
	padding = 10,
	colour = "#00000000",
	style = {},
	children,
	...rest
}: Props & {
	height?: number,
	padding?: number
}) => (
	<Pressable {...rest} style={{
		height,
		padding,
		borderRadius: height / 2,
		backgroundColor: colour,
		alignItems: "center",
		justifyContent: "center",
		flexDirection: "row",
		...style
	}}>{children}
	</Pressable>
);





export const CircleButton = ({
	size = 40,
	colour = "#00000000",
	children,
	style = {},
	...rest
}: Props & {size?: number}) => (
	<Pressable {...rest} style={{
		width: size,
		height: size,
		borderRadius: size / 2,
		backgroundColor: colour,
		alignItems: "center",
		justifyContent: "center",
		...style
	}}>{children}
	</Pressable>
);