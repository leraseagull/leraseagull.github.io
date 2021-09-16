export const getLastPage =(totalUsers, usersPage)=>{
    let lastPage = 1;
    if (totalUsers % usersPage === 0) {
        lastPage = totalUsers / usersPage
        return lastPage
    } else {
        lastPage =  Math.floor(totalUsers / usersPage) + 1
        return lastPage
    }
}

export const getUsersOnCurrentPage = (pageNumber, users, usersPage) => {

    if (users.length <= usersPage) return users

    let usersOnCurrentPage = []

    let lastPage = getLastPage(users.length, usersPage)
    if (pageNumber !== lastPage) {
        for (let i = (pageNumber - 1) * usersPage; i < (pageNumber) * usersPage; i++) {
            usersOnCurrentPage.push(users[i])
        }
        return usersOnCurrentPage
    } else {
        for (let i = (pageNumber - 1) * usersPage; i < users.length; i++) {
            usersOnCurrentPage.push(users[i])
        }
        return usersOnCurrentPage
    }
}

export const getStatesList =(users)=>{
    let statesListArray=[]
    let statesList=[]
    let idState=0
    users.forEach(el=>{
        if (!statesListArray.includes(el.adress.state)) {
            statesListArray.push(el.adress.state)
            statesList.push({id:idState, stateName: el.adress.state})
            idState=idState+1
        }
    })
    return statesList
}