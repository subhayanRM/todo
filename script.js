$(document).ready(function () {
    $('#submit').click(function () {
        var toAdd = $('input[name=checkListItem]').val();
        $('.list').append("<li class='item'>" + toAdd + "</li>");
        $('#checkListForm').get(0).reset();
    });
    
    $(document).on('click', '.item', function () {
        $('.donelist').append($('<li></li>').append($(this).clone()).html());
        $(this).remove();
    });
    
});


