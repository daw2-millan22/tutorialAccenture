sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "../utils/Formatter",
    "../utils/Common"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */

    function (Controller, JSONModel, Formatter, Common) {
        "use strict";

        return Controller.extend("tutorial1.controller.View3", {

            Formatter: Formatter,

            onInit: function () {
                //this.getOwnerComponent().setModel(new JSONModel("../model/cities.json"), "CitiesModel");
                const oCitiesModel = new JSONModel();
                oCitiesModel.loadData("../model/cities.json");
                this.getView().setModel(oCitiesModel, "CitiesModel");
            },
           /*onSayHello: function (oEvent) { 
                var oToolsModel = this.getOwnerComponent().getModel("ToolModel");
                var row= oEvent.getSource().getCells();
                row[0].getText();
                oToolsModel.setProperty("/cityName", row[0].getText());

                Common.openDialogFromFragment(this, "idSayHelloDialog", "tutorial1.fragment.sayHelloDialog");
                
                return;          
            },*/

            onPress: function (oEvent) {

                var oToolsModel = this.getOwnerComponent().getModel("ToolModel");

                var oModelNorthWind = this.getOwnerComponent().getModel();

                

                oModelNorthWind.read(oEvent.getSource().getBindingContext().sPath, {
                    urlParameters: {
                        "$expand": "Category, Order_Details, Supplier"
                    },
                    success: function (oData) {
                        sap.ui.getCore().setModel(new JSONModel(oData), "DetailModel");
                        Common.navigateTo(this, "RouteView4");
                    }.bind(this)
                })
                

                
            }
            
            
        });
    });