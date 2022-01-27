sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "../utils/Validator",
    "../utils/Common",
    "tutorial1/utils/Constants"

],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, JSONModel, Validator, Common, Constants) {
        "use strict";

        return Controller.extend("tutorial1.controller.View1", {
            onInit: function () {
                const oCitiesModel = new JSONModel( Constants.model.TOOLS_MODEL);
                oCitiesModel.loadData("../model/cities.json");
                this.getView().setModel(oCitiesModel, "CitiesModel");
            },

            onSayHello: function (oEvent) {
                
                
                if (!Validator.isNotEmpty(this.getView().byId("city-combobox").getSelectedKey())) {
                    sap.m.MessageToast.show("Select a City", {
                        duration: 3000, 
                    
                    });
                    
                    
                    return;
                }
                Common.openDialogFromFragment(this, "idSayHelloDialog", "tutorial1.fragment.sayHelloDialog");

                
                
            },
            
            onClose: function () {
                if ( this._dialogSayHello ) {
                    this._dialogSayHello.close()
                }
            },
            
            onNavigateToView2: function () {
                Common.navigateTo(this, "RouteView2");
            },
            onNavigateToView3: function () {
                Common.navigateTo(this, "RouteView3");
            }
        });
    });