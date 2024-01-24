import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import store from "./Redux/Store/store";

import { createWeb3Modal, defaultWagmiConfig } from "@web3modal/wagmi/react";

import { WagmiProvider } from "wagmi";
import { fuse, fuseSparknet } from "wagmi/chains";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

const metadata = {
  name: "Web3Modal",
  description: "Web3Modal Example",
  url: "https://web3modal.com",
  icons: ["https://avatars.githubusercontent.com/u/37784886"],
};

const chains = [fuse, fuseSparknet];

const projectId = "3e3f4b0606ec451b7546547b0abfa789";

const wagmiConfig = defaultWagmiConfig({
  chains, // required
  projectId, // required
  metadata, // required
});
createWeb3Modal({
  wagmiConfig,
  projectId,
  chains,
  themeVariables: {
    "--w3m-accent-color": "red",
  },
});

// import {
//   createBrowserRouter,
//   RouterProvider,
// } from "react-router-dom";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <div>Hello world!</div>,
//   },
// ]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <WagmiProvider config={wagmiConfig}>
      <React.StrictMode>
        <App />
        {/* <RouterProvider router={router} /> */}
      </React.StrictMode>
    </WagmiProvider>
  </Provider>
);
