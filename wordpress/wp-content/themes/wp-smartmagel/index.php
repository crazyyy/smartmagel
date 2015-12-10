<?php get_header(); ?>
  <?php get_template_part('include-breadcrumbs'); ?>

  <div id="sns_content" class="wrap layout-ml">
    <div class="container">
      <div class="row">

        <?php get_sidebar('content'); ?>

        <div id="sns_main" class="col-md-9 col-main">
          <div id="sns_mainmidle" class="clearfix">

            <div class="page-title">
              <h1><?php _e( 'Latest Posts', 'wpeasy' ); ?></h1>
            </div>

            <div class="category-products">
              <div class="sns-products-container clearfix">
                <ul class="products-grid content-cat-grid row">
                  <?php get_template_part('loop'); ?>
                </ul>
              </div><!-- sns-products-container -->
              <?php get_template_part('pagination'); ?>
            </div><!-- category-products -->
          </div><!-- sns_mainmidle -->
        </div><!-- sns_main -->
      </div>
    </div><!-- container -->
  </div><!-- sns_content -->

<?php get_footer(); ?>
