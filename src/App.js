import Footer from "./footer/Footer";
import Header from "./header/Header";
import Shop from "./shop/Shop";
import { ContextProvider } from "./context/context";

function App() {
	return (
		<div className="app">
			<Header />
			<ContextProvider>
				<Shop />
			</ContextProvider>
			<Footer />
		</div>
	);
}

export default App;
