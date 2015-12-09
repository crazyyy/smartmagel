<div class="item">
  <div class="item-inner clearfix">
    <div class="item-img have-additional">
      <div class="item-img-info">
        <a href="<?php the_permalink(); ?>" title="<?php the_title(); ?>" class="product-image">
          <span class="img-main">
            <?php the_post_thumbnail('medium');  ?>
          </span>

          <?php

            global $post, $product, $woocommerce;
            $attachment_ids = $product->get_gallery_attachment_ids();
            if ( $attachment_ids ) {
            $loop = 0;

              foreach ( $attachment_ids as $attachment_id ) {
                $image_title  = esc_attr( get_the_title( $attachment_id ) );
                $image       = wp_get_attachment_image( $attachment_id, apply_filters( 'single_product_medium_thumbnail_size', 'shop_thumbnail' ), 0, $attr = array(
                  'title' => $image_title,
                  'alt' => $image_title
                  ) );
                echo apply_filters( 'woocommerce_single_product_image_thumbnail_html', sprintf( '<span class="img-additional">%s</span>', $image ), $attachment_id, $post->ID );
              }
            }
          ?>

        </a>
      </div><!-- item-img-info -->
    </div><!-- item-img have-additional -->
    <div class="item-info">
      <div class="info-inner">
        <div class="item-title">
          <a href="<?php the_permalink(); ?>" title="<?php the_title(); ?>"><?php the_title(); ?></a>
        </div>
        <div class="item-content clearfix">
          <div class="item-price">
            <div class="price-box">
              <p class="minimal-price">
                <span class="price-label"></span><span class="price" id="product-minimal-price-<?php the_ID(); ?>"><?php echo $product->get_price_html(); ?></span>
              </p>
            </div>
          </div>

          <div class="wrap-buttons">
            <?php
            global $product;
            echo apply_filters( 'woocommerce_loop_add_to_cart_link',
              sprintf( '<button onclick="setLocation(\'%s\')" data-product_id="%s" data-product_sku="%s" data-quantity="1" class="btn-cart" ><i class="fa fa-shopping-cart"></i><span>%s</span></button>',
                esc_url( $product->add_to_cart_url() ),
                esc_attr( $product->id ),
                esc_attr( $product->get_sku() ),
                esc_html( $product->add_to_cart_text() )
              ),
            $product );
            ?>
          </div>
        </div><!-- item-content clearfix -->
      </div><!-- info-inner -->
    </div><!-- item-info -->
  </div><!-- item-inner -->
</div><!-- item -->
