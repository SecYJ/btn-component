import Button from "./components/Button";

function App() {
	const handleClick = () => {
		console.log("handleClick");
	};

	return (
		<div className="grid place-items-center min-h-screen">
			<div className="flex gap-4">
				<Button
					variant="primary"
					size="sm"
					className="text-3xl rounded-xl text-green-200 hover:text-green-600"
					onClick={handleClick}
					disabledTimer={2}
				>
					sm btn
				</Button>
				<Button
					variant="secondary"
					size="lg"
					onClick={handleClick}
					shape="circle"
					className="text-5xl hover:bounceInDown"
					disabled
				>
					Circle btn
				</Button>
				<Button variant="tertiary" onClick={handleClick} bgColor="#6610f2" shape="rounded">
					Circle btn
				</Button>
			</div>
		</div>
	);
}

export default App;
