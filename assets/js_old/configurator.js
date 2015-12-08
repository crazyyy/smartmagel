function initializeCord(cordId)
{
    resetCord();
    var $bulb_state = jQuery('#bulb').data('state');
    jQuery('.cord.active').removeClass('active');
    jQuery('.cord[data-cordid="' + cordId + '"]').addClass('active');
    jQuery('.cord.active')
        .data('state',$bulb_state)
        .css('background-image','url(' + jQuery('.cord.active').data($bulb_state + 'image') + ')')
    ;

    cordIdString = cordId.toString();
    jQuery('.colors_balls').each(function(i,el) {
        if(cordIdString == jQuery(el).data('ballcords')) {
            jQuery(el).addClass('show');
        } else {
            jQuery(el).removeClass('show');
        }
    });

    jQuery('.colors_balls.active').each(function(i,item) {
        jQuery('.colors_balls[data-ballcords="' + cordIdString + '"][data-ballid="' + jQuery(item).data('ballid') + '"]').addClass('active');
        jQuery(item).removeClass('active');
    });

    fillCord();
}

function toggleCordImage()
{
    element = jQuery(".configurator_select_qty .cord.active");
    if(jQuery(element).css('background-image').indexOf(jQuery(element).data('darkimage')) > 0) {
        jQuery(element).css('background-image','url(' + jQuery(element).data('lightimage') + ')');
    } else {
        jQuery(element).css('background-image','url(' + jQuery(element).data('darkimage') + ')');
    }
}

function toggleBallImage()
{
    $balls = jQuery('.cord.active img');
    $cord = jQuery('.cord.active');
    $state = $cord.data('state');
    $balls.each(function($el) {
        jQuery(this).prop('src',jQuery('.colors_balls[data-ballid="' + jQuery(this).data('ballid') + '"]').data($state + 'image'));
    });
}

function fillCord($resize) {
    $selectedBalls = jQuery('.colors_balls.active');
    $selectedBallsQty = jQuery('.colors_balls.active').length;
    $cord = jQuery('.cord.active');
    $coords = $cord.data('coords');
    $state = $cord.data('state');
	if($resize == 'resize'){
		$selected_balls_position = {};
		$balls = jQuery('.cord.active img');
		$balls.each(function($el) {
			$selected_balls_position[jQuery(this).data('posid')] = jQuery(this).data('ballid');
		});
	}

    resetCord();

    $ballsToDeploy = [];
    for ($pos in $coords) {
        if ($coords.hasOwnProperty($pos)) {
            $index = $pos % $selectedBallsQty;
            $ballsToDeploy.push($selectedBalls.get($index));
        }
    }

    for ($pos in $coords) {
        if ($coords.hasOwnProperty($pos)) {
			if($resize == 'resize'){
				addBallToCordPos(jQuery('.colors_balls.active[data-ballid="'+$selected_balls_position[$pos]+'"]'),$pos);
			} else {
				$index = Math.floor((Math.random() * $ballsToDeploy.length));
				addBallToCordPos($ballsToDeploy[$index],$pos);
			}
            $ballsToDeploy.splice($index, 1);
        }
    }
    fillData();
}

function fillOneBallInCord($ball)
{
    $selectedBalls = jQuery('.colors_balls.active');
    $selectedBallsQty = jQuery('.colors_balls.active').length;
    $cord = jQuery('.cord.active');
    $coords = $cord.data('coords');
    $state = $cord.data('state');
    $added = false;

    for ($pos in $coords) {
        if($coords.hasOwnProperty($pos) && $coords[$pos].filled == 0) {
            addBallToCordPos($ball,$pos);
            $added = true;
            break;
        }
    }
    fillData();
    return $added;
}

function addBallToCordPos($ball,$posid)
{
    $cord = jQuery('.cord.active');
    $coords = $cord.data('coords');
    $state = $cord.data('state');
    if (jQuery(document).width() < 1050) {
        var scale = jQuery(".configurator_image").width() / 980;
        $ballSrc = jQuery($ball).data($state + 'image');
        if ($ballSrc) {
            $cord.append('<img src="' + $ballSrc + '" style="left:' + ($coords[$posid]['x']) * scale + 'px;top:' + ($coords[$posid]['y']) * scale + 'px" data-ballid="' + jQuery($ball).data('ballid') + '" data-posid="' + $posid + '"/>');
            $coords[$posid].filled = 1;
        }
        jQuery(".configurator_image img").css({
            'transform': 'scale(' + scale + ')',
            '-webkit-transform': 'scale(' + scale + ')',
            '-webkit-transform-origin': '0 0',
            '-moz-transform': 'scale(' + scale + ')',
            '-moz-transform-origin': '0 0',
            '-o-transform': 'scale(' + scale + ')',
            '-o-transform-origin': '0 0',
            '-ms-transform': 'scale(' + scale + ')',
            '-ms-transform-origin': '0 0',
        });
    }
    else {
        $ballSrc = jQuery($ball).data($state + 'image');
        if ($ballSrc) {
            $cord.append('<img src="' + $ballSrc + '" style="left:' + $coords[$posid]['x'] + 'px;top:' + $coords[$posid]['y'] + 'px" data-ballid="' + jQuery($ball).data('ballid') + '" data-posid="' + $posid + '"/>');
            $coords[$posid].filled = 1;
        }
    }
}

function resetCord()
{
    $cord = jQuery('.cord.active');
    $cord.html('');
    $coords = $cord.data('coords');
    for($pos in $coords) {
        if ($coords.hasOwnProperty($pos)) {
            $coords[$pos].filled = 0;
        }
    }
}

function fillData()
{
    $data = {};
    jQuery('#selected_balls').val('');
    $balls = jQuery('.cord.active img');
    $balls.each(function($el) {
        if($data[jQuery(this).data('ballid')]) {
            $data[jQuery(this).data('ballid')] = $data[jQuery(this).data('ballid')] + 1;
        } else {
            $data[jQuery(this).data('ballid')] = 1;
        }
    });
    jQuery('#selected_balls').val(JSON.stringify($data));
}

function canChooseBall()
{
    $cord = jQuery('.cord.active');
    if(jQuery('#manual_mode').is(':checked')) {
        if(jQuery('.cord.active').data('coords').length == jQuery('.cord.active img').length) {
            jQuery('.colors_balls').addClass('disabled');
        } else {
            jQuery('.colors_balls').removeClass('disabled');
        }
    } else {
        if(jQuery('.colors_balls.active').length >= $cord.data('limit')) {
            jQuery('.colors_balls:not(.active)').addClass('disabled');
            jQuery('.colors_balls.active').removeClass('disabled');
        } else {
            jQuery('.colors_balls').removeClass('disabled');
        }
    }
}

function unsetBall($ball)
{
    $cord = jQuery('.cord.active');
    $coords = $cord.data('coords');
    $coords[$ball.data('posid')].filled = 0;
    $ball.remove();
    if(jQuery('.cord.active img[data-ballid="' + $ball.data('ballid') + '"]').length == 0) {
        jQuery('.colors_balls.active[data-ballid="' + $ball.data('ballid') + '"]').removeClass('active');
    }
    fillData();
    canChooseBall();
}


jQuery(document).ready(function() {
    jQuery("#manual_mode").switchButton({
        on_label: jQuery('#manual_mode').data('onlabel')
        ,off_label: jQuery('#manual_mode').data('offlabel')
        ,height: 16
        ,on_callback: function() {canChooseBall()}
        ,off_callback: function() {canChooseBall()}
    });

    jQuery("#bulb").click(function() {
        jQuery(this).data('state',(jQuery(this).data('state') == 'light') ? 'dark' : 'light');
        jQuery(".configurator_select_qty .cord.active").data('state',jQuery(this).data('state'));
        toggleCordImage();
        //fillCord();
        toggleBallImage();
    });

    jQuery('.balls_qty').click(function () {
        jQuery(".balls_qty.active").removeClass("active");
        jQuery(this).toggleClass('active');
        initializeCord(jQuery(this).data('cordid'));
        canChooseBall();
    });

    jQuery(".colors_balls").hover(function() {
        jQuery(".ball_image").html("<img alt='ball color' src='"+jQuery(this).data('imgbig')+"' />");
        jQuery(".ball_name > h3").html(jQuery(this).data("name"));
    });

    jQuery(".colors_balls").click(function() {
        if(!jQuery(this).hasClass('disabled')) {
            if(jQuery('#manual_mode').is(':checked')) {
                if(fillOneBallInCord(jQuery(this))) jQuery(this).addClass("active");
            } else {
                jQuery(this).toggleClass("active");
                fillCord();
            }
        }
        canChooseBall();
    });

    jQuery(".colors_balls").on('tap', function() {
        jQuery(".ball_image").html("<img alt='ball color' src='"+jQuery(this).data('imgbig')+"' />");
        jQuery(".ball_name > h3").html(jQuery(this).data("name"));
        if(!jQuery(this).hasClass('disabled')) {
            if(jQuery('#manual_mode').is(':checked')) {
                if(fillOneBallInCord(jQuery(this))) jQuery(this).addClass("active");
            } else {
                jQuery(this).toggleClass("active");
                fillCord();
            }
        }
        canChooseBall();
    });

    jQuery("#manual_mode").click(function() {
        canChooseBall();
    });
	
	jQuery('.plus').click(function() {
		el_id = jQuery(this).attr('rel');
		if(isNaN(jQuery('#' + el_id).val())) {
			jQuery('#' + el_id).val(1);
		} else {
			jQuery('#' + el_id).val(jQuery('#' + el_id).val()*1+1);
		}
	});
	
	jQuery('.minus').click(function() {
		el_id = jQuery(this).attr('rel');
		if(isNaN(jQuery('#' + el_id).val())) {
			jQuery('#' + el_id).val(1);
		} else {
			if(jQuery('#' + el_id).val() > 1)
				jQuery('#' + el_id).val(jQuery('#' + el_id).val()*1-1);
		}
	});
	
	jQuery('#addtocartform').submit(function(event) {
		if(!jQuery('#selected_balls_position').length){
			jQuery('#selected_balls').after('<input type="hidden" name="selected_balls_position" id="selected_balls_position" value="" />');
		}

		$selected_balls_position = {};
		$balls = jQuery('.cord.active img');
		$balls.each(function($el) {
			$selected_balls_position[jQuery(this).data('posid')] = jQuery(this).data('ballid');
		});
		jQuery('#selected_balls_position').val(JSON.stringify($selected_balls_position));

		var $balls = jQuery.parseJSON(jQuery('#selected_balls').val());
		if(jQuery('.cord.active img').length != jQuery('.cord.active').data('limit')) {
			alert(jQuery(this).data('alert'));
			event.preventDefault();
		}
	});

    jQuery('.cord.active img').live('click',function() {
        unsetBall(jQuery(this));
    });
	
	window.addEventListener("resize", function() {
		var scale = jQuery(".configurator_image").width() / 980;
		jQuery(".configurator_image").height(baseBgHeight*scale);
		fillCord('resize');
	}, false);
	
	window.addEventListener("orientationchange", function() {
		if(jQuery(document).width() < 1050 ){
			var height = jQuery(window).height();
			var width = jQuery(window).width();
		 
			if(width>height) {
				var scale = jQuery(".configurator_image").width() / 980;
				jQuery(".configurator_image").height(baseBgHeight*scale);
				fillCord();
			} else {
				var scale = jQuery(".configurator_image").width() / 980;
				jQuery(".configurator_image").height(baseBgHeight*scale);
				fillCord();
			}			
		}
	}, false);
	
	if(jQuery(document).width() < 1050 ){
		var scale = jQuery(".configurator_image").width() / 980;
		var bgImgHeight = jQuery(".configurator_image").height();
		jQuery(".configurator_image").height(bgImgHeight*scale);
	}
	var baseBgHeight = 360;
    initializeCord(jQuery('.balls_qty.active').data('cordid'));
});


// LIBS


/*! jQuery UI - v1.11.4 - 2015-03-30
 * http://jqueryui.com
 * Includes: core.js, widget.js
 * Copyright 2015 jQuery Foundation and other contributors; Licensed MIT */

(function(e){"function"==typeof define&&define.amd?define(["jquery"],e):e(jQuery)})(function(e){function t(t,s){var a,n,o,r=t.nodeName.toLowerCase();return"area"===r?(a=t.parentNode,n=a.name,t.href&&n&&"map"===a.nodeName.toLowerCase()?(o=e("img[usemap='#"+n+"']")[0],!!o&&i(o)):!1):(/^(input|select|textarea|button|object)$/.test(r)?!t.disabled:"a"===r?t.href||s:s)&&i(t)}function i(t){return e.expr.filters.visible(t)&&!e(t).parents().addBack().filter(function(){return"hidden"===e.css(this,"visibility")}).length}e.ui=e.ui||{},e.extend(e.ui,{version:"1.11.4",keyCode:{BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,LEFT:37,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38}}),e.fn.extend({scrollParent:function(t){var i=this.css("position"),s="absolute"===i,a=t?/(auto|scroll|hidden)/:/(auto|scroll)/,n=this.parents().filter(function(){var t=e(this);return s&&"static"===t.css("position")?!1:a.test(t.css("overflow")+t.css("overflow-y")+t.css("overflow-x"))}).eq(0);return"fixed"!==i&&n.length?n:e(this[0].ownerDocument||document)},uniqueId:function(){var e=0;return function(){return this.each(function(){this.id||(this.id="ui-id-"+ ++e)})}}(),removeUniqueId:function(){return this.each(function(){/^ui-id-\d+$/.test(this.id)&&e(this).removeAttr("id")})}}),e.extend(e.expr[":"],{data:e.expr.createPseudo?e.expr.createPseudo(function(t){return function(i){return!!e.data(i,t)}}):function(t,i,s){return!!e.data(t,s[3])},focusable:function(i){return t(i,!isNaN(e.attr(i,"tabindex")))},tabbable:function(i){var s=e.attr(i,"tabindex"),a=isNaN(s);return(a||s>=0)&&t(i,!a)}}),e("<a>").outerWidth(1).jquery||e.each(["Width","Height"],function(t,i){function s(t,i,s,n){return e.each(a,function(){i-=parseFloat(e.css(t,"padding"+this))||0,s&&(i-=parseFloat(e.css(t,"border"+this+"Width"))||0),n&&(i-=parseFloat(e.css(t,"margin"+this))||0)}),i}var a="Width"===i?["Left","Right"]:["Top","Bottom"],n=i.toLowerCase(),o={innerWidth:e.fn.innerWidth,innerHeight:e.fn.innerHeight,outerWidth:e.fn.outerWidth,outerHeight:e.fn.outerHeight};e.fn["inner"+i]=function(t){return void 0===t?o["inner"+i].call(this):this.each(function(){e(this).css(n,s(this,t)+"px")})},e.fn["outer"+i]=function(t,a){return"number"!=typeof t?o["outer"+i].call(this,t):this.each(function(){e(this).css(n,s(this,t,!0,a)+"px")})}}),e.fn.addBack||(e.fn.addBack=function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}),e("<a>").data("a-b","a").removeData("a-b").data("a-b")&&(e.fn.removeData=function(t){return function(i){return arguments.length?t.call(this,e.camelCase(i)):t.call(this)}}(e.fn.removeData)),e.ui.ie=!!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()),e.fn.extend({focus:function(t){return function(i,s){return"number"==typeof i?this.each(function(){var t=this;setTimeout(function(){e(t).focus(),s&&s.call(t)},i)}):t.apply(this,arguments)}}(e.fn.focus),disableSelection:function(){var e="onselectstart"in document.createElement("div")?"selectstart":"mousedown";return function(){return this.bind(e+".ui-disableSelection",function(e){e.preventDefault()})}}(),enableSelection:function(){return this.unbind(".ui-disableSelection")},zIndex:function(t){if(void 0!==t)return this.css("zIndex",t);if(this.length)for(var i,s,a=e(this[0]);a.length&&a[0]!==document;){if(i=a.css("position"),("absolute"===i||"relative"===i||"fixed"===i)&&(s=parseInt(a.css("zIndex"),10),!isNaN(s)&&0!==s))return s;a=a.parent()}return 0}}),e.ui.plugin={add:function(t,i,s){var a,n=e.ui[t].prototype;for(a in s)n.plugins[a]=n.plugins[a]||[],n.plugins[a].push([i,s[a]])},call:function(e,t,i,s){var a,n=e.plugins[t];if(n&&(s||e.element[0].parentNode&&11!==e.element[0].parentNode.nodeType))for(a=0;n.length>a;a++)e.options[n[a][0]]&&n[a][1].apply(e.element,i)}};var s=0,a=Array.prototype.slice;e.cleanData=function(t){return function(i){var s,a,n;for(n=0;null!=(a=i[n]);n++)try{s=e._data(a,"events"),s&&s.remove&&e(a).triggerHandler("remove")}catch(o){}t(i)}}(e.cleanData),e.widget=function(t,i,s){var a,n,o,r,h={},l=t.split(".")[0];return t=t.split(".")[1],a=l+"-"+t,s||(s=i,i=e.Widget),e.expr[":"][a.toLowerCase()]=function(t){return!!e.data(t,a)},e[l]=e[l]||{},n=e[l][t],o=e[l][t]=function(e,t){return this._createWidget?(arguments.length&&this._createWidget(e,t),void 0):new o(e,t)},e.extend(o,n,{version:s.version,_proto:e.extend({},s),_childConstructors:[]}),r=new i,r.options=e.widget.extend({},r.options),e.each(s,function(t,s){return e.isFunction(s)?(h[t]=function(){var e=function(){return i.prototype[t].apply(this,arguments)},a=function(e){return i.prototype[t].apply(this,e)};return function(){var t,i=this._super,n=this._superApply;return this._super=e,this._superApply=a,t=s.apply(this,arguments),this._super=i,this._superApply=n,t}}(),void 0):(h[t]=s,void 0)}),o.prototype=e.widget.extend(r,{widgetEventPrefix:n?r.widgetEventPrefix||t:t},h,{constructor:o,namespace:l,widgetName:t,widgetFullName:a}),n?(e.each(n._childConstructors,function(t,i){var s=i.prototype;e.widget(s.namespace+"."+s.widgetName,o,i._proto)}),delete n._childConstructors):i._childConstructors.push(o),e.widget.bridge(t,o),o},e.widget.extend=function(t){for(var i,s,n=a.call(arguments,1),o=0,r=n.length;r>o;o++)for(i in n[o])s=n[o][i],n[o].hasOwnProperty(i)&&void 0!==s&&(t[i]=e.isPlainObject(s)?e.isPlainObject(t[i])?e.widget.extend({},t[i],s):e.widget.extend({},s):s);return t},e.widget.bridge=function(t,i){var s=i.prototype.widgetFullName||t;e.fn[t]=function(n){var o="string"==typeof n,r=a.call(arguments,1),h=this;return o?this.each(function(){var i,a=e.data(this,s);return"instance"===n?(h=a,!1):a?e.isFunction(a[n])&&"_"!==n.charAt(0)?(i=a[n].apply(a,r),i!==a&&void 0!==i?(h=i&&i.jquery?h.pushStack(i.get()):i,!1):void 0):e.error("no such method '"+n+"' for "+t+" widget instance"):e.error("cannot call methods on "+t+" prior to initialization; "+"attempted to call method '"+n+"'")}):(r.length&&(n=e.widget.extend.apply(null,[n].concat(r))),this.each(function(){var t=e.data(this,s);t?(t.option(n||{}),t._init&&t._init()):e.data(this,s,new i(n,this))})),h}},e.Widget=function(){},e.Widget._childConstructors=[],e.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{disabled:!1,create:null},_createWidget:function(t,i){i=e(i||this.defaultElement||this)[0],this.element=e(i),this.uuid=s++,this.eventNamespace="."+this.widgetName+this.uuid,this.bindings=e(),this.hoverable=e(),this.focusable=e(),i!==this&&(e.data(i,this.widgetFullName,this),this._on(!0,this.element,{remove:function(e){e.target===i&&this.destroy()}}),this.document=e(i.style?i.ownerDocument:i.document||i),this.window=e(this.document[0].defaultView||this.document[0].parentWindow)),this.options=e.widget.extend({},this.options,this._getCreateOptions(),t),this._create(),this._trigger("create",null,this._getCreateEventData()),this._init()},_getCreateOptions:e.noop,_getCreateEventData:e.noop,_create:e.noop,_init:e.noop,destroy:function(){this._destroy(),this.element.unbind(this.eventNamespace).removeData(this.widgetFullName).removeData(e.camelCase(this.widgetFullName)),this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName+"-disabled "+"ui-state-disabled"),this.bindings.unbind(this.eventNamespace),this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus")},_destroy:e.noop,widget:function(){return this.element},option:function(t,i){var s,a,n,o=t;if(0===arguments.length)return e.widget.extend({},this.options);if("string"==typeof t)if(o={},s=t.split("."),t=s.shift(),s.length){for(a=o[t]=e.widget.extend({},this.options[t]),n=0;s.length-1>n;n++)a[s[n]]=a[s[n]]||{},a=a[s[n]];if(t=s.pop(),1===arguments.length)return void 0===a[t]?null:a[t];a[t]=i}else{if(1===arguments.length)return void 0===this.options[t]?null:this.options[t];o[t]=i}return this._setOptions(o),this},_setOptions:function(e){var t;for(t in e)this._setOption(t,e[t]);return this},_setOption:function(e,t){return this.options[e]=t,"disabled"===e&&(this.widget().toggleClass(this.widgetFullName+"-disabled",!!t),t&&(this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus"))),this},enable:function(){return this._setOptions({disabled:!1})},disable:function(){return this._setOptions({disabled:!0})},_on:function(t,i,s){var a,n=this;"boolean"!=typeof t&&(s=i,i=t,t=!1),s?(i=a=e(i),this.bindings=this.bindings.add(i)):(s=i,i=this.element,a=this.widget()),e.each(s,function(s,o){function r(){return t||n.options.disabled!==!0&&!e(this).hasClass("ui-state-disabled")?("string"==typeof o?n[o]:o).apply(n,arguments):void 0}"string"!=typeof o&&(r.guid=o.guid=o.guid||r.guid||e.guid++);var h=s.match(/^([\w:-]*)\s*(.*)$/),l=h[1]+n.eventNamespace,u=h[2];u?a.delegate(u,l,r):i.bind(l,r)})},_off:function(t,i){i=(i||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace,t.unbind(i).undelegate(i),this.bindings=e(this.bindings.not(t).get()),this.focusable=e(this.focusable.not(t).get()),this.hoverable=e(this.hoverable.not(t).get())},_delay:function(e,t){function i(){return("string"==typeof e?s[e]:e).apply(s,arguments)}var s=this;return setTimeout(i,t||0)},_hoverable:function(t){this.hoverable=this.hoverable.add(t),this._on(t,{mouseenter:function(t){e(t.currentTarget).addClass("ui-state-hover")},mouseleave:function(t){e(t.currentTarget).removeClass("ui-state-hover")}})},_focusable:function(t){this.focusable=this.focusable.add(t),this._on(t,{focusin:function(t){e(t.currentTarget).addClass("ui-state-focus")},focusout:function(t){e(t.currentTarget).removeClass("ui-state-focus")}})},_trigger:function(t,i,s){var a,n,o=this.options[t];if(s=s||{},i=e.Event(i),i.type=(t===this.widgetEventPrefix?t:this.widgetEventPrefix+t).toLowerCase(),i.target=this.element[0],n=i.originalEvent)for(a in n)a in i||(i[a]=n[a]);return this.element.trigger(i,s),!(e.isFunction(o)&&o.apply(this.element[0],[i].concat(s))===!1||i.isDefaultPrevented())}},e.each({show:"fadeIn",hide:"fadeOut"},function(t,i){e.Widget.prototype["_"+t]=function(s,a,n){"string"==typeof a&&(a={effect:a});var o,r=a?a===!0||"number"==typeof a?i:a.effect||i:t;a=a||{},"number"==typeof a&&(a={duration:a}),o=!e.isEmptyObject(a),a.complete=n,a.delay&&s.delay(a.delay),o&&e.effects&&e.effects.effect[r]?s[t](a):r!==t&&s[r]?s[r](a.duration,a.easing,n):s.queue(function(i){e(this)[t](),n&&n.call(s[0]),i()})}}),e.widget});




/**
 * jquery.switchButton.js v1.0
 * jQuery iPhone-like switch button
 * @author Olivier Lance <olivier.lance@sylights.com>
 *
 * Copyright (c) Olivier Lance - released under MIT License {{{
 *
 * Permission is hereby granted, free of charge, to any person
 * obtaining a copy of this software and associated documentation
 * files (the "Software"), to deal in the Software without
 * restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following
 * conditions:

 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.

 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.

 * }}}
 */

/*
 * Meant to be used on a <input type="checkbox">, this widget will replace the receiver element with an iPhone-style
 * switch button with two states: "on" and "off".
 * Labels of the states are customizable, as are their presence and position. The receiver element's "checked" attribute
 * is updated according to the state of the switch, so that it can be used in a <form>.
 *
 */

(function(jQuery) {
    jQuery.widget("sylightsUI.switchButton", {
        options: {
            checked: undefined,			// State of the switch

            show_labels: true,			// Should we show the on and off labels?
            labels_placement: "both", 	// Position of the labels: "both", "left" or "right"
            on_label: "ON",				// Text to be displayed when checked
            off_label: "OFF",			// Text to be displayed when unchecked

            width: 25,					// Width of the button in pixels
            height: 11,					// Height of the button in pixels
            button_width: 12,			// Width of the sliding part in pixels

            clear: true,				// Should we insert a div with style="clear: both;" after the switch button?
            clear_after: null,		    // Override the element after which the clearing div should be inserted (null > right after the button)
            on_callback: undefined,		//callback function that will be executed after going to on state
            off_callback: undefined		//callback function that will be executed after going to off state
        },

        _create: function() {
            // Init the switch from the checkbox if no state was specified on creation
            if (this.options.checked === undefined) {
                this.options.checked = this.element.prop("checked");
            }

            this._initLayout();
            this._initEvents();
        },

        _initLayout: function() {
            // Hide the receiver element
            this.element.hide();

            // Create our objects: two labels and the button
            this.off_label = jQuery("<span>").addClass("switch-button-label");
            this.on_label = jQuery("<span>").addClass("switch-button-label");

            this.button_bg = jQuery("<div>").addClass("switch-button-background");
            this.button = jQuery("<div>").addClass("switch-button-button");

            // Insert the objects into the DOM
            this.off_label.insertAfter(this.element);
            this.button_bg.insertAfter(this.off_label);
            this.on_label.insertAfter(this.button_bg);

            this.button_bg.append(this.button);

            // Insert a clearing element after the specified element if needed
            if(this.options.clear)
            {
                if (this.options.clear_after === null) {
                    this.options.clear_after = this.on_label;
                }
                jQuery("<div>").css({
                    clear: "left"
                }).insertAfter(this.options.clear_after);
            }

            // Call refresh to update labels text and visibility
            this._refresh();

            // Init labels and switch state
            // This will animate all checked switches to the ON position when
            // loading... this is intentional!
            this.options.checked = !this.options.checked;
            this._toggleSwitch();
        },

        _refresh: function() {
            // Refresh labels display
            if (this.options.show_labels) {
                this.off_label.show();
                this.on_label.show();
            }
            else {
                this.off_label.hide();
                this.on_label.hide();
            }

            // Move labels around depending on labels_placement option
            switch(this.options.labels_placement) {
                case "both":
                {
                    // Don't move anything if labels are already in place
                    if(this.button_bg.prev() !== this.off_label || this.button_bg.next() !== this.on_label)
                    {
                        // Detach labels form DOM and place them correctly
                        this.off_label.detach();
                        this.on_label.detach();
                        this.off_label.insertBefore(this.button_bg);
                        this.on_label.insertAfter(this.button_bg);

                        // Update label classes
                        this.on_label.addClass(this.options.checked ? "on" : "off").removeClass(this.options.checked ? "off" : "on");
                        this.off_label.addClass(this.options.checked ? "off" : "on").removeClass(this.options.checked ? "on" : "off");

                    }
                    break;
                }

                case "left":
                {
                    // Don't move anything if labels are already in place
                    if(this.button_bg.prev() !== this.on_label || this.on_label.prev() !== this.off_label)
                    {
                        // Detach labels form DOM and place them correctly
                        this.off_label.detach();
                        this.on_label.detach();
                        this.off_label.insertBefore(this.button_bg);
                        this.on_label.insertBefore(this.button_bg);

                        // update label classes
                        this.on_label.addClass("on").removeClass("off");
                        this.off_label.addClass("off").removeClass("on");
                    }
                    break;
                }

                case "right":
                {
                    // Don't move anything if labels are already in place
                    if(this.button_bg.next() !== this.off_label || this.off_label.next() !== this.on_label)
                    {
                        // Detach labels form DOM and place them correctly
                        this.off_label.detach();
                        this.on_label.detach();
                        this.off_label.insertAfter(this.button_bg);
                        this.on_label.insertAfter(this.off_label);

                        // update label classes
                        this.on_label.addClass("on").removeClass("off");
                        this.off_label.addClass("off").removeClass("on");
                    }
                    break;
                }

            }

            // Refresh labels texts
            this.on_label.html(this.options.on_label);
            this.off_label.html(this.options.off_label);

            // Refresh button's dimensions
            this.button_bg.width(this.options.width);
            this.button_bg.height(this.options.height);
            this.button.width(this.options.button_width);
            this.button.height(this.options.height);
        },

        _initEvents: function() {
            var self = this;

            // Toggle switch when the switch is clicked
            this.button_bg.click(function(e) {
                e.preventDefault();
                e.stopPropagation();
                self._toggleSwitch();
                return false;
            });
            this.button.click(function(e) {
                e.preventDefault();
                e.stopPropagation();
                self._toggleSwitch();
                return false;
            });

            // Set switch value when clicking labels
            this.on_label.click(function(e) {
                if (self.options.checked && self.options.labels_placement === "both") {
                    return false;
                }

                self._toggleSwitch();
                return false;
            });

            this.off_label.click(function(e) {
                if (!self.options.checked && self.options.labels_placement === "both") {
                    return false;
                }

                self._toggleSwitch();
                return false;
            });

        },

        _setOption: function(key, value) {
            if (key === "checked") {
                this._setChecked(value);
                return;
            }

            this.options[key] = value;
            this._refresh();
        },

        _setChecked: function(value) {
            if (value === this.options.checked) {
                return;
            }

            this.options.checked = !value;
            this._toggleSwitch();
        },

        _toggleSwitch: function() {
            this.options.checked = !this.options.checked;
            var newLeft = "";
            if (this.options.checked) {
                // Update the underlying checkbox state
                this.element.prop("checked", true);
                this.element.change();

                var dLeft = this.options.width - this.options.button_width;
                newLeft = "+=" + dLeft;

                // Update labels states
                if(this.options.labels_placement == "both")
                {
                    this.off_label.removeClass("on").addClass("off");
                    this.on_label.removeClass("off").addClass("on");
                }
                else
                {
                    this.off_label.hide();
                    this.on_label.show();
                }
                this.button_bg.addClass("checked");
                //execute on state callback if its supplied
                if(typeof this.options.on_callback === 'function') this.options.on_callback.call(this);
            }
            else {
                // Update the underlying checkbox state
                this.element.prop("checked", false);
                this.element.change();
                newLeft = "-1px";

                // Update labels states
                if(this.options.labels_placement == "both")
                {
                    this.off_label.removeClass("off").addClass("on");
                    this.on_label.removeClass("on").addClass("off");
                }
                else
                {
                    this.off_label.show();
                    this.on_label.hide();
                }
                this.button_bg.removeClass("checked");
                //execute off state callback if its supplied
                if(typeof this.options.off_callback === 'function') this.options.off_callback.call(this);
            }
            // Animate the switch
            this.button.animate({ left: newLeft }, 250, "easeInOutCubic");
        }

    });

})(jQuery);
