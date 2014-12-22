class PostMapper
	
	def to_model(jsonPost)
		post = Post.new(jsonPost['id'], jsonPost['title'], jsonPost['content'])
		post.slideshowImageUrl = get_slideshow_image_url(jsonPost)
		post.thumbnailUrl = get_thumbnail_url(jsonPost)
		return post
	end

	def get_thumbnail_url(post)
		matches = post['content'].scan(/<img class="post-thumbnail".*\/>/)

		if (matches.length == 0)
			return '/assets/logo250x250.png'
		end
		
		return matches[0].scan(/http.*jpg|http.*png|http.*jpeg/)[0]
	end

	def get_slideshow_image_url(post)
		matches = post['content'].scan(/<img .* class="post-image" \/>/)

		if (matches.length == 0)
			return 'http://placehold.it/848x477'
		end
			
		return matches[0].scan(/http.*jpg|http.*png|http.*jpeg/)[0]
	end

	# todo: finish if needed
	def convert_linky_tools_from_script(post)
		matches = post['content'].scan(/<script src="http:\/\/www.linkytools.com.*<\/script>/)

		if (matches.length > 0)
			linkyId = matches[0].scan(/id=(.*)"/)[1]
			newLinkyLink = '<p style="text-align:center"><a href="http://www.linkytools.com/wordpress_list.aspx?id=' + linkyId + '&type=thumbnail" target="_blank" rel="nofollow">Click here</a> to join the Weekly Favorites link up!</p>';
			post['content'].gsub(linkyScript, newLinkyLink)
		end
 	end
end