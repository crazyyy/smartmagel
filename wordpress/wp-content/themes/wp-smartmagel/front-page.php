<?php /* Template Name: Home Template */ get_header(); ?>
<div class="content">
  <div class="block cf">
    <?php get_sidebar(); ?>
    <!-- content -->
    <div class="cont-r">
      <div class="s-p-content">
        <?php get_template_part('include-slider'); ?>

        <h1 class="h2 m30 upp b"><?php the_title(); ?></h1>
        <div class="m20">
          <?php the_content(); ?>
        </div>
        <div class="m40 cf">
          <?php get_template_part('include-reviews'); ?>

          <?php get_template_part('include-doctors'); ?>
        </div>
        <div class="m20">
          <h2>Почему Он Клиник?</h2>
          <div class="cf m10">
            <div class="col col2">
              <ul class="o-list">
                <li>Эффективные методики лечения</li>
                <li>Многолетний опыт работы</li>
                <li>Высококвалифицированный персонал</li>
                <li>Современное оборудование</li>
                <li>Отсутствие очередей</li>
              </ul>
            </div>
            <div class="col col2">
              <ul class="o-list">
                <li>Индивидуальный подход в лечении</li>
                <li>Конфиденциальность приемов</li>
                <li>Работаем без выходных</li>
                <li>Лечение без потери рабочего времени</li>
                <li>Независимая лабораторная диагностика</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="main-bottom-order">
          <a class="button" href="<?php echo home_url(); ?>/zapis.htm">Записаться на прием к врачу</a>
        </div>
      </div>
    </div>
    <!-- end content -->
  </div>

<?php get_footer(); ?>
