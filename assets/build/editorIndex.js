!function(e){var t={};function n(o){if(t[o])return t[o].exports;var a=t[o]={i:o,l:!1,exports:{}};return e[o].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:o})},n.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=11)}([function(e,t){!function(){e.exports=this.wp.element}()},function(e,t){!function(){e.exports=this.wp.components}()},function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},function(e,t,n){var o=n(15);e.exports=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&o(e,t)}},function(e,t){function n(t){return e.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},n(t)}e.exports=n},function(e,t,n){var o=n(16),a=n(7);e.exports=function(e,t){return!t||"object"!==o(t)&&"function"!=typeof t?a(e):t}},function(e,t){function n(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}e.exports=function(e,t,o){return t&&n(e.prototype,t),o&&n(e,o),e}},function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},function(e,t,n){var o=n(19),a=n(18),r=n(17);e.exports=function(e){return o(e)||a(e)||r()}},function(e,t){!function(){e.exports=this.wp.editor}()},function(e,t){function n(){return e.exports=n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},n.apply(this,arguments)}e.exports=n},function(e,t,n){"use strict";n.r(t);var o=n(10),a=n.n(o),r=n(2),i=n.n(r),l=n(0),s=n(8),c=n.n(s),u=n(6),p=n.n(u),g=n(5),h=n.n(g),d=n(4),b=n.n(d),m=n(3),f=n.n(m),_=n(7),k=n.n(_),y=function(e){function t(e){var n;return i()(this,t),(n=h()(this,b()(t).call(this,e))).state={detach:!1},n.detach=n.detach.bind(k()(n)),n}return f()(t,e),p()(t,[{key:"detach",value:function(){this.setState({detach:!this.state.detach})}},{key:"render",value:function(){return Object(l.createElement)("div",{className:"Preview "+(this.props.isSelected&&this.state.detach?"FloatingPreview":"")},this.props.showBar?Object(l.createElement)("div",{className:"PreviewBar"},"Preview",Object(l.createElement)("button",{className:"DetachPreview",onClick:this.detach},this.state.detach?"Reattach":"Detach")):null,Object(l.createElement)("div",{className:"PreviewContainer"},this.props.children))}}]),t}(l.Component),w=n(1),v=function(e){function t(e){var n;return i()(this,t),(n=h()(this,b()(t).call(this,e))).state={selectedOption:e.selectedOption},n.setSelected=n.setSelected.bind(k()(n)),n}return f()(t,e),p()(t,[{key:"setSelected",value:function(e){this.setState({selectedOption:e}),this.props.onSelectedLayoutChange(e)}},{key:"render",value:function(){var e=this;return Object(l.createElement)("div",{className:"LayoutSelector"},this.props.options.map((function(t,n){return Object(l.createElement)("label",{className:"LayoutOption",key:n},Object(l.createElement)("div",{style:{display:"flex"}},Object(l.createElement)(w.RadioControl,{name:"layoutOption",selected:e.state.selectedOption,options:[{value:t.value}],onChange:e.setSelected}),t.label),t.image?Object(l.createElement)("img",{src:t.image}):null,t.help?Object(l.createElement)("p",{className:"help",dangerouslySetInnerHTML:{__html:t.help}}):null)})))}}]),t}(l.Component),C=function(e){function t(){return i()(this,t),h()(this,b()(t).apply(this,arguments))}return f()(t,e),p()(t,[{key:"render",value:function(){return Object(l.createElement)("div",{className:"FormSectionTitle"},this.props.children)}}]),t}(l.Component),O=function(e){function t(){return i()(this,t),h()(this,b()(t).apply(this,arguments))}return f()(t,e),p()(t,[{key:"render",value:function(){return Object(l.createElement)("div",{className:"FormHelp"},this.props.children)}}]),t}(l.Component),E=function(e){function t(){return i()(this,t),h()(this,b()(t).apply(this,arguments))}return f()(t,e),p()(t,[{key:"render",value:function(){return Object(l.createElement)("div",{className:"InlineFormFeedback"},this.props.children)}}]),t}(l.Component),j=n(9),x=function(e){function t(e){return i()(this,t),h()(this,b()(t).call(this,e))}return f()(t,e),p()(t,[{key:"render",value:function(){return Object(l.createElement)("div",{className:"ValidationMessage"},Object(l.createElement)("ul",null,this.props.message.map((function(e,t){return Object(l.createElement)("li",{key:t}," ",e," ")}))))}}]),t}(l.Component),T=wp.i18n.__,S=function(e){function t(e){return i()(this,t),h()(this,b()(t).call(this,e))}return f()(t,e),p()(t,[{key:"renderEdit",value:function(){var e,t=(0,wp.data.select("core/editor").getCurrentPostType)(),n=[];for(var o in window.p4en_vars.pages){var a;e=window.p4en_vars.pages[o].map((function(e){return{label:e.name,value:e.id}})),n=(a=n).concat.apply(a,[{label:"-- "+o,value:o}].concat(c()(e)))}var r=window.p4en_vars.forms.map((function(e){return{label:e.post_title,value:e.ID}}));return Object(l.createElement)("div",null,Object(l.createElement)("div",null,Object(l.createElement)(C,null,T("EN Form options","planet4-engagingnetworks-backend")),Object(l.createElement)(O,null,T("Display options for EN Forms","planet4-engagingnetworks-backend")),Object(l.createElement)(w.SelectControl,{label:T("Engaging Network Live Pages","planet4-engagingnetworks-backend"),value:this.props.en_page_id,options:[{label:"No pages",value:0}].concat(c()(n)),disabled:!n.length,onChange:this.props.onPageChange}),n.length?Object(l.createElement)(O,null,T("Select the Live EN page that this form will be submitted to.","planet4-engagingnetworks-backend")):Object(l.createElement)(E,null,T("Check your EngagingNetworks settings!","planet4-engagingnetworks-backend")),Object(l.createElement)(w.SelectControl,{label:T("- Select Goal -","planet4-engagingnetworks-backend"),value:this.props.enform_goal,options:[{label:"Petition Signup",value:"Petition Signup"},{label:"Action Alert",value:"Action Alert"},{label:"Contact Form",value:"Contact Form"},{label:"Other",value:"Other"}],onChange:this.props.onGoalChange}),Object(l.createElement)("div",null,Object(l.createElement)(v,{selectedOption:this.props.en_form_style,onSelectedLayoutChange:this.props.onSelectedLayoutChange,options:[{label:T("Page body / text size width. No background.","planet4-engagingnetworks-backend"),image:window.p4en_vars.home+"images/enfullwidth.png",value:"full-width",help:T("Use: on long pages (more than 5 screens) when list items are long (+ 10 words)<br>No max items<br>recommended.","planet4-engagingnetworks-backend")},{label:T("Full page width. With background image.","planet4-engagingnetworks-backend"),image:window.p4en_vars.home+"images/enfullwidthbg.png",value:"full-width-bg",help:T('This form has a background image that expands the full width of the browser (aka "Happy Point").',"planet4-engagingnetworks-backend")},{label:T("Form on the side.","planet4-engagingnetworks-backend"),image:window.p4en_vars.home+"images/submenu-sidebar.jpg",value:"side-style",help:T("Form will be added to the top of the page, on the right side for most languages and on the left side for Right-to-left(RTL) languages.","planet4-engagingnetworks-backend")}]})),Object(l.createElement)("div",null,Object(l.createElement)(w.TextControl,{label:T("Form Title","planet4-engagingnetworks-backend"),placeholder:T("Enter title","planet4-engagingnetworks-backend"),value:this.props.title,onChange:this.props.onTitleChange})),Object(l.createElement)("div",null,Object(l.createElement)(w.TextareaControl,{label:T("Form Description","planet4-engagingnetworks-backend"),placeholder:T("Enter description","planet4-engagingnetworks-backend"),value:this.props.description,onChange:this.props.onDescriptionChange})),"side-style"===this.props.en_form_style&&Object(l.createElement)("div",null,"campaign"===t&&Object(l.createElement)("div",null,Object(l.createElement)(w.ToggleControl,{label:T("Use Campaign Logo?","planet4-engagingnetworks-backend"),value:this.props.campaign_logo,checked:this.props.campaign_logo,onChange:this.props.onCampaignLogoChange})),Object(l.createElement)("div",null,Object(l.createElement)(w.TextControl,{label:T("Content Title","planet4-engagingnetworks-backend"),placeholder:T("Enter content title","planet4-engagingnetworks-backend"),value:this.props.content_title,onChange:this.props.onContentTitleChange})),Object(l.createElement)("div",null,Object(l.createElement)(w.SelectControl,{label:T("Content Title text size","planet4-engagingnetworks-backend"),value:this.props.content_title_size,options:[{label:T("Select title size","planet4-engagingnetworks-backend"),value:""},{label:"h1",value:"h1"},{label:"h2",value:"h2"},{label:"h3",value:"h3"}],onChange:this.props.onContentTitleSizeChange})),Object(l.createElement)("div",null,Object(l.createElement)(w.TextareaControl,{label:T("Content Description","planet4-engagingnetworks-backend"),placeholder:T("Enter content description","planet4-engagingnetworks-backend"),value:this.props.content_description,onChange:this.props.onContentDescriptionChange}))),Object(l.createElement)("div",null,Object(l.createElement)(w.TextControl,{label:T('Call to Action button (e.g. "Sign up now!")',"planet4-engagingnetworks-backend"),placeholder:T('Enter the "Call to Action" button text',"planet4-engagingnetworks-backend"),value:this.props.button_text,onChange:this.props.onCTAButtonTextChange})),Object(l.createElement)("div",null,Object(l.createElement)(w.TextareaControl,{label:T("Text below Call to Action button","planet4-engagingnetworks-backend"),placeholder:T("Enter text to go below the button","planet4-engagingnetworks-backend"),value:this.props.text_below_button,onChange:this.props.onCTATextBelowButtonChange})),Object(l.createElement)(C,null,T('"Thank You" message settings',"planet4-engagingnetworks-backend")),Object(l.createElement)("div",null,Object(l.createElement)(w.TextControl,{label:T("Main text / Title","planet4-engagingnetworks-backend"),placeholder:T('e.g. "Thank you for signing!"',"planet4-engagingnetworks-backend"),value:this.props.thankyou_title,onChange:this.props.onMainThankYouTextChange})),Object(l.createElement)("div",null,Object(l.createElement)(w.TextControl,{label:T("Secondary message / Subtitle","planet4-engagingnetworks-backend"),placeholder:T('e.g. "Your support means world"',"planet4-engagingnetworks-backend"),value:this.props.thankyou_subtitle,onChange:this.props.onSecondaryThankYouMessageChange})),Object(l.createElement)("div",null,Object(l.createElement)(w.TextControl,{label:T("Social media message","planet4-engagingnetworks-backend"),placeholder:T('e.g. "Can you share it with your family and friends?"',"planet4-engagingnetworks-backend"),value:this.props.thankyou_social_media_message,onChange:this.props.onThankYouTakeActionMessageChange})),Object(l.createElement)("br",null),Object(l.createElement)(w.ToggleControl,{label:T('Hide "DONATE" button in Thank You message',"planet4-engagingnetworks-backend"),value:this.props.donate_button_checkbox,checked:this.props.donate_button_checkbox,onChange:this.props.onDonateButtonCheckboxChange,className:"hide-donate-toggle-field"}),!0!==this.props.donate_button_checkbox&&Object(l.createElement)("div",null,Object(l.createElement)(w.TextControl,{label:T("Donate message","planet4-engagingnetworks-backend"),placeholder:T('e.g. "or make a donation"',"planet4-engagingnetworks-backend"),value:this.props.thankyou_donate_message,onChange:this.props.onThankYouDonateMessageChange}),Object(l.createElement)(w.TextControl,{label:T("Custom DONATE url","planet4-engagingnetworks-backend"),placeholder:T('If empty, the default "DONATE" P4 Button link will be used',"planet4-engagingnetworks-backend"),value:this.props.custom_donate_url,onChange:this.props.onCustomDonateUrlChange})),Object(l.createElement)("br",null),Object(l.createElement)("div",null,Object(l.createElement)(w.TextControl,{label:T("Thank you page URL (Title, Subtitle, Social media message / icons and DONATE will not be shown)","planet4-engagingnetworks-backend"),placeholder:T('Enter "Thank you page" url',"planet4-engagingnetworks-backend"),value:this.props.thankyou_url,onChange:this.props.onThankYouURLChange})),"full-width"!==this.props.en_form_style&&Object(l.createElement)("div",null,Object(l.createElement)(j.MediaPlaceholder,{labels:{title:T("Background","planet4-engagingnetworks-backend"),instructions:T("Select an image.","planet4-engagingnetworks-backend")},icon:"format-image",onSelect:this.props.onSelectImage,onError:this.props.onUploadError,accept:"image/*",allowedTypes:["image"]})),Object(l.createElement)("div",null,Object(l.createElement)(w.SelectControl,{label:T("Planet 4 Engaging Networks form","planet4-engagingnetworks-backend"),value:this.props.en_form_id,options:[{label:"No forms",value:0}].concat(c()(r)),onChange:this.props.onFormChange}),Object(l.createElement)(O,null,this.props.forms?T("Select the P4EN Form that will be displayed.","planet4-engagingnetworks-backend"):T("Create an EN Form","planet4-engagingnetworks-backend")))))}},{key:"render",value:function(){var e=[];return!1===this.props.isSelected&&(void 0!==this.props.en_page_id&&0!==this.props.en_page_id||e.push(T('"Engaging Network Live Pages" field is required!',"planet4-engagingnetworks-backend")),void 0!==this.props.button_text&&""!==this.props.button_text||e.push(T('"Call to Action button" field is required!',"planet4-engagingnetworks-backend")),void 0!==this.props.en_form_id&&0!==this.props.en_form_id||e.push(T('"Planet 4 Engaging Networks form" field is required!',"planet4-engagingnetworks-backend"))),Object(l.createElement)("div",null,this.props.isSelected?this.renderEdit():null,Object(l.createElement)(y,{showBar:this.props.isSelected,isSelected:this.props.isSelected},e.length?Object(l.createElement)(x,{message:e}):Object(l.createElement)(w.ServerSideRender,{block:"planet4-blocks/enform",attributes:{en_page_id:this.props.en_page_id,en_form_id:this.props.en_form_id,en_form_style:this.props.en_form_style,title:this.props.title,description:this.props.description,campaign_logo:this.props.campaign_logo,content_title:this.props.content_title,content_title_size:this.props.content_title_size,content_description:this.props.content_description,button_text:this.props.button_text,thankyou_title:this.props.thankyou_title,thankyou_subtitle:this.props.thankyou_subtitle,thankyou_donate_message:this.props.thankyou_donate_message,thankyou_social_media_message:this.props.thankyou_social_media_message,donate_button_checkbox:this.props.donate_button_checkbox,thankyou_url:this.props.thankyou_url,background:this.props.background}})))}}]),t}(l.Component);new function e(){i()(this,e),(0,wp.blocks.registerBlockType)("planet4-blocks/enform",{title:"EN Form",icon:"feedback",category:"planet4-blocks",transforms:{from:[{type:"shortcode",tag:"shortcake_enblock",attributes:{en_page_id:{type:"integer",shortcode:function(e){return Number(e.named.en_page_id)}},enform_goal:{type:"string",shortcode:function(e){return e.named.enform_goal}},en_form_style:{type:"string",shortcode:function(e){return e.named.en_form_style}},title:{type:"string",shortcode:function(e){return e.named.title}},description:{type:"string",shortcode:function(e){return e.named.description}},campaign_logo:{type:"boolean",shortcode:function(e){return boolean(e.named.campaign_logo)}},content_title:{type:"string",shortcode:function(e){return e.named.content_title}},content_title_size:{type:"string",shortcode:function(e){return e.named.content_title_size}},content_description:{type:"string",shortcode:function(e){return e.named.content_description}},button_text:{type:"string",shortcode:function(e){return e.named.button_text}},text_below_button:{type:"string",shortcode:function(e){return e.named.text_below_button}},thankyou_title:{type:"string",shortcode:function(e){return e.named.thankyou_title}},thankyou_subtitle:{type:"string",shortcode:function(e){return e.named.thankyou_subtitle}},thankyou_donate_message:{type:"string",shortcode:function(e){return e.named.thankyou_donate_message}},thankyou_social_media_message:{type:"string",shortcode:function(e){return e.named.thankyou_social_media_message}},donate_button_checkbox:{type:"boolean",shortcode:function(e){return boolean(e.named.donate_button_checkbox)}},custom_donate_url:{type:"string",shortcode:function(e){return e.named.custom_donate_url}},thankyou_url:{type:"string",shortcode:function(e){return e.named.thankyou_url}},background:{type:"integer",shortcode:function(e){return e.named.background}},en_form_id:{type:"integer",shortcode:function(e){return Number(e.named.en_form_id)}}}}]},attributes:{en_page_id:{type:"integer"},enform_goal:{type:"string"},en_form_style:{type:"string"},title:{type:"string"},description:{type:"string"},campaign_logo:{type:"boolean"},content_title:{type:"string"},content_title_size:{type:"string"},content_description:{type:"string"},button_text:{type:"string"},text_below_button:{type:"string"},thankyou_title:{type:"string"},thankyou_subtitle:{type:"string"},thankyou_donate_message:{type:"string"},thankyou_social_media_message:{type:"string"},donate_button_checkbox:{type:"boolean"},custom_donate_url:{type:"string"},thankyou_url:{type:"string"},background:{type:"integer"},en_form_id:{type:"integer"}},edit:function(e){var t=e.attributes,n=e.isSelected,o=e.setAttributes;return Object(l.createElement)(S,a()({},t,{isSelected:n,onPageChange:function(e){o({en_page_id:parseInt(e)})},onGoalChange:function(e){o({enform_goal:e})},onTitleChange:function(e){o({title:e})},onDescriptionChange:function(e){o({description:e})},onCampaignLogoChange:function(e){o({campaign_logo:e})},onContentTitleChange:function(e){o({content_title:e})},onContentTitleSizeChange:function(e){o({content_title_size:e})},onContentDescriptionChange:function(e){o({content_description:e})},onCTAButtonTextChange:function(e){o({button_text:e})},onCTATextBelowButtonChange:function(e){o({text_below_button:e})},onSelectedLayoutChange:function(e){o({en_form_style:e})},onSelectImage:function(e){o({background:Number(e.id)})},onSelectURL:function(e){e.url,o({id:null})},onMainThankYouTextChange:function(e){o({thankyou_title:e})},onSecondaryThankYouMessageChange:function(e){o({thankyou_subtitle:e})},onThankYouTakeActionMessageChange:function(e){o({thankyou_social_media_message:e})},onDonateButtonCheckboxChange:function(e){o({donate_button_checkbox:e})},onThankYouURLChange:function(e){o({thankyou_url:e})},onThankYouDonateMessageChange:function(e){o({thankyou_donate_message:e})},onCustomDonateUrlChange:function(e){o({custom_donate_url:e})},onFormChange:function(e){o({en_form_id:Number(e)})},onUploadError:function(e){var t=e.message;console.log(t)}}))},save:function(){return null}})}},,,,function(e,t){function n(t,o){return e.exports=n=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},n(t,o)}e.exports=n},function(e,t){function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(t){return"function"==typeof Symbol&&"symbol"===n(Symbol.iterator)?e.exports=o=function(e){return n(e)}:e.exports=o=function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":n(e)},o(t)}e.exports=o},function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}},function(e,t){e.exports=function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}},function(e,t){e.exports=function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}}]);