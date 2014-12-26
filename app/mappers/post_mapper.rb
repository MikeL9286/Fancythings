class PostMapper
	include ActiveSupport::Inflector
	
	def to_model(jsonPost)
		post = Post.new(jsonPost['id'], jsonPost['title'], jsonPost['content'])
		post.path = jsonPost['url'].scan(/.com(.*)/)[0][0]
		post.slideshowImageUrl = get_slideshow_image_url(jsonPost)
		post.thumbnailUrl = get_thumbnail_url(jsonPost)
		post.publishedDate = get_formatted_date(jsonPost['published'])
		post.twitterShareLink = get_twitter_share_link
		post.pinterestShareLink = get_pinterest_share_link
		post.emailShareLink = get_email_share_link
		post.facebookShareLink = get_facebook_share_link
		post.googlePlusShareLink = get_google_plus_share_link
		return post
	end

	private

	def get_formatted_date(dateString)
		date = Date.parse(dateString)
		formattedDate = date.strftime('%B day, %Y').sub!(/day/, ordinalize(date.day))
		return formattedDate
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

	def get_twitter_share_link
		return ''
		# return 'https://twitter.com/intent/tweet?text=' + post['title'] + '&via=fancythingsblog&url=' + 'selfLink';
	end

	def get_pinterest_share_link
		return ''
		# return 'http://pinterest.com/pin/create/button/?url=' + 'selfLink' + '&media=' + post['thumbnailUrl'] + '&description=' + post['title'];
	end

	def get_email_share_link
		return ''
		# return 'mailto:?body=I thought you might enjoy reading this post called ' + post['title'] + ' on fancy things! ' + 'selfLink';
	end

	def get_google_plus_share_link
		return ''
		# return 'https://plus.google.com/share?url=' + 'selfLink';
	end

	def get_facebook_share_link
		return ''
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