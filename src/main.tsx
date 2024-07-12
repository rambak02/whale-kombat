import React from "react";
import ReactDOM from "react-dom/client";
import { Provider as ReduxProvider } from "react-redux";
import { store } from "./redux/store.ts";
import { NextUIProvider } from "@nextui-org/react";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { PopupProvider } from "./context/PopupContext.tsx";
import { UserProvider } from "./context/UserContext.tsx";
import { SelectedIndexProvider } from "./context/SelectedPageContext.tsx";
import { OffersProvider } from "./context/OffersContext.tsx";
import { FriendsProvider } from "./context/FriendsContext.tsx";
import { LoadingProvider } from "./context/LoadingContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<ReduxProvider store={store}>
			<NextUIProvider>
				<BrowserRouter>
					<LoadingProvider>
						<UserProvider>
							<FriendsProvider>
								<SelectedIndexProvider>
									<PopupProvider>
										<OffersProvider>
											<App />
										</OffersProvider>
									</PopupProvider>
								</SelectedIndexProvider>
							</FriendsProvider>
						</UserProvider>
					</LoadingProvider>
				</BrowserRouter>
			</NextUIProvider>
		</ReduxProvider>
	</React.StrictMode>
);
