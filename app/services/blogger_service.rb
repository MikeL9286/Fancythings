class BloggerService
	require 'rest_client'
	require 'json'
	require 'post_mapper'

	@@post_mapper = PostMapper.new

	def GetAllPosts
		begin
			response = RestClient.get('https://www.googleapis.com/blogger/v3/blogs/5073145937869562696/posts?maxResults=50&key=AIzaSyBxl86QJ7gRccq_egFmP3J6Zhy3cQLluIk')
			json = JSON.parse(response)			
			
			posts = Array.new
			for item in json['items']
				post = @@post_mapper.to_model(item)
				posts.push(post)
			end
			return posts
		rescue => e
			print e
		end
	end
end



	# OpenSSL::SSL::VERIFY_PEER = OpenSSL::SSL::VERIFY_NONE

	# def initialize
 #        client = Google::APIClient.new(:application_name => 'FancyThings', :application_version => '1.0.0')
 #        client.key = 'AIzaSyBxl86QJ7gRccq_egFmP3J6Zhy3cQLluIk'
	# 	@blogger = client.discovered_api('blogger', 'v3')
	# 	@blogId = '5073145937869562696'
 #    end

	# def GetAllPosts
	# 	# result = client.execute(
	# 	# 	:api_method => blogger.posts.list,
	# 	# 	:parameters => {'blogId' => @blogId, 'maxResults' => 2})

	# 	result = @blogger.posts.list(
	# 		:blogId => @blogId,
	# 		:maxResults => 2)

	# 	return result.data
	# end

	# def GetPost
	# 	result = @blogger.posts.get(
	# 		:@blogId => @blogId,
	# 		:postId => postId,
	# 		:key => key)

	# 	print result.data
	# end

	# def GetArchivedPosts
	# 	result = @blogger.posts.list(
	# 		:@blogId => @blogId,
	# 		:maxResults => 500,
	# 		:fetchImages => false,
	# 		:key => key)

	# 	print result.data
	# end

	# def Search
	# 	result = @blogger.posts.search(
	# 		:@blogId => @blogId,
	# 		:q => searchKey,
	# 		:key => key)
	# end

	# def GetRelatedPosts
	# 	result = @blogger.posts.search(
	# 		:@blogId => @blogId,
	# 		:q => searchKey,
	# 		:fields => 'items(id%2Cpublished%2Ctitle%2Ccontent)',
	# 		:key => key)
	# end