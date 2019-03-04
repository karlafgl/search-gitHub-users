//Init GitHub
const github = new GitHub()

//Init IU
const ui = new UI()

//Search user 
const searchUser = document.getElementById('searchUser')

//Search input event listener
searchUser.addEventListener('keyup', (e) => {
    //Get input text
    const userText = searchUser.value

    if(userText !== ''){
        //Make http call
        github.getUser(userText)
        .then(data => {
            if(data.profile.message === 'Not Found') {
                //Show alert
                ui.showAlert('User not Found', 'alert alert-danger')
            } else {
                //Show profile
                ui.showProfile(data.profile)
                ui.showRepos(data.repos)
            }
        })
    } else {
        //Clear profile
        ui.clearProfile()
    }
})

