export default{
    component: 'core-rate',
    path: '/src/core_rate.js',
    attributes: {
        v_model: 0,
        max: 5,
        disabled: false,
        allow_half: false,
        low_threshold: 2,
        high_threshold: 4,
        colors: ['#F7BA2A', '#F7BA2A', '#F7BA2A'],
        void_color: '#C6D1DE',
        disabled_void_color: '#EFF2F7',
        icon_classes: ['el-icon-star-on', 'el-icon-star-on','el-icon-star-on'],
        void_icon_class: 'el-icon-star-off',
        disabled_void_icon_class: 'el-icon-star-on',
        show_text: false,
        show_score: false,
        text_color: '#1F2D3D',
        texts: ['oops', 'disappointed', 'normal', 'good', 'great'],
        score_template: {value}
    },
    functions: {
        value: () => {
            dashboard.component.score_template();
        }
    },
    innerHTML:''
}