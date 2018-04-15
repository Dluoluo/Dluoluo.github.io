<template>
    <div class="app-mask" v-show="maskShow">
    </div>
</template>

<script>
    export default {
        data(){
            return{
                maskShow:false
            }
        },
        methods:{
            isShow(payload){
                this.maskShow=payload.showPanel;
            },
            close(){
                this.maskShow=false;
            }
        },
        created(){
            this.$root.Bus.$on('show',this.isShow)
            this.$root.Bus.$on('alertClose',this.close)
        }
    }
</script>

<style scoped>
.app-mask{
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.2)
}
</style>