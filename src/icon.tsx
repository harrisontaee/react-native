import Svg, {Path} from "react-native-svg";

export const Icon = ({
	name,
	size = 20,
	// colour,
	// stroke,
	strokeWidth,
	style,
	svgProps,
	pathProps,
}: {
	name: string,
	size: number,
	// colour?,
	// stroke?,
	strokeWidth?: number,
	style?: object,
	svgProps?: object,
	pathProps?: object
}) => {
	// const fill = useStore(state => colour || state.colours.foreground);
	// const props = Icons[name];
	// const width = props.height > props.width ? (size * props.width) / props.height : size;
	// const height = props.height > props.width ? size : (size * props.height) / props.width;

	// return (
	// 	<Svg
	// 		width={width}
	// 		height={height}
	// 		viewBox={`0 0 ${props.width} ${props.height}`}
	// 		style={[{...(props?.scale || props?.translateX || props?.translateY ? {transform: [
	// 			...(props?.scale ? [{scale: props.scale}] : []),
	// 			...(props?.translateX ? [{translateX: props.translateX * width}] : []),
	// 			...(props?.translateY ? [{translateY: props.translateY * height}] : [])
	// 		]} : null)}, style]}
	// 		{...svgProps}>
	// 		<Path
	// 			fill={fill}
	// 			d={props.path}
	// 			stroke={stroke}
	// 			fillRule="nonzero"
	// 			strokeWidth={strokeWidth}
	// 			{...pathProps}
	// 		/>
	// 	</Svg>
	// );
};