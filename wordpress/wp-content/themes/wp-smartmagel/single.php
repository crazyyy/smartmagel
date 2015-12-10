<?php get_header(); ?>
  <?php get_template_part('include-breadcrumbs'); ?>

  <div id="sns_content" class="wrap layout-ml">
    <div class="container">
      <div class="row">

        <?php get_sidebar('content'); ?>

        <div id="sns_main" class="col-md-9 col-main">
          <div id="sns_mainmidle" class="clearfix">

            <div class="page-title">
              <h1><?php the_title(); ?></h1>
            </div>

            <div class="category-description std">
              <?php the_content(); ?>
            </div><!-- category-description -->

          </div><!-- sns_mainmidle -->
        </div><!-- sns_main -->

      </div><!-- row -->
    </div><!-- container -->
  </div><!-- sns_content -->

<?php get_footer(); ?>
