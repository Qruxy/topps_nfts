export const CONFIG = {
  TEMPLATE: {
    // 1. Set your NFT collection contract address
    "collection_address": "0x70EaF22c2143Cf0BE6880cF3Fe6852AFE2E37465",

    // 2. Set your blockchain chain ID where your NFT collection contract address is deployed (see below for value options)
    "block_chain_id": "43114",

    // 3. Set the default title of your dashboard. If found, this template uses the NFT Collection name for the title.
    "title": "Topps Premium Inception Pack",

    // 4. (Optional) Display the floor price chart
    "timeseries_chart": true,

    // 5. (Optional) Set your banner image
    "https://firebasestorage.googleapis.com/v0/b/topps-316016.appspot.com/o/mlb%2FInception_premium_Front_01.png?alt=media&token=0bf2fbe4-1434-4e08-953e-263519d147ca",
  },

  // These options just for your reference
  FILTER_OPTIONS : [
    {name: "Ethereum", value: 1},
    {name: "Polygon", value: 137},
    {name: "Avalanche", value: 43114}
    ],
  GRAPH_OPTIONS : [
    {name: "7 Days", value: 7},
    {name: "1 Month", value: 30},
    {name: "3 Month", value: 90},
    {name: "1 Year", value: 365},
      {name: "All time", value: 0},
    ],
}
