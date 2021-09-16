export let initialState = {
    profileInfo:
        {
            "id": '-',
            "firstName": "",
            "lastName": "-",
            "email": "-",
            "phone": "-",
            "adress": {
                "streetAddress": "-",
                "city": "-",
                "state": "-",
                "zip": "-"
            },
            "description": "-",
            "uniqueId": '0'
        },
    findUsers:[],
    users: [
        {
            "id": 1,
            "firstName": "",
            "lastName": "-",
            "email": "-",
            "phone": "-",
            "adress": {
                "streetAddress": "-",
                "city": "-",
                "state": "-",
                "zip": "-"
            },
            "description": "-",
           "uniqueId": '0'
        },
    ],
    statesList: [
        {id: 1, stateName: "WI"},
        {id: 2, stateName: "TN"},
        {id: 3, stateName: "FL"},
        {id: 4, stateName: "WI"},
        {id: 5, stateName: "NE"},
        {id: 6, stateName: "NY"},
    ],
    counter: 1,
    usersPage: 20,
    lastPage: 1,
    currentUsersPage: 1,
    currentSearch: '',
    sortBy: '',
    sortASC: true,
    searchString:'',
    searchState:''
}