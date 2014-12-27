class BlogController < ActionController::Base
  require 'blogger_service'

  protect_from_forgery with: :exception

  @@blogger_service = BloggerService.new
  
  def index
    @posts = @@blogger_service.GetAllPosts
    @slideshowPosts = @posts.take(4)

    set_meta_values()
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
    set_meta_values('Search')
  end

  def archive
    set_meta_values('Archive')
  end

  private

  def set_meta_values(
    title = 'Fancy Things', 
    description = 'Welcome to Fancy Things! The number one guide to fashion, beauty, home decor, and more...', 
    image = '/assets/logo250x250.png')
    @title = set_title(title)
    @description = description
    @ogImage = set_image(image)
  end

  def set_title(title)
    if title == 'Fancy Things'
      return title
    else
      return title + ' - Fancy Things'
    end
  end

  def set_image(image)
    if image == '/assets/logo250x250.png'
      @ogImage = get_domain_url(request.domain) + image
    else 
      @ogImage = image
    end
  end

  def get_domain_url(url)
    if url == 'localhost'
      return 'http://localhost:3000'
    else 
      return 'http://' + url
    end
  end
end
