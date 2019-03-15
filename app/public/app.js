let submitSurvey = () => {
    const questions = document.getElementsByClassName('question')
    const answers = Array.from(questions).map(q => q.value)
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "http://localhost:3000/api/friends",
        "method": "POST",
        "headers": {
            "Content-Type": "application/json",
            "cache-control": "no-cache",
            "Postman-Token": "ef9b4d94-c391-4249-9b55-7996f56c6d72"
        },
        "processData": false,
        data: JSON.stringify(answers)
    }

    const unanswered = answers.find(a => isNaN(parseInt(a)))
    if (unanswered) {
        return console.log('finish this bitch');
    }
    

    $.ajax(settings).done(function (response) {
        let friendData = response;
        $('#myModal').find('.modal-body').append(`<p>${friendData.name}</p>`)
        $('#myModal').find('.modal-body').append(`<img src="${friendData.profilePic}">`)
        $('#myModal').modal('toggle')
        


        console.log(response);
    })

}








