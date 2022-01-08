module.exports = {
  css: {
    loaderOptions: {
      less: {
        lessOptions: {
          modifyVars: {
            "primary-color": "#0c2b68", //Primary
            "secondary-color": "#4f8EFF",
            "link-color": "#ED723D", //Link
            "success-color": "#28B463", //Success
            "warning-color": "#F39C12", //Warning
            "error-color": "#CB4335", //Error
            "heading-color": "#212121", //Heading
            "text-color": "#212121", //Text normal
            "text-color-secondary": "#4F8EFF", //Text secondary
            "disabled-color": "#9C9B9C", //Disabled
            "border-color-base": "#DADCE0", //Border color
            "border-radius-base": "6px", //Border radius
            "font-size-base": "14px", //Font size
            "menu-highlight-color": "white"
          },
          javascriptEnabled: true,
        },
      },
    },
  },
  chainWebpack: config => {
    config.module
      .rule('vue')
      .use('vue-loader')
      .tap(options => {
        options.compilerOptions = {
          ...options.compilerOptions,
          isCustomElement: tag => tag.startsWith('ion-')
        }
        return options
      })
  }
}