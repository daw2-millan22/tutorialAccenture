sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */

    function (Controller, JSONModel) {
        "use strict";

        return Controller.extend("tutorial1.controller.View2", {
            onInit: function () {
                //this.getOwnerComponent().setModel(new JSONModel("../model/cities.json"), "CitiesModel");
                const oCitiesModel = new JSONModel();
                oCitiesModel.loadData("../model/cities.json");
                this.getView().setModel(oCitiesModel, "CitiesModel");
            },
            formatPopulation: function(fPopulation){
                if(!fPopulation) return;
                return fPopulation * 1000000;
            }
        });
    });