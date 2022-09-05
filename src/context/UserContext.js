import { createContext, useEffect, useState } from "react";


const UserContext = createContext({
    user: {},
    activity: [],
    sessions: []
})

const UserContextProvider = props => {
    // initialize variables
    const [user, setUser] = useState({})
    const [activity, setActivities] = useState([])
    const [sessions, setSessions] = useState([])
    const [performance, setPerformances] = useState([])

    /**
     * retrieve a single user using its id
     *
     * @var {number} id
     * @return {object}
     */
    const getUser = async id => {
        const data = await (await fetch(`http://localhost:3001/user/${id}`)).json()
        if (data) setUser(() => {
            return { ...data.data }
        })
    }

    /**
     * retrieve activities related to a user based on the user id
     *
     * @var {number} userId
     * @return {object}
     */
    const getActivities = async userId => {
        const data = await (await fetch(`http://localhost:3001/user/${userId}/activity`)).json()
        if (data) setActivities(() => {
            return { ...data.data }
        })
    }

    /**
     * retireve sessions related to a user based on the user id
     *
     * @var {number} UserId 
     * @return {object}
     */
    const getSessions = async userId => {
        const data = await (await fetch(`http://localhost:3001/user/${userId}/average-sessions`)).json()
        if (data) setSessions(() => {
            return { ...data.data }
        })
    }

    /**
     * retireve performances related to a user based on the user id
     *
     * @var {number} UserId 
     * @return {object}
     */
    const getPerformances = async userId => {
        const data = await (await fetch(`http://localhost:3001/user/${userId}/performance`)).json()
        if (data) setPerformances(() => {
            return { ...data.data }
        })
    }

    useEffect(() => {
        getUser(12)
        getActivities(12)
        getSessions(12)
        getPerformances(12)

        return () => {}
    }, [])
    return <UserContext.Provider value={{
        user,
        activity,
        sessions,
        performance,
        getUser,
        getActivities,
        getSessions,
        getPerformances,
    }}>
        {props.children}
    </UserContext.Provider>
}

export { UserContext, UserContextProvider }