/**
* jQuery popOver Plugin 1.0
*
* Peter Samuel
* http://www.iteraconsulting.no
*
*/
(function ($) {

      var settings = {
            width: 250,
            target: null,
            url: null,
            data: null
      };

      var popOver = {
            init: function (options) {

                  if (options) {
                        $.extend(settings, options);
                  }

                  return this.each(function () {

                        var $this = $(this),
                            data = $this.data('popOver'),
                            target = $("#" + settings.target);

                        if (!data) {

                              $this.prepend('<div class="pop-over ui-icon ui-icon-triangle-1-s"></div>');
                              var icon = $this.find(".pop-over").first().bind('click', popOver.show);
                              target.mouseleave(popOver.hide);

                              icon.data('popOver', {
                                    trigger: $this,
                                    target: target,
                                    url: settings.url,
                                    data: settings.data
                              });
                        }
                  });
            },
            show: function () {
                  var $this = $(this),
                        $data = $this.data('popOver');

                  if ($data.url) {
                        settings.target = $data.target;
                        popOver.get($data.url, $data.data);
                  }

                  var offset = $this.offset();
                  $data.target.css({ "left": (offset.left) + "px", "top": offset.top + $this.height() + "px" });
                  $data.target.toggle();
            },
            hide: function () {
                  var $this = $(this);
                  $this.hide();
            },
            get: function (url, data) {
                  $.get(url, data, function (response) {
                        popOver.callback(response);
                  });

            },
            callback: function (response) {
                  settings.target.html(response);
            }
      };

      $.fn.popOver = function (method) {


            // Method calling logic
            if (popOver[method]) {
                  return popOver[method].apply(this, Array.prototype.slice.call(arguments, 1));
            } else if (typeof method === 'object' || !method) {
                  return popOver.init.apply(this, arguments);
            } else {
                  $.error('Method ' + method + ' does not exist on jQuery.popOver');
                  return this;
            }
      };

})(jQuery);