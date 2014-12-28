class BloggerService
	require 'rest_client'
	require 'json'
	require 'post_mapper'

	@@post_mapper = PostMapper.new
	@@bloggerUrl = 'https://www.googleapis.com/blogger/v3/blogs/5073145937869562696/'
	@@bloggerApiKey = '&key=AIzaSyBxl86QJ7gRccq_egFmP3J6Zhy3cQLluIk'

	def GetAllPosts
		begin
			method = 'posts'
			params = '?maxResults=9'
			response = RestClient.get(@@bloggerUrl + method + params + @@bloggerApiKey)
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

	def GetPostByPath(path)
		begin
			method = 'posts/bypath'
			params = '?path=' + path
			response = RestClient.get(@@bloggerUrl + 'posts/bypath' + params + @@bloggerApiKey)
			json = JSON.parse(response)		
			return @@post_mapper.to_model(json)	
		rescue => e
			print e
		end
	end

	def GetPostsByLabel(label)
		begin
			label.sub!(' ', '+')
			method = 'posts/search'
			params = '?q=' + label + '&fields=items(id%2Cpublished%2Ctitle%2Ccontent%2Curl)'
			response = RestClient.get(@@bloggerUrl + method + params + @@bloggerApiKey)
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

	# def GetPostById(postId)
	# 	begin
	# 		method = 'posts/'
	# 		params = '?path=' + url.scan(/.com(.*)/)[0][0]
	# 		response = RestClient.get(@@bloggerUrl + 'posts/' + postId + @@bloggerApiKey)
	# 		json = JSON.parse(response)		
	# 		return @@post_mapper.to_model(json)	
	# 	rescue => e
	# 		print e
	# 	end
	# end
end




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
	# 	
	# end