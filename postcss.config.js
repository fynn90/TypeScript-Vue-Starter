module.exports = {
    plugins: {
        'postcss-cssnext':{
                browsers: ["Android 4.1", "iOS 7.1"]
        },
        'postcss-pxtorem': {
            rootValue: 58.59375,
            unitPrecision: 6,
            propList: ['font', 
            'font-size', 
            'line-height', 
            'letter-spacing',
            'height',
            'width',
            'padding',
            'top',
            'right',
            'left',
            'bottom',
            'margin',
            'margin-left',
            'margin-right',
            'margin-top',
            'margin-bottom',
            'padding-left',
            'padding-right',
            'padding-bottom',
            'padding-top',
            'border',
            'border-radius',
            'max-height',
            'min-height',
            'border-top-left-radius',
            'border-top-right-radius',
            'border-bottom-right-radius',
            'border-bottom-left-radius',
            'border-left',
            'border-right',
            'border-bottom',
            'border-top'
        ],
            selectorBlackList :[/^body$/,/^html$/],
            replace: true,
            mediaQuery: false,
            minPixelValue: 0  
        }
    }
}