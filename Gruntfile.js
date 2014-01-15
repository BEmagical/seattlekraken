module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON("package.json"),

    rsync: {
      options: {
        args: ["--verbose"],
        recursive: true,
        exclude: [".git*", "node_modules", "Gruntfile.coffee", "package.json", "wp-config.php"]
      },
      production: {
        options: {
          src: "./",
          dest: "/home/seattlek/public_html/",
          host: "seattlek@seattlekrakenNHL.com"
        }
      }
    }
  });

  grunt.registerTask("production", "Deploy to production environment.", function() {
    grunt.task.run("rsync:production");
  });

  grunt.loadNpmTasks('grunt-rsync');
}