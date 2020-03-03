Vue.component('vget',  {
        props: ['var'],

        mounted: function() {
            console.log(this.$props.var);
            this.$parent.$data[this.$props.var] = this.$slots.default[0].text
        },
        template: '<div style="display: none"><slot></slot> </div>'
    });
