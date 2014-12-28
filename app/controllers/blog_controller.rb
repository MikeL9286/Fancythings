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

    @relatedPosts = Array.new
    for label in @post.labels
      posts = @@blogger_service.GetPostsByLabel(label)
      @relatedPosts.push(*posts)
    end
    @relatedPosts.sort_by { |post| Date.parse(post.publishedDate) }.reverse!
  end

  def search
  	key = params[:key]
    set_meta_values('Search')
  end

  def archive
    set_meta_values('Archive')
  end

  helper_method :get_url_for_path
  def get_url_for_path(path)
    return get_domain_url + path
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
      @ogImage = get_domain_url + image
    else 
      @ogImage = image
    end
  end

  def get_domain_url
    if request.host == 'localhost'
      return request.protocol + request.host + ':' + request.port.to_s
    else 
      return request.protocol + request.host
    end
  end
end
