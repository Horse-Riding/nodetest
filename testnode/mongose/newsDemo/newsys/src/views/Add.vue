<template>
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
		<div>
			<Button @click="addNews()" type="primary">提交</Button>
		</div>
		
	</div>
  </div>
</template>
<script>
	export default {
	  name: 'add',
	  props: {
	  },
	  data() {
	    return {
			params: {
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
	    addNews() {
			console.log(this.$apis.add);
			  this.$http.apost(this.$apis.add, this.params).then((data) => {
				  if (data.state === 1) {
					  this.$Message.success(data.message);
				  }
			  });
	    }
	  },
	  watch: {
	
	  },
	  components: {
	
	  },
	  destroyed() {
	  }  
	};
</script>
<style lang="stylus" rel="stylesheet/stylus" >
  
</style>