class BlogController < ActionController::Base
  require 'blogger_service'

  protect_from_forgery with: :exception

  @@blogger_service = BloggerService.new
  
  def index
  	@ogUrl = ''
    @ogImage = 'logo250x250.png'
    @title = 'Fancy Things'
    @posts = @@blogger_service.GetAllPosts
    @slideshowPosts = @posts.take(4)
  end

  def blogpost
  	path = '/' + params[:year] + '/' + params[:month] + '/' + params[:title] + '.html'
    @post = @@blogger_service.GetPostByPath(path)

    @ogUrl = path
    @ogImage = 'meetKristin.jpg'
    @title = @post.title
  end

  def search
  	key = params[:key]
  end

  def archive
    @ogUrl = 'archive'
    @ogImage = 'logo250x250.png'
    @title = 'Archive'
  end


end
