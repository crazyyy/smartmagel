!function(){for(var n,s=function(){},e=["assert","clear","count","debug","dir","dirxml","error","exception","group","groupCollapsed","groupEnd","info","log","markTimeline","profile","profileEnd","table","time","timeEnd","timeline","timelineEnd","timeStamp","trace","warn"],i=e.length,t=window.console=window.console||{};i--;)n=e[i],t[n]||(t[n]=s)}(),jQuery(function(n){n("#sns-totop").hide(),n(function(){var s=(n(window).height(),n(document).height());n(window).scroll(function(){n(this).scrollTop()>s/10?n("#sns-totop").fadeIn():n("#sns-totop").fadeOut()}),n("#sns-totop").click(function(){return n("body,html").animate({scrollTop:0},800),!1})})}),jQuery(document).ready(function(n){n("#menu_collapse").SnsAccordion({btn_open:'<i class="fa fa-caret-down"></i>',btn_close:'<i class="fa fa-caret-up"></i>',accordion:!1,expand:!1}),n("#sns_right").length&&(n("#sns_mommenu").addClass("has-right"),n("#sns_mommenu .btn.rightsidebar").css("display","inline-block").on("click",function(){n("#sns_right").hasClass("active")?(n(this).find(".overlay").fadeOut(250),n("#sns_right").removeClass("active")):(n("#sns_right").addClass("active"),n(this).find(".overlay").fadeIn(250))})),n("#sns_left").length&&(n("#sns_mommenu").addClass("has-left"),n("#sns_mommenu .btn.leftsidebar").css("display","inline-block").on("click",function(){n("#sns_left").hasClass("active")?(n(this).find(".overlay").fadeOut(250),n("#sns_left").removeClass("active")):(n("#sns_left").addClass("active"),n(this).find(".overlay").fadeIn())}))});