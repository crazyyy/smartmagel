<?php get_header(); ?>
  <?php get_template_part('include-breadcrumbs'); ?>
  <!-- BEGIN: Main Content -->
  <div id="sns_content" class="wrap layout-m">
    <div class="container">
      <div class="row">
        <div id="sns_main" class="col-md-12 col-main">
          <div id="sns_mainmidle" class="clearfix">

          <?php if (have_posts()): while (have_posts()) : the_post(); ?>

            <!-- primary content -->
            <div class="page-title">
              <h1><?php the_title(); ?></h1>
            </div>
            <div class="std">
              <?php the_content(); ?>
            </div>
            <!-- // primary content -->

          <?php endwhile; else: // If 404 page error ?>

            <!-- primary content -->
            <div class="page-title">
              <h1><?php _e( 'Sorry, nothing to display.', 'wpeasy' ); ?></h1>
            </div>
            <div class="std">
              <h2><a href="<?php echo home_url(); ?>"><?php _e( 'Return home?', 'wpeasy' ); ?></a></h2>
            </div>
            <!-- // primary content -->

          <?php endif; ?>

          </div><!-- sns_mainmidle -->
        </div><!-- sns_main -->
      </div><!-- row -->
    </div><!-- container -->
  </div><!-- sns_content -->
<?php get_footer(); ?>
