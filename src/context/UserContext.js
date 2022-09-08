import { createContext, useEffect, useState } from "react";
import { UserModel } from "../model/UserModel";


const UserContext = createContext({})

const UserContextProvider = props => {
    // initialize variables
    const [user, setUser] = useState({})
    const [activities, setActivities] = useState([])
    const [sessions, setSessions] = useState([])
    const [performances, setPerformances] = useState([])
    const userModel = new UserModel()

    /**
     * retrieve a single user using its id
     *
     * @var {number} id
     * @return {object}
     */
    const getUser = async id => {
        const data = await (await fetch(`http://localhost:3001/user/${id}`)).json()
        if (data) setUser(() => {
            
            // bind incoming data 
            userModel.setId(data.data.id)
                        .setKeyData(data.data.keyData)
                        .setTodayScore(data.data.todayScore)
                        .setUserInfos(data.data.userInfos)

            return { 
                id: userModel.getId(),
                keyData: userModel.getKeyData(),
                todayScore: userModel.getTodayScore(),
                userInfos: userModel.getUserInfos(),
             }
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

            // bind incoming data 
            userModel.setActivitySessions(data.data.sessions)

            return { 
                userId: userModel.getId(),
                sessions: userModel.getActivitySessions()
             }
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

            // bind incoming data 
            userModel.setDailySessions(data.data.sessions)
           
            return { 
                userId: userModel.getId(),
                sessions: userModel.getDailySessions()
             }
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

            // bind incoming data 
            userModel.setPerformanceData(data.data.data)
                        .setPerformanceKind(data.data.kind)
            
            return { 
                userId: userModel.getId(),
                data: userModel.getPerformanceData(),
                kind: userModel.getPerformanceKind()
             }
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
        activities,
        sessions,
        performances
    }}>
        {props.children}
    </UserContext.Provider>
}

export { UserContext, UserContextProvider }