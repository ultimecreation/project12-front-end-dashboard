import { createContext, useEffect, useState } from "react";


const UserContext = createContext({
    user: {},
    activity: [],
    sessions: []
})

const UserContextProvider = props => {
    const [user, setUser] = useState({})
    const [activity, setActivity] = useState([])
    const [sessions, setSessions] = useState([])
    const [performance, setPerformance] = useState([])

    const getUser = async id => {
        const data = await (await fetch(`http://localhost:3001/user/${id}`)).json()
        if (data) setUser(() => {
            return { ...data.data }
        })
    }

    const getActivity = async userId => {
        const data = await (await fetch(`http://localhost:3001/user/${userId}/activity`)).json()
        if (data) setActivity(() => {
            return { ...data.data }
        })
    }

    const getSessions = async userId => {
        const data = await (await fetch(`http://localhost:3001/user/${userId}/average-sessions`)).json()
        if (data) setSessions(() => {
            return { ...data.data }
        })
    }

    const getPerformance = async userId => {
        const data = await (await fetch(`http://localhost:3001/user/${userId}/performance`)).json()
        if (data) setPerformance(() => {
            return { ...data.data }
        })
    }

    useEffect(() => {
        getUser(12)
        getActivity(12)
        getSessions(12)
        getPerformance(12)
        
        // return () => {}
      },[] )
    return <UserContext.Provider value={{
        user,
        activity,
        sessions,
        performance,
        getUser,
        getActivity,
        getSessions,
        getPerformance,
    }}>
        {props.children}
    </UserContext.Provider>
}

export { UserContext, UserContextProvider }