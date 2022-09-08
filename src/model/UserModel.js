export class UserModel{
    #id
    #keyData = {}
    #todayScore
    #userInfos = {}
    #activitySessions = []
    #dailySessions = []
    #performanceData = []
    #performanceKind = {}

    getId(){
        return this.#id
    }

    setId(id){
        this.#id = id
        return this
    }

    getKeyData(){
        return this.#keyData
    }

    setKeyData(keyData){
        this.#keyData = keyData
        return this
    }

    getTodayScore(){
        return this.#todayScore
    }

    setTodayScore(todayScore){
        this.#todayScore = todayScore
        return this
    }

    getUserInfos(){
        return this.#userInfos
    }

    setUserInfos(userInfos){
        this.#userInfos = userInfos
        return this
    }

    getActivitySessions(){
        return this.#activitySessions
    }

    setActivitySessions(activitySessions){
        this.#activitySessions = activitySessions
        return this
    }

    getDailySessions(){
        return this.#dailySessions
    }

    setDailySessions(dailySessions){
        this.#dailySessions = dailySessions
        return this
    }
    
    getPerformanceData(){
        return this.#performanceData
    }

    setPerformanceData(performanceData){
        this.#performanceData = performanceData
        return this
    }

    getPerformanceKind(){
        return this.#performanceKind
    }

    setPerformanceKind(performanceKind){
        this.#performanceKind = performanceKind
        return this
    }
}