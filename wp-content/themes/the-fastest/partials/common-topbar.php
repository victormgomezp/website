<?php
$topbarMessage = get_option('top-bar-message');
$dismissible = (get_option('top-bar-close-btn') == "active");
if(!empty($topbarMessage)){
?>
<div id="topbar" class="topbar alert alert-dismissible fade show <?php echo get_option('top-bar-classes') ?>" role="alert">
    <?php echo $topbarMessage; ?>
    <?php if($dismissible){ ?>
      <button type="button" class="close" data-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    <?php } ?>
</div>
<?php } ?>