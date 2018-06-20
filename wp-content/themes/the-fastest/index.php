<?php get_header('blog'); 
$args = wpas_get_view_data();
?>


<!-- Begin Site Title
================================================== -->
<div class="container">
	<div class="mainheading">
		<h1 class="sitetitle">4Geeks Academy Blog</h1>
		<p class="lead">
			 <?php pll_e('Resources and news for both potential and current software builders'); ?>.
		</p>
	</div>
<!-- End Site Title
================================================== -->

	<!-- Begin Featured
	================================================== -->
	<section class="featured-posts">
	<div class="section-title">
		<h2><span><?php pll_e('Featured'); ?></span></h2>
	</div>
	<div class="card-columns listfeaturedtag">

		<!-- begin post -->
		<?php foreach($args['featured'] as $post){ ?>
		<div class="card">
			<div class="row">
				<div class="col-md-5 wrapthumbnail">
					<a href="<?php echo $post['permalink']; ?>">
						<div class="thumbnail" style="background-image:url(<?php echo $post['thumb_url']; ?>);">
						</div>
					</a>
				</div>
				<div class="col-md-7">
					<div class="card-block">
						<h2 class="card-title mt-3"><a href="<?php echo $post['permalink']; ?>"><?php echo $post['post_title']; ?></a></h2>
						<h4 class="card-text"><?php echo substr($post['post_excerpt'],0,185); ?></h4>
						<div class="metafooter">
							<div class="wrapfooter">
								<span class="meta-footer-thumb">
								<a href="#"><img class="author-thumb" src="<?php echo $post['post_author_avatar']; ?>?s=250&amp;d=mm&amp;r=x" alt="Sal"></a>
								</span>
								<span class="author-meta">
								<span class="post-name"><a href="#"><?php echo $post['post_author_name']; ?></a></span><br/>
								<span class="post-date"><?php echo $post['beautiful_date']; ?></span><span class="dot"></span><span class="post-read">6 min read</span>
								</span>
								<span class="post-read-more"><a href="<?php echo $post['permalink']; ?>" title="Read Story"><svg class="svgIcon-use" width="25" height="25" viewbox="0 0 25 25"><path d="M19 6c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v14.66h.012c.01.103.045.204.12.285a.5.5 0 0 0 .706.03L12.5 16.85l5.662 4.126a.508.508 0 0 0 .708-.03.5.5 0 0 0 .118-.285H19V6zm-6.838 9.97L7 19.636V6c0-.55.45-1 1-1h9c.55 0 1 .45 1 1v13.637l-5.162-3.668a.49.49 0 0 0-.676 0z" fill-rule="evenodd"></path></svg></a></span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<?php } ?>
		<!-- end post -->

	</div>
	</section>
	<!-- End Featured
	================================================== -->

	<!-- Begin List Posts
	================================================== -->
	<section class="recent-posts">
	<div class="section-title">
		<h2><span><?php pll_e('All Stories'); ?></span></h2>
	</div>
	<div class="card-columns listrecent">

		<!-- begin post -->
	<?php foreach($args['posts'] as $post){ ?>
		<div class="card">
			<a href="post.html">
				<img class="img-fluid" src="<?php echo get_the_post_thumbnail_url($post->id); ?>" alt="">
			</a>
			<div class="card-block">
				<h2 class="card-title"><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h2>
				<p class="card-text"><?php echo substr(get_the_excerpt(),0,180); ?></p>
				<div class="metafooter">
					<div class="wrapfooter">
						<span class="meta-footer-thumb">
						<a href="#">
							<?php echo get_avatar( get_the_author_meta( 'ID' ), 250,null,get_the_author_meta( 'user_nicename' ),['class' => 'author-thumb'] ); ?>
						</a>
						</span>
						<span class="author-meta">
						<span class="post-name"><a href="#"><?php the_author(); ?></a></span><br/>
						<span class="post-date"><?php the_date(); ?></span><span class="dot"></span><span class="post-read">6 min read</span>
						</span>
						<span class="post-read-more"><a href="<?php the_permalink(); ?>" title="Read Story"><svg class="svgIcon-use" width="25" height="25" viewbox="0 0 25 25"><path d="M19 6c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v14.66h.012c.01.103.045.204.12.285a.5.5 0 0 0 .706.03L12.5 16.85l5.662 4.126a.508.508 0 0 0 .708-.03.5.5 0 0 0 .118-.285H19V6zm-6.838 9.97L7 19.636V6c0-.55.45-1 1-1h9c.55 0 1 .45 1 1v13.637l-5.162-3.668a.49.49 0 0 0-.676 0z" fill-rule="evenodd"></path></svg></a></span>
					</div>
				</div>
			</div>
		</div>
	<?php } ?>
		<!-- end post -->
	</div>
	</section>
	<!-- End List Posts
	================================================== -->

<?php get_footer('blog'); ?>
