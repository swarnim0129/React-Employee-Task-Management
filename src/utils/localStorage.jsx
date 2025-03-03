const employees = [
    {
        "id": 1,
        "firstName": "Amit",
        "email": "emp@gmail.com",
        "password": "0129",
        "tasks": [
            {
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false,
                "taskTitle": "Complete Report",
                "taskDescription": "Finish the quarterly financial report.",
                "taskDate": "2025-02-25",
                "category": "Finance"
            },
            {
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false,
                "taskTitle": "Team Meeting",
                "taskDescription": "Attend the team meeting for project updates.",
                "taskDate": "2025-02-20",
                "category": "Meetings"
            },
            {
                "active": false,
                "newTask": false,
                "completed": false,
                "failed": true,
                "taskTitle": "Client Feedback",
                "taskDescription": "Gather feedback from the client on the new feature.",
                "taskDate": "2025-02-18",
                "category": "Client Relations"
            }
        ],
        "taskNumbers": {
            "active": 1,
            "newTask": 2,
            "completed": 4,
            "failed": 3
        }
    },
    {
        "id": 2,
        "firstName": "Vikram",
        "email": "employee2@example.com",
        "password": "0129",
        "tasks": [
            {
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false,
                "taskTitle": "Bug Fixes",
                "taskDescription": "Resolve issues reported by QA team.",
                "taskDate": "2025-02-27",
                "category": "Development"
            },
            {
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false,
                "taskTitle": "Code Review",
                "taskDescription": "Review code submitted by teammates.",
                "taskDate": "2025-02-24",
                "category": "Development"
            }
        ],
        "taskNumbers": {
            "active": 2,
            "newTask": 1,
            "completed": 0,
            "failed": 0
        }
    },
    {
        "id": 3,
        "firstName": "Sneha",
        "email": "employee3@example.com",
        "password": "0129",
        "tasks": [
            {
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false,
                "taskTitle": "Content Creation",
                "taskDescription": "Create content for social media posts.",
                "taskDate": "2025-02-19",
                "category": "Marketing"
            },
            {
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false,
                "taskTitle": "Strategy Meeting",
                "taskDescription": "Plan the marketing strategy for the upcoming campaign.",
                "taskDate": "2025-02-28",
                "category": "Marketing"
            }
        ],
        "taskNumbers": {
            "active": 1,
            "newTask": 1,
            "completed": 1,
            "failed": 0
        }
    },
    {
        "id": 4,
        "firstName": "Rohan",
        "email": "employee4@example.com",
        "password": "0129",
        "tasks": [
            {
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false,
                "taskTitle": "Inventory Check",
                "taskDescription": "Verify inventory levels and update records.",
                "taskDate": "2025-02-26",
                "category": "Operations"
            },
            {
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false,
                "taskTitle": "Supplier Meeting",
                "taskDescription": "Discuss new terms with suppliers.",
                "taskDate": "2025-02-21",
                "category": "Operations"
            },
            {
                "active": false,
                "newTask": false,
                "completed": false,
                "failed": true,
                "taskTitle": "Shipment Delay Resolution",
                "taskDescription": "Address delays in shipments and provide solutions.",
                "taskDate": "2025-02-22",
                "category": "Logistics"
            }
        ],
        "taskNumbers": {
            "active": 1,
            "newTask": 0,
            "completed": 1,
            "failed": 1
        }
    },
    {
        "id": 5,
        "firstName": "Anjali",
        "email": "employee5@example.com",
        "password": "0129",
        "tasks": [
            {
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false,
                "taskTitle": "Product Launch Prep",
                "taskDescription": "Coordinate with teams for the upcoming product launch.",
                "taskDate": "2025-03-01",
                "category": "Management"
            },
            {
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false,
                "taskTitle": "Budget Review",
                "taskDescription": "Review and approve budget proposals.",
                "taskDate": "2025-02-23",
                "category": "Finance"
            }
        ],
        "taskNumbers": {
            "active": 1,
            "newTask": 1,
            "completed": 1,
            "failed": 0
        }
    }
];


const admin = [{
    "id": 1,
    "email": "admin@example.com",
    "password": "0129"
}];

export const setLocalStorage=()=>{
    localStorage.setItem("employees",JSON.stringify(employees))
    localStorage.setItem("admin",JSON.stringify(admin))
}

export const getLocalStorage=()=>{
    const employees=JSON.parse(localStorage.getItem("employees"))
    const admin=JSON.parse(localStorage.getItem("admin"))
    return {employees,admin}
}

