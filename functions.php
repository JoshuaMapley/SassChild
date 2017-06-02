<?php

//Your fresh new styles and scripts fresh from the compiler.
function my_assets() {
    $parent_style = 'parent-style';

    wp_enqueue_style( $parent_style, get_template_directory_uri() . '/style.css' );
    wp_enqueue_style( 'child-styles', get_stylesheet_directory_uri().'/dist/styles/main.css', array(),'1.0.0' );
    wp_enqueue_script( 'child-js', get_stylesheet_directory_uri() . '/dist/scripts/bundle.js', array( 'jquery' ) );
}
add_action( 'wp_enqueue_scripts', 'my_assets' );

//The rest of your functions can sit down here.