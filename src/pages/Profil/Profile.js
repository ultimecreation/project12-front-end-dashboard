import React, { useContext, useEffect } from 'react'
import DayliActivity from '../../components/DayliActivity/DayliActivity'
import Kpi from '../../components/Kpi/Kpi'
import ProfileHeader from '../../components/ProfileHeader/ProfileHeader'
import RadarItem from '../../components/Radar/RadarItem'
import Sessions from '../../components/Sessions/Sessions'
import UserHealth from '../../components/UserHealth/UserHealth'
import { UserContext } from '../../context/UserContext'
import './Profile.scss'

const Profile = () => {
    const userContext = useContext(UserContext)
    const { user, activities, sessions, performances } = userContext


    return (
        <main className='p-100'>
            <ProfileHeader firstName={user.userInfos.firstName} />
            <div className="content">
                <div className="content-main">
                    <DayliActivity activities={activities.sessions} />
                    <section id="summary">
                        <Sessions sessions={sessions.sessions} />
                        <RadarItem 
                            data={performances.data} 
                            kind={performances.kind} 
                            firstName={user.userInfos.firstName} 
                        />
                        <Kpi score={user.todayScore} />
                    </section>
                </div>
                <aside>
                    <UserHealth keyData={user.keyData} />
                </aside>
            </div>
        </main>
    )
}

export default Profile
