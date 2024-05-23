import { createPublicClient, http } from "viem";
import { mainnet } from "viem/chains";

const client = createPublicClient({ chain: mainnet, transport: http() });
client.getEnsAvatar({ name: "vitalik.eth" }).then(console.log);
