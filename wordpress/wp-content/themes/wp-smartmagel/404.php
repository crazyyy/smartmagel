<?php get_header(); ?>
  <?php get_template_part('include-breadcrumbs'); ?>
  <!-- BEGIN: Main Content -->
  <div id="sns_content" class="wrap layout-m">
    <div class="container">
      <div class="row">
        <div id="sns_main" class="col-md-12 col-main">

          <div id="sns_mainmidle" class="clearfix">
            <!-- primary content -->
            <div class="page-title">
              <h1><?php _e( 'Sorry, nothing to display.', 'wpeasy' ); ?></h1>
            </div>
            <div class="std">
              <h2><a href="<?php echo home_url(); ?>"><?php _e( 'Return home?', 'wpeasy' ); ?></a></h2>
            </div>
            <!-- // primary content -->
          </div>

        </div>
      </div>
    </div>
  </div>
<?php get_footer(); ?>
