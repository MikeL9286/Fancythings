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
			response = RestClient.get(@@bloggerUrl + method + params + @@bloggerApiKey)
			json = JSON.parse(response)		
			return @@post_mapper.to_model(json)	
		rescue => e
			print e
		end
	end

	def GetPostsByLabel(label)
		begin
			puts '-------Service start--------'

			label.sub!(' ', '+')
			method = 'posts'
			params = '?labels=' + label + '&orderBy=published&maxResults=6'
			response = RestClient.get(@@bloggerUrl + method + params + @@bloggerApiKey)
			json = JSON.parse(response)	

			posts = Array.new
			for item in json['items']
				puts '-----HIT------'
				post = @@post_mapper.to_model(item)
				posts.push(post)
				puts '-----HIT3------'
			end
			puts '---------------'
			puts posts.length
			return posts
		rescue => e
			print e
		end
	end

	def GetPostsBySearchKey(searchKey)
		begin
			method = 'posts/search'
			params = '?q=' + searchKey
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

	def GetArchivePosts
		begin
			method = 'posts'
			params = '?maxResults=500&fetchImages=false'
			response = RestClient.get(@@bloggerUrl + method + params + @@bloggerApiKey)
			json = JSON.parse(response)			

			posts = Array.new
			for item in json['items']
				post = @@post_mapper.to_model(item)
				posts.push(post)
			end

			return posts.group_by(&:publishedDateGroup)
		rescue => e
			print e
		end
	end
end