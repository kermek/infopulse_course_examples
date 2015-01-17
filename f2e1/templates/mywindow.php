<?
header("Content-Type: text/html; charset=UTF-8");
?>
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <title>Main Window</title>
        <link href="../stylesheets/mywindow.css" rel="stylesheet">
		<script type='text/javascript' src='../scripts/error.js'></script>
		<script type='text/javascript' src='../scripts/jquery-2.1.1.min.js'></script>

    </head>
    <body>
        <div class="container">
                <h1>Main window</h1>
                <p class="lead">Now you can call modal window by pressing on <a href="#" class="b-modal__open">Open</a>.</p>
            <div id="#modal_form" class="b-modal__form">
                <div>
                    <a href="#close" title="Close" class="b-modal__close">X</a>
                    <h2>Modal window</h2>
                    <p>This is an example of modal window created using CSS3</p>
                    <div class="b-modal__buttons">
                        <span class="b-modal__button_ok">Ok</span>
                        <span class="b-modal__button_cancel">Cancel</span>
                    </div>
                </div>
            </div>
            <div id="mask" class="b-modal__mask"></div>
        </div>
    </body>
	<script type='text/javascript' src='../scripts/component.js'></script>	
	<script type='text/javascript' src='../scripts/modal.js'></script>
    <script>
        var b1 = new b_modal(".container");
    </script>
</html>
