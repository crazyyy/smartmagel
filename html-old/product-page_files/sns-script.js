jQuery(document).ready(function($){
	if($('#sns_menu') && KEEP_MENU == 1){
		$('#sns_menu').stick_in_parent({
			sticky_class: 'keep-menu'
		});
	}
});
