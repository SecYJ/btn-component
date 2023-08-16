import { useEffect, useState } from "react";

const btnVariantsMap = {
	primary: "bg-primary text-white",
	secondary: "bg-secondary text-white",
	tertiary: "bg-tertiary text-white",
};

const btnSizeMap = {
	default: "px-5 py-3",
	sm: "px-3 py-1 text-sm",
	lg: "px-6 py-2.5 text-lg",
};

const shapesMap = {
	circle: "rounded-[50%]",
	rounded: "rounded-md",
	default: "rounded-sm",
};

const Button = ({
	type = "button",
	children,
	size,
	color,
	bgColor,
	className,
	shape,
	variant = "primary",
	style,
	onClick,
	disabled,
	disabledTimer = 5,
}) => {
	const [loading, setLoading] = useState(false);

	const btnVariant = btnVariantsMap[variant] ? btnVariantsMap[variant] : btnVariantsMap["primary"];
	const sizeVariant = btnSizeMap[size] ? btnSizeMap[size] : btnSizeMap["default"];
	const shapeVariant = shapesMap[shape] ? shapesMap[shape] : shapesMap["default"];
	const variantsList = [btnVariant, sizeVariant, shapeVariant, className] || [];
	const classList = `${disabled ? "disabled:cursor-not-allowed opacity-[0.8]" : "cursor-pointer"} ${variantsList.join(
		" "
	)}`;

	const styles = { ...style };

	if (bgColor) styles.backgroundColor = bgColor;
	if (color) styles.color = color;

	useEffect(() => {
		if (!loading) return;
		let timer;

		timer = setTimeout(() => {
			setLoading(false);
		}, disabledTimer * 1000);

		return () => clearTimeout(timer);
	}, [loading]);

	const handleClick = () => {
		if (loading) return;
		setLoading(true);
		onClick();
	};

	return (
		<button type={type} className={classList} style={styles} onClick={handleClick} disabled={loading || disabled}>
			{disabled ? children : loading ? "Loading..." : children}
		</button>
	);
};
export default Button;
