const languages = [{
  'name': 'objectivec',
  'mode': 'clike',
  'mime': 'text/x-objectivec'
}, {
  'name': 'swift',
  'mode': 'swift',
  'mime': 'text/x-swift'
}, {
  'name': 'c_cpp',
  'mode': 'clike',
  'mime': 'text/x-csrc'
}, {
  'name': 'lisp',
  'mode': 'commonlisp',
  'mime': 'text/x-common-lisp'
}, {
  'name': 'pascal',
  'mode': 'pascal',
  'mime': 'text/x-pascal'
}, {
  'name': 'eiffel',
  'mode': 'eiffel',
  'mime': 'text/x-eiffel'
}, {
  'name': 'yaml',
  'mode': 'yaml',
  'mime': 'text/x-yaml'
}, {
  'name': 'xml',
  'mode': 'xml',
  'mime': 'application/xml'
}, {
  'name': 'django',
  'mode': 'django',
  'mime': 'text/x-django'
}, {
  'name': 'clojure',
  'mode': 'clojure',
  'mime': 'text/x-clojure'
}, {
  'name': 'crystal',
  'mode': 'crystal',
  'mime': 'text/x-crystal'
}, {
  'name': 'ruby',
  'mode': 'ruby',
  'mime': 'text/x-ruby'
}, {
  'name': 'python',
  'mode': 'python',
  'mime': 'text/x-python'
}, {
  'name': 'sh',
  'mode': 'shell',
  'mime': 'text/x-sh'
}, {
  'name': 'less',
  'mode': 'css',
  'mime': 'text/css'
}, {
  'name': 'php',
  'mode': 'php',
  'mime': 'application/x-httpd-php'
}, {
  'name': 'json',
  'mode': 'javascript',
  'mime': 'application/json'
}, {
  'name': 'smarty',
  'mode': 'smarty',
  'mime': 'text/x-smarty'
}, {
  'name': 'cobol',
  'mode': 'cobol',
  'mime': 'text/x-cobol'
}, {
  'name': 'golang',
  'mode': 'go',
  'mime': 'text/x-go'
}, {
  'name': 'makefile',
  'mode': 'cmake',
  'mime': 'text/x-cmake'
}, {
  'name': 'ocaml',
  'mode': 'mllike',
  'mime': 'text/x-ocaml'
}, {
  'name': 'textile',
  'mode': 'textile',
  'mime': 'text/x-textile'
}, {
  'name': 'd',
  'mode': 'd',
  'mime': 'text/x-d'
}, {
  'name': 'jade',
  'mode': 'pug',
  'mime': 'text/x-pug'
}, {
  'name': 'lua',
  'mode': 'lua',
  'mime': 'text/x-lua'
}, {
  'name': 'coffee',
  'mode': 'coffeescript',
  'mime': 'text/x-coffeescript'
}, {
  'name': 'html',
  'mode': 'htmlmixed',
  'mime': 'text/html'
}, {
  'name': 'pgsql',
  'mode': 'sql',
  'mime': 'text/x-sql'
}, {
  'name': 'haskell',
  'mode': 'haskell',
  'mime': 'text/x-haskell'
}, {
  'name': 'jsp',
  'mode': 'htmlembedded',
  'mime': 'application/x-jsp'
}, {
  'name': 'tcl',
  'mode': 'tcl',
  'mime': 'text/x-tcl'
}, {
  'name': 'ini',
  'mode': 'properties',
  'mime': 'text/x-properties'
}, {
  'name': 'jsoniq',
  'mode': 'javascript',
  'mime': 'application/json'
}, {
  'name': 'vhdl',
  'mode': 'vhdl',
  'mime': 'text/x-vhdl'
}, {
  'name': 'verilog',
  'mode': 'verilog',
  'mime': 'text/x-systemverilog'
}, {
  'name': 'csharp',
  'mode': 'clike',
  'mime': 'text/x-csharp'
}, {
  'name': 'rust',
  'mode': 'rust',
  'mime': 'text/x-rustsrc'
}, {
  'name': 'livescript',
  'mode': 'livescript',
  'mime': 'text/x-livescript'
}, {
  'name': 'jsx',
  'mode': 'jsx',
  'mime': 'text/jsx'
}, {
  'name': 'protobuf',
  'mode': 'protobuf',
  'mime': 'text/x-protobuf'
}, {
  'name': 'markdown',
  'mode': 'gfm',
  'mime': 'text/x-gfm'
}, {
  'name': 'c++',
  'mode': 'clike',
  'mime': 'text/x-c++src'
}, {
  'name': 'java',
  'mode': 'clike',
  'mime': 'text/x-java'
}, {
  'name': 'javascript',
  'mode': 'javascript',
  'mime': 'text/javascript'
}, {
  'name': 'erlang',
  'mode': 'erlang',
  'mime': 'text/x-erlang'
}, {
  'name': 'scheme',
  'mode': 'scheme',
  'mime': 'text/x-scheme'
}, {
  'name': 'sass',
  'mode': 'sass',
  'mime': 'text/x-sass'
}, {
  'name': 'groovy',
  'mode': 'groovy',
  'mime': 'text/x-groovy'
}, {
  'name': 'julia',
  'mode': 'julia',
  'mime': 'text/x-julia'
}, {
  'name': 'haml',
  'mode': 'haml',
  'mime': 'text/x-haml'
}, {
  'name': 'powershell',
  'mode': 'powershell',
  'mime': 'application/x-powershell'
}, {
  'name': 'typescript',
  'mode': 'javascript',
  'mime': 'application/typescript'
}, {
  'name': 'dart',
  'mode': 'dart',
  'mime': 'application/dart'
}, {
  'name': 'xquery',
  'mode': 'xquery',
  'mime': 'application/xquery'
}, {
  'name': 'elm',
  'mode': 'elm',
  'mime': 'text/x-elm'
}, {
  'name': 'plsql',
  'mode': 'sql',
  'mime': 'text/x-plsql'
}, {
  'name': 'forth',
  'mode': 'forth',
  'mime': 'text/x-forth'
}, {
  'name': 'scala',
  'mode': 'clike',
  'mime': 'text/x-scala'
}, {
  'name': 'perl',
  'mode': 'perl',
  'mime': 'text/x-perl'
}, {
  'name': 'haxe',
  'mode': 'haxe',
  'mime': 'text/x-haxe'
}, {
  'name': 'rhtml',
  'mode': 'htmlembedded',
  'mime': 'application/x-erb'
}, {
  'name': 'scss',
  'mode': 'css',
  'mime': 'text/x-scss'
}, {
  'name': 'sql',
  'mode': 'sql',
  'mime': 'text/x-sql'
}, {
  'name': 'css',
  'mode': 'css',
  'mime': 'text/css'
}, {
  'name': 'tex',
  'mode': 'stex',
  'mime': 'text/x-stex'
}, {
  'name': 'r',
  'mode': 'r',
  'mime': 'text/x-rsrc'
}, {
  'name': 'diff',
  'mode': 'diff',
  'mime': 'text/x-diff'
}, {
  'name': 'twig',
  'mode': 'twig',
  'mime': 'text/x-twig'
}, {
  'name': 'matlab',
  'mode': 'octave',
  'mime': 'text/x-octave'
}, {
  'name': 'soy_template',
  'mode': 'soy',
  'mime': 'text/x-soy'
}, {
  'name': 'dockerfile',
  'mode': 'dockerfile',
  'mime': 'text/x-dockerfile'
}, {
  'name': 'toml',
  'mode': 'toml',
  'mime': 'text/x-toml'
}]

export default languages
