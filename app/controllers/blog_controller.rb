class BlogController < ActionController::Base
  require 'blogger_service'

  protect_from_forgery with: :exception

  @@blogger_service = BloggerService.new
  
  def index
    @posts = @@blogger_service.GetAllPosts
    @slideshowPosts = @posts.take(4)

    set_meta_values(
      'Fancy Things', 
      'Welcome to Fancy Things! The number one guide to fashion, beauty, home decor, and more...', 
      '/assets/logo250x250.png')
  end

  def blogpost
  	path = '/' + params[:year] + '/' + params[:month] + '/' + params[:title] + '.html'
    @post = @@blogger_service.GetPostByPath(path)

    set_meta_values(
      @post.title, 
      @post.summary, 
      @post.thumbnailUrl)
  end

  def search
  	key = params[:key]

    set_meta_values(
      'Fancy Things - Search', 
      'Welcome to Fancy Things! The number one guide to fashion, beauty, home decor, and more...', 
      '/assets/logo250x250.png')
  end

  def archive
    set_meta_values(
      'Fancy Things - Archive', 
      'Welcome to Fancy Things! The number one guide to fashion, beauty, home decor, and more...', 
      '/assets/logo250x250.png')
  end

  private

  def set_meta_values(title, description, image)
    @title = title
    @description = description
    @ogImage = image
  end

  def get_domain_root(url)
    if url == 'localhost'
      return 'http://localhost:3000'
    end
    return url
  end
end
