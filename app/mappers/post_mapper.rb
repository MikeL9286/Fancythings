class PostMapper
	include ActiveSupport::Inflector
	include ActionView::Helpers::SanitizeHelper

	def to_model(jsonPost)
		post = Post.new(jsonPost['id'], jsonPost['title'], jsonPost['content'])
		post.path = jsonPost['url'].scan(/.com(.*)/)[0][0]
		post.slideshowImageUrl = get_slideshow_image_url(jsonPost)
		post.thumbnailUrl = get_thumbnail_url(jsonPost)
		post.publishedDate = get_formatted_date(jsonPost['published'])
		post.summary = get_summary(jsonPost['content'])
		return post
	end

	private

	def get_formatted_date(dateString)
		date = Date.parse(dateString)
		formattedDate = date.strftime('%B day, %Y').sub!(/day/, ordinalize(date.day))
		return formattedDate
	end

	def get_summary(content)
		matches = content.scan(/<div class="post-summary">(.*)<\/div>/)

		if (matches.length != 0)
			return matches[0]
		end

		centerTextToRemove = content.scan(/<center>.*<\/center>/)[0]
		smallTextToRemove = content.scan(/<span.*<\/span>/)[0]

		if !centerTextToRemove.nil?
			content.sub!(centerTextToRemove, '')
		end

		if !smallTextToRemove.nil?
			content.sub!(smallTextToRemove, '')
		end

		content = strip_tags(content)

		if content.length > 200
			return content[0, 200] + '...'
		else 
			return content + '...'
		end
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