<template>
  <div class="list">
	<Table :columns="table.newsColumns" :data="table.newsData">
		<template slot-scope="{ row, index }" slot="action">
			<Button type="primary" style="margin-right:10px" size="small" @click="modifyNews(row)">修改</Button>
			<Button type="error" size="small" @click="removeNews(row._id)">删除</Button>
		</template>
	</Table>
	<Modify :show-modal="modifyModal.flag" 
			@getFatherList="getNews()"
			:cdata='modifyModal.data' ></Modify>
  </div>
</template>
<script>
	import Modify from './modify'
	export default {
	  name: 'list',
	  props: {
	    
	  },
	  data() {
	    return {
			modifyModal: {
				flag: false,
				data: {}
			},
			table: {
				newsColumns: [
					{
					    title: '标题	',
					    key: 'title'
					},
					{
					    title: '作者',
					    key: 'author'
					},
					{
					    title: '来源',
					    key: 'from_addr'
					},	
					{
						title: '内容',
						key: 'content'
					},
					{
						title: '发布时间',
						key: 'time'
					},
					{
						title: '点击量',
						key: 'hits'
					},
					{
						title: '操作',
						slot: 'action'
					}
					
				],
				newsData: []
			}
	    };
	  },
	  created() {
		 
	  },
	  mounted() {
		   this.getNews();
	  },
	  computed: {
	
	  },
	  methods: {
	    getNews() {
		  this.$http.apost(this.$apis.list, {}).then((data) => {
			  if (data.state === 1) {
				  this.table.newsData = data.data;
				  // this.$Message.success(data.message);
			  }
		  });
	    },
		removeNews(id) {
			let params = {
				id: id
			}
			this.$http.apost(this.$apis.del, params).then((data) => {
				if (data.state === 1) {
					this.$Message.success(data.message);
					this.getNews();
				}
			});
		},
		modifyNews(row) {
			this.modifyModal.data = row;
			this.modifyModal.flag = !this.modifyModal.flag;
		}
	  },
	  watch: {
	
	  },
	  components: {
		Modify
	  },
	  destroyed() {
	  }  
	};
</script>
<style lang="stylus" rel="stylesheet/stylus" >
  
</style>