class BlogController < ActionController::Base
  require 'blogger_service'

  protect_from_forgery with: :exception

  @@blogger_service = BloggerService.new
  
  def index
  	@ogUrl = ''
    @ogImage = 'logo250x250.png'
    @ogTitle = 'Fancy Things'
    @posts = @@blogger_service.GetAllPosts
    @slideshowPosts = @posts.take(4)
  end

  def blogpost
  	key = params[:id]
    @ogUrl = 'blogpost?post=1713259370747007918'
    @ogImage = 'meetKristin.jpg'
    @ogTitle = 'Fancy Things - Blog Post Title'
  end

  def search
  	key = params[:key]
  end

  def archive
    @ogUrl = 'archive'
    @ogImage = 'logo250x250.png'
    @ogTitle = 'Fancy Things - Archive'
  end


end
