define([],{
    getQueryString:function(key){
        var search = location.search.slice(1);
        var searchArr = search.split('&');
        var tempArr = null;
        var searchObj ={};
        for(var i= 0,len = searchArr.length;i<len;i++){
            var tempArr = searchArr[i].split('=');
            searchObj[ tempArr[0] ] = tempArr[1];
        }
        return arguments.length?searchObj[key]:searchObj;
    }
})