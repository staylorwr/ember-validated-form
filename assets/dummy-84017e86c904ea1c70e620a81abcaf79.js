"use strict";define("dummy/app",["exports","ember","dummy/resolver","ember-load-initializers","dummy/config/environment"],function(e,t,n,r,a){var l=void 0;t.default.MODEL_FACTORY_INJECTIONS=!0,l=t.default.Application.extend({modulePrefix:a.default.modulePrefix,podModulePrefix:a.default.podModulePrefix,Resolver:n.default}),(0,r.default)(l,a.default.modulePrefix),e.default=l}),define("dummy/components/one-way-checkbox",["exports","ember-one-way-controls/components/one-way-checkbox"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/components/one-way-color",["exports","ember-one-way-controls/components/one-way-color"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/components/one-way-date",["exports","ember-one-way-controls/components/one-way-date"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/components/one-way-datetime-local",["exports","ember-one-way-controls/components/one-way-datetime-local"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/components/one-way-email",["exports","ember-one-way-controls/components/one-way-email"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/components/one-way-file",["exports","ember-one-way-controls/components/one-way-file"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/components/one-way-hidden",["exports","ember-one-way-controls/components/one-way-hidden"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/components/one-way-input",["exports","ember-one-way-controls/components/one-way-input"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/components/one-way-month",["exports","ember-one-way-controls/components/one-way-month"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/components/one-way-number",["exports","ember-one-way-controls/components/one-way-number"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/components/one-way-password",["exports","ember-one-way-controls/components/one-way-password"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/components/one-way-radio",["exports","ember-one-way-controls/components/one-way-radio"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/components/one-way-range",["exports","ember-one-way-controls/components/one-way-range"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/components/one-way-search",["exports","ember-one-way-controls/components/one-way-search"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/components/one-way-select",["exports","ember-one-way-controls/components/one-way-select"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/components/one-way-select/option",["exports","ember-one-way-controls/components/one-way-select/option"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/components/one-way-tel",["exports","ember-one-way-controls/components/one-way-tel"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/components/one-way-text",["exports","ember-one-way-controls/components/one-way-text"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/components/one-way-textarea",["exports","ember-one-way-controls/components/one-way-textarea"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/components/one-way-time",["exports","ember-one-way-controls/components/one-way-time"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/components/one-way-url",["exports","ember-one-way-controls/components/one-way-url"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/components/one-way-week",["exports","ember-one-way-controls/components/one-way-week"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/components/validated-form/component",["exports","ember-validated-form/components/validated-form/component"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/components/validated-input/component",["exports","ember-validated-form/components/validated-input/component"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/controllers/index",["exports","ember","dummy/validations/user"],function(e,t,n){e.default=t.default.Controller.extend({UserValidations:n.default,countries:["United States","United Kingdom","Switzerland","Other"],actions:{submit:function(e){e.save(),console.log("submit",e)}}})}),define("dummy/helpers/and",["exports","ember","ember-truth-helpers/helpers/and"],function(e,t,n){var r=null;t.default.Helper?r=t.default.Helper.helper(n.andHelper):t.default.HTMLBars.makeBoundHelper&&(r=t.default.HTMLBars.makeBoundHelper(n.andHelper)),e.default=r}),define("dummy/helpers/app-version",["exports","ember","dummy/config/environment"],function(e,t,n){function r(){return a}e.appVersion=r;var a=n.default.APP.version;e.default=t.default.Helper.helper(r)}),define("dummy/helpers/changeset",["exports","ember-changeset-validations/helpers/changeset"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"changeset",{enumerable:!0,get:function(){return t.changeset}})}),define("dummy/helpers/eq",["exports","ember","ember-truth-helpers/helpers/equal"],function(e,t,n){var r=null;t.default.Helper?r=t.default.Helper.helper(n.equalHelper):t.default.HTMLBars.makeBoundHelper&&(r=t.default.HTMLBars.makeBoundHelper(n.equalHelper)),e.default=r}),define("dummy/helpers/gt",["exports","ember","ember-truth-helpers/helpers/gt"],function(e,t,n){var r=null;t.default.Helper?r=t.default.Helper.helper(n.gtHelper):t.default.HTMLBars.makeBoundHelper&&(r=t.default.HTMLBars.makeBoundHelper(n.gtHelper)),e.default=r}),define("dummy/helpers/gte",["exports","ember","ember-truth-helpers/helpers/gte"],function(e,t,n){var r=null;t.default.Helper?r=t.default.Helper.helper(n.gteHelper):t.default.HTMLBars.makeBoundHelper&&(r=t.default.HTMLBars.makeBoundHelper(n.gteHelper)),e.default=r}),define("dummy/helpers/is-array",["exports","ember","ember-truth-helpers/helpers/is-array"],function(e,t,n){var r=null;t.default.Helper?r=t.default.Helper.helper(n.isArrayHelper):t.default.HTMLBars.makeBoundHelper&&(r=t.default.HTMLBars.makeBoundHelper(n.isArrayHelper)),e.default=r}),define("dummy/helpers/lt",["exports","ember","ember-truth-helpers/helpers/lt"],function(e,t,n){var r=null;t.default.Helper?r=t.default.Helper.helper(n.ltHelper):t.default.HTMLBars.makeBoundHelper&&(r=t.default.HTMLBars.makeBoundHelper(n.ltHelper)),e.default=r}),define("dummy/helpers/lte",["exports","ember","ember-truth-helpers/helpers/lte"],function(e,t,n){var r=null;t.default.Helper?r=t.default.Helper.helper(n.lteHelper):t.default.HTMLBars.makeBoundHelper&&(r=t.default.HTMLBars.makeBoundHelper(n.lteHelper)),e.default=r}),define("dummy/helpers/not-eq",["exports","ember","ember-truth-helpers/helpers/not-equal"],function(e,t,n){var r=null;t.default.Helper?r=t.default.Helper.helper(n.notEqualHelper):t.default.HTMLBars.makeBoundHelper&&(r=t.default.HTMLBars.makeBoundHelper(n.notEqualHelper)),e.default=r}),define("dummy/helpers/not",["exports","ember","ember-truth-helpers/helpers/not"],function(e,t,n){var r=null;t.default.Helper?r=t.default.Helper.helper(n.notHelper):t.default.HTMLBars.makeBoundHelper&&(r=t.default.HTMLBars.makeBoundHelper(n.notHelper)),e.default=r}),define("dummy/helpers/one-way-select/contains",["exports","ember-one-way-controls/helpers/one-way-select/contains"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"contains",{enumerable:!0,get:function(){return t.contains}})}),define("dummy/helpers/or",["exports","ember","ember-truth-helpers/helpers/or"],function(e,t,n){var r=null;t.default.Helper?r=t.default.Helper.helper(n.orHelper):t.default.HTMLBars.makeBoundHelper&&(r=t.default.HTMLBars.makeBoundHelper(n.orHelper)),e.default=r}),define("dummy/helpers/pluralize",["exports","ember-inflector/lib/helpers/pluralize"],function(e,t){e.default=t.default}),define("dummy/helpers/singularize",["exports","ember-inflector/lib/helpers/singularize"],function(e,t){e.default=t.default}),define("dummy/helpers/xor",["exports","ember","ember-truth-helpers/helpers/xor"],function(e,t,n){var r=null;t.default.Helper?r=t.default.Helper.helper(n.xorHelper):t.default.HTMLBars.makeBoundHelper&&(r=t.default.HTMLBars.makeBoundHelper(n.xorHelper)),e.default=r}),define("dummy/initializers/app-version",["exports","ember-cli-app-version/initializer-factory","dummy/config/environment"],function(e,t,n){var r=n.default.APP,a=r.name,l=r.version;e.default={name:"App Version",initialize:(0,t.default)(a,l)}}),define("dummy/initializers/container-debug-adapter",["exports","ember-resolver/container-debug-adapter"],function(e,t){e.default={name:"container-debug-adapter",initialize:function(){var e=arguments[1]||arguments[0];e.register("container-debug-adapter:main",t.default),e.inject("container-debug-adapter:main","namespace","application:main")}}}),define("dummy/initializers/data-adapter",["exports","ember"],function(e,t){e.default={name:"data-adapter",before:"store",initialize:t.default.K}}),define("dummy/initializers/ember-data",["exports","ember-data/setup-container","ember-data/-private/core"],function(e,t,n){e.default={name:"ember-data",initialize:t.default}}),define("dummy/initializers/export-application-global",["exports","ember","dummy/config/environment"],function(e,t,n){function r(){var e=arguments[1]||arguments[0];if(n.default.exportApplicationGlobal!==!1){var r;if("undefined"!=typeof window)r=window;else if("undefined"!=typeof global)r=global;else{if("undefined"==typeof self)return;r=self}var a,l=n.default.exportApplicationGlobal;a="string"==typeof l?l:t.default.String.classify(n.default.modulePrefix),r[a]||(r[a]=e,e.reopen({willDestroy:function(){this._super.apply(this,arguments),delete r[a]}}))}}e.initialize=r,e.default={name:"export-application-global",initialize:r}}),define("dummy/initializers/injectStore",["exports","ember"],function(e,t){e.default={name:"injectStore",before:"store",initialize:t.default.K}}),define("dummy/initializers/store",["exports","ember"],function(e,t){e.default={name:"store",after:"ember-data",initialize:t.default.K}}),define("dummy/initializers/transforms",["exports","ember"],function(e,t){e.default={name:"transforms",before:"store",initialize:t.default.K}}),define("dummy/initializers/truth-helpers",["exports","ember","ember-truth-helpers/utils/register-helper","ember-truth-helpers/helpers/and","ember-truth-helpers/helpers/or","ember-truth-helpers/helpers/equal","ember-truth-helpers/helpers/not","ember-truth-helpers/helpers/is-array","ember-truth-helpers/helpers/not-equal","ember-truth-helpers/helpers/gt","ember-truth-helpers/helpers/gte","ember-truth-helpers/helpers/lt","ember-truth-helpers/helpers/lte"],function(e,t,n,r,a,l,o,u,i,d,m,f,p){function s(){t.default.Helper||((0,n.registerHelper)("and",r.andHelper),(0,n.registerHelper)("or",a.orHelper),(0,n.registerHelper)("eq",l.equalHelper),(0,n.registerHelper)("not",o.notHelper),(0,n.registerHelper)("is-array",u.isArrayHelper),(0,n.registerHelper)("not-eq",i.notEqualHelper),(0,n.registerHelper)("gt",d.gtHelper),(0,n.registerHelper)("gte",m.gteHelper),(0,n.registerHelper)("lt",f.ltHelper),(0,n.registerHelper)("lte",p.lteHelper))}e.initialize=s,e.default={name:"truth-helpers",initialize:s}}),define("dummy/instance-initializers/ember-data",["exports","ember-data/-private/instance-initializers/initialize-store-service"],function(e,t){e.default={name:"ember-data",initialize:t.default}}),define("dummy/models/user",["exports","ember-data/model","ember-data/attr"],function(e,t,n){e.default=t.default.extend({firstName:(0,n.default)("string"),lastName:(0,n.default)("string"),aboutMe:(0,n.default)("string"),country:(0,n.default)("string")})}),define("dummy/resolver",["exports","ember-resolver"],function(e,t){e.default=t.default}),define("dummy/router",["exports","ember","dummy/config/environment"],function(e,t,n){var r=t.default.Router.extend({location:n.default.locationType,rootURL:n.default.rootURL});r.map(function(){}),e.default=r}),define("dummy/routes/index",["exports","ember"],function(e,t){e.default=t.default.Route.extend({model:function(){return this.store.createRecord("user")}})}),define("dummy/services/ajax",["exports","ember-ajax/services/ajax"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/templates/application",["exports"],function(e){e.default=Ember.HTMLBars.template({id:"3hM3Un8V",block:'{"statements":[["append",["unknown",["outlet"]],false],["text","\\n"]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',meta:{moduleName:"dummy/templates/application.hbs"}})}),define("dummy/templates/index",["exports"],function(e){e.default=Ember.HTMLBars.template({id:"BsbqPTo9",block:'{"statements":[["block",["validated-form"],null,[["model","on-submit","submit-label"],[["helper",["changeset"],[["get",["model"]],["get",["UserValidations"]]],null],["helper",["action"],[["get",[null]],"submit"],null],"Save"]],0]],"locals":[],"named":[],"yields":[],"blocks":[{"statements":[["text","\\n  "],["append",["helper",["f","input"],null,[["label","name"],["First name","firstName"]]],false],["text","\\n  "],["append",["helper",["f","input"],null,[["label","name"],["Last name","lastName"]]],false],["text","\\n\\n  "],["append",["helper",["f","input"],null,[["type","label","name"],["textarea","About me","aboutMe"]]],false],["text","\\n\\n  "],["append",["helper",["f","input"],null,[["type","label","name","options","selected"],["select","Country","country",["get",["countries"]],["get",["model","country"]]]]],false],["text","\\n\\n"]],"locals":["f"]}],"hasPartials":false}',meta:{moduleName:"dummy/templates/index.hbs"}})}),define("dummy/validations/user",["exports","ember-changeset-validations/validators"],function(e,t){e.default={firstName:[(0,t.validatePresence)(!0),(0,t.validateLength)({min:3,max:40})],lastName:[(0,t.validatePresence)(!0),(0,t.validateLength)({min:3,max:40})],aboutMe:[(0,t.validateLength)({allowBlank:!0,max:200})]}}),define("dummy/config/environment",["ember"],function(e){var t="dummy";try{var n=t+"/config/environment",r=document.querySelector('meta[name="'+n+'"]').getAttribute("content"),a=JSON.parse(unescape(r)),l={default:a};return Object.defineProperty(l,"__esModule",{value:!0}),l}catch(e){throw new Error('Could not read config from meta tag with name "'+n+'".')}}),runningTests||require("dummy/app").default.create({name:"ember-validated-form",version:"0.0.0+d0564279"});