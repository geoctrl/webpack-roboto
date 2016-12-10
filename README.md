# webpack-roboto
Embed the Roboto font into your application with Webpack

## Set Up
This is a pretty specific setup, but I'm sure you can do it with other commonJS module loaders. You'll need the following NPM modules installed (not including all the other stuff you'll need for sass, etc):

 - file-loader
 - resolve-url-loader

In your `webpack.config.js`, you'll need to add in `resolve-url-loader` to your sass loader and you'll need the `file-loader` added to be able to handle font embedding.

    config.loaders = [
      {
        test: /\.scss$/,
        loader: 'style!css!resolve-url!postcss-loader!sass',
        exclude: /node_modules/
      },
      {
        test: /\.(ttf|woff|woff2)$/,
        loader: 'file?name=fonts/[name].[ext]',
        exclude: /node_modules/
      }
    }

## Usage
Import (or require) the module and then call `embed()`

    import roboto from 'webpack-roboto';
    roboto.embed();

This will add all Roboto fonts. If you want only a specific set of fonts, pass in an array following the `${weight}-${style}` syntax:

    roboto.embed([
      '400-normal',
      '400-italic',
      '700-normal'
    ]);

For each import, webpack adds a new `<style>` tag in the header with all the required css.

## Roadmap

I'd like to make this more modular so Roboto isn't the only font available. Much like how BabelJS has a modular preset system, we can make this project font agnostic, then include fonts that you would want as different packages.
