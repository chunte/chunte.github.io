$(function(){
    var faqList = $('dl#faq')
    if(faqList.length){
        $.getJSON('/faq/faq.json', function(data){
            var faq = data.faq;
            var dt, dd, curr, thisId, a;
            for(var i = 0; i < faq.length; i++){
                curr = faq[i];
                thisId = 'item' + i;
                thisIconId = 'icon' + i;

                icon = $('<i class="fa fa-plus pull-right"></i>').addClass(thisId);
                a  = $('<a href="#">').html(" " + curr.q).append(icon);
                dt = $('<dt>').append(a).attr('data-toggle', 'collapse').attr('data-target', '#'+thisId).attr('data-parent', '#faq');
                dd = $('<dd>').html(curr.a).addClass('collapse').attr('id', thisId);

                faqList.append(dt).append(dd);
                faqList.on('shown.bs.collapse', function(e){
                   var targetId = $(e.target).attr('id'); 
                   toggleIconClass(targetId, 'fa-plus', 'fa-minus');
                });
                faqList.on('hidden.bs.collapse', function(e){
                   var targetId = $(e.target).attr('id'); 
                   toggleIconClass(targetId, 'fa-minus', 'fa-plus');
                });
            }
        });
    }
});

function toggleIconClass(id, curr, next){
    var i = $('.' + id);
    if(i.hasClass(curr)){
        i.removeClass(curr).addClass(next);
    }
}