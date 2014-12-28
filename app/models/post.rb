class Post
	def initialize(id, title, content)
		@id = id
		@title = title
		@path = ''
		@content = content.html_safe
		@slideshowImageUrl = ''
		@thumbnailUrl = ''
		@publishedDate = ''
		@summary = ''
		@blogger_url = ''
		@labels = []
	end

	attr_accessor :id
	attr_accessor :title
	attr_accessor :content
	attr_accessor :path
	attr_accessor :slideshowImageUrl
	attr_accessor :thumbnailUrl
	attr_accessor :publishedDate
	attr_accessor :summary
	attr_accessor :blogger_url
	attr_accessor :labels
end
