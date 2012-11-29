# Get the directory that this configuration file exists in
dir = File.dirname(__FILE__)

# Load the sencha-touch framework
load File.join(dir, '..', '..', 'touch', 'resources', 'themes')

# Look for any *.scss files in same directory as this file and
# Place compiled *.css files in the css directory 
sass_path    = dir
css_path     = File.join(dir, '..', 'css')
output_style = :expanded
environment  = :development
sass_options = {:debuginfo => true}