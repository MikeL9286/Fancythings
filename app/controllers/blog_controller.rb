class BlogController < ActionController::Base
  require 'blogger_service'

  protect_from_forgery with: :exception

  @@blogger_service = BloggerService.new
  
  def index
  	@ogUrl = ''
    @ogImage = 'logo250x250.png'
    @title = 'Fancy Things'
    @description = 'Welcome to Fancy Things! The number one guide to fashion, beauty, home decor, and more...'
    @posts = @@blogger_service.GetAllPosts
    @slideshowPosts = @posts.take(4)
  end

  def blogpost
  	path = '/' + params[:year] + '/' + params[:month] + '/' + params[:title] + '.html'
    @post = @@blogger_service.GetPostByPath(path)

    @ogUrl = path
    @ogImage = 'meetKristin.jpg'
    @title = @post.title
    @description = @post.summary
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
