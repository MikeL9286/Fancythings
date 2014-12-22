class Post
	def initialize(id, title, content)
		@id = id
		@title = title
		@content == content
		@slideshowImageUrl = ''
		@thumbnailUrl = ''
	end

	attr_accessor :id
	attr_accessor :title
	attr_accessor :content
	attr_accessor :slideshowImageUrl
	attr_accessor :thumbnailUrl
end
