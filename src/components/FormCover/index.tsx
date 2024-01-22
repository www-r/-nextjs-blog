export default function FormCover({ children }) {
	return (
		<div className=" absolute z-[999] bg-white/90 w-full h-full top-0 left-0 center font-header hover:bg-white/30">
			{children}
		</div>
	);
}
