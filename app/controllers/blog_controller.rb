class BlogController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  def index
  	@ogUrl = ''
    @ogImage = 'logo250x250.png'
    @ogTitle = 'Fancy Things'
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
