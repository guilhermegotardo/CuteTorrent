window.Settings =  Backbone.Model.extend({
	urlRoot:'/settings/api',
    defaults: function(){
        return {
           filteringGroups:{}
        }
    }
});