window.onload = function(event){
        event.preventDefault();
        // $('#zone-container').innerHTML(contents);
        // console.log(contents)
        $.ajax({
          url: '/charts/getchart',
          type: 'get',
          // data: contents,
          dataType: 'json',
          success: function(data){
            console.log(data)
            contents = data.contents;
            var contents = data.contents
            $('#zone-container').append(contents);

          },
          error: function(err){
            console.log(err)
          }
        })
};

$('#edit-btn').click(function(){
        console.log('we tried to save it, we really did');
        var contents = {
          chart: document.getElementById('zone-container').innerHTML,
          nameOfChart: document.getElementById('title').innerHTML
        };
        console.log(typeof contents)
        $.ajax({
          url: '/charts/edit',
          type: 'post',
          data: contents,
          dataType: 'json',
          success: function(){
            console.log('chart sent')
            window.location.href = "/account";

          },
          error: function(err){
            console.log(err)
          }
        })
});
