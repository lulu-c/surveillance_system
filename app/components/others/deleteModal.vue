<template>
    <div class="modal fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                    <h4 class="modal-title" id="myModalLabel">{{title}}</h4>
                </div>
                <div class="modal-body" style="white-space:nowrap">
                    <h5>是否{{title}}?</h5>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-default" data-dismiss="modal">否</button>
                    <button type="button" class="btn btn-primary" v-on:click="deleteok">是</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script type="text/javascript">
	export default {
		props: {
            title: String,
        },
        methods: {
            // deleteok:function(e){
            //     this.$dispatch('deleteoktype');//向上抛出事件
            //     $(e.target).prev().trigger('click');
            // }
        }
	}
</script>