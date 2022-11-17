// import { PutCommand } from "@aws-sdk/lib-dynamodb";
// import { ddbDocClient } from "./client.js";
const { PutCommand } = require("@aws-sdk/lib-dynamodb");
const { ddbDocClient } = require("./client.js");

export const putItem = async () => {
	const params = {
		TableName: "AutoSolve_DB",
		Item: {
			primaryKey: 1,
			sortKey: "Comida",
		},
	};
	try {
		console.log("Adding a new item...", params);
		const data = await ddbDocClient.send(new PutCommand(params));
		console.log("Success - item added or updated", data);
	} catch (err) {
		console.log("Error", err.stack);
	}
};
window.onload = () => {
	console.log("Hello World");
	document.getElementById("boton").addEventListener("click", putItem);
};
