    <div id="sns_footerbefore" class="wrap">
      <div class="container">
        <div class="row row-1">
          <div class="block col-md-3 col-sm-4 col-xs-12">
            <h3 class="block-title">Информация</h3>
            <ul>
              <li id="" style="" class="level0 nav--o-nas first  ">
                <a href="about.htm" class="a-level0">
                  <span>О нас</span>
                </a>
              </li>
              <li id="" style="" class="level0 nav--regulamin  ">
                <a href="<?php bloginfo('url'); ?>/postoyannym-pokupatelyam.htm" class="a-level0">
                  <span>Постоянным покупателям</span>
                </a>
              </li>
              <li id="" style="" class="level0 nav--dostawa  ">
                <a href="<?php bloginfo('url'); ?>/dostavka.htm" class="a-level0">
                  <span>Доставка</span>
                </a>
              </li>
              <li id="" style="" class="level0 nav--platnosc  ">
                <a href="<?php bloginfo('url'); ?>/oplata.htm" class="a-level0">
                  <span>Способы оплаты</span>
                </a>
              </li>


            </ul>
          </div>
          <div class="block col-md-3 col-sm-4 col-xs-12">
            <h3 class="block-title">OBSŁUGA KLIENTA</h3>
            <ul>
              <li id="" style="" class="level0 nav--reklamacje  ">
                <a href="http://www.cottonballlights.pl/reklamacje" class="a-level0">
                  <span>Reklamacje</span>
                </a>
              </li>
              <li id="" style="" class="level0 nav--contact- last  ">
                <a href="http://www.cottonballlights.pl/contact/" class="a-level0">
                  <span>Kontakt</span>
                </a>
              </li>

            </ul>
          </div>
          <div class="block col-md-3 col-sm-4 col-xs-12">
            <h3 class="block-title">MOJE KONTO</h3>
            <ul>
              <li id="" style="" class="level0 nav--customer-account- first  ">
                <a href="http://www.cottonballlights.pl/customer/account/" class="a-level0">
                  <span>Moje konto</span>
                </a>
              </li>
              <li id="" style="" class="level0 nav--checkout-cart-  ">
                <a href="http://www.cottonballlights.pl/checkout/cart/" class="a-level0">
                  <span>Mój koszyk</span>
                </a>
              </li>
              <li id="" style="" class="level0 nav--checkout- last  ">
                <a href="http://www.cottonballlights.pl/checkout/" class="a-level0">
                  <span>Zamówienie</span>
                </a>
              </li>

            </ul>
          </div>
          <div class="block col-md-3 col-sm-12 col-xs-12">
            <h3 class="block-title">Kontakt</h3>
            <div class="block-content">
              <p>
                <em class="fa fa-home"></em>Biuro handlowe
                <br>Cotton Ball Lights Polska
                <br>ul. Chmielna 27/31
                <br>
                <span>00-021 Warszawa</span>&nbsp;</p>
              <p>+48 505 113 509
                <br>
                <span>od poniedziałku do piątku, w godzinach od 9:00 do 16:00</span>
              </p>
              <p>
                <em class="fa fa-envelope"></em>
                <span>sklep</span>@cottonballlights.pl</p>
            </div>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="row-2-wrap">
          <div class="row row-2">
            <div class="block block-float col-md-8 col-sm-12">
              <div class="block-title">Мы в соцсетях</div>
              <ul class="list-solicals">
                <li>
                  <a title="Facebook" href="https://www.facebook.com/cottonballlights">
                    <em class="fa fa-facebook"></em>
                    <span>Facebook</span>
                  </a>
                </li>
                <li>
                  <a title="Facebook" href="https://www.facebook.com/cottonballlights">
                    <em class="fa fa-vk"></em>
                    <span>Вконтакте</span>
                  </a>
                </li>
                <li>
                  <a title="Facebook" href="https://www.facebook.com/cottonballlights">
                    <em class="fa fa-odnoklassniki-square"></em>
                    <span>Однокласники</span>
                  </a>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </div>
    </div>
    <div id="sns_footer" class="wrap">
      <div class="container">
        <div class="row">
          <div class="col-sm-7 col-xs-12">
            <!--<div class="footer_menu clearfix">
                  </div>-->
            <div class="sns-copyright">
              Copyright 2015 - Cotton Ball Lights
              <p>Wdrożenie i obsługa <a href="http://www.smartmage.pl/" data-toggle="tooltip" data-original-title="Wejdź SmartMage.pl!" title="Wejdź SmartMage.pl!" target="_blank">SmartMage.pl</a></p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="op24check"></div>
    <?php wp_footer(); ?>


    <style>
      .qONjs {
        display: none;
      }
    </style>
    <a id="sns-totop" href="http://www.cottonballlights.pl/#" style="display: none;"><i class="fa fa-angle-up"></i></a>
    <script type="text/javascript">
      jQuery(function($) {
        // back to top
        $("#sns-totop").hide();
        $(function() {
          var wh = $(window).height();
          var whtml = $(document).height();
          $(window).scroll(function() {
            if ($(this).scrollTop() > whtml / 10) {
              $('#sns-totop').fadeIn();
            } else {
              $('#sns-totop').fadeOut();
            }
          });
          $('#sns-totop').click(function() {
            $('body,html').animate({
              scrollTop: 0
            }, 800);
            return false;
          });
        });
        // end back to top
      });
    </script>
  </section>


  <ul class="ui-autocomplete ui-front ui-menu ui-widget ui-widget-content ui-corner-all" id="ui-id-1" tabindex="0" style="display: block;"></ul>
</body>

</html>
