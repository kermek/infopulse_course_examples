<?
header("Content-Type: text/html;charset=UTF-8");
?>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html>
	<head>
		<title>
		</title>
		<meta http-equiv='Content-Type' content='text/html;charset=UTF-8'>
		<link rel='stylesheet' href='../stylesheets/gallery.css'>
		<script src='../scripts/error.js'></script>
	</head>
	<body>
		<div class='b-gallery' id='gallery1'>
			<div class='b-picture'><img src='../images/gallery/small_79.jpg' class='b-picture__image' alt='Фото 79'></div>
			<div class='b-picture'><img src='../images/gallery/small_80.jpg' class='b-picture__image' alt='Image 80'></div>
			<div class='b-picture'><img src='../images/gallery/small_82.jpg' class='b-picture__image' alt='Image 82'></div>
			<div class='b-picture'><img src='../images/gallery/small_83.jpg' class='b-picture__image' alt='Image 83'></div>
			<div class='b-picture'><img src='../images/gallery/small_84.jpg' class='b-picture__image' alt='Image 84'></div>
			<div class='b-picture'><img src='../images/gallery/small_85.jpg' class='b-picture__image' alt='Image 85'></div>
			<div class='b-picture'><img src='../images/gallery/small_86.jpg' class='b-picture__image' alt='Image 86'></div>
			<div class='b-picture'><img src='../images/gallery/small_87.jpg' class='b-picture__image' alt='Image 87'></div>
			<div class='b-picture'><img src='../images/gallery/small_89.jpg' class='b-picture__image' alt='Image 89'></div>
			<div class='b-preview'>
				<div class='b-preview__content'>
					<div class='b-preview__arrow b-preview__arrow_prev'>&lt;</div>
					<img src='' class='b-preview__image'>
					<div class='b-preview__arrow b-preview__arrow_next'>&gt;</div>
					
					<div class='b-preview__text'></div>				
				</div>
			</div>
		</div>
		
	</body>
	<script type='text/javascript' src='../scripts/jquery-2.1.1.min.js'></script>
	<script type='text/javascript' src='../scripts/component.js'></script>
	<script type='text/javascript' src='../scripts/gallery.js'></script>
	<script>
		var g1 = new b_gallery('#gallery1');
	</script>
</html>