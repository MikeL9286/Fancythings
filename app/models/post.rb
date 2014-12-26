class Post
	def initialize(id, title, content)
		@id = id
		@title = title
		@content = content.html_safe
		@slideshowImageUrl = ''
		@thumbnailUrl = ''
		@publishedDate = ''
		@pinterestSharLink = ''
		@twitterShareLink = ''
		@facebookShareLink = ''
		@googlePlusShareLink = ''
		@emailShareLink = ''
	end

	attr_accessor :id
	attr_accessor :title
	attr_accessor :content
	attr_accessor :slideshowImageUrl
	attr_accessor :thumbnailUrl
	attr_accessor :publishedDate
	attr_accessor :pinterestShareLink
	attr_accessor :twitterShareLink
	attr_accessor :emailShareLink
	attr_accessor :facebookShareLink
	attr_accessor :googlePlusShareLink
end
