<?php get_header(); ?>
  <?php get_template_part('include-breadcrumbs'); ?>
  <!-- BEGIN: Main Content -->
  <div id="sns_content" class="wrap layout-m">
    <div class="container">
      <div class="row">
        <div id="sns_main" class="col-md-12 col-main">
<?php woocommerce_content(); ?>

        </div>
      </div>
    </div>
  </div>
<?php get_footer(); ?>
