sap.ui.define([

], function (){
    var Formatter = {
        formatPopulation: function(fPopulation){
            if(!fPopulation) return;
            return fPopulation * 1000000;
        }
    }
    return Formatter;
},true);

