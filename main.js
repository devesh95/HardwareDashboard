! function a(b, c, d) {
    function e(g, h) {
        if (!c[g]) {
            if (!b[g]) {
                var i = "function" == typeof require && require;
                if (!h && i) return i(g, !0);
                if (f) return f(g, !0);
                var j = new Error("Cannot find module '" + g + "'");
                throw j.code = "MODULE_NOT_FOUND", j
            }
            var k = c[g] = {
                exports: {}
            };
            b[g][0].call(k.exports, function(a) {
                var c = b[g][1][a];
                return e(c ? c : a)
            }, k, k.exports, a, b, c, d)
        }
        return c[g].exports
    }
    for (var f = "function" == typeof require && require, g = 0; g < d.length; g++) e(d[g]);
    return e
}({
    1: [function(a, b, c) {
        "use strict";
        b.exports = {
            registerNav: function(a, b) {
                var c = function() {
                    b() ? a.addClass("fixed") : a.removeClass("fixed")
                };
                $(window).resize(function() {
                    c()
                }), $(window).scroll(function() {
                    c()
                })
            },
            initializeNav: function(a, b) {
                for (var c = $(".nav-links a:not(.nav-slider)"), d = c.length, e = [], f = 0; d > f; f++) e.push($(c[f]).attr("href"));
                var g = function() {
                        return -a.find(".nav-header").height() + b
                    },
                    h = function() {
                        var a = g(),
                            b = 0,
                            f = $(window).scrollTop();
                        for (c.removeClass("active"); d > b && f > $(e[b]).offset().top + a;) $(c[b]).addClass("active"), b++;
                        var h = 0,
                            i = $(".nav-links").offset().left + 15;
                        b > 0 && (h = $(e[b - 1]).offset().top + a, i = $(c[b - 1]).offset().left + $(c[b - 1]).width() / 2);
                        var j, k;
                        d > b ? (j = $(e[b]).offset().top + a, k = $(c[b]).offset().left + $(c[b]).width() / 2) : (j = $(document).height() - $(window).height(), k = $(".nav-links").offset().left + $(".nav-links").width());
                        var l = (f - h) / (j - h),
                            m = $(".nav-links").width() - 15,
                            n = $(".nav-links").offset().left + 15,
                            o = (i - n) / m,
                            p = (k - n) / m,
                            q = (1 - l) * o + l * p;
                        $("#nav-slider").css("width", 100 * q + "%")
                    };
                c.click(function(a) {
                    $("html, body").animate({
                        scrollTop: $($(a.target).attr("href")).offset().top + g() + 2
                    }, 300), a.preventDefault()
                }), $(window).resize(function() {
                    h()
                }), $(window).scroll(function() {
                    h()
                })
            },
            registerCollapse: function(a, b) {
                var c = function() {
                    b() ? a.addClass("collapse") : (a.find(".nav-collapse").css("display", ""), a.removeClass("collapse").removeClass("collapse-in"))
                };
                $(window).resize(function() {
                    c()
                }), $(window).load(function() {
                    c()
                })
            },
            initializeCollapse: function() {
                $(".nav-expand").click(function(a) {
                    a.preventDefault();
                    var b = $(this).closest(".pennapps-nav"),
                        c = b.find(".nav-collapse");
                    b.hasClass("collapse-in") ? c.slideUp(300, function() {
                        b.removeClass("collapse-in")
                    }) : c.slideDown(300, function() {
                        b.addClass("collapse-in"), $(".nav-links a").click(function(a) {
                            c.slideUp(300, function() {
                                b.removeClass("collapse-in")
                            })
                        })
                    })
                })
            }
        }
    }, {}],
    2: [function(a, b, c) {
        window.nav = a("./navbar")
    }, {
        "./navbar": 1
    }]
}, {}, [2]);