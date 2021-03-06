// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//

//  require react removed = 20190526

// foundation-rails info: https://foundation.zurb.com/sites/docs/v/5.5.3/applications.html
//= require jquery
//= require activestorage

//= require foundation

//= require jquery-ui

//= require jquery-ui/datepicker

//
//= require foundation-datepicker
//

//= require components
//= require_tree .
//= require modernizr

Foundation.addToJquery($);

$(document).foundation();

$(function(){ $(document).foundation(); });
