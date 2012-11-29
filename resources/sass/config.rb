# Get the directory that this configuration file exists in
dir = File.dirname(__FILE__)

# Load the sencha-touch framework
load File.join(dir, '..', '..', 'touch', 'resources', 'themes')

# Look for any *.scss files in same directory as this file and
# Place compiled *.css files in the css directory 
sass_path    = dir
css_path     = File.join(dir, '..', 'css')
#images_path  = File.join(dir, '..', 'images')
http_images_path = "../images/"
http_fonts_path = "../fonts/"
output_style = :expanded
environment  = :development
sass_options = {:debuginfo => true}