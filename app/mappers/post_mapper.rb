class PostMapper
	include ActiveSupport::Inflector
	include ActionView::Helpers::SanitizeHelper

	def to_model(jsonPost)
		post = Post.new(jsonPost['id'], jsonPost['title'], jsonPost['content'])
		post.path = jsonPost['url'].scan(/.com(.*)/)[0][0]
		post.slideshowImageUrl = get_slideshow_image_url(jsonPost['content'])
		post.thumbnailUrl = get_thumbnail_url(jsonPost['content'])
		post.publishedDate = get_formatted_date(jsonPost['published'])
		post.publishedDateGroup = get_formatted_date_group(jsonPost['published'])
		post.summary = get_summary(jsonPost['content'])
		post.blogger_url = jsonPost['url']
		post.labels = jsonPost['labels']
		post.openGraphImages = get_open_graph_images(jsonPost['content'])
		return post
	end

	private

	def get_formatted_date(dateString)
		date = Date.parse(dateString)
		formattedDate = date.strftime('%B day, %Y').sub!(/day/, ordinalize(date.day))
		return formattedDate
	end

	def get_formatted_date_group(dateString)
		date = Date.parse(dateString)
		formattedDate = date.strftime('%B %Y')
		return formattedDate
	end

	def get_summary(content)
		matches = content.scan(/<div class="post-summary">(.*)<\/div>/)

		if (matches.length != 0)
			return matches[0]
		end

		centerTextToRemove = content.scan(/<center>.*<\/center>/)[0]
		smallTextToRemove = content.scan(/<span.*<\/span>/)[0]
		scriptTagsToRemove = content.scan(/<script.*<\/script>/)[0]
		noScriptTagsToRemove = content.scan(/<noscript.*<\/noscript>/)[0]



		if !centerTextToRemove.nil?
			content.sub!(centerTextToRemove, '')
		end

		if !smallTextToRemove.nil?
			content.sub!(smallTextToRemove, '')
		end

		if !scriptTagsToRemove.nil?
			content.sub!(scriptTagsToRemove, '')
		end

		if !noScriptTagsToRemove.nil?
			content.sub!(noScriptTagsToRemove, '')
		end

		content = strip_tags(content)

		if content.length > 200
			return content[0, 200] + '...'
		else 
			return content + '...'
		end
	end

	def get_thumbnail_url(content)
		matches = content.scan(/<img class="post-thumbnail".*\/>/)

		if (matches.length == 0)
			return '/assets/logo250x250.png'
		end
		
		return matches[0].scan(/http.*jpg|http.*png|http.*jpeg/)[0]
	end

	def get_open_graph_images(content)
		matches = content.scan(/<img.*(http.*jpg|http.*png|http.*jpeg).*\/>/)
		
		if (matches.length == 0)
			return '/assets/logo250x250.png'
		end	
		
		return matches
	end

	def get_slideshow_image_url(content)
		matches = content.scan(/<img .* class="post-image" \/>/)

		if (matches.length == 0)
			return '/assets/logo848x477.png'
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