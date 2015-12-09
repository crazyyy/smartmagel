<?php /* Template Name: Home Template */ get_header(); ?>

    <div id="interaktingslider" class="wrap">
      <?php putRevSlider( 'home' ); ?>
    </div><!-- interaktingslider -->

    <!-- BEGIN: Top Spotlight -->
    <div id="sns_topsl" class="wrap">
      <div class="container">
        <div class="row">

          <div class="col-sm-4">
            <a class="banner-item style1" href="http://smartmagel.dev/sozdat-svoj-nabor.htm" target="_self">
              <img src="<?php echo get_template_directory_uri(); ?>/img/File-1425455854.png" alt="Stwórz własny zestaw">
            </a>
          </div>
          <div class="col-sm-4">
            <a class="banner-item style1" href="http://smartmagel.dev/vdohnovlenie.htm" target="_self">
              <img src="<?php echo get_template_directory_uri(); ?>/img/File-1425455872.png" alt="Inspiracje">
            </a>
          </div>
          <div class="col-sm-4">
            <a class="banner-item style1" href="http://smartmagel.dev/izbrannoe.htm" target="_self">
              <img src="<?php echo get_template_directory_uri(); ?>/img/File-1425455896.png" alt="Ulubione">
            </a>
          </div>
        </div>
      </div>
    </div>
    <!-- END: Top Spotlight -->
    <!-- BEGIN: Main Content -->
    <div id="sns_content" class="wrap layout-m">
      <div class="container">
        <div class="row">
          <div id="sns_main" class="col-md-12 col-main">
            <!-- global messages -->
            <!-- // global messages -->
            <div id="sns_mainmidle" class="clearfix">
              <!-- primary content -->
              <div class="std">
                <div class="row">

                  <div id="sns_lider12342357811449581306" class="sns-slider effect-slideBottom">
                    <div class="slider-inner">
                      <div class="title-slider clearfix"><span>Популярное</span></div>

                      <div class="navslider">
                        <a class="prev" title="Предыдущие" href="#">Предыдущие</a>
                        <a class="next" title="Следующие" href="#">Следующие</a>
                      </div>

                      <div class="container-slider">
                        <div class="products-grid">
                        <?php
                          $args = array(
                            'post_type' => 'product',
                            'meta_key' => '_featured',
                            'meta_value' => 'yes'
                          );

                          $featured_query = new WP_Query( $args );
                          if ($featured_query->have_posts()) :
                            while ($featured_query->have_posts()) :
                              $featured_query->the_post();
                              $product = get_product( $featured_query->post->ID );
                        ?>

                          <?php get_template_part('include-loop-product'); ?>

                        <?php endwhile; endif; wp_reset_query(); ?>

                        </div><!-- products-grid -->
                      </div><!-- container-slider -->
                    </div><!-- slider-inner -->
                  </div><!-- sns-slider -->

                  <script type="text/javascript">
                  jQuery(document).ready(function($) {
                    $('#sns_lider12342357811449581306 div.products-grid').owlCarousel({
                      itemsCustom: [ [320, 1], [360, 1], [480, 1], [640, 1], [768, 3], [980, 4], [1170, 5] ],
                      slideSpeed: 800,
                      pagination: false,
                      addClassActive: true,
                        afterAction: function (e) {
                          if(this.$owlItems.length > this.options.items){
                            $('#sns_lider12342357811449581306 .navslider').css('display', 'block');
                          }else{
                            $('#sns_lider12342357811449581306 .navslider').css('display', 'none');
                          }
                        }
                      });
                    $('#sns_lider12342357811449581306 .navslider .prev').on('click', function(e){
                      e.preventDefault();
                        $('#sns_lider12342357811449581306 div.products-grid').trigger('owl.prev');
                      });
                      $('#sns_lider12342357811449581306 .navslider .next').on('click', function(e){
                        e.preventDefault();
                        $('#sns_lider12342357811449581306 div.products-grid').trigger('owl.next');
                      });
                    });
                  </script>





</div><!-- row -->




<div id="sns_lider8402019801449581307" class="sns-slider effect-slideBottom quartic_toggle_content" style="display:none"><div class="slider-inner">
        <div class="title-slider clearfix"><span>Popularne w tym tygodniu</span>
            </div>
            <div class="navslider">
        <a class="prev" title="Poprzedni" href="#">Poprzedni</a>
        <a class="next" title="Następne" href="#">Następne</a>
    </div>
        <div class="container-slider">
    <div class="products-grid">



                        <?php
                          $args = array(
                            'post_type' => 'product',
                            'meta_key' => '_featured',
                            'meta_value' => 'yes'
                          );

                          $featured_query = new WP_Query( $args );
                          if ($featured_query->have_posts()) :
                            while ($featured_query->have_posts()) :
                              $featured_query->the_post();
                              $product = get_product( $featured_query->post->ID );
                        ?>

                          <?php get_template_part('include-loop-product'); ?>

                        <?php endwhile; endif; wp_reset_query(); ?>


    </div>
    </div>
    </div></div>

<script type="text/javascript">
//<![CDATA[
    jQuery(document).ready(function($) {
        $('#sns_lider8402019801449581307 div.products-grid').owlCarousel({
            itemsCustom: [ [320, 1], [360, 1], [480, 1], [640, 1], [768, 3], [980, 4], [1170, 5] ],
                        //navigation : true,
                                                slideSpeed: 800,
                        pagination: false,
            addClassActive: true,
            afterAction: function (e) {
                if(this.$owlItems.length > this.options.items){
                    $('#sns_lider8402019801449581307 .navslider').css('display', 'block');
                }else{
                    $('#sns_lider8402019801449581307 .navslider').css('display', 'none');
                }
            }
        });
                $('#sns_lider8402019801449581307 .navslider .prev').on('click', function(e){
            e.preventDefault();
            $('#sns_lider8402019801449581307 div.products-grid').trigger('owl.prev');
        });
        $('#sns_lider8402019801449581307 .navslider .next').on('click', function(e){
            e.preventDefault();
            $('#sns_lider8402019801449581307 div.products-grid').trigger('owl.next');
        });
            });
//]]>
</script>







              </div>
              <div id="_qS_4jvt" class="qONjs">

                <script type="text/javascript" async="" src="js/hz/4jvt.js"></script>
                <script type="text/javascript" async="" src="js/hz/snippetHtml.js"></script>

              </div>
              <!-- // primary content -->
            </div>
          </div>
        </div>
      </div>
    </div>


<?php get_footer(); ?>
