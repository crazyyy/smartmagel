<?php get_header(); ?>
  <?php get_template_part('include-breadcrumbs'); ?>
  <!-- BEGIN: Main Content -->
  <div id="sns_content" class="wrap layout-m">
    <div class="container">
      <div class="row">
        <div id="sns_main" class="col-md-12 col-main">
          <?php if (have_posts()): while (have_posts()) : the_post(); ?>

          <div id="sns_mainmidle" class="clearfix">
            <!-- primary content -->
            <div class="page-title">
              <h1><?php the_title(); ?></h1>
            </div>
            <div class="std">
              <?php the_content(); ?>
            </div>
            <!-- // primary content -->
          </div>

          <?php endwhile; else: // If 404 page error ?>

          <div id="sns_mainmidle" class="clearfix">
            <!-- primary content -->
            <div class="page-title">
              <h1><?php _e( 'Sorry, nothing to display.', 'wpeasy' ); ?></h1>
            </div>
            <div class="std">

            </div>
            <!-- // primary content -->
          </div>

          <?php endif; ?>

        </div>
      </div>
    </div>
  </div>
<?php get_footer(); ?>
