 
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from 'rollup-plugin-babel';
import { terser } from 'rollup-plugin-terser'; 
 import copy from 'rollup-plugin-copy';
import multiInput from 'rollup-plugin-multi-input';
 
export default {
  input: ['src/**/*.js'],
  output: {
    dir: 'lib',
    format: 'cjs',
    exports: 'named',  

  },
  plugins: [
    multiInput(),
    resolve(),
    commonjs({
      include: 'node_modules/**',
    }),
    babel({
      presets: ['@babel/preset-env', '@babel/preset-react'],
      exclude: ['node_modules/**'],
    }),
    terser(), 
    // copy all but .js or .css
    copy({
      targets: [
        { src: 'src/**/*.!(js|css)', dest: 'lib' }
      ],
      verbose: true,
      flatten: false, // Preserve directory structure
    }),
  ],
};

 