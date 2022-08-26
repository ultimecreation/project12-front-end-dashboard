import React, { useContext, useEffect } from 'react'
import DayliActivity from '../../components/DayliActivity/DayliActivity'
import Kpi from '../../components/Kpi/Kpi'
import ProfileHeader from '../../components/ProfileHeader/ProfileHeader'
import Radar from '../../components/Radar/Radar'
import Sessions from '../../components/Sessions/Sessions'
import UserHealth from '../../components/UserHealth/UserHealth'
import { UserContext } from '../../context/UserContext'
import './Profile.scss'

const Profile = () => {
  const userContext = useContext(UserContext)
  const { user, getUser, activity, getActivity, sessions, getSessions, performance, getPerformance } = userContext


  return (
    <main className='p-100'>
      <ProfileHeader firstName={user.userInfos.firstName} />

      <div className="content">
        <div className="content-main">
          <DayliActivity />
          <section id="summary">
            <Sessions/>
            <Radar/>
            <Kpi/>
          </section>
        </div>
        <aside>
          <UserHealth />
        </aside>
      </div>
    </main>
  )
}

export default Profile
