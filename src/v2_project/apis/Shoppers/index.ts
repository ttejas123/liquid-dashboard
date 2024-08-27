import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { dataSetGen } from "../../Helper/DataGen";

const mock = new MockAdapter(axios, { delayResponse: 2000 })

const type = {
    id: "string",
    code: "string",
    name: "string",
    description: "string",
    image: "string",
    price: "number",
    category: "string",
    quantity: "number",
    inventoryStatus: "string",
    rating: "number",
}

const d = dataSetGen({type, len: 10});
const c = [
    {type:"TEXT", assessor:"code"},
    {type:"TEXT", assessor:"name"},
    {type:"REV", assessor:"price"}
]
mock.onGet("/v2/shoppers/read").reply(200, { columns: c, data: d});
// mock.onGet("/v2/logs/read").reply(200, d);

mock.onAny().passThrough()

export default mock