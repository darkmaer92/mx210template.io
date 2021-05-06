jQuery(function ($) {
  var searchParams = new URLSearchParams(window.location.search);
  var lang = searchParams.get("lang");

  if (lang) {
    $.i18n({
      locale: lang, // Locale is English
    });

    var lang_conf = {};
    lang_conf[lang] = "/i18n/" + lang + ".json";

    $.i18n()
      .load(lang_conf)
      .done(function () {
        $("body").i18n();

        $("[data-i18n-tooltip-title]").each(function () {
          var key_title = $(this).attr("data-i18n-tooltip-title");
          var key_content = $(this).attr("data-i18n-tooltip-content");
          $(this).attr("title", $.i18n(key_title));
          $(this).attr("data-content", $.i18n(key_content));
        });

        $("[data-i18n-value]").each(function () {
          var key_value = $(this).attr("data-i18n-value");
          $(this).attr("value", $.i18n(key_value));
        });

        init_tooltips();

        try {
          $("#datatable1").DataTable().draw("page");
        } catch (e) {}
      });
  } else {
    //init_tooltips();
  }
});
