let submitSurvey = () => {
    const questions = document.getElementsByClassName('question')
    const answers = Array.from(questions).map(q => q.value)
    const url = window.location.origin + '/api/friends'
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": url,
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
    }
    

    $.ajax(settings).done(function (response) {
        let friendData = response;
        $('#myModal').find('.modal-body').append(`<p>${friendData.name}</p>`)
        $('#myModal').find('.modal-body').append(`<img src="${friendData.profilePic}">`)
        $('#myModal').modal('toggle')
        


        console.log(response);
    })

}









