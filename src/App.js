import Footer from "./footer/Footer";
import Header from "./header/Header";
import Shop from "./shop/Shop";
import { ContextProvider } from "./context/context";

function App() {
	return (
		<div className="app">
			<ContextProvider>
				<Header />
				<Shop />
			</ContextProvider>
			<Footer />
		</div>
	);
}

export default App;
