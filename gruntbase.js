/*global module:false*/
module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),
        meta: {
            banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
                '<%= grunt.template.today("yyyy-mm-dd") %><%= "\\n" %>' +
                '<%= pkg.homepage ? "* " + pkg.homepage + "\\n" : "" %>' +
                '* JBoss, Home of Professional Open Source<%= "\\n" %>' +
                '* Copyright <%= pkg.author.name %>, and individual contributors<%= "\\n" %>' +
                '*<%= "\\n" %>' +
                '* Licensed under the Apache License, Version 2.0 (the "License");<%= "\\n" %>' +
                '* you may not use this file except in compliance with the License.<%= "\\n" %>' +
                '* You may obtain a copy of the License at<%= "\\n" %>' +
                '* <%= pkg.licenses[0].url + "\\n" %>' +
                '* Unless required by applicable law or agreed to in writing, software<%= "\\n" %>' +
                '* distributed under the License is distributed on an "AS IS" BASIS,<%= "\\n" %>' +
                '* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.<%= "\\n" %>' +
                '* See the License for the specific language governing permissions and<%= "\\n" %>' +
                '* limitations under the License.<%= "\\n" %>' +
                '*/<%= "\\n" %>'
        },
        concat: {
            options: {
                stripBanners: true,
                banner: "<%= meta.banner %>"
            },
            dist: {
                src: "@SRC@",
                dest: "@DEST@"
            }
        },
        uglify: {
            all: {
                files: {
                    "@DESTMIN@": [ "<%= concat.dist.dest %>" ]
                },
                options: {
                    banner: "<%= meta.banner %>",
                    sourceMap: "@DESTSOURCEMAP@",
                    sourceMappingURL: "aerogear.custom.map",
                    sourceMapPrefix: "@SOURCEMAPPREFIX@",
                    beautify: {
                        ascii_only: true
                    }
                }
            }
        }
    });

    // grunt-contrib tasks
    grunt.task.loadTasks( "@CONCAT@" );
    grunt.task.loadTasks( "@UGLY@" );
    // Default task.
    grunt.registerTask('default', ['concat:dist','uglify:all']);

};