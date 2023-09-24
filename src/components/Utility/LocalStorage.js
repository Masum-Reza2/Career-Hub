const jobApplication = () => {
    let storedData = localStorage.getItem('jobApplication');
    if (storedData) {
        return JSON.parse(storedData)
    }
    else {
        return []
    }
}

const saveJobApplicatin = (id) => {
    let storedData = jobApplication();
    let exist = storedData.find(data => data === id)
    if (!exist) {
        storedData.push(id)
        localStorage.setItem('jobApplication', JSON.stringify(storedData))
    }
}

export { jobApplication, saveJobApplicatin }