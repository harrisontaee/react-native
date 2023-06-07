import {View, ViewProps} from "react-native";
import {isArray, isNully} from "@harrisontaee/library/utilities";

export const Circle = ({
	size = 40,
	style,
	colour = "red",
	children,
	...rest
}: {
	size?: number;
	style?: object | object[];
	colour?: string;
} & ViewProps) => (
	<View
		style={[{
			width: size,
			height: size,
			borderRadius: size / 2,
			backgroundColor: colour || "transparent",
			// @ts-ignore
		}, ...(isNully(style) ? [] : isArray(style) ? style : [style])]}
		{...rest}>
		{children}
	</View>
);



export const Square = ({
	size = 40,
	style,
	colour = "green",
	children,
	borderRadius = 0,
	...rest
}: {
	size?: number;
	style?: object | object[];
	colour?: string;
	borderRadius?: number;
} & ViewProps) => (
	<View
		style={[{
			width: size,
			height: size,
			borderRadius,
			backgroundColor: colour || "transparent",
			// @ts-ignore
		}, ...(isNully(style) ? [] : isArray(style) ? style : [style])]}
		{...rest}>
		{children}
	</View>
);



export const Rectangle = ({
	style,
	width = 80,
	height = 40,
	colour = "blue",
	children,
	borderRadius = 0,
	...rest
}: {
	style?: object | object[];
	width?: number;
	height?: number;
	colour?: string;
	borderRadius?: number;
} & ViewProps) => (
	<View
		style={[{
			width,
			height,
			borderRadius,
			backgroundColor: colour || "transparent",
			// @ts-ignore
		}, ...(isNully(style) ? [] : isArray(style) ? style : [style])]}
		{...rest}>
		{children}
	</View>
);