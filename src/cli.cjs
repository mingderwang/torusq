#!/usr/bin/env node
const FetchNodeDetails = require("@toruslabs/fetch-node-details/dist/fetchNodeDetails-node.js").default;

const fetchNodeDetails = new FetchNodeDetails({ network: "testnet" });
fetchNodeDetails.getNodeDetails({ verifier: "torus", verifierId: "hello@tor.us" }).then((nodeInfo) => console.log(nodeInfo));

