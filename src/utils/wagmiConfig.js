import { http, createConfig } from "wagmi";
import { fuse, fuseSparknet } from "wagmi/chains";

export const config = createConfig({
  chains: [mainnet, sepolia],
  transports: {
    [fuse.id]: http(),
    [fuseSparknet.id]: http(),
  },
});
