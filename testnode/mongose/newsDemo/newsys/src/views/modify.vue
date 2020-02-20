<template>
	<Modal
		v-model="modalFlag"
		title="修改文章">
		<div class="add">
			<div class="from-add">
				<div>
					<label>标题</label>
					<Input v-model="params.title" type="text" />
				</div>
				<div>
					<label>作者</label>
					<Input v-model="params.author" type="text" />
				</div>
				<div>
					<label>来源</label>
					<Input v-model="params.from_addr" type="text" />
				</div>
				<div>
					<label>内容</label>
					<Input v-model="params.content" type="text" />
				</div>
			</div>
		</div>
		<div slot="footer"> 
			<Button size="large" @click="modalFlag = false">取消</Button> 
			<Button type="primary" size="large"  @click="editNews()">确定</Button> 
		</div> 
	</Modal>
</template>
<script>
	export default {
	  name: 'modify',
	  props: {
	    cdata: Object,
		showModal: Boolean
	  },
	  data() {
	    return {
			modalFlag: false,
			params: {
				_id: '',
				title: '',
				author: '',
				from_addr: '',
				content: ''
			}
	    };
	  },
	  created() {
		  
	  },
	  mounted() {
	  },
	  computed: {
	
	  },
	  methods: {
	    editNews() {
			this.$http.apost(this.$apis.modify, this.params).then((data) => {
				if (data.state === 1) {
					this.$Message.success(data.message);
					this.modalFlag = false;
					this.$emit('getFatherList');
				}
			});
	    }
	  },
	  watch: {
			showModal(n, o) {
				this.modalFlag = true;
				console.log(this.cdata);
				this.params = this.cdata;
			}
	  },
	  components: {
	
	  },
	  destroyed() {
	  }  
	};
</script>
<style lang="stylus" rel="stylesheet/stylus" >
  
</style>