function setHeight(e, i) {
    var n = 0;
    if (jQuery.isArray(e)) {
        for ($i = 0; $i < e.length; $i++)
            jQuery(e[$i]).css("height", "");
        for ($i = 0; $i < e.length; $i++)
            n < jQuery(e[$i]).height() && "none" != jQuery(e[$i]).css("display") && (n = jQuery(e[$i]).height());
        if (i)
            for ($i = 0; $i < e.length; $i++)
                jQuery(e[$i]).css("height", n);
        else
            for ($i = 0; $i < e.length; $i++)
                jQuery(e[$i]).css("height", "")
    } else
        jQuery(e).each(function() {
            n < jQuery(this).height() && "none" != jQuery(this).css("display") && (n = jQuery(this).height())
        }
        ),
        i ? jQuery(e).css("height", n) : jQuery(e).css("height", "")
}
function dump(e) {
    var i = "";
    for (var n in e)
        i += n + ": " + e[n] + "\n";
    alert(i);
    var a = document.createElement("pre");
    a.innerHTML = i,
    document.body.appendChild(a)
}
// !function() {
//     var e = !1;
//     if (window.jQuery) {
//         var i = jQuery("*");
//         jQuery.each(["hide.bs.dropdown", "hide.bs.collapse", "hide.bs.modal", "hide.bs.tooltip", "hide.bs.popover"], function(n, a) {
//             i.on(a, function(i) {
//                 e = !0
//             }
//             )
//         }
//         )
//     }
//     var n = Element.hide;
//     Element.addMethods({
//         hide: function(i) {
//             return e ? (e = !1,
//             i) : n(i)
//         }
//     })
// }
(jQuery),
function(e) {
    e.fn.SnsAccordion = function(i) {
        var n = e(this)
          , a = {
            active: "open",
            el_wrap: "li",
            el_content: "ul",
            accordion: !0,
            expand: !0,
            btn_open: '<i class="fa fa-plus-square-o"></i>',
            btn_close: '<i class="fa fa-minus-square-o"></i>'
        }
          , i = e.extend({}, a, i);
        e(document).ready(function() {
            n.find(i.el_wrap).each(function() {
                e(this).find("> a, > span, > h4").wrap('<div class="accr_header"></div>'),
                e(this).find(i.el_content).length && (e(this).find("> .accr_header").append('<span class="btn_accor">' + i.btn_open + "</span>"),
                e(this).find("> " + i.el_content + ':not(".accr_header")').wrap('<div class="accr_content"></div>'))
            }
            ),
            i.accordion ? (e(".accr_content").hide(),
            n.find(i.el_wrap).each(function() {
                e(this).hasClass(i.active) && (e(this).find("> .accr_content").addClass(i.active).slideDown(),
                e(this).find("> .accr_header").addClass(i.active))
            }
            )) : n.find(i.el_wrap).each(function() {
                i.expand ? (e(this).find("> .accr_content").addClass(i.active),
                e(this).find("> .accr_header").addClass(i.active),
                e(this).find("> .accr_header .btn_accor").html(i.btn_close)) : e(".accr_content").hide()
            }
            )
        }
        ),
        e(window).load(function() {
            n.find(i.el_wrap).each(function() {
                var n = e(this)
                  , a = n.find("> .accr_header")
                  , c = ".btn_accor";
                a.find(c).on("click", function(t) {
                    t.preventDefault();
                    var s = e(this)
                      , r = !0;
                    return a.hasClass(i.active) && (r = !1),
                    i.accordion && (n.siblings(i.el_wrap).find("> .accr_content").slideUp().removeClass(i.active),
                    n.siblings(i.el_wrap).find("> .accr_header").removeClass(i.active),
                    n.siblings(i.el_wrap).find("> .accr_header " + c).html(i.btn_open)),
                    r ? (a.addClass(i.active),
                    s.html(i.btn_close),
                    a.siblings(".accr_content").addClass(i.active).stop(!0, !0).slideDown()) : (a.removeClass(i.active),
                    s.html(i.btn_open),
                    a.siblings(".accr_content").removeClass(i.active).stop(!0, !0).slideUp()),
                    !1
                }
                )
            }
            )
        }
        )
    }
}
(jQuery);
