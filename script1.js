document.addEventListener("DOMContentLoaded",function(){
    document.querySelector("#navbar-toggle").addEventListener("blur",function(event){
        var screenwidth = window.innerWidth;
        if(screenwidth < 768){
            $("#collapsablenav").collapse('hide');
        }
    });
});