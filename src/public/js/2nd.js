$(".realtime").click(function() {
    //let email = localStorage.getItem('email')
    let token = document.getElementById("emailID").value
    let domain = ``
    if(token && token.length == 169){
        localStorage.setItem('token',token)
        setInterval(() => {
            $.ajax({
                url: `${domain}/mailbox`,
                headers: {"Authorization": `Bearer ${token}`},
                success: function(response) { 
                    let data = response.data
                    console.log(data.length)
                    if(data.length > 0){
                        let list = ''
                        for(let i = 0; i < data.length; i++){
                            if (i % 2 == 0){
                                list = list + '<div class="data-item even"><p class="">' +data[i].sender + '<p class="">' +data[i].time +'</p><p class="">'+data[i].subject+'</p><a href="/read/'+data[i]._id+'">Xem</a></div>'
                            }
                            else{
                                list = list + '<div class="data-item"><p class="">' +data[i].sender + '<p class="">' + data[i].time +'</p><p class="">'+data[i].subject+'</p><a href="/read/'+data[i]._id+'">Xem</a></div>'
                            }
                            
                        }
                        $(".data-mailbox").empty()
                        let fulldata = '<div class="data">' + list + '</div>'
                        $(".data-mailbox").append(fulldata);
                    }
                }
            });
        }, 1000)
    }
    else{
        alert("Vui lòng nhập token Email Hợp lệ");
    } 
});