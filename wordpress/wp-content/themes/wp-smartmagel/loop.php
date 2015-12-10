<?php if (have_posts()): while (have_posts()) : the_post(); ?>
  <li class="item col-lg-6  col-md-6 col-sm-6 col-xs-12">
    <div class="item-inner clearfix">
      <div class="item-img">
        <div class="item-img-info">

          <a rel="nofollow" class="product-image content-feature-img" href="<?php the_permalink(); ?>" title="<?php the_title(); ?>">
            <span class="img-main">
              <?php if ( has_post_thumbnail()) :
                the_post_thumbnail('medium');
              else: ?>
                <img src="<?php echo catchFirstImage(); ?>" title="<?php the_title(); ?>" alt="<?php the_title(); ?>" />
              <?php endif; ?>
            </span>
          </a><!-- /post thumbnail -->

        </div><!-- item-img-info -->
      </div><!-- item-img have-additional -->

      <div class="item-info">
        <div class="info-inner">
          <div class="item-title">
            <a href="<?php the_permalink(); ?>" title="<?php the_title(); ?>"><?php the_title(); ?></a>
          </div><!-- item-title -->

          <div class="item-content clearfix">
            <?php wpeExcerpt('wpeExcerpt40'); ?>
          </div><!-- item-content -->
        </div><!-- info-inner -->
      </div><!-- item-info -->
    </div><!-- item-inner -->
  </li><!-- item -->
<?php endwhile; else: ?>

  <li class="item col-lg-12  col-md-12  col-sm-12 col-xs-12">
    <div class="item-inner clearfix">
      <div class="item-info">
        <div class="info-inner">
          <div class="item-content clearfix">
            <h2 class="title"><?php _e( 'Sorry, nothing to display.', 'wpeasy' ); ?></h2>
          </div><!-- item-content -->
        </div><!-- info-inner -->
      </div><!-- item-info -->
    </div><!-- item-inner -->
  </li><!-- item -->

<?php endif; ?>
