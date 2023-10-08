import MockAdapter from "axios-mock-adapter";
import axios from "axios"

const mock = new MockAdapter(axios, { delayResponse: 2000 })

mock.onGet("/config").reply(200, {
  config: [
    {
      "type": "table",
      "tableType": "persona_table",
      "name": "Persona List",
      "tableProperties": {
        "width": "100%",
        "height": "300px",
        "overflow": "scroll",
        "border": "2px solid #555"
      },
      "api": "/table/personaTable"
    },
    {
      "type": "graph",
      "tableType": "bar_chart",
      "name": "Daywise Data",
      "tableProperties": {
        "width": "500px",
        "height": "280px",
        "border": "1px solid #666"
      } 
    },
    {
      "type": "graph",
      "tableType": "area_chart",
      "name": "Daywise Data",
      "tableProperties": {
        "width": "400px",
        "height": "280px",
        "border": "1px solid #666"
      } 
    }
  ],
  layout: "BaseSplitLayOut"
});

mock.onGet("/config_2").reply(200, {
  config: [
        {
      "type": "table",
      "tableType": "coupon_table",
      "name": "Coupon Table",
      "tableProperties": {
        "width": "250px",
        // "height": "200px",
        "border": "1px solid #ccc"
      },
      "columns": ["Name", "unique_code"],
      "data": [
        { "Name": "ABC", "unique_code": 30 },
        { "Name": "SSE", "unique_code": 25 },
        { "Name": "OOD", "unique_code": 35 }
      ]
    }
  ],
  layout: "BaseSplitLayOut"
});

mock.onGet("/config_3").reply(200, {
  config: [
    {
      "type": "table",
      "tableType": "coupon_table",
      "name": "Employee Table",
      "tableProperties": {
        "width": "400px",
        "border": "2px solid #555"
      },
      "columns": ["Name", "Department", "Salary"],
      "data": [
        { "Name": "John Doe", "Department": "HR", "Salary": 60000 },
        { "Name": "Alice Smith", "Department": "IT", "Salary": 75000 }
      ]
    }
  ],
  layout: "BaseSplitLayOut"
});

mock.onGet("/table/personaTable").reply(async()=> {
    const responseData = {
      data: {
        columns: ["Shopper", "status", "revenue", "potential_revenue"],
        data: [
          { Shopper: "Hijacked Shopper", status: "✅", revenue: "$60000", potential_revenue: "$346273", config: "/config_2" },
          { Shopper: "Hesitant Shopper", status: "❌", revenue: "$75000", potential_revenue: "$346273", config: "/config_3" },
          { Shopper: "Wishlist Shopper", status: "✅", revenue: "$75000", potential_revenue: "$346273" },
          { Shopper: "Coupon Runner", status: "❌", revenue: "$75000", potential_revenue: "$346273" },
          { Shopper: "Wrong Coupon", status: "❌", revenue: "$75000", potential_revenue: "$346273" },
          { Shopper: "Extension Shopper", status: "❌", revenue: "$75000", potential_revenue: "$346273" },
          
        ],
      },
    };

    // Respond with a 200 status and the defined response data
    return [200, responseData];
 
})

mock.onGet("/graph/six_month_data").reply(()=> {
    const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July']
    return [200, {
        data: {
            options: {
                responsive: true,
                plugins: {
                  legend: {
                    position: 'top',
                  },
                  title: {
                    display: true,
                    text: 'Chart.js Bar Chart',
                  },
                },
            },
            labels : labels,
            data: {
                labels,
                datasets: [
                  {
                    label: 'Dataset 1',
                    data: labels.map(() => Faker.datatype.number({ min: 0, max: 1000 })),
                    backgroundColor: 'rgba(255, 99, 132, 0.5)',
                  },
                  {
                    label: 'Dataset 2',
                    data: labels.map(() => Faker.datatype.number({ min: 0, max: 1000 })),
                    backgroundColor: 'rgba(53, 162, 235, 0.5)',
                  },
                ],
            }
        }
    }]
})

mock.onAny().passThrough()

export default mock


















































































// [
//     {
//       "type": "table",
//       "tableType": "persona_table",
//       "name": "Names Table",
//       "tableProperties": {
//         "width": "300px",
//         // "height": "300px",
//         "border": "1px solid #ccc"
//       },
//       "columns": ["Name", "Age", "Location"],
//       "data": [
//         { "Name": "John", "Age": 30, "Location": "New York" },
//         { "Name": "Alice", "Age": 25, "Location": "Los Angeles" },
//         { "Name": "Bob", "Age": 35, "Location": "Chicago" }
//       ]
//     },
//     {
//       "type": "table",
//       "tableType": "coupon_table",
//       "name": "Coupon Table",
//       "tableProperties": {
//         "width": "250px",
//         // "height": "200px",
//         "border": "1px solid #ccc"
//       },
//       "columns": ["Name", "unique_code"],
//       "data": [
//         { "Name": "ABC", "unique_code": 30 },
//         { "Name": "SSE", "unique_code": 25 },
//         { "Name": "OOD", "unique_code": 35 }
//       ]
//     },
//     {
//       "type": "table",
//       "tableType": "persona_table",
//       "name": "Employee Table",
//       "tableProperties": {
//         "width": "500px",
//         // "height": "200px",
//         "border": "2px solid #555"
//       },
//       "columns": ["Name", "Department", "Salary"],
//       "data": [
//         { "Name": "John Doe", "Department": "HR", "Salary": 60000 },
//         { "Name": "Alice Smith", "Department": "IT", "Salary": 75000 }
//       ]
//     },
//     {
//       "type": "graph",
//       "tableType": "bar_chart",
//       "name": "Daywise Data",
//       "tableProperties": {
//         "width": "500px",
//         "height": "280px",
//         "border": "1px solid #666"
//       } 
//     },
//     {
//       "type": "graph",
//       "tableType": "area_chart",
//       "name": "Daywise Data",
//       "tableProperties": {
//         "width": "400px",
//         "height": "280px",
//         "border": "1px solid #666"
//       } 
//     },
//     {
//       "type": "graph",
//       "tableType": "doughnut_chart",
//       "name": "Daywise Data",
//       "tableProperties": {
//         "width": "300px",
//         "height": "380px",
//         "border": "1px solid #666"
//       } 
//     },
//     {
//       "type": "graph",
//       "tableType": "radar_chart",
//       "name": "Daywise Data",
//       "tableProperties": {
//         "width": "500px",
//         "height": "500px",
//         "border": "1px solid #666"
//       } 
//     },
//     {
//       "type": "table",
//       "tableType": "persona_table",
//       "name": "Users Table",
//       "tableProperties": {
//         "width": "600px",
//         // "height": "250px",
//         "border": "1px solid #999"
//       },
//       "columns": ["Name", "Age", "Location"],
//       "data": [
//         { "Name": "Eva", "Age": 28, "Location": "San Francisco" },
//         { "Name": "David", "Age": 40, "Location": "Seattle" },
//         { "Name": "Linda", "Age": 32, "Location": "Miami" }
//       ]
//     },
//     // Add more entries as needed
//   ],
