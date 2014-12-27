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
	end

	attr_accessor :id
	attr_accessor :title
	attr_accessor :content
	attr_accessor :path
	attr_accessor :slideshowImageUrl
	attr_accessor :thumbnailUrl
	attr_accessor :publishedDate
	attr_accessor :summary
end
