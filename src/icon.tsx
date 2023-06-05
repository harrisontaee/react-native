import Svg, {Path} from "react-native-svg";
import {memo} from "react";

export type IconProps = {
	/**
	 * The svg string representation of a path (eg. "M0 0 L100 100")
	 */
	path: string;
	size?: number;
	style?: any;
	scale?: number;
	colour?: string;
	/**
	 * Any additional props to pass to the internal Svg component (react-native-svg)
	 */
	svgProps?: any;
	/**
	 * The width of the viewBox (ie the max - min x value of the svg "path" string)
	 */
	boxWidth: number;
	/**
	 * The height of the viewBox (ie the max - min y value of the svg "path" string)
	 */
	boxHeight: number;
	pathProps?: any;
	translateX?: number;
	translateY?: number;
	borderWidth?: number;
	borderColour?: string;
};





/**
 * react-native-svg wrapper with custom params
 * @param path The svg string representation of a path (eg. "M0 0 L100 100")
 * @param boxWidth The width of the viewBox (ie the max - min x value of the svg "path" string)
 * @param boxHeight The height of the viewBox (ie the max - min y value of the svg "path" string)
 */
export const Icon = ({
	path,
	size = 20,
	scale,
	style,
	colour = "#000000",
	svgProps,
	boxWidth,
	boxHeight,
	pathProps,
	translateX,
	translateY,
	borderWidth,
	borderColour,
}: IconProps) => {
	const max = Math.max(boxWidth, boxHeight);
	const width = (boxWidth / max) * size;
	const height = (boxHeight / max) * size;
	return (
		<Svg
			width={width}
			height={height}
			viewBox={`0 0 ${boxWidth} ${boxHeight}`}
			style={[{...(scale || translateX || translateY ? {transform: [
				...(scale ? [{scale}] : []),
				...(translateX ? [{translateX: translateX * width}] : []),
				...(translateY ? [{translateY: translateY * height}] : [])
			]} : null)}, style]}
			{...svgProps}>
			<Path
				d={path}
				fill={colour}
				fillRule="nonzero"
				stroke={borderColour}
				strokeWidth={borderWidth}
				{...pathProps}
			/>
		</Svg>
	);
};



export const MemoisedIcon = memo(Icon);