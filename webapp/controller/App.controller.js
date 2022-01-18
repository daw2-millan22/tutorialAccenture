sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */

    function (Controller, JSONModel) {
        "use strict";

        return Controller.extend("tutorial1.controller.App", {
            onInit: function () {
                this.getOwnerComponent().setModel(new JSONModel({name: "Clase Fiori"}), "ToolModel");
                this.getView().setModel(new JSONModel("../model/cities.json"), "CitiesModel");
            }
            
        });
    });
