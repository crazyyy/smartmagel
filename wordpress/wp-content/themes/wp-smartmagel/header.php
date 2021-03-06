<!doctype html>
<html <?php language_attributes(); ?> class="no-js">
<head>
  <meta charset="<?php bloginfo( 'charset' ); ?>">
  <meta http-equiv="x-ua-compatible" content="ie=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=yes">
  <meta name="HandheldFriendly" content="true">
  <meta name="apple-touch-fullscreen" content="yes">
  <meta name="format-detection" content="telephone=no">

  <link rel="icon" href="<?php echo get_template_directory_uri(); ?>/favicon.ico" type="image/x-icon">
  <link rel="shortcut icon" href="<?php echo get_template_directory_uri(); ?>/favicon.ico" type="image/x-icon">

  <title><?php wp_title( '' ); ?><?php if ( wp_title( '', false ) ) { echo ' :'; } ?> <?php bloginfo( 'name' ); ?></title>

  <?php wp_head(); ?>
  <link rel="stylesheet" type="text/css" href="<?php echo get_template_directory_uri(); ?>/css/print.css" media="print">

  <script type="text/javascript" src="<?php echo get_template_directory_uri(); ?>/js/jquery.js"></script>
  <script type="text/javascript" src="<?php echo get_template_directory_uri(); ?>/js/jquery-noconflict.js"></script>
  <script type="text/javascript" src="<?php echo get_template_directory_uri(); ?>/js/jquery.easing.js"></script>
  <script type="text/javascript" src="<?php echo get_template_directory_uri(); ?>/js/bootstrap.min.js"></script>
  <script type="text/javascript" src="<?php echo get_template_directory_uri(); ?>/js/owl.carousel.min.js"></script>

  <script type="text/javascript" src="<?php echo get_template_directory_uri(); ?>/js/old/jquery.themepunch.plugins.min.js"></script>
  <script type="text/javascript" src="<?php echo get_template_directory_uri(); ?>/js/old/jquery.themepunch.revolution.min.js"></script>

  <script type="text/javascript" src="<?php echo get_template_directory_uri(); ?>/js/old/jquery.sticky-kit.min.js"></script>
  <script type="text/javascript" src="<?php echo get_template_directory_uri(); ?>/js/old/sns-extend.js"></script>
  <script type="text/javascript" src="<?php echo get_template_directory_uri(); ?>/js/old/sns-script.js"></script>

  <!--[if lte IE 8]>
    <script type="text/javascript" src="<?php echo get_template_directory_uri(); ?>/js/old/ie8-responsive-file-warning.js"></script>
    <script type="text/javascript" src="<?php echo get_template_directory_uri(); ?>/js/html5shiv.js"></script>
    <script type="text/javascript" src="<?php echo get_template_directory_uri(); ?>/js/selectivizr.js"></script>
    <script type="text/javascript" src="<?php echo get_template_directory_uri(); ?>/js/respond.js"></script>
  <![endif]-->

  <script type="text/javascript">

    function isHandheldDevices() {
      var check = false;
      (function(a) {
        if (
          /(android|ipad|playbook|silk|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i
          .test(a) ||
          /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i
          .test(a.substr(0, 4))) check = true
      })(navigator.userAgent || navigator.vendor || window.opera);
      return check;
    }

    var IS_HANDHELD = isHandheldDevices();
    var KEEP_MENU = 1;

  </script>
</head>
<body <?php body_class(); ?>>
  <section id="sns_wrapper">

    <!-- BEGIN: Header -->
    <div id="sns_header" class="wrap">
      <div class="container">
        <div class="header-inner">
          <div class="row">
            <!-- BEGIN: Logo -->
            <div class="header-left col-md-6">
            </div>
            <!-- END: Logo -->
            <div class="header-right col-md-6">
              <div class="inner">
                <form id="search_mini_form" method="get" name="searchform" action="<?php bloginfo('url'); ?>/">
                  <div class="form-search">
                    <input type="text" value="" name="s" placeholder="Поиск" class="input-text ui-autocomplete-input" autocomplete="off" />
                    <span role="status" aria-live="polite" class="ui-helper-hidden-accessible"></span>
                    <button type="submit" title="Поиск" class="button"><i class="fa fa-search"></i>
                      <span>Поиск</span>
                    </button>
                  </div>
                </form>
                <div class="sns-quickaccess">
                  <div class="quick-access-title"><i class="fa fa-user"></i>
                    <span>Мой профиль</span>
                  </div>
                  <div class="quick-access-content">
                    <ul class="links">
                      <li class="first"><a href="http://www.cottonballlights.pl/customer/account/" title="Moje konto">Moje konto</a></li>
                      <li><a href="http://www.cottonballlights.pl/checkout/" title="Zamówienie" class="top-link-checkout">Zamówienie</a></li>
                      <li class=" last"><a href="http://www.cottonballlights.pl/faq/" title="Faq">Faq</a></li>
                    </ul>
                  </div>
                </div>
                <div class="block mini-cart sns-ajaxcart">
                  <div class="block-title">
                    <i class="fa fa-shopping-cart"></i>
                    <div class="cart-status">
                      <span class="label">
                        Корзина </span>
                      <span class="amount"><?php echo sprintf (_n( '%d', '%d', WC()->cart->cart_contents_count ), WC()->cart->cart_contents_count ); ?></span>
                    </div>
                  </div>
                </div>
                <script type="text/javascript">
                  //<![CDATA[
                  if (!IS_HANDHELD) {

                  } else {
                    jQuery('.mini-cart').addClass('handheld');
                  }
                  //]]>
                </script>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- END: Header -->
    <!-- BEGIN: Menu -->
    <div id="sns_menu" class="wrap">
      <div class="inner">
        <div class="container">
          <div class="row">
            <!-- BEGIN: Logo -->
            <h1 id="logo" class="col-md-3">
              <?php if ( is_front_page() && is_home() ){ } else { ?>
                <a href="<?php echo home_url(); ?>">
                  <?php  } ?>
                  <img src="<?php echo get_template_directory_uri(); ?>/img/logo.png" alt="<?php wp_title( '' ); ?>" title="<?php wp_title( '' ); ?>" class="logo-img">
                  <span></span>
                  <?php if ( is_front_page() && is_home() ){
                  } else { ?>
                </a>
              <?php } ?>
            </h1>
            <!-- END: Logo -->
            <!-- BEGIN: Main Navigation -->
            <div id="sns_mainnav" class="col-md-9 col-xs-12">
              <div id="sns_custommenu" class="visible-md visible-lg">
                <?php wpeHeadNav(); ?>
              </div>
              <div id="sns_mommenu" class="menu-collapse hidden-md hidden-lg">
                <span class="btn btn-navbar leftsidebar">
                  <i class="fa fa fa-align-left"></i>
                  <span class="overlay"></span>
                </span>
                <span class="btn btn-navbar collapsed" data-toggle="collapse" data-target="#menu_collapse">
                  <i class="fa fa-bars"></i>
                  <span class="overlay"></span>
                </span>
                <span class="btn btn-navbar rightsidebar">
                  <i class="fa fa fa-align-left"></i>
                  <span class="overlay"></span>
                </span>
                <ul id="menu_collapse" class="mainnav collapse">
                  <li class="level0 nav-6 first">
                    <div class="accr_header">
                      <a href="http://www.cottonballlights.pl/stworz-wlasny-zestaw" class=" menu-title-lv0">
                        <span>Stwórz własny zestaw</span>
                      </a>
                    </div>
                  </li>
                  <li class="level0 nav-7">
                    <div class="accr_header">
                      <a href="http://www.cottonballlights.pl/zestawy" class=" menu-title-lv0">
                        <span>Ulubione</span>
                      </a>
                    </div>
                  </li>
                  <li class="level0 nav-8">
                    <div class="accr_header">
                      <a href="http://www.cottonballlights.pl/zamienniki" class=" menu-title-lv0">
                        <span>Dodatki i zamienniki</span>
                      </a>
                    </div>
                  </li>
                  <li class="level0 nav-9">
                    <div class="accr_header">
                      <a href="http://www.cottonballlights.pl/prezent" class=" menu-title-lv0">
                        <span>KARNETY PREZENTOWE</span>
                      </a>
                    </div>
                  </li>
                  <li class="level0 nav-10 last">
                    <div class="accr_header">
                      <a href="http://www.cottonballlights.pl/pomoc" class=" menu-title-lv0">
                        <span>Pomoc</span>
                      </a>
                    </div>
                  </li>
                </ul>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div><!-- sns_menu -->
